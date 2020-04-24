import React, {useEffect} from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {compose} from 'redux'
import {setCustomersThunk} from './redux/reducers/Customer-reducer'
import Navbar from './components/Navbar'
import 'materialize-css'
import {useRoutes} from "./routes";

const App = (props) => {
    const routes = useRoutes(false)
  useEffect(() => {
  props.setCustomersThunk()
  }, []);
  return (
    <div>
      <Navbar/>
        {routes}
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
