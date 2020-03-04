import React, { Component } from "react";
import classNames from "classnames";

class Switch extends Component {
  render() {
    const { on, onClick } = this.props;
    const wrapperClassName = classNames("switch", {
      active: on
    });
    return (
      <div className={wrapperClassName}>
        <input
          className="switch-check"
          id="switch"
          type="checkbox"
          checked={on}
          onChange={() => {}}
          onClick={onClick}
          data-testid="toggle-input"
        />
        <label className="switch-label" htmlFor="switch">
          <span className="switch-slider switch-slider-on" />
          <span className="switch-slider switch-slider-off" />
        </label>
      </div>
    );
  }
}

export default Switch;
