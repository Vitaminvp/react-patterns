import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";

const ControlledForm = ({
  title,
  email,
  name,
  phone,
  message,
  password,
  country,
  site,
  agreement,
  gender,
  handleSubmit,
  handleChange,
  handleReset
}) => {
  return (
    <Fragment>
      <h1>
        <Link to="/">{title}</Link>
      </h1>
      <form className="form" onSubmit={handleSubmit} onReset={handleReset}>
        <div className="container">
          <div className="group">
            <input
              type="text"
              name="name"
              className="field-style field-split align-left"
              placeholder="Name"
              value={name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              className="field-style field-split align-right"
              placeholder="Email"
              value={email}
              onChange={handleChange}
            />
          </div>
          <div className="group">
            <input
              type="text"
              name="phone"
              className="field-style field-split align-left"
              placeholder="Phone"
              value={phone}
              onChange={handleChange}
            />
            <input
              type="url"
              name="site"
              className="field-style field-split align-right"
              placeholder="Website"
              value={site}
              onChange={handleChange}
            />
          </div>
          <div className="group">
            <input
              type="password"
              name="password"
              className="field-style field-full align-none"
              placeholder="Password"
              value={password}
              onChange={handleChange}
            />
          </div>
          <div className="group">
            <textarea
              name="message"
              className="field-style"
              placeholder="Message"
              value={message}
              onChange={handleChange}
            />
          </div>
          <div className="group">
            <label>
              <input
                className="field-style"
                type="radio"
                name="gender"
                value="mr"
                checked={gender === "mr"}
                onChange={handleChange}
              />
              Mr
            </label>
            <label>
              <input
                className="field-style"
                type="radio"
                name="gender"
                value="mrs"
                checked={gender === "mrs"}
                onChange={handleChange}
              />
              Mrs
            </label>
            <label>
              <input
                className="field-style"
                type="radio"
                name="gender"
                value="miss"
                checked={gender === "miss"}
                onChange={handleChange}
              />
              Miss
            </label>
          </div>
          <div className="group">
            <label>Country</label>
            <select
              className="field-style"
              name="country"
              value={country}
              onChange={handleChange}
            >
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
              <input
                type="checkbox"
                name="agreement"
                checked={agreement}
                onChange={handleChange}
              />
              I agree to the
              <a href="/#"> terms and conditions</a>
            </label>
          </div>
          <div className="group">
            <button type="submit" disabled={!agreement}>
              Sign up
            </button>
          </div>
        </div>
      </form>
    </Fragment>
  );
};

const Parent = props => {
  const [state, setState] = useState(props);
  const handleReset = () => setState(Parent.defaultProps);
  const handleSubmit = e => {
    e.preventDefault();
    console.log(state);
    handleReset();
  };

  const handleChange = ({ target: { name, value, checked } }) => {
    setState(state => ({
      ...state,
      [name]: name === "agreement" ? checked : value
    }));
  };

  return (
    <ControlledForm
      {...state}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      handleReset={handleReset}
    />
  );
};

Parent.defaultProps = {
  name: "Kottans",
  email: "kottans@gmail.com",
  phone: "000 000 00 00",
  message: "Kottans - Knowledge must be shared",
  password: "123",
  country: "Ukraine",
  site: "http://kottans.org",
  gender: "miss",
  agreement: false
};

export default Parent;
