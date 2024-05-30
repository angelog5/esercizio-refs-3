import { useState, useEffect, useRef } from "react";

const CounterDisplay = ({ count }) => {
  return <h2>{count}</h2>;
};

const Counter = ({ initialValue = 0, incrementAmount = 1 }) => {
  const [count, setCount] = useState(initialValue);
  const directionRef = useRef(null);

  useEffect(() => {
    let newDirection = null;

    if (count > initialValue) {
      newDirection = "up";
    } else if (count < initialValue) {
      newDirection = "down";
    }

    if (directionRef.current !== newDirection) {
      console.log(newDirection);
      directionRef.current = newDirection;
    }
  }, [count, initialValue]);

  const increment = () => {
    setCount((prevCount) => prevCount + incrementAmount);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - incrementAmount);
  };

  const reset = () => {
    setCount(initialValue);
  };

  return (
    <div>
      <CounterDisplay count={count} />
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Counter;
