import {useState} from 'react';
import PropTypes from "prop-types";

export const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value);

  const handleAdd = () => {
    setCounter(counter + 1);
  };

  const handleless = () => {
    setCounter(counter - 1);
  };
  
  const resetCounter = () => {
    setCounter(value);
  }
  if(counter < 0) {
    setCounter(counter + 1);
  }

  return (
    <>
      <h1>CounterApp</h1>
      <h2> {counter} </h2>

      <button onClick={handleAdd}>+1</button>
      <button onClick={handleless}>-1</button>
      <button onClick={resetCounter}>reset</button>
    </>
  );
};

CounterApp.PropTypes = {
  value: PropTypes.number,
};
