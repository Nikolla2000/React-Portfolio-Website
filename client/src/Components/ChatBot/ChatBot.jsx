import React, { useState } from 'react';
import ChatBot from "react-simple-chatbot"
import instructions from '../ChatBot/instructions';
import CloseIcon from '@mui/icons-material/Close';
import "./ChatBotStyles.scss"


const Chat = ({ show, setShow }) => {
  
  return (
    <div className={`chatbot-wrapper ${!show && 'remove'}`}>
      <ChatBot
        steps={instructions}/>
        <CloseIcon onClick={() => setShow(false)}/>
    </div>
  );
};

export default Chat;