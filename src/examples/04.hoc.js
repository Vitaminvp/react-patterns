import React, {
  useState,
  Fragment,
  useRef,
  useMemo,
  useContext,
  useCallback
} from "react";
import { Link } from "react-router-dom";
import hoistNonReactStatics from "hoist-non-react-statics";
import Switch from "../components/Switch";

const ToggleContext = React.createContext(null);

/********************* TOGGLE COMPONENTS *********************/

const Toggle = ({ title, children }) => {
  const [on, setOn] = useState(false);

  const toggle = useCallback(() => setOn(on => !on), [setOn]);

  const context = useMemo(() => ({ on, title, toggle }), [on, title, toggle]);

  return (
    <ToggleContext.Provider value={context}>{children}</ToggleContext.Provider>
  );
};

/********************* HOC WITH_TOGGLE COMPONENTS *********************/

const getDisplayName = WrappedComponent =>
  WrappedComponent.displayName || WrappedComponent.name || "ToggleChild";

const withToggle = Component => {
  const Wrapper = props => {
    const context = useContext(ToggleContext);

    return <Component {...context} {...props} />;
  };

  Wrapper.displayName = `withHOC(${getDisplayName(Component)})`;

  hoistNonReactStatics(Wrapper, Component);

  return Wrapper;
};

/********************* TOGGLE CHILDREN COMPONENTS *********************/

function ToggleTitle({ title }) {
  const ref = useRef(null);
  return (
    <h1 ref={ref}>
      <Link to="/">{title}</Link>
    </h1>
  );
}

ToggleTitle.StaticMethod = () => (
  <span className="big-font" aria-label="Static component" role="img">
    🐱😼😹🙀😾😻😺😸
  </span>
);

const ToggleTitleWithToggle = withToggle(ToggleTitle);

const ToggleOn = withToggle(({ children, on }) =>
  on ? <h2>{children}</h2> : null
);

const ToggleOff = withToggle(({ children, on }) =>
  on ? null : <h2>{children}</h2>
);

const ToggleButton = withToggle(({ on, toggle }) => (
  <button onClick={toggle} className="toggle-button">
    {on ? "on" : "off"}
  </button>
));

const ToggleSwitch = withToggle(({ on, toggle }) => (
  <Switch on={on} onClick={toggle} />
));

/********************* PARENT COMPONENT *********************/

const Parent = props => {
  return (
    <Toggle {...props}>
      <Fragment>
        <ToggleTitleWithToggle />
        <ToggleTitleWithToggle.StaticMethod />
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
