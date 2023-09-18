import React, { useEffect, useState } from 'react'

const url = "https://api.github.com/users";
const List = () => {
  const [person, setPerson] = useState([]);

  useEffect(() => {
    const fetchPerson = async () => {
      try {
        const data = await fetch(url);
        const getData = await data.json();

        setPerson(getData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPerson();
  }, []);

  return (
    <div>
     
    {person.map((person)=> {
    return <li key={person.id}>{person.login} </li>;
    })}
   
   </div>

  );
}

export default List;