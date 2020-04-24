import React from 'react'

const Auth = props => {
    return (
        <div className="row">
            <div className="col s6 offset-s3">
                <div className="card blue darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">Авторизация</span>
                        <div>
                            <div className="input-field">
                                <input placeholder="Введите email" id="email" type="text"/>
                                <label htmlFor="email">Email</label>
                            </div>

                            <div className="input-field">
                                <input placeholder="Введите пароль" id="password" type="password"/>
                                <label htmlFor="password">Пароль</label>
                            </div>
                        </div>
                    </div>
                    <div className="card-action">
                        <button className='btn yellow darken-4 button-auth-log'>Войти</button>
                        <button className='btn grey lighten-1 black-text'>Регистрация</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth