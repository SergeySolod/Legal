import {QuestionsApi} from '../../api/QuestionsApi'

export const SET_QUESTIONS = 'LegalQuestions/Questions-reducer/SET_QUESTIONS'

let initialState = {
    questions: []
}

const QuestionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_QUESTIONS:
     return {
       ...state,
       questions: [...action.questions]
     }
    default:
      return state
  }
}

const setQuestions = questions => ({
  type: SET_QUESTIONS,
    questions
});

export const setQuestionsThunk = () => async (dispatch, getState) => {
  let data = await QuestionsApi.getQuestions();
  dispatch(setQuestions(data));
};

export default QuestionsReducer