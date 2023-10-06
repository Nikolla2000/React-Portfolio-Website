import React from 'react';
import ChatBot from "react-simple-chatbot"
import instructions from '../ChatBot/instructions';
import "./ChatBotStyles.scss"


const Chat = () => {
  return (
    <div className='chatbot-wrapper'>
      <ChatBot
        steps={instructions}/>
    </div>
  );
};

export default Chat;