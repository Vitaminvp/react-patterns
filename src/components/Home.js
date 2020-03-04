import React from "react";
import { Link } from "react-router-dom";
import { patterns } from "../utils/constants";

function Home() {
  return (
    <div>
      <h1>React Patterns</h1>
      <ol>
        {patterns.map(({ name, title }) => {
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
    </div>
  );
}

export default Home;
