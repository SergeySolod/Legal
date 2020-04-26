import React from 'react'
import {Switch, Route, Redirect} from "react-router-dom";
import Questions from './pages/Questions/Questions'
import Question from './pages/Question/Question'
import Home from './pages/Home/Home'
import Ask from "./pages/Ask/Ask";
import Auth from "./pages/Auth/Auth";

export const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <Switch>
                <Route path="/" exact render={() => <Home />} />
                <Route path="/questions" exact render={() => <Questions />} />
                <Route path="/questions/:id" exact render={() => <Question />} />
                <Route path="/ask" exact render={() => <Ask />} />
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