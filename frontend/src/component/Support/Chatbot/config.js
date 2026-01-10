import { createChatBotMessage } from 'react-chatbot-kit';
import Avatar from './Avatar';
import StartBtn from './StartBtn';
import StartSlow from './StartSlow';
import data from './data';

const config = {
  initialMessages: [createChatBotMessage(`Welcome to Salary Book Advisor `,{
    widget: "startBtn"
  })],
  botName: 'Salary Books Bot',
  customComponents: {
        userAvatar: (props) => <Avatar {...props}/>
      },
      state:{
        checker: null,
        data,
        userData:{
          name:"",
          age:0,
          company:"",
          preference:"",
          category:"",
          product:""
        }
      },
      widgets:[
        {
          widgetName:"startBtn",
          widgetFunc:(props)=><StartBtn {...props}/>
        },
        {
          widgetName:"startSlow",
          widgetFunc:(props)=><StartSlow {...props}/>
        }
      ]
};

export default config;