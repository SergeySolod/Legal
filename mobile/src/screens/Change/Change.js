import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input } from "../../components/FormsControl";
import { required } from "../../components/Validators";
import { connect } from "react-redux";
import { compose } from "redux";
import { putPostThunk } from "../../redux/reducers/Posts-reducer";

const ChangeForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className="row">
        <div className="col s12">
          <div className="card #43a047 green darken-1">
            <div className="card-content white-text">
              <span className="card-title">Change this post</span>
              <div>
                <div className="input-field">
                  <Field
                    placeholder={"Title"}
                    name={"title"}
                    validate={[required]}
                    component={Input}
                    className="yellow-input"
                  />
                </div>
                <div className="input-field">
                  <Field
                    placeholder={"Text"}
                    name={"text"}
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
              >
                Change
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

const ChangeReduxForm = reduxForm({ form: "change" })(ChangeForm);

const Change = (props) => {
  const onSubmit = (formData) => {
    props.putPostThunk(formData);
  };
  return (
    <>
      <ChangeReduxForm onSubmit={onSubmit} />
    </>
  );
};

const mapStateToProps = (state) => {
  return {};
};

export default compose(connect(mapStateToProps, { putPostThunk }))(Change);
