import React from "react";
import "./Signup.css";

const Signup = () => (
  <div className="signup-container">
    <form className="signup-form">
      <h2>Sign Up</h2>
      <input type="text" placeholder="Full Name" required />
      <input type="email" placeholder="Email" required />
      <input type="password" placeholder="Password" required />
      <input type="password" placeholder="Confirm Password" required />
      <button>Register</button>
    </form>
  </div>
);

export default Signup;
