import React,{useState} from "react";
import "./Signup.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signup() {
    const navigate = useNavigate();
    const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {
      const res = await axios.post("https://vegimart-back.onrender.com/api/auth/signup", form);
      alert("Signup successful");
      navigate("/");
    } catch (err) {
      alert(err.response.data.message);
    }
  };
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>🥬 Create Account</h2>
        <p>Buy fresh & organic vegetables</p>

        <form onSubmit={handleSubmit}>
          <input placeholder="Full Name"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required />

          <input placeholder="Email"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required />

          <input type="password" placeholder="Password"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required />

          <button type="submit">Sign Up</button>
        </form>

        <span className="auth-footer">
          Already have an account? <a href="/login">Login</a>
        </span>
      </div>
    </div>
  );
}
