import React, {useEffect} from "react";
import {Route, Switch} from "react-router-dom";
import {connect} from "react-redux";
import {compose} from 'redux'
import Navbar from './components/Navbar'
import {useRoutes} from "./routes";
import {useAuth} from "./hooks/auth.hook";
import 'materialize-css'

const App = (props) => {
    const {token, login, logout, userId} = useAuth()
    const isAuthenticated  = !!token
    const routes = useRoutes(isAuthenticated)
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
    return {};
};

export default compose(
    connect(mapStateToProps, {})
)(App);
