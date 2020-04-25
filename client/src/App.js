import React, {useEffect} from "react";
import {Route, Switch, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {compose} from 'redux'
import Navbar from './components/Navbar'
import 'materialize-css'
import {useRoutes} from "./routes";

const App = (props) => {
    const routes = useRoutes(false)

    return (
        <div>
            <Navbar/>
            <div className='container'>
                {routes}
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {};
};

export default compose(
    connect(mapStateToProps, {

    }),
    withRouter
)(App);
