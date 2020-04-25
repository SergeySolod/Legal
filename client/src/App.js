import React, {useEffect} from "react";
import {Route, Switch} from "react-router-dom";
import {connect} from "react-redux";
import {compose} from 'redux'
import Navbar from './components/Navbar'
import {useRoutes} from "./routes";
import 'materialize-css'

const App = (props) => {
    const routes = useRoutes(props.isAuthenticated)
    useEffect(() => {

    }, [])

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
    return {
        isAuthenticated: state.auth.isAuthenticated
    };
};

export default compose(
    connect(mapStateToProps, {})
)(App);
