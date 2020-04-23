import React, {useEffect} from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {compose} from 'redux'
import Home from './pages/Home/Home'
import {setCustomersThunk} from './redux/reducers/Customer-reducer'

const App = (props) => {
  useEffect(() => {
  props.setCustomersThunk()
  }, []);
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
    setCustomersThunk
  }),
  withRouter
)(App);
