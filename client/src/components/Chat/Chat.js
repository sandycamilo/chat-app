import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';


import './Chat.css';

import TextContainer from '../TextContainer/TextContainer';
import Infobar from '../Infobar/Infobar';
import Input from '../Input/Input';
import Messages from '../Messages/Messages';



let socket;


const Chat = ({ location }) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [users, setUsers] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const ENDPOINT = 'http://localhost:5000/';



    useEffect(() => {
        const { name, room } = queryString.parse(location.search);

        socket = io(ENDPOINT);

        // socket.on("fromAPI", (data) => {
        //     console.log(data)
        // })

        setName(name);
        setRoom(room);

        socket.emit('join', { name, room }, () => {

        });

        socket.on('message', message => {
            setMessages(messages => [ ...messages, message ]);
          });
          
        socket.on("roomData", ({ users }) => {
            setUsers(users);
          });

        return () => {
            socket.emit('disconnect');

            socket.off();
        }
      
    }, [ENDPOINT, location.search]);


    //sending messaged function 

    const sendMessage = (event) => {
        event.preventDefault();

        if(message) {
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    }

    // console.log(message, messages);
    return (
        <div className="outerContainer">
            <div className="container">
                <Infobar room={room}/>
                <Messages messages={messages} name={name} />
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
            </div>
            <TextContainer users={users} />
        </div>
    );
}

export default Chat;





