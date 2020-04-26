import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {compose} from 'redux'
import {setQuestionThunk} from "../../redux/reducers/Questions-reducer";
import {withRouter} from "react-router-dom";

const Question = (props) => {
    useEffect(() => {
        props.setQuestionThunk(props.match.params.id)
    }, []);
    return (
        <div className="row">
            <div className="col s12">
                <div className="card #43a047 green darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">{props.question.title}</span>
                        <p>{props.question.text}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        question: state.questions.question
    }
}


export default compose(
    connect(mapStateToProps, {setQuestionThunk}),
    withRouter
)(Question)