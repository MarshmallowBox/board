/*
AUTH로직을 각 버튼마다 넣는건 유지보수힘듬 (코드중복)
authenticated 값에 따라 render해주거나 redirect해줌
*/

import React from "react";
import { Route, Redirect } from "react-router-dom";

function AuthRoute({ authenticated, component: Component, render, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        authenticated ? (
          render ? (
            render(props)
          ) : (
            <Component {...props} />
          )
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
}

export default AuthRoute;
