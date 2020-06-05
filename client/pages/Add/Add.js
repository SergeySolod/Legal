import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input } from "../../components/FormsControl";
import { required } from "../../components/Validators";
import { connect } from "react-redux";
import { compose } from "redux";
import { postPostThunk } from "../../redux/reducers/Posts-reducer";

const AddForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className="row">
        <div className="col s12">
          <div className="card #43a047 green darken-1">
            <div className="card-content white-text">
              <span className="card-title">Add a post</span>
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
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

const AddReduxForm = reduxForm({ form: "add" })(AddForm);

const Add = (props) => {
  const onSubmit = (formData) => {
    props.postPostThunk(formData);
  };
  return (
    <>
      <AddReduxForm onSubmit={onSubmit} />
    </>
  );
};

const mapStateToProps = (state) => {
  return {};
};

export default compose(connect(mapStateToProps, { postPostThunk }))(Add);
