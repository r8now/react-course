import { useState } from "react";
import {data} from "../../../data"

const UserChallenge = () => {
  const [name, setName] = useState("");
  const [users,setUsers] = useState(data)

  const handleSubmit =(e) => {
    e.preventDefault();
    if(!name) {
      return;
    }
    const fakeId = Date.now();
    const newUser = {id:fakeId, name};
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    console.log("form submitted")
    setName("");

  }
  const remove= (id)=> {

 let newVal = users.filter((user)=> user.id !== id )
 console.log(newVal)
 setUsers(newVal);
  }

  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input type='text' className='form-input'value={name} onChange={(e)=> setName(e.target.value)} id='name' />
        </div>

        <button type='submit' className='btn btn-block'>
          submit
        </button>
        <button onClick={()=>setUsers([])}>delete All</button>
      </form>
      {/* render users below */}
      <h4>users</h4>
      {users.map((user)=>{
        const {id,name} = user;
        return <div key={id}> <h4>{name} </h4> <button className="btn" onClick={()=>remove(id)}>remove</button></div>
      })}
    </div>
  );
};
export default UserChallenge;
