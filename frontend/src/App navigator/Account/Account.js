import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Account.css"
const Account = () => {
  const [accountOpen, setAccountOpen] = useState(false);
  const accountRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (accountRef.current && !accountRef.current.contains(e.target)) {
        setAccountOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setAccountOpen(false);
    navigate("/");
  };

  return (
    <li className="nav-item account-wrapper" ref={accountRef}>
      <span
        className="nav-link account-btn"
        onClick={() => setAccountOpen(!accountOpen)}
      >
        Account
      </span>

      {accountOpen && (
        <div className="account-dropdown premium">
          <div className="account-header">
            <div className="avatar">A</div>
            <div className="user-info">
              <p className="name">Abir Roy</p>
              <p className="email">abirroy2020@gmail.com</p>
            </div>
          </div>

          <div className="account-actions">
            <button onClick={() => window.open("/orders", "_self")}>
              🛒 My Orders
            </button>

            <button onClick={() => window.open("/profile", "_self")}>
              👤 My Profile
            </button>

            <button onClick={() => window.open("/support", "_self")}>
              💬 Support
            </button>
          </div>

          <div className="logout-section">
            <button className="logout-btn" onClick={handleLogout}>
              🚪 Logout
            </button>
          </div>
        </div>
      )}
    </li>
  );
};

export default Account;
