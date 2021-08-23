import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Map from "../components/Map";
import Navbar from "../components/Navbar";
import Error from "../components/Error";

const Routes = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Map} />
        <Route path="*" component={Error} />
      </Switch>
    </Router>
  );
};

export default Routes;
