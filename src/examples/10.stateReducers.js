import React, { useState, Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Switch from "../components/Switch";

/********************* TOGGLE COMPONENTS *********************/

class Toggle extends Component {
  state = { on: this.props.initialOn };

  internalSetState = on => {
    const { stateReducer } = this.props;
    this.setState(state => stateReducer(state, { on }));
  };

  toggle = (...args) => {
    const { onToggle } = this.props;
    const { on } = this.state;

    onToggle(...args);

    this.internalSetState(!on);
  };

  reset = (...args) => {
    const { initialState, onReset } = this.props;

    this.internalSetState(initialState);
    onReset(...args);
  };

  render() {
    const { children, title } = this.props;
    const { on } = this.state;
    return children({
      on,
      title,
      reset: this.reset,
      toggle: this.toggle
    });
  }
}

/********************* PARENT COMPONENT *********************/

const Parent = props => {
  const initialOn = true;

  const initialState = 0;

  const [timesClicked, setTimesClicked] = useState(initialState);

  const onToggle = () => setTimesClicked(timesClicked => ++timesClicked);

  const onReset = () => setTimesClicked(initialState);

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
            <div className="click-count">You clicked too much!</div>
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
