import React, { useState, useEffect } from "react";
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";

import { signIn } from "./auth/auth";
import AuthRoute from "./auth/AuthRoute";

import Home from "./home/Home";
import About from "./about/About";
import Profile from "./profile/Profile";
import NotFound from "./notfound/NotFound";
import LoginForm from "./login/LoginForm";
import LogoutButton from "./login/LogoutButton";
// import Navbar from "./navbar/Navbar";
import NavbarSub from "./navbarsub/NavbarSub";

function App() {
  const [user, setUser] = useState(null);
  //로그인 된 사용자가 존재하는지(인증여부)
  const authenticated = user != null;

  const login = ({ email, password }) => setUser(signIn({ email, password }));
  const logout = () => {
    setUser(null);
  };

  return (
    <Router>
      <header1>
        {authenticated ? (
          <loginheader>
            {/* <Navbar /> */}
            <NavbarSub />
            <NavbarSub />
            <Link to="/">
              <button>Home</button>
            </Link>
            <Link to="/about">
              <button>About</button>
            </Link>
            <Link to="/profile">
              <button>Profile</button>
            </Link>
            <Link to="/login">
              <LogoutButton logout={logout} />
            </Link>
          </loginheader>
        ) : (
          <Link to="/login">
            <button>Login</button>
          </Link>
        )}
      </header1>
      <hr />

      <main
        style={{
          paddingTop: "40px"
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route
            path="/login"
            render={(props) => (
              <LoginForm
                authenticated={authenticated}
                login={login}
                {...props}
              />
            )}
          />
          <AuthRoute
            authenticated={authenticated}
            path="/profile"
            render={(props) => <Profile user={user} {...props} />}
          />
          <Route component={NotFound} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
