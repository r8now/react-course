import { Person } from './Person';

import React, { useEffect, useState } from 'react'
import {people} from "../../../data"
const List = () => {
console.log(people);

  return (
    <div>
     
    {people.map((person)=> {
       
    return <Person key={person.id} {...person}  />;
    })}
   
   </div>

  );
}

export default List;