import React from "react";
import classNames from "classnames";

const Switch = ({ on, onClick, id = "" }) => {
  const wrapperClassName = classNames("switch", {
    active: on
  });
  return (
    <div className={wrapperClassName}>
      <input
        className="switch-check"
        id={`switch${id}`}
        type="checkbox"
        checked={on}
        onChange={() => {}}
        onClick={onClick}
        data-testid="toggle-input"
      />
      <label className="switch-label" htmlFor={`switch${id}`}>
        <span className="switch-slider switch-slider-on" />
        <span className="switch-slider switch-slider-off" />
      </label>
    </div>
  );
};

export default Switch;
