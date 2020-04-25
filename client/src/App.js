import React, {useEffect} from "react";
import {Route, Switch} from "react-router-dom";
import {connect} from "react-redux";
import {compose} from 'redux'
import {useRoutes} from "./routes";
import 'materialize-css'

const App = (props) => {
    useEffect(() => {

    }, [])
    const routes = useRoutes(props.isAuthenticated)
    return (
        <>
            {routes}
        </>
    );
};

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.isAuthenticated
    };
};

export default compose(
    connect(mapStateToProps, {})
)(App);
