const url = 'https://api.github.com/users';
import { useEffect } from 'react';
import {useState} from 'react';

const FetchData = () => {
  const [users, setUsers] = useState([]);

  useEffect(()=>{
    console.log("hello");
  },[]);


  return <h2>fetch data example</h2>;
};
export default FetchData;
