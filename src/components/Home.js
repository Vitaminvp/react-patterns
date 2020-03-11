import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { patterns, bonuses } from "../utils/constants";

function Home() {
  const orderedList = list => (
    <ol>
      {list.map(({ name, title }) => {
        return (
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
        );
      })}
    </ol>
  );

  return (
    <Fragment>
      <h1>React Patterns</h1>
      {orderedList(patterns)}
      <h2>Bonuses</h2>
      {orderedList(bonuses)}
    </Fragment>
  );
}

export default Home;
