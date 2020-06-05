import React, {useEffect} from 'react'
import {compose} from "redux";
import {connect} from 'react-redux'
import {requestCities} from "../store/reducers/cities-reducer";

const About = (props) => {
    useEffect(() => {
        props.requestCities();
    }, []);
    console.log(props.cities)
    return (
        <div>
            <p>asdasdas</p>
        </div>
    );
}

let mapStateToProps = (state) => {
    return (
        {
            cities: state.cities.cities
        }
    )
}

export default compose(
    connect(mapStateToProps, {requestCities})
)(About);