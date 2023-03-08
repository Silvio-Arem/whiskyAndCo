import React, { useState } from 'react';
import { CounterDiv } from './styles';

const Counter: React.FC = () => {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <CounterDiv>
      <button onClick={handleDecrement}>-</button>
      <span>{count}</span>
      <button onClick={handleIncrement}>+</button>
    </CounterDiv>
  );
};

export default Counter;
