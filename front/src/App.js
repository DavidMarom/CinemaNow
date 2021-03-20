import React from "react";
import { connect } from "react-redux";
// import { useDispatch, useSelector } from "react-redux";

import { NavBar } from "./cmps/NavBar.jsx";
import { Explore } from './pages/Explore';
import { Shows } from './pages/Shows';

import { Switch, Route } from "react-router-dom";
import { withRouter } from "react-router";

const _App = () => {
  return (
    <div className="App">
      <div className="outter-container">
        <div className="inner-container">
          <NavBar />

          <Switch>
            <Route exact component={Explore} path={"/"} />
            <Route exact component={Shows} path={"/shows"} />

          </Switch>
        </div>
      </div>
    </div>
  );
}

export const App = connect(null, null)(withRouter(_App));