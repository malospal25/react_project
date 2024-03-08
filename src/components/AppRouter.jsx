import React, { useContext, useState } from "react";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import { Switch, Route, Redirect } from "react-router-dom/cjs/react-router-dom.min";
import PostIdPage from "../pages/PostIdPage";
import { publicRoutes, privateRoutes } from "../router";
import { AuthContext } from "../context";
import Loader from "./UI/Loader/Loader";

const AppRouter = () => {
  const {isAuth, isLoading} = useContext(AuthContext);
  console.log(isAuth)

  if(isLoading){
    return <Loader />
  }

  return (
    isAuth
      ? <Switch>
        {privateRoutes.map(route =>
          <Route
            component={route.component}
            path={route.path}
            exact={route.exact}
            key={route.path}
            />
        )}
        <Redirect to='/posts' />
      </Switch>
      :
      <Switch>
        {publicRoutes.map(route =>
          <Route
            component={route.component}
            path={route.path}
            exact={route.exact}
            key ={route.path}
            />
        )}
        <Redirect to='/login' />
      </Switch>
    );
};

export default AppRouter;