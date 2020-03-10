import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

const Toggle = ({ title = "" }) => {
  const [on, setOn] = useState(false);
  const toggle = () => setOn(!on);
  const wrapperClassName = classNames("switch", {
    active: on
  });
  return (
    <Fragment>
      <h1>
        <Link to="/">{title}</Link>
      </h1>
      <h2>{on ? "The button is on" : "The button is off"}</h2>
      <div className={wrapperClassName}>
        <input
          className="switch-check"
          id="switch"
          type="checkbox"
          checked={on}
          onChange={() => {}}
          onClick={toggle}
          data-testid="toggle-input"
        />
        <label className="switch-label" htmlFor="switch">
          <span className="switch-slider switch-slider-on" />
          <span className="switch-slider switch-slider-off" />
        </label>
      </div>
      <button
        aria-label="custom-button"
        onClick={toggle}
        className="toggle-button"
      >
        {on ? "on" : "off"}
      </button>
    </Fragment>
  );
};

const Parent = props => {
  return <Toggle {...props} />;
};

export default Parent;
