import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import Upload from "./containers/Upload";


export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/upload/" exact component={Upload} />
      
      { /* THE LINE BELOW MUST ALWAYS BE THE LAST ROUTE */ }
      <Route component={NotFound} />
    </Switch>
  );
}