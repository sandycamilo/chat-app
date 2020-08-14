import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';

import './TextContainer.css';

const TextContainer = ({ users }) => (
  <div className="textContainer">
    {
      users
        ? (
          <div>
            <h1>Pick a question:</h1>
            <div className="cardContainer">
              <h1>this is where the cards go</h1>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default TextContainer;