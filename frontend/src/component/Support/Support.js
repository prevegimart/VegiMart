import React, { useState } from "react";
import '../../App.css'
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import config from './Chatbot/config.js'
import MessageParser from './Chatbot/MessageParser.jsx'
import ActionProvider from './Chatbot/ActionProvider.jsx'
import '../Support/Support.css'

const Support = () => {



    return (

        <div className="bot">
            <Chatbot
                config={config}
                messageParser={MessageParser}
                actionProvider={ActionProvider}
            />
        </div>
    );
};

export default Support;