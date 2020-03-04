import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import Switch from "../components/Switch";

const Toggle = ({ children, title = "" }) => {
  const [on, setOn] = useState(false);
  const toggle = () => setOn(!on);

  const propsGetter = ({ onClick, ...props }) => ({
    onClick: (...args) => {
      onClick && onClick(...args);
      toggle();
    },
    ...props
  });
  const getPropsColection = () => ({
    on,
    title,
    propsGetter
  });
  return children(getPropsColection());
};

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
            aria-label="custom-button"
            className="toggle-button"
            {...propsGetter({
              onClick: customClick,
              "area-pressed": `${on}`
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
