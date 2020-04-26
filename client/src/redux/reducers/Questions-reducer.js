import {QuestionsApi} from '../../api/QuestionsApi'

export const SET_QUESTIONS = 'LegalQuestions/Questions-reducer/SET_QUESTIONS'
export const SET_QUESTION = 'LegalQuestions/Questions-reducer/SET_QUESTION'

let initialState = {
    questions: [],
    question: {}
}

const QuestionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_QUESTIONS:
            return {
                ...state,
                questions: [...action.questions]
            }
        case SET_QUESTION:
            return {
                ...state,
                question: action.question
            }
        default:
            return state
    }
}

const setQuestions = questions => ({
    type: SET_QUESTIONS,
    questions
});

const setQuestion = question => ({
    type: SET_QUESTION,
    question
});

export const setQuestionsThunk = () => async (dispatch, getState) => {
    let data = await QuestionsApi.getQuestions();
    dispatch(setQuestions(data));
};

export const setQuestionThunk = (id) => async (dispatch, getState) => {
    let data = await QuestionsApi.getQuestion(id);
    dispatch(setQuestion(data));
};

export const postQuestionsThunk = (formData) => async (dispatch, getState) => {
    let data = await QuestionsApi.postQuestions(formData);
};

export default QuestionsReducer