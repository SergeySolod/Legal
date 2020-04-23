import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <div className="nav-wrapper #2e7d32 green darken-3">
        <a href="javascript:void(0);" className="brand-logo right">LegalSystem</a>
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li><NavLink to="/" exact>Главная</NavLink></li>
          <li><NavLink to="/customers" exact>Клиенты</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar