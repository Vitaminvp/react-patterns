import React, { useState } from "react";
import Switch from "../components/Switch";
import { Link } from "react-router-dom";

const Toggle = props => {
  const [on, setOn] = useState(false);

  const isControlled = prop => props[prop] !== undefined;
  const getOn = () => (isControlled("on") ? props.on : on);

  const toggle = () => {
    if (isControlled("on")) {
      props.onToggle(!getOn());
    } else {
      setOn(!on);
    }
  };

  return (
    <>
      <Switch on={getOn()} onClick={toggle} />
      <button
        aria-label="custom-button"
        onClick={toggle}
        className="toggle-button"
      >
        {getOn() ? "on" : "off"}
      </button>
    </>
  );
};

const Parent = props => {
  const [bothOn, setBothOn] = useState(false);
  const handleToggle = on => setBothOn(on);

  return (
    <>
      <h1>
        <Link to="/">{props.title}</Link>
      </h1>
      <Toggle on={bothOn} onToggle={handleToggle} {...props} />
      <Toggle on={bothOn} onToggle={handleToggle} {...props} />
    </>
  );
};

export default Parent;
