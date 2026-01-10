import React from 'react';

const MessageParser = ({ children, actions }) => {
  console.log(children.props.state.userData);
  const parse = (message) => {
    // if(message.includes('Abir')){
    //   console.log("verified");
    // }
    if(children.props.state.checker === 'age'){
        actions.afterNameMessage();
        children.props.state.userData.name=message;
        if(message<=10){
          children.props.state.userData.category="kid";
        }else if(message>10 && message<=20){
          children.props.state.userData.category="teenagers";
        }else{
          children.props.state.userData.category="adults";
        }
    }

    if(children.props.state.checker === 'prefrance' && Number(message)){
      actions.afterAgeMessage();
      children.props.state.userData.age=message;

  }
  if(children.props.state.checker === 'prefrance1'){
    actions.aftercompanyMessage();
    children.props.state.userData.company=message;

}
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions ,
        });
      })}
    </div>
  );
};

export default MessageParser;