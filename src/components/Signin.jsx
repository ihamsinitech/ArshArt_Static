import React, { useState } from "react";
import axios from "axios";
import "./Auth.css";

const API_BASE_URL = "http://localhost:8083/api/v1/auth";

const Signin = ({ onSuccess, onSignup, onForgotPassword }) => {
  const [credentials, setCredentials] = useState({
    identifier: "",
    password: ""
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!credentials.identifier || !credentials.password) {
      setError("Please enter both email/mobile and password");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await axios.post(
        `${API_BASE_URL}/login`,
        {
          identifier: credentials.identifier.trim(),
          password: credentials.password
        },
        {
          headers: { 'Content-Type': 'application/json' },
          timeout: 15000
        }
      );

      if (response.data.success) {
      // Store token and user data
      localStorage.setItem("arshart_token", response.data.token);
      localStorage.setItem("arshart_user", JSON.stringify(response.data.user));
      
      // Pass user data to parent
      onSuccess(response.data.user);
    } else {
      setError(response.data.message || "Signin failed");
    }
  } catch (err) {
    if (err.code === 'ERR_NETWORK') {
      setError("Cannot connect to server");
    } else if (err.response?.status === 401) {
      setError("Invalid email/mobile or password");
    } else {
      setError(err.response?.data?.message || "Signin failed");
    }
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="auth-bg">
      <div className="auth-card">
        <div className="auth-header">
          <h1 className="brand-title">ArshArt</h1>
          <p className="brand-subtitle">Sign In to Your Account</p>
        </div>

        {error && <div className="auth-error">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email or Mobile Number *</label>
            <input
              type="text"
              placeholder="Enter email or mobile number"
              value={credentials.identifier}
              onChange={(e) => setCredentials({...credentials, identifier: e.target.value})}
              disabled={loading}
              required
            />
          </div>

          <div className="form-group">
            <label>Password *</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={credentials.password}
              onChange={(e) => setCredentials({...credentials, password: e.target.value})}
              disabled={loading}
              required
            />
          </div>

          <div className="forgot-password">
            <button type="button" onClick={onForgotPassword} className="forgot-link">
              Forgot Password?
            </button>
          </div>

          <button 
            type="submit"
            disabled={loading || !credentials.identifier || !credentials.password}
            className={`auth-btn ${loading ? "loading" : ""}`}
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>

          <div className="auth-footer">
            <p>
              Don't have an account?{" "}
              <button type="button" onClick={onSignup} className="auth-link">
                Sign Up
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;