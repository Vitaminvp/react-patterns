import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import Switch from "../components/Switch";

/********************* TOGGLE COMPONENTS *********************/

const Toggle = ({ children, title }) => {
  const [on, setOn] = useState(false);

  const toggle = () => setOn(!on);

  const propsGetter = ({ onClick, ...props }) => ({
    onClick: (...args) => {
      onClick && onClick(...args);
      toggle();
    },
    ...props
  });

  return children({ on, title, propsGetter });
};

/********************* PARENT COMPONENT *********************/

const Parent = props => {
  const customClick = () => console.log("🏴‍☠️🏁🇺🇳");

  return (
    <Toggle {...props}>
      {({ on, title, propsGetter }) => (
        <Fragment>
          <h1>
            <Link to="/">{title}</Link>
          </h1>
          <h2>{on ? "The button is on" : "The button is off"}</h2>
          <Switch {...propsGetter({ on })} />
          <button
            className="toggle-button"
            {...propsGetter({
              onClick: customClick
            })}
          >
            {on ? "on" : "off"}
          </button>
        </Fragment>
      )}
    </Toggle>
  );
};

export default Parent;
