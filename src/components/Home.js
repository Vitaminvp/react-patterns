import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { patterns, bonuses, hooks } from "../utils/constants";

function Home() {
  const orderedList = list => (
    <ol>
      {list.map(({ name, title }) => (
        <li key={name}>
          <Link
            to={{
              pathname: `/${name}`,
              state: { title }
            }}
          >
            {title}
          </Link>
        </li>
      ))}
    </ol>
  );

  return (
    <Fragment>
      <h1>React Patterns</h1>
      {orderedList(patterns)}
      <h2>Bonuses</h2>
      {orderedList(bonuses)}
      <h2>React hooks</h2>
      {orderedList(hooks)}
    </Fragment>
  );
}

export default Home;
