import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import Switch from "../components/Switch";

const Toggle = ({ children, title = "" }) => {
  const [on, setOn] = useState(false);
  const toggle = () => setOn(!on);
  const getPropsCollection = () => ({
    on,
    title,
    propsCollection: {
      onClick: toggle,
      "area-pressed": String(on)
    }
  });
  return children(getPropsCollection());
};

const Parent = props => {
  return (
    <Toggle {...props}>
      {({ on, title, propsCollection }) => (
        <Fragment>
          <h1>
            <Link to="/">{title}</Link>
          </h1>
          <h2>{on ? "The button is on" : "The button is off"}</h2>
          <Switch on={on} {...propsCollection} />
          <button
            aria-label="custom-button"
            className="toggle-button"
            {...propsCollection}
          >
            {on ? "on" : "off"}
          </button>
        </Fragment>
      )}
    </Toggle>
  );
};

export default Parent;
