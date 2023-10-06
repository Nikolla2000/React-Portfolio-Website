import React, { useState } from 'react';
import ChatBot from "react-simple-chatbot"
import instructions from '../ChatBot/instructions';
import CloseIcon from '@mui/icons-material/Close';
import "./ChatBotStyles.scss"


const Chat = () => {
  const [closeChat, setCloseChat] = useState(false)
  
  return (
    <div className={`chatbot-wrapper ${closeChat && 'remove'}`}>
      <ChatBot
        steps={instructions}/>
        <CloseIcon onClick={() => setCloseChat(true)}/>
    </div>
  );
};

export default Chat;