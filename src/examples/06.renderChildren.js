import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import Switch from "../components/Switch";

/********************* TOGGLE COMPONENTS *********************/

const Toggle = ({ children, title = "" }) => {
  const [on, setOn] = useState(false);
  const toggle = () => setOn(!on);

  return children({ on, toggle, title });
};

/********************* PARENT COMPONENT *********************/

const Parent = props => (
  <Toggle {...props}>
    {({ on, toggle, title }) => (
      <Fragment>
        <h1>
          <Link to="/">{title}</Link>
        </h1>
        <h2>{on ? "The button is on" : "The button is off"}</h2>
        <Switch on={on} onClick={toggle} data-toggle={`Button is ${on}`} />
        <button
          data-toggle={`Button is ${on}`}
          onClick={toggle}
          className="toggle-button"
        >
          {on ? "on" : "off"}
        </button>
      </Fragment>
    )}
  </Toggle>
);

export default Parent;
