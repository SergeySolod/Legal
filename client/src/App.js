import React, {useEffect} from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {compose} from 'redux'
import {setCustomersThunk} from './redux/reducers/Customer-reducer'
import Navbar from './components/Navbar'
import 'materialize-css'

const App = (props) => {
  useEffect(() => {
  props.setCustomersThunk()
  }, []);
  return (
    <div>
      <Navbar/>
      <Switch>
        <Route path="/" exact render={() => <Home />} />
        <Route path="/questions" exact render={() => <Questions />} />
      </Switch>
    </div>
  );
};

const mapStateToProps = state => {
  return {

  };
};

export default compose(
  connect(mapStateToProps, {
    setCustomersThunk
  }),
  withRouter
)(App);
