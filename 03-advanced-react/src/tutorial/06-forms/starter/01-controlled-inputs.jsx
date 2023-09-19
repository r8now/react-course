import { useState } from "react";

const ControlledInputs = () => {
  const [name, setName]=useState("");
  const [email, setEmail] = useState("");

  const handleChange = (e) =>{
    
    setName(e.target.value);
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(name,email)
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h4>controlled inputs</h4>
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          name
        </label>
        <input type="text" name="" id="name" className="form-input" value={name} onChange={handleChange}/>
      </div>
      <div className="form-row">
        <label htmlFor="email" className="form-label">
          email
        </label>
        <input type="text" name="" id="email" value={email}
       onChange={(e)=> setEmail(e.target.value)} className="form-input" />

      </div>
      <button type="submit" className="btn btn-block">submit</button>
    </form>
  );
};
export default ControlledInputs;
