import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import Switch from "../components/Switch";

const Toggle = ({ children, title = "" }) => {
  const [on, setOn] = useState(false);
  const toggle = () => setOn(!on);
  return children({ on, toggle, title });
};

const Parent = props => {
  return (
    <Toggle {...props}>
      {({ on, toggle, title }) => (
        <Fragment>
          <h1>
            <Link to="/">{title}</Link>
          </h1>
          <h2>{on ? "The button is on" : "The button is off"}</h2>
          <Switch on={on} onClick={toggle} />
          <button
            aria-label="custom-button"
            onClick={toggle}
            className="toggle-button"
          >
            {on ? "on" : "off"}
          </button>
        </Fragment>
      )}
    </Toggle>
  );
};

export default Parent;
