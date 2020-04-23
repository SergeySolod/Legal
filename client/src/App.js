import React, {useEffect} from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {compose} from 'redux'
import Home from './pages/Home/Home'
import {setCustomersThunk} from './redux/reducers/Customer-reducer'
import Customers from './pages/Customers/Customers'
import Navbar from './components/Navbar'

const App = (props) => {
  useEffect(() => {
  props.setCustomersThunk()
  }, []);
  return (
    <div>
      <Navbar/>
      <Switch>
        <Route path="/" exact render={() => <Home />} />
        <Route path="/customers" exact render={() => <Customers />} />
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
