import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import PostsReducer from './reducers/Posts-reducer';

const rootReducer = combineReducers({
    posts: PostsReducer
})

export default createStore(rootReducer, applyMiddleware(thunk));