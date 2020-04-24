import React from 'react'
import {Switch, Route, Redirect} from "react-router-dom";
import Questions from './pages/Questions/Questions'
import Home from './pages/Home/Home'
import Ask from "./pages/Ask/Ask";
import Auth from "./pages/Auth/Auth";
import NoAuth from "./pages/NoAuth/NoAuth";

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
            <Route path="/auth" exact render={() => <Auth />} />
            <Route path="/noauth" exact render={() => <NoAuth />} />
            <Redirect to='/noauth' />
        </Switch>
    )
}