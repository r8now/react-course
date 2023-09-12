import { useState } from 'react';
import { data2 } from '../../../data';


const UseStateObject = () => {
  const [person, setPerson] = useState(data2);




const getNames = () => {

  setPerson({name: "anna", age: 24, hobby: "random message from ANNA"});
  
};


  return (
    <div>
      <h2>{person.name}</h2>
      <h2>{person.age}</h2>
      <h2>{person.hobby}</h2>
      <button onClick={getNames}>new person</button>
    </div>
  ); 
};

export default UseStateObject;
