import React, { useState } from "react";
import Switch from "../components/Switch";
import { Link } from "react-router-dom";

/********************* TOGGLE COMPONENTS *********************/

const Toggle = props => {
  const [on, setOn] = useState(false);

  const isControlled = prop => props[prop] !== undefined;

  const getOn = () => (isControlled("on") ? props.on : on);

  const toggle = () => {
    if (isControlled("on")) {
      props.onToggle(!props.on);
    } else {
      setOn(!on);
    }
  };

  return (
    <>
      <Switch on={getOn()} onClick={toggle} />
      <button
        onClick={toggle}
        className="toggle-button"
      >
        {getOn() ? "on" : "off"}
      </button>
    </>
  );
};

/********************* PARENT COMPONENT *********************/

const Parent = props => {
  const [bothOn, setBothOn] = useState(false);
  const handleToggle = on => setBothOn(on);

  return (
    <>
      <h1>
        <Link to="/">{props.title}</Link>
      </h1>

      <Toggle on={bothOn} id="1" onToggle={handleToggle} {...props} />
      <Toggle on={bothOn} id="2" onToggle={handleToggle} {...props} />
    </>
  );
};

export default Parent;
