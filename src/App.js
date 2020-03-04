import React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Loaded from "./components/Loaded";
import Home from "./components/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route
          path={`/:patternName`}
          exact={true}
          render={props => <Loaded {...props} />}
        />
      </Switch>
    </BrowserRouter>
  );
}
