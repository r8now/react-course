import {useState}  from "react";

const UserChallenge = () => {
const [users, setUsers] = useState(null);

const login = () => {

    return setUsers({ name: "hosein" });
  
};

const logout = ()=> {

    return setUsers(null);
  

}



  return (
    <div>
      {users? (
        <div>
          <h4>hello there, {users.name}</h4>
          <button onClick={logout}>logout</button>
        </div>
      ) : (
        <div>
          <h4>please login </h4>
          <button onClick={login}>login</button>
        </div>
      )}
    </div>
  );
};

export default UserChallenge;
