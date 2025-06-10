import React from "react";
import "./Login.css";

const Login = () => (
  <div className="login-container">
    <form className="login-form">
      <h2>Login / Sign In</h2>
      <input type="email" placeholder="Email" required />
      <input type="password" placeholder="Password" required />
      <button>Login</button>
    </form>
  </div>
);

export default Login;
