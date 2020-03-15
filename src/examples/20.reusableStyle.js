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
Toggle.Title = ({ title, style: userStyle = {} }) =>
  title ? (
    <h1>
      <Link to="/" style={userStyle}>
        {title}
      </Link>
    </h1>
  ) : null;
Toggle.On = ({ on, children, style: userStyle = {} }) =>
  on ? <h2 style={userStyle}>{children}</h2> : null;
Toggle.Off = ({ on, children, style: userStyle = {} }) =>
  on ? null : <h2 style={userStyle}>{children}</h2>;

Toggle.Button = ({ on, toggle, className = "" }) => {
  const classNames = [className, "toggle-button"].join(" ").trim();
  return (
    <button aria-label="custom-button" onClick={toggle} className={classNames}>
      {on ? "on" : "off"}
    </button>
  );
};
Toggle.Switch = ({ on, toggle }) => <Switch on={on} onClick={toggle} />;

const Parent = props => {
  return (
    <Toggle {...props}>
      <Toggle.Title style={{ color: "orange" }} />
      <Toggle.On style={{ color: "green" }}> The button is on</Toggle.On>
      <Toggle.Switch />
      <Toggle.Button className="yellow-border" />
      <Toggle.Off style={{ color: "tomato" }}>The button is off</Toggle.Off>
    </Toggle>
  );
};

export default Parent;
