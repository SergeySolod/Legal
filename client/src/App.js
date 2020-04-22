import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {compose} from 'redux'

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/" exact render={() => <Home />} />
      </Switch>
    </div>
  );
};

let mapStateToProps = state => {
  return {

  };
};

export default compose(
  connect(mapStateToProps, {

  }),
  withRouter
)(App);
