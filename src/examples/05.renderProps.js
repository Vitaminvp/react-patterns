import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Switch from "../components/Switch";

/********************* TOGGLE COMPONENTS *********************/
class Toggle extends Component {
  state = { on: false };

  toggle = () => this.setState(({ on }) => ({ on: !on }));

  render() {
    const { on } = this.state;
    const { render, title } = this.props;

    return render({ on, toggle: this.toggle, title });
  }
}

/********************* PARENT COMPONENT *********************/

const Parent = props => (
  <Toggle
    render={({ on, toggle, title }) => (
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
    {...props}
  />
);

export default Parent;
