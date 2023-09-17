import { useState } from "react";

const ToggleChallenge = () => {

const [showAlert, setShowAlert] = useState(false);

 const toggleAlert = ()=> {
if(showAlert){
  setShowAlert(false)
  return;
}
setShowAlert(true);

 }

  return (
    <div>
      <button onClick={toggleAlert} className="btn">
        toggle
      </button>
      {showAlert && <Alert />}
    </div>
  );
};


const Alert = () =>{
  return <div  className="alert alert-danger">
    hello world
  </div>;
}
export default ToggleChallenge;
