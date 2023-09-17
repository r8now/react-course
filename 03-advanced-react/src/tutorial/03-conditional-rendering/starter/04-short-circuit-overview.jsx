import { useState } from 'react';

const ShortCircuitOverview = () => {
const [text, setText] = useState("");
const [name, setName] = useState("hosein");



  return (
    <div>
      <h4>Falsy OR : {text || "hello world"}</h4>
      <h4> Truthy AND : {name && "no name"}</h4>
      <h4> Truthy AND : {0 && "no name"}</h4>
    </div>
  );
};
export default ShortCircuitOverview;

