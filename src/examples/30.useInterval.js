import React, { useState, useEffect, useRef, memo } from "react";
import { Link } from "react-router-dom";

const ProxyButton = memo(({ children, ...props }) => (
  <button className="toggle-button" type="button" {...props}>
    {children}
  </button>
));

function useInterval(callback, delay) {
  const savedCallback = useRef(null);

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

function Counter({ title }) {
  const [delay, setDelay] = useState(1000);
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  const handleIsRunningChange = () => setIsRunning(!isRunning);

  // Increment the counter.
  useInterval(
    () => {
      setCount(count + 1);
    },
    isRunning ? delay : null
  );

  // Make it faster every second!
  useInterval(
    () => {
      if (delay > 10) {
        setDelay(delay / 2);
      }
      setDelay(1000);
    },
    isRunning ? 1000 : null
  );

  const handleReset = () => {
    setDelay(1000);
    setCount(0);
  };

  return (
    <>
      <h1>
        <Link to="/">{title}</Link>
      </h1>
      <h1>Counter: {count}</h1>
      <h4>Delay: {delay}</h4>
      <ProxyButton onClick={handleReset}>Reset delay</ProxyButton>
      <ProxyButton onClick={handleIsRunningChange}>
        {isRunning ? "Stop" : "Run"} counter
      </ProxyButton>
    </>
  );
}

export default Counter;
