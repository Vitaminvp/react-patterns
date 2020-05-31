import React, { useState, useCallback, memo } from "react";
import { Link } from "react-router-dom";

// const ProxyButton = ({ children, ...props }) => (
//   <button className="toggle-button" type="button" {...props} style={{backgroundColor: `${randomColour()}`}}>
//     {children}
//   </button>
// );
const ProxyButton = memo(({ children, ...props }) => (
  <button
    className="toggle-button"
    type="button"
    {...props}
    style={{ backgroundColor: `${randomColour()}` }}
  >
    {children}
  </button>
));

const randomColour = () => "#" + ((Math.random() * 0xffffff) << 0).toString(16);

const functionsCounter = new Set();

const Parent = ({ title }) => {
  const [count, setCount] = useState(0);
  const [otherCounter, setOtherCounter] = useState(0);

  // const increment = () =>  setCount(count + 1);
  // const decrement = () => setCount(count - 1);
  // const incrementOtherCounter = () => setOtherCounter(otherCounter + 1);

  const increment = useCallback(() => setCount(count + 1), [count]);
  const decrement = useCallback(() => setCount(count - 1), [count]);
  const incrementOtherCounter = useCallback(
    () => setOtherCounter(otherCounter + 1),
    [otherCounter]
  );

  functionsCounter.add(increment);
  functionsCounter.add(decrement);
  functionsCounter.add(incrementOtherCounter);

  return (
    <>
      <h1>
        <Link to="/">{title}</Link>
      </h1>
      <div style={{ backgroundColor: `${randomColour()}`, padding: "30px" }}>
        Count: {count}
        <br />
        Another Count: {count}
        <ProxyButton onClick={increment}>+</ProxyButton>
        <ProxyButton onClick={decrement}>-</ProxyButton>
        <ProxyButton onClick={incrementOtherCounter}>
          incrementOtherCounter
        </ProxyButton>
        Count: {functionsCounter.size}
      </div>
    </>
  );
};

export default Parent;
