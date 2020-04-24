import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <div className="nav-wrapper #43a047 green darken-1">
        <a href="javascript:void(0)" className="brand-logo right">LegalQuestions</a>
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li><NavLink to="/" exact>Главная</NavLink></li>
          <li><NavLink to="/questions" exact>Вопросы</NavLink></li>
          <li><NavLink to="/ask" exact>Задать вопрос</NavLink></li>
          <li><NavLink to="/auth" exact>Авторизироваться</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar