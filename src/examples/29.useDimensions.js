import React, { useState, useLayoutEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";

function useDimensions({ liveMeasure = false }) {
  const [dimensions, setDimensions] = useState({});

  const ref = useRef(null);

  // const measure = () => setDimensions(ref.current.getBoundingClientRect());
  const measure = useCallback(
    () => setDimensions(ref.current.getBoundingClientRect()),
    []
  );

  useLayoutEffect(() => {
    measure();

    if (liveMeasure) {
      window.addEventListener("resize", measure);
      window.addEventListener("scroll", measure);

      return () => {
        window.removeEventListener("resize", measure);
        window.removeEventListener("scroll", measure);
      };
    }
  }, [liveMeasure, measure]);

  return [ref, dimensions];
}

const Parent = ({ title }) => {
  const [ref, { x = 0, y = 0, width = 0, height = 0 }] = useDimensions({
    liveMeasure: true
  });

  return (
    <>
      <h1>
        <Link to="/">{title}</Link>
      </h1>
      <div ref={ref} style={{ backgroundColor: "yellow" }}>
        I am a div at{" "}
        <strong style={{ color: "blue" }}>
          ({x}px, {y}px)
        </strong>{" "}
        position with a width of{" "}
        <strong style={{ color: "blue" }}>{width} px</strong> and height of
        <strong style={{ color: "blue" }}>{height} px</strong>
      </div>
    </>
  );
};

export default Parent;
