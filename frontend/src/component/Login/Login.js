import React from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const navigate= useNavigate()
  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/home");
  };
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>🥕 VegiMart Login</h2>
        <p>Fresh vegetables at your doorstep</p>

        <form onSubmit={handleLogin}>
          <input type="email" placeholder="Email address" required />
          <input type="password" placeholder="Password" required />

          <button type="submit" >Login</button>
        </form>

        <span className="auth-footer">
          New here? <a href="/signup">Create an account</a>
        </span>
      </div>
    </div>
  );
}
