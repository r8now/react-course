import { useEffect, useState } from "react";

const CleanupFunction = () => {
  const [toggle, setToggle]=useState(false)

  return <div>
    <button onClick={()=> setToggle(toggle=>!toggle)} className="btn">click</button>
    {toggle? <RandomComponent/>: ""}
  </div>;
};

const RandomComponent= () => {
  useEffect(()=> {
    const someFunc= ()=> {

    }
    window.addEventListener('scroll',someFunc);
    return () => window.removeEventListener('scroll',someFunc);

  },[])
return (
  <h1>
hello there
  </h1>
)
}

export default CleanupFunction;
