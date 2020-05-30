import React, { useRef, useState, forwardRef, useEffect } from "react";
import { Link } from "react-router-dom";

const ThirdLevel = forwardRef(({ onFocus, onChange, children, title }, ref) => {
  const { firstRef, secondRef } = ref;
  return (
    <>
      <h1>
        <Link to="/">{title}</Link>
      </h1>
      <input
        ref={firstRef}
        onFocus={onFocus}
        onChange={onChange}
        className="toggle-button"
        value={children}
      />
      <input
        ref={secondRef}
        onFocus={onFocus}
        onChange={onChange}
        value={children}
      />
    </>
  );
});

const SecondLevel = forwardRef((props, ref) => (
  <ThirdLevel {...props} ref={ref} />
));

const FirstLevel = forwardRef((props, ref) => (
  <SecondLevel {...props} ref={ref} />
));

const Parent = props => {
  const [value, setValue] = useState("init value");
  const firstRef = useRef(null);
  const secondRef = useRef(null);
  const handleChange = () => setValue(firstRef.current.value);
  const handleFocus = () => firstRef.current.select();

  useEffect(() => {
    console.log(firstRef);
    console.log(secondRef);
    firstRef.current.focus();
  }, []);

  return (
    <FirstLevel
      onChange={handleChange}
      onFocus={handleFocus}
      ref={{ firstRef, secondRef }}
      {...props}
    >
      {value}
    </FirstLevel>
  );
};

export default Parent;
