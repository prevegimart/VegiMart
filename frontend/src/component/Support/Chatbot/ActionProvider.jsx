import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {


const initialAction=()=>{
  const message=createChatBotMessage('Please enter your name');
  updateState(message,"age")
}

const afterNameMessage=()=>{
  const message=createChatBotMessage('Please enter your age');
  updateState(message,"prefrance")
}


const afterAgeMessage=()=>{
  const message=createChatBotMessage('Please enter your company');
  updateState(message,"prefrance1")
}

const aftercompanyMessage=()=>{
  const message=createChatBotMessage(' preference for a',{
    widget: "startSlow"
  })
  updateState(message)
}

const finalResult=(name , age , company, prefrance, vehicle)=>{
  const message=createChatBotMessage(`Got it, ${name}! Based on your age ${age} and company name ${company} and preference for a ${prefrance} ride, I recommend the '${vehicle}.' Enjoy the thrill!` )
  updateState(message)
}


  const updateState=(message,checker)=>{
    
    setState((prev)=>({
        ...prev,
        messages: [...prev.messages, message],
        checker
    }))
  }
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            initialAction,afterNameMessage,afterAgeMessage,aftercompanyMessage,finalResult
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;