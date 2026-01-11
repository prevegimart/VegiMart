import React, { useState } from "react";
import axios from "axios";
import "./Login.css";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const API = process.env.REACT_APP_API_URL;
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    console.log(API,"API");
    e.preventDefault();

    try {
      const res = await axios.post(
        `${API}/api/auth/login`,
        form
      );

      localStorage.setItem("token", res.data.token);

      navigate("/home"); 
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>🥕 VegiMart Login</h2>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
          />

          <button type="submit">Login</button>
        </form>

        <span className="auth-footer">
          New here? <Link to="/signup">Create an account</Link>
        </span>
      </div>
    </div>
  );
}
