import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import thunkMiddleware from 'redux-thunk'
import PostsReducer from "./reducers/Posts-reducer";
import AuthReducer from "./reducers/Auth-reducer";
import { reducer as formReducer } from "redux-form";

import {composeWithDevTools} from "redux-devtools-extension";

let reducers = combineReducers({
    posts: PostsReducer,
    auth: AuthReducer,
    form: formReducer,
});

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunkMiddleware)))

export default store;