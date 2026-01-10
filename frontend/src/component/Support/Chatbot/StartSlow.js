import React, { Children } from "react";

export default function StartBtn(props){
    const prefrance=(prefrance)=>{
        const {name,age,company}=props.state.userData;
        const category=props.state.userData.category;
        const product=props.state.data[category][prefrance];
        console.log(product);
        props.actions.finalResult(name , age, company, prefrance, product.name);
    }
    return (
        <div>
            <button onClick={()=>prefrance("fast")}>Fast</button>
            <button onClick={()=>prefrance("slow")}>Slow</button>
        </div>
    )
}