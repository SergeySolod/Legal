import React, {useEffect} from "react";
import {Route, Switch} from "react-router-dom";
import {connect} from "react-redux";
import {compose} from 'redux'
import {useRoutes} from "./routes";
import 'materialize-css'
import {login} from "./redux/reducers/Auth-reducer";
import Navbar from "./components/Navbar";

const App = (props) => {
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('userData'))
        if (data && data.token) {
            props.login(data.token, data.userId)
        }
    }, [])
    const routes = useRoutes(props.isAuthenticated)
    return (
        <>
            {props.isAuthenticated && <Navbar/>}
            <div className='container'>
                {routes}
            </div>
        </>
    );
};

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.isAuthenticated
    };
};

export default compose(
    connect(mapStateToProps, {login})
)(App);
