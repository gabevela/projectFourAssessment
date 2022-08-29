import React from 'react';
import './CircleSelector.css';

const CircleSelector = ({state, handleClick1, handleClick2, handleClick3, handleClick4}) => {
  return (
<div className="CircleSelector">
  <button className={state.b1 ? "selected" : "not_selected"} onClick={() => handleClick1()}>Select circle 1</button>
  <button className={state.b2 ? "selected" : "not_selected"} onClick={() => handleClick2()}>Select circle 2</button>
  <button className={state.b3 ? "selected" : "not_selected"} onClick={() => handleClick3()}>Select circle 3</button>
  <button className={state.b4 ? "selected" : "not_selected"} onClick={() => handleClick4()}>Select circle 4</button>
</div>  
)
}

export default CircleSelector;