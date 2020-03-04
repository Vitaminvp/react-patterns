import React, { useState } from "react";
import { Link } from "react-router-dom";
import Switch from "../components/Switch";

const Toggle = ({ title = "", children }) => {
  const [on, setOn] = useState(false);
  const toggle = () => setOn(!on);
  return React.Children.map(children, child =>
    React.cloneElement(child, { on, toggle, title })
  );
};
Toggle.Title = ({ title }) =>
  title ? (
    <h1>
      <Link to="/">{title}</Link>
    </h1>
  ) : null;
Toggle.On = ({ on, children }) => (on ? <h2>{children}</h2> : null);
Toggle.Off = ({ on, children }) => (on ? null : <h2>{children}</h2>);
Toggle.Button = ({ on, toggle }) => (
  <button aria-label="custom-button" onClick={toggle} className="toggle-button">
    {on ? "on" : "off"}
  </button>
);
Toggle.Switch = ({ on, toggle }) => <Switch on={on} onClick={toggle} />;

const Parent = props => {
  return (
    <Toggle {...props}>
      <Toggle.Title />
      <Toggle.On> The button is on</Toggle.On>
      <Toggle.Switch />
      <Toggle.Button />
      <Toggle.Off>The button is off</Toggle.Off>
    </Toggle>
  );
};

export default Parent;
