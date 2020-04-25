import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import thunkMiddleware from 'redux-thunk'
import QuestionsReducer from './reducers/Questions-reducer'
import AuthReducer from "./reducers/Auth-reducer";

let reducers = combineReducers({
  questions: QuestionsReducer,
  auth: AuthReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
)

export default store