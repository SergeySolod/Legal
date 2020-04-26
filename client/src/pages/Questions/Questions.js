import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {compose} from 'redux'
import {setQuestionsThunk} from "../../redux/reducers/Questions-reducer";

const Questions = (props) => {
    useEffect(() => {
        props.setQuestionsThunk()
    }, []);
    return (
        <div className="row">
            <div className="col s12">
                {
                    props.questions.map(question => <div className="card #43a047 green darken-1"
                                                         key={question._id}>
                        <div className="card-content white-text">
                            <span className="card-title">{question.title}</span>
                            <p>{question.text}</p>
                        </div>
                        <div className="card-action">
                            <a href="javascript:void(0)">Посмотреть ответ</a>
                        </div>

                    </div>)
                }
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        questions: state.questions.questions
    }
}


export default compose(
    connect(mapStateToProps, {setQuestionsThunk})
)(Questions)