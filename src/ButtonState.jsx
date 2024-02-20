import { useState } from 'react';

export let count = 0;

export const useButtonState = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return {
    count,
    incrementCount,
  };
};
