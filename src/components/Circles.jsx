import React from 'react';
import './Circles.css';

const Circles = (props) => {
  return (
    <div className="Circles">
      <div className={props.state.b1 ? "selected" : "not_selected"}>1</div>
      <div className={props.state.b2 ? "selected" : "not_selected"}>2</div>
      <div className={props.state.b3 ? "selected" : "not_selected"}>3</div>
      <div className={props.state.b4 ? "selected" : "not_selected"}>4</div>
    </div>  
  )
}

export default Circles;