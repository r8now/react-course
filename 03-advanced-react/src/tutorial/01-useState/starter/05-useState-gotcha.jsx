import React from "react";
import {useState} from "react";

const UseStateGotcha = () => {
  const [add,setAdd] = useState(0);

  return (
    <div>
      <h2>count is {add}</h2>;
      <button className="btn" onClick={ () => setTimeout(() => {
        setAdd((currentState)=> {
        return currentState +1})
      }, 3000)}>
        add 1 </button>
      {console.log(add)}
    </div>
  );
};



export default UseStateGotcha;
