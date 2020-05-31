import React, {
  useRef,
  useState,
  forwardRef,
  useImperativeHandle
} from "react";
import { Link } from "react-router-dom";

const ProxyButton = ({ children, ...props }) => (
  <button className="toggle-button" type="button" {...props}>
    {children}
  </button>
);

const MyInput = forwardRef(({ title, ...restProps }, ref) => {
  const inputRef = useRef(null);

  useImperativeHandle(ref, () => ({
    blur: () => {
      document.title = inputRef.current.value;
      inputRef.current.blur();
    },
    focus: () => {
      inputRef.current.focus();
    },
    select: () => {
      inputRef.current.select();
    },
    get input() {
      return inputRef.current.value;
    }
  }));

  return (
    <>
      <h1>
        <Link to="/">{title}</Link>
      </h1>
      <input ref={inputRef} {...restProps} />
    </>
  );
});

const Parent = props => {
  const [text, setText] = useState("");
  const ref = useRef(null);

  const handleBlur = () => ref.current.blur();

  const handleFocus = () => ref.current.focus();

  const handleSelect = () => ref.current.select();

  const handleGetValue = () => setText(ref.current.input);

  return (
    <>
      <MyInput ref={ref} {...props} />
      <ProxyButton onClick={handleBlur}>Blur</ProxyButton>
      <ProxyButton onClick={handleFocus}>Focus</ProxyButton>
      <ProxyButton onClick={handleSelect}>Select</ProxyButton>
      <ProxyButton onClick={handleGetValue}>Write</ProxyButton>
      <div style={{ textAlign: "center" }}>{text}</div>
    </>
  );
};

export default Parent;
