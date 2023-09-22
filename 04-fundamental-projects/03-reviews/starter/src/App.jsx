import { useState } from "react";
import people from "./data";
import {FaChevronLeft,FaChevronRight,FaQuoteRight} from "react-icons/fa"

const App = () => {


  const [index, setIndex] = useState(0);
  const {name, job, image, text} = people[index];

  const nextPerson = () => {
    if(index < people.length-1){
     return setIndex((index) => index +1)
    }else{
     return setIndex(0)
    }
  };
  const prevPerson = () => { 
     
    if(index ==  0){
     return setIndex(people.length - 1);
    }else{
     return setIndex((index)=> index-1)
  
  };
    }

    const random =()=>{
      let randomNumber = Math.floor(Math.random() * people.length);
      console.log(randomNumber);
      if(randomNumber === index){

        randomNumber = index+1;
      }
      setIndex(randomNumber)
    }
  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={image} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="btn container">
          <button className="prev-btn" onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
      </article>
      <button className="btn btn-hipster" onClick={random}>random</button>
    </main>
  );
};
export default App;
