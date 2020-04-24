import React from 'react'
import {Field, reduxForm} from "redux-form";
import {Input} from "../../components/FormsControl";
import {required} from "../../components/Validators";

const AuthForm = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className="card #43a047 green darken-1 card-auth">
                <div className="card-content white-text">
                    <span className="card-title">Авторизация</span>
                    <div>
                        <div className="input-field">
                            <Field placeholder={'Введите email'} name={'email'} validate={[required]} component={Input}/>
                        </div>
                        <div className="input-field">
                            <Field placeholder={'Введите пароль'} name={'password'} validate={[required]} component={Input} type={"password"}/>
                        </div>
                    </div>
                </div>
                <div className="card-action">
                    <button className='btn yellow darken-4 button-auth-log'>Войти</button>
                    <button className='btn grey lighten-1 black-text'>Регистрация</button>
                </div>
            </div>
        </form>
    )
}

const AuthReduxForm = reduxForm({form: 'auth'})(AuthForm)

const Auth = props => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return (
        <div className="row">
            <div className="col s6 offset-s3">
                <AuthReduxForm onSubmit={onSubmit}/>
            </div>
        </div>
    )
}

export default Auth