import React, { useRef, Fragment, forwardRef } from "react";
import { Link } from "react-router-dom";

/********************* CONTROLLED FORM COMPONENTS *********************/

const ControlledForm = forwardRef(
  ({ title, handleSubmit, handleReset }, ref) => {
    return (
      <Fragment>
        <h1>
          <Link to="/">{title}</Link>
        </h1>
        <form
          className="form"
          onSubmit={handleSubmit}
          onReset={handleReset}
          ref={ref}
        >
          <div className="container">
            <div className="group">
              <input
                type="text"
                name="name"
                className="field-style field-split align-left"
                placeholder="Name"
              />
              <input
                type="email"
                name="email"
                className="field-style field-split align-right"
                placeholder="Email"
              />
            </div>
            <div className="group">
              <input
                type="text"
                name="phone"
                className="field-style field-split align-left"
                placeholder="Phone"
              />
              <input
                type="url"
                name="site"
                className="field-style field-split align-right"
                placeholder="Website"
              />
            </div>
            <div className="group">
              <input
                type="password"
                name="password"
                className="field-style field-full align-none"
                placeholder="Password"
              />
            </div>
            <div className="group">
              <textarea
                name="message"
                className="field-style"
                placeholder="Message"
              />
            </div>
            <div className="group">
              <label>
                <input
                  className="field-style"
                  type="radio"
                  name="gender"
                  value="mr"
                />
                Mr
              </label>
              <label>
                <input
                  className="field-style"
                  type="radio"
                  name="gender"
                  value="mrs"
                  defaultChecked
                />
                Mrs
              </label>
              <label>
                <input
                  className="field-style"
                  type="radio"
                  name="gender"
                  value="miss"
                />
                Miss
              </label>
            </div>
            <div className="group">
              <label>Country</label>
              <select className="field-style" name="country">
                <option value="Canada">Canada</option>
                <option value="France">France</option>
                <option value="Germany">Germany</option>
                <option value="Italy">Italy</option>
                <option value="Japan">Japan</option>
                <option value="Ukraine">Ukraine</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="United States">United States</option>
              </select>
            </div>
            <div className="group">
              <label>
                <input type="checkbox" name="agreement" />I agree to the
                <a href="/#"> terms and conditions</a>
              </label>
            </div>
            <div className="group">
              <button type="submit">Sign up</button>
            </div>
          </div>
        </form>
      </Fragment>
    );
  }
);

const Parent = () => {
  const formRef = useRef(null);

  const handleReset = () => formRef.current.reset();
  const handleSubmit = e => {
    e.preventDefault();
    console.log(
      Array.from(formRef.current.elements)
        .map(({ name, value, checked }) => {
          if (name === "agreement" || name === "gender")
            return `${name}: ${checked}`;
          return `${name}: ${value}`;
        })
    );
    handleReset();
  };

  return <ControlledForm handleSubmit={handleSubmit} ref={formRef} />;
};

export default Parent;
