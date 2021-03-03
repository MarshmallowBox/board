//클릭시 logout함수를 호출하고 사용자를 홈페이지로 이동시킴
import React from "react";
import { withRouter } from "react-router-dom";

function LogoutButton({ logout, history }) {
  const handleClick = () => {
    logout();
    history.push("/");
  };
  return <button onClick={handleClick}>Logout</button>;
}

export default withRouter(LogoutButton);
