import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "../modules/Navbar";
import Error from "../components/Error";
import FrontPage from "../modules/FrontPage";

const Routes = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={FrontPage} />
        <Route path="*" component={Error} />
      </Switch>
    </Router>
  );
};

export default Routes;
