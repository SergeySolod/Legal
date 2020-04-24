import React from 'react'
import {Switch, Route, Redirect} from "react-router-dom";
import Questions from './pages/Questions/Questions'
import Home from './pages/Home/Home'

export const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <Switch>
                <Route path="/" exact render={() => <Home />} />
                <Route path="/questions" exact render={() => <Questions />} />
                <Route path="/ask" exact render={() => <Ask />} />
                <Redirect to='/' />
            </Switch>
        )
    }
    return (
        <Switch>
            <Route path="/" exact render={() => <Home />} />
            <Route path="/questions" exact render={() => <Questions />} />
            <Redirect to='/' />
        </Switch>
    )
}