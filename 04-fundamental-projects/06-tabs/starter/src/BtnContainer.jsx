import React from 'react'

const BtnContainer = ({ jobs, currentItem,setCurrentItem }) => {
  return (
    <div className="btn-container">
      {jobs.map((job,index) => {
        return (
          <button key={job.item} 
          onClick={()=>setCurrentItem(index)}

          className={ index === currentItem?"job-btn active-btn":"job-btn"}>
            {job.company}
          </button>
        );
      })}
    </div>
  );
};

export default BtnContainer