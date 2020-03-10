import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import Switch from "../components/Switch";

const Toggle = ({
  children,
  title = "",
  initialState,
  onReset,
  onToggle,
  stateReducer
}) => {
  const [{ on }, setState] = useState(initialState);
  const toggle = (...args) => {
    onToggle(...args);
    internalSetState(!on);
  };

  const reset = (...args) => {
    setState(initialState);
    onReset(...args);
  };

  const internalSetState = changes => {
    setState(state => stateReducer(state, changes));
  };

  return children({
    on,
    title,
    reset,
    toggle
  });
};

Toggle.defaultProps = {
  initialState: { on: false },
  onReset: () => {}
};

const Parent = props => {
  const initialState = 0;
  const [timesClicked, setTimesClicked] = useState(initialState);
  const initialOn = true;

  const onToggle = (...args) => {
    setTimesClicked(timesClicked => ++timesClicked);
    console.log(...args);
  };

  const onReset = (...args) => {
    setTimesClicked(initialState);
    console.log(...args);
  };

  const stateReducer = (state, changes) => {
    if (timesClicked >= 4) {
      return { ...changes, on: false };
    }
    return changes;
  };

  return (
    <Toggle
      initialOn={initialOn}
      onToggle={onToggle}
      onReset={onReset}
      stateReducer={stateReducer}
      {...props}
    >
      {({ on, title, reset, toggle }) => (
        <Fragment>
          <h1>
            <Link to="/">{title}</Link>
          </h1>
          <h2>{on ? "The button is on" : "The button is off"}</h2>
          <Switch on={on} onClick={toggle} />

          {timesClicked > 5 ? (
            <div className="click-count">You clicked to match!</div>
          ) : (
            <div className="click-count">
              Click count: <strong>{timesClicked}</strong>
            </div>
          )}

          <button className="toggle-button" onClick={reset}>
            Reset
          </button>
        </Fragment>
      )}
    </Toggle>
  );
};

export default Parent;
