import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import Switch from "../components/Switch";

/********************* TOGGLE COMPONENTS *********************/

const Toggle = ({ children, title, initialOn, onReset }) => {
  const [on, setOn] = useState(initialOn);

  const toggle = () => setOn(!on);

  const reset = () => {
    setOn(initialOn);
    onReset(initialOn);
  };

  return children({ on, title, reset, toggle });
};

/********************* PARENT COMPONENT *********************/

const Parent = props => {
  const initialOn = false;

  const onReset = (...args) => console.log("onReset", ...args);

  return (
    <Toggle initialOn={initialOn} onReset={onReset} {...props}>
      {({ on, title, reset, toggle }) => (
        <Fragment>

          <h1>
            <Link to="/">{title}</Link>
          </h1>

          <h2>{on ? "The button is on" : "The button is off"}</h2>

          <Switch on={on} onClick={toggle} />

          <button className="toggle-button" onClick={reset}>
            Reset
          </button>

        </Fragment>
      )}
    </Toggle>
  );
};

export default Parent;
