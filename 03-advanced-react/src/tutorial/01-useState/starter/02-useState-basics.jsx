import { useState } from "react";

const UseStateBasics = () => {
  const [count, setCount] = useState(0);
  const clickedBtn = () => setCount(count + 1);
  return (
    <div>
      <h2>useState basics</h2>
      <h4> you clicked {count} times</h4>
      <button className="btn" onClick={clickedBtn}>click me</button>
    </div>
  );
};

export default UseStateBasics;
