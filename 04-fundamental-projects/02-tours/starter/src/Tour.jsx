import React, { useState } from "react";

const Tour = ({ id, image, info, name, price,removeTour }) => {
    const [readmore,setReadmore]=useState(false);

  return (
    <article className="single-tour">
      <img src={image} alt={image} className="img" />
      <span className="tour-price">${price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>{readmore ? info : info.substring(0, 120)}... <button className="btn" type="button" onClick={()=>setReadmore(!readmore)}>{!readmore?"read more":"show less"}</button></p>

        <button
          type="button"
          className="btn btn-block delete-btn"
          onClick={() => removeTour(id)}
        >
          remove
        </button>
      </div>
    </article>
  );
};

export default Tour;
