import React, {
  useState,
  Fragment,
  useMemo,
  useContext,
  useCallback
} from "react";
import { Link } from "react-router-dom";
import Switch from "../components/Switch";

const ToggleContext = React.createContext(null);

/********************* TOGGLE COMPONENTS *********************/

const Toggle = ({ title = "", children }) => {
  const [on, setOn] = useState(false);

  const toggle = useCallback(() => setOn(on => !on), [setOn]);

  const contextValues = useMemo(() => ({ on, title, toggle }), [
    on,
    title,
    toggle
  ]);

  return (
    <ToggleContext.Provider value={{ ...contextValues, toggle }}>
      {children}
    </ToggleContext.Provider>
  );
};

/********************* TOGGLE CHILDREN COMPONENTS *********************/

const ToggleTitle = () => {
  const { title } = useContext(ToggleContext);
  return title ? (
    <h1>
      <Link to="/">{title}</Link>
    </h1>
  ) : null;
};

const ToggleOn = ({ children }) => {
  const { on } = useContext(ToggleContext);
  return on ? <h2>{children}</h2> : null;
};

const ToggleOff = ({ children }) => {
  const { on } = useContext(ToggleContext);
  return on ? null : <h2>{children}</h2>;
};

const ToggleButton = () => {
  const { on, toggle } = useContext(ToggleContext);
  return (
    <button
      onClick={toggle}
      className="toggle-button"
    >
      {on ? "on" : "off"}
    </button>
  );
};

const ToggleSwitch = () => {
  const { on, toggle } = useContext(ToggleContext);
  return <Switch on={on} onClick={toggle} />;
};

/********************* PARENT COMPONENT *********************/

const Parent = props => {
  return (
    <Toggle {...props}>
      <Fragment>
        <ToggleTitle />
      </Fragment>
      <ToggleOn>The button is on</ToggleOn>
      <ToggleOff>The button is off</ToggleOff>
      <div>
        <ToggleSwitch />
        <ToggleButton />
      </div>
    </Toggle>
  );
};

export default Parent;
