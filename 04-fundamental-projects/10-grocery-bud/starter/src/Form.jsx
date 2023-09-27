import React from "react";
import { useState } from "react";

const Form = ({addItem}) => {
  const [newItemName, setNewItemName] = useState("");
  const handleSubmit= (e)=> {
e.preventDefault();
if(!newItemName){
  return;
}else{
  addItem(newItemName);
  setNewItemName("");
}
console.log(newItemName);
  }
  return (
    <form onSubmit={handleSubmit}>
      <h4>grocery bud</h4>
      <div className="form-control">
        <input
          type="text"
          className="form-input"
          value={newItemName}
          onChange={(event) => setNewItemName(event.target.value)}
        />
        <button type="submit" className="submit">
          Add item
        </button>
      </div>
    </form>
  );
};

export default Form;
