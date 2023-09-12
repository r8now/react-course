import {data} from '../../../data';
import React from 'react';

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

const removeItem = (id)=>{
 
const newPeople  = people.filter((person)=>person.id !== id);
setPeople(newPeople);
};


  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button type='button' onClick={()=>{
              console.log(id);
              removeItem(id)}}>
              Delete me
            </button>
          </div>
        );
      })}
      <button type="button" style={{marginTop:'2rem', color:"blue", className:"btn"}} onClick={()=>setPeople([])}>
        Delete All
      </button>
    </div>
  );
  
  
};

export default UseStateArray;
