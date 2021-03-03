/*
시나리오
1. 직접 로그인 버튼을 누른 경우
2. 로그인 하지 않고 인증이 필요한 페이지를 접근하려다 접근하는 경우
*/
import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import "./LoginForm.scss";

//현재 location을 그대로 넘겨준 이유는 로그인 후에 다시 이 페이지로 돌아오게 하기 위해
function LoginForm({ authenticated, login, location }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {
    try {
      login({ email, password });
    } catch (e) {
      alert("Failed to login");
      setEmail("");
      setPassword("");
    }
  };

  const { from } = location.state || { from: { pathname: "/" } };
  if (authenticated) return <Redirect to={from} />;

  return (
    <div className="container">
      <div className="top"></div>
      <div className="bottom"></div>
      <div className="center">
        <h1>Login</h1>
        <input
          value={email}
          onChange={({ target: { value } }) => setEmail(value)}
          type="text"
          placeholder="email"
        />
        <input
          value={password}
          onChange={({ target: { value } }) => setPassword(value)}
          type="password"
          placeholder="password"
        />
        <button onClick={handleClick}>Login</button>
      </div>
    </div>
  );
}

export default LoginForm;
