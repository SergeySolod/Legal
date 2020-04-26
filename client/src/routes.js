import React from 'react'
import {Switch, Route, Redirect} from "react-router-dom";
import Questions from './pages/Posts/Posts'
import Question from './pages/Post/Post'
import Home from './pages/Home/Home'
import Ask from "./pages/Add/Add";
import Auth from "./pages/Auth/Auth";

export const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <Switch>
                <Route path="/" exact render={() => <Home />} />
                <Route path="/posts" exact render={() => <Questions />} />
                <Route path="/post/:id" exact render={() => <Question />} />
                <Route path="/adc" exact render={() => <Ask />} />
                <Redirect to='/' />
            </Switch>
        )
    }
    return (
        <Switch>
            <Route path="/auth" exact render={() => <Auth />} />
            <Redirect to='/auth' />
        </Switch>
    )
}