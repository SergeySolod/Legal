import React from 'react'
import {NavLink} from 'react-router-dom'
import {compose} from "redux";
import {connect} from "react-redux";
import {logout} from "../redux/reducers/Auth-reducer";

const Navbar = (props) => {
    return (
        <nav>
            <div className="nav-wrapper #43a047 green darken-1">
                <a href="javascript:void(0)" className="brand-logo right">LegalQuestions</a>
                <ul id="nav-mobile" className="left hide-on-med-and-down">
                    <li><a onClick={() => {
                        props.logout()
                    }} href="javascript:void(0)">Выйти</a></li>
                    <li><NavLink to="/" exact>Главная</NavLink></li>
                    <li><NavLink to="/questions" exact>Вопросы</NavLink></li>
                    <li><NavLink to="/ask" exact>Задать вопрос</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

const mapStateToProps = state => {
    return {};
};

export default compose(
    connect(mapStateToProps, {logout})
)(Navbar);