import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Upload from "./containers/Upload";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/upload/" exact component={Upload} />
    </Switch>
  );
}