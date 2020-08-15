import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';

import './TextContainer.css';

const TextContainer = ({ users }) => (
  <div className="textContainer">
    {
      users
        ? (
          <div>
            <div className="cardContainer">
            <h1>PICK A QUESTION:</h1>
            <button class="questionbutton" type="submit">Ready?</button>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default TextContainer;