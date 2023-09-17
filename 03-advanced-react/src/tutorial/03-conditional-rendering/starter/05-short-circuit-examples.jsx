import { useState } from 'react';
const ShortCircuitExamples = () => {
  // falsy
  const [text, setText] = useState('');
  // truthy
  let a = [1, 2, 3, 4];

  const [name, setName] = useState('susan');
  const [user, setUser] = useState({ name: 'john' });
  const [isEditing, setIsEditing] = useState(false);

  return <div>
    {user && <SomeComponent name={user}/>}
  {  


  console.log(<SomeComponent test={a} name={user}/>)
  }
    
   </div>;
};

const SomeComponent = (user)=> {
console.log(user);
  return(
    <div>
      <h2>{user.name.name}</h2>
    </div>
  )
}
export default ShortCircuitExamples;
