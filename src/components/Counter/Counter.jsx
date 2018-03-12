import React from 'react';

const Counter = (props) => (
  <div>
    <button onClick={props.increment}>+</button>
    <p>{props.counter}</p>
    <button onClick={props.decrement}>-</button>
  </div>
);

export default Counter;
