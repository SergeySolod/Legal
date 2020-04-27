import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Posts from "./pages/Posts/Posts";
import Post from "./pages/Post/Post";
import Home from "./pages/Home/Home";
import Add from "./pages/Add/Add";
import Auth from "./pages/Auth/Auth";

export const useRoutes = (isAuthenticated) => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path="/" exact render={() => <Home />} />
        <Route path="/posts" exact render={() => <Posts />} />
        <Route path="/posts/:id" exact render={() => <Post />} />
        <Route path="/add" exact render={() => <Add />} />
        <Redirect to="/" />
      </Switch>
    );
  }
  return (
    <Switch>
      <Route path="/auth" exact render={() => <Auth />} />
      <Redirect to="/auth" />
    </Switch>
  );
};
