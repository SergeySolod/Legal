import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import thunkMiddleware from 'redux-thunk'

import citiesReducer from './reducers/cities-reducer'
import {composeWithDevTools} from "redux-devtools-extension";

let reducers = combineReducers({
    cities: citiesReducer,
})

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunkMiddleware)))

export default store;