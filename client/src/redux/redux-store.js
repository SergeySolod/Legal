import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'
import PostsReducer from './reducers/Posts-reducer'
import AuthReducer from "./reducers/Auth-reducer";

let reducers = combineReducers({
    posts: PostsReducer,
    auth: AuthReducer,
    form: formReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunkMiddleware))
)

export default store