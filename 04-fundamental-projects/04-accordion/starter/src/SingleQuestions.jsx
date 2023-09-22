import React, { useState } from 'react'
import {AiOutlineMinus,AiOutlinePlus} from "react-icons/ai";

const SingleQuestions = ({title,info}) => {
const [showInfo,setShowInfo] =  useState(true);
  return (
    <article className="question">
      <header>
        <h5>{title}</h5>
        <button className='question-btn' onClick={()=>setShowInfo(!showInfo)}>click</button>
        {showInfo ? <AiOutlineMinus/> : <AiOutlinePlus/>}
      </header>
      {showInfo && <p>{info}</p>}
    </article>

  );
}

export default SingleQuestions