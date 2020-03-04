import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import Switch from "../components/Switch";

const ToggleContext = React.createContext(null);

const Toggle = ({ title = "", children }) => {
  const [on, setOn] = useState(false);
  const toggle = () => setOn(!on);
  return (
    <ToggleContext.Provider value={{ on, toggle, title }}>
      {children}
    </ToggleContext.Provider>
  );
};
Toggle.Title = () => (
  <ToggleContext.Consumer>
    {({ title }) =>
      title ? (
        <h1>
          <Link to="/">{title}</Link>
        </h1>
      ) : null
    }
  </ToggleContext.Consumer>
);

Toggle.On = ({ children }) => (
  <ToggleContext.Consumer>
    {({ on }) => (on ? <h2>{children}</h2> : null)}
  </ToggleContext.Consumer>
);
Toggle.Off = ({ children }) => (
  <ToggleContext.Consumer>
    {({ on }) => (on ? null : <h2>{children}</h2>)}
  </ToggleContext.Consumer>
);
Toggle.Button = () => (
  <ToggleContext.Consumer>
    {({ on, toggle }) => (
      <button
        aria-label="custom-button"
        onClick={toggle}
        className="toggle-button"
      >
        {on ? "on" : "off"}
      </button>
    )}
  </ToggleContext.Consumer>
);
Toggle.Switch = () => (
  <ToggleContext.Consumer>
    {({ on, toggle }) => <Switch on={on} onClick={toggle} />}
  </ToggleContext.Consumer>
);

const Parent = props => {
  return (
    <Toggle {...props}>
      <Fragment>
        <Toggle.Title />
      </Fragment>
      <Toggle.On>The button is on</Toggle.On>
      <Toggle.Off>The button is off</Toggle.Off>
      <div>
        <Toggle.Switch />
        <Toggle.Button />
      </div>
    </Toggle>
  );
};

export default Parent;
