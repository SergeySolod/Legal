import React from 'react'
import {NavLink} from 'react-router-dom'
import {compose} from "redux";
import {connect} from "react-redux";
import {logout} from "../redux/reducers/Auth-reducer";

const Navbar = (props) => {
    return (
        <nav>
            <div className="nav-wrapper #43a047 green darken-1">
                <span className="brand-logo right">MebicalBlog</span>
                <ul id="nav-mobile" className="left hide-on-med-and-down">
                    <li><a onClick={() => {
                        props.logout()
                        localStorage.removeItem('userData')
                    }} href="javascript:void(0)">Logout</a></li>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/posts">Posts</NavLink></li>
                    <li><NavLink to="/add">Add a post</NavLink></li>
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