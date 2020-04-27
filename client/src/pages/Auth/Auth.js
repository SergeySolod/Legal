import React, { useState } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import {
  setLoginThunk,
  setRegisterThunk,
} from "../../redux/reducers/Auth-reducer";
import { Field, reduxForm } from "redux-form";
import { Input } from "../../components/FormsControl";
import { required } from "../../components/Validators";

const AuthForm = (props) => {
  // const message = useMessage()
  // const {loading, request, error, clearError} = useHttp()
  // const [form, setForm] = useState({
  //     email: '', password: ''
  // })
  //
  // useEffect(() => {
  //     window.M.updateTextFields()
  // }, [])
  //
  // useEffect(() => {
  //     message(error)
  //     clearError()
  // }, [error, message, clearError])
  //
  // const changeHandler = event => {
  //     setForm({...form, [event.target.name]: event.target.value});
  // };
  //
  // const registerHandler = async () => {
  //     try {
  //         const data = await request("/api/auth/register", "POST", {...form});
  //         message(data.message)
  //     } catch (e) {
  //     }
  // };
  //
  // const loginHandler = async () => {
  //     try {
  //         const data = await request("/api/auth/login", "POST", {...form});
  //         message(data.message)
  //         props.login(data.token, data.userId)
  //         localStorage.setItem('userData', JSON.stringify({
  //             token: data.token, userId: data.userId
  //         }))
  //     } catch (e) {
  //     }
  // };

  return (
    <form onSubmit={props.handleSubmit}>
      <div className="row">
        <div className="col s6 offset-s3">
          <div className="card #43a047 green darken-1 card-auth">
            <div className="card-content white-text">
              <span className="card-title">Authorization</span>
              <div>
                <div className="input-field">
                  <Field
                    placeholder={"Email"}
                    name={"email"}
                    type={"text"}
                    validate={[required]}
                    component={Input}
                    className="yellow-input"
                  />
                </div>
                <div className="input-field">
                  <Field
                    placeholder={"Password"}
                    name={"password"}
                    type={"password"}
                    validate={[required]}
                    component={Input}
                    className="yellow-input"
                  />
                </div>
              </div>
            </div>
            <div className="card-action">
              <button
                className="btn yellow darken-4"
                style={{ marginRight: 10 }}
                onClick={() => {
                  props.changeIsRegistration(false);
                }}
              >
                Login
              </button>
              <button
                className="btn grey lighten-1 black-text"
                onClick={() => {
                  props.changeIsRegistration(true);
                }}
              >
                Registration
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

const AuthReduxForm = reduxForm({ form: "auth" })(AuthForm);

const Auth = (props) => {
  const [isRegistration, changeIsRegistration] = useState(false);
  const onSubmit = (formData) => {
    if (isRegistration === false) {
      props.setLoginThunk(formData);
    } else {
      props.setRegisterThunk(formData);
    }
  };

  return (
    <>
      <AuthReduxForm
        onSubmit={onSubmit}
        changeIsRegistration={changeIsRegistration}
      />
    </>
  );
};

const mapStateToProps = (state) => {
  return {};
};

export default compose(
  connect(mapStateToProps, { setLoginThunk, setRegisterThunk })
)(Auth);
