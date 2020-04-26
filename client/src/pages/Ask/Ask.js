import React from 'react'
import {Field, reduxForm} from "redux-form";
import {Input} from "../../components/FormsControl";
import {required} from "../../components/Validators";

const AskForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className="row">
                <div className="col s12">
                    <div className="card #43a047 green darken-1">
                        <div className="card-content white-text">
                            <span className="card-title">Ask a question</span>
                            <div>
                                <div className="input-field">
                                    <Field placeholder={'Enter title'} name={'title'} validate={[required]}
                                           component={Input}
                                           className="yellow-input"/>
                                </div>
                                <div className="input-field">
                                    <Field placeholder={'Enter text'} name={'text'} validate={[required]}
                                           component={Input}
                                           className="yellow-input"/>
                                </div>
                            </div>
                        </div>
                        <div className="card-action">
                            <button
                                className="btn yellow darken-4"
                                style={{marginRight: 10}}

                            >
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

const AskReduxForm = reduxForm({form: 'ask'})(AskForm)

const Ask = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return (
        <>
            <AskReduxForm onSubmit={onSubmit}/>
        </>
    )
}


export default Ask