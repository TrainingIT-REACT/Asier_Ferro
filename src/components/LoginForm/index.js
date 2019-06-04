import React, { useState } from "react";
import "./css/index.scss";

const LoginForm = ({ callbackOnSubmit }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="loginForm">
      <form
        onSubmit={e => {
          e.preventDefault();
          return callbackOnSubmit ? callbackOnSubmit(username) : false;
        }}
      >
        <input
          value={username}
          onChange={e => setUsername(e.target.value)}
          placeholder="User name"
          type="text"
          name="username"
          required
        />
        <input
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
          name="password"
          required
        />
        <button className="btn">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
