import React, {
  useRef,
  useState,
  forwardRef,
  useImperativeHandle
} from "react";
import { Link } from "react-router-dom";

const MyInput = forwardRef(({ title, ...restProps }, ref) => {
  const [val, setVal] = useState("");
  const inputRef = useRef(null);

  useImperativeHandle(ref, () => ({
    blur: () => {
      document.title = val;
      inputRef.current.blur();
    }
  }));

  return (
    <>
      <h1>
        <Link to="/">{title}</Link>
      </h1>
      <input
        ref={inputRef}
        val={val}
        onChange={e => setVal(e.target.value)}
        {...restProps}
      />
    </>
  );
});

const Parent = props => {
  const ref = useRef(null);
  const onBlur = () => {
    console.log(ref.current);
    ref.current.blur();
  };

  return <MyInput ref={ref} onBlur={onBlur} {...props} />;
};

export default Parent;
