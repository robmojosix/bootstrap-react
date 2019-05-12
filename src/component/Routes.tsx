import React from "react";
import Home from "./Home";
import Data from "./Data";
import NotFound from "./NotFound";
import { NavLink } from "react-router-dom";
import { Route, Switch } from "react-router";

export default function App() {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/data">Data</NavLink>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/data" component={Data} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}
