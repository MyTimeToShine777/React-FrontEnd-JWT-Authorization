import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext";

import "./LoginPage.css";

const LoginPage = () => {
  const { loginUser } = useContext(AuthContext);
  return (
    <form className="login-form" onSubmit={loginUser}>
      <label htmlFor="userName">User Name</label>
      <input
        type="text"
        id="userName"
        name="username"
        placeholder="Enter Username"
      />

      <label htmlFor="inputPassword">Password</label>
      <input
        type="password"
        id="inputPassword"
        name="password"
        placeholder="Enter Password"
      />

      <button type="submit">Login</button>
    </form>
  );
};

export default LoginPage;
