import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import Switch from "../components/Switch";

const Toggle = ({ children, title = "", initialOn, onReset, onToggle }) => {
  const [on, setOn] = useState(initialOn);
  const toggle = () => {
    onToggle(!on);
    setOn(!on);
  };

  const reset = () => {
    setOn(initialOn);
    onReset(initialOn);
  };

  const propsGetter = ({ onClick, ...props }) => ({
    onClick: (...args) => {
      onClick && onClick(...args);
      toggle();
    },
    ...props
  });

  const getPropsCollection = () => ({
    on,
    title,
    reset,
    propsGetter
  });
  return children(getPropsCollection());
};

Toggle.defaultProps = {
  initialOn: false,
  onReset: () => {}
};

const Parent = props => {
  const initialOn = true;
  const onToggle = (...args) => console.log("onToggle", ...args);
  const onReset = (...args) => console.log("onReset", ...args);
  return (
    <Toggle
      initialOn={initialOn}
      onToggle={onToggle}
      onReset={onReset}
      {...props}
    >
      {({ on, title, reset, propsGetter }) => (
        <Fragment>
          <h1>
            <Link to="/">{title}</Link>
          </h1>
          <h2>{on ? "The button is on" : "The button is off"}</h2>
          <Switch {...propsGetter({ on })} />
          <button className="toggle-button" onClick={reset}>
            Reset
          </button>
        </Fragment>
      )}
    </Toggle>
  );
};

export default Parent;
