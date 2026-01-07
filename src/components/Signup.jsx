

import React, { useState } from "react";
import axios from "axios";
import "./Auth.css";

const API_BASE_URL = "http://localhost:8083/api/v1/auth";

const Signup = ({ onSuccess, onLogin }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: ""
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    setError("");
  };

  const handleMobileChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    if (value.length <= 10) {
      setFormData({
        ...formData,
        mobile: value
      });
      setError("");
    }
  };

  const validateForm = () => {
    if (!formData.name || formData.name.trim().length < 3) {
      return "Name must be at least 3 characters";
    }
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      return "Valid email is required";
    }
    if (!formData.mobile || formData.mobile.length !== 10 || !/^[6-9]\d{9}$/.test(formData.mobile)) {
      return "Enter valid 10-digit mobile number";
    }
    if (!formData.password || formData.password.length < 6) {
      return "Password must be at least 6 characters";
    }
    if (formData.password !== formData.confirmPassword) {
      return "Passwords do not match";
    }
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await axios.post(
        `${API_BASE_URL}/signup`,
        {
          name: formData.name.trim(),
          email: formData.email.trim(),
          mobile: formData.mobile.trim(),
          password: formData.password
        },
        {
          headers: { 'Content-Type': 'application/json' },
          timeout: 15000
        }
      );

      if (response.data.success) {
        setSuccessMessage("Account created successfully! Redirecting to login...");
        setTimeout(() => {
          onSuccess();
        }, 2000);
      } else {
        setError(response.data.message || "Signup failed");
      }
    } catch (err) {
      console.error("Signup error:", err);
      if (err.response?.status === 409) {
        setError("Email or mobile already registered");
      } else if (err.code === 'ERR_NETWORK') {
        setError("Cannot connect to server. Please check your connection.");
      } else {
        setError(err.response?.data?.message || "Signup failed. Please try again.");
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
          <p className="brand-subtitle">Create New Account</p>
        </div>

        {error && <div className="auth-error">{error}</div>}
        {successMessage && <div className="auth-success">{successMessage}</div>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name *</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formData.name || ""}
              onChange={handleChange}
              disabled={loading}
              required
            />
          </div>

          <div className="form-group">
            <label>Email Address *</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email || ""}
              onChange={handleChange}
              disabled={loading}
              required
            />
          </div>

          <div className="form-group">
            <label>Mobile Number *</label>
            <input
              type="tel"
              name="mobile"
              placeholder="10-digit mobile number"
              value={formData.mobile || ""}
              onChange={handleMobileChange}
              disabled={loading}
              maxLength="10"
              required
            />
          </div>

          <div className="form-group">
            <label>Password *</label>
            <input
              type="password"
              name="password"
              placeholder="At least 6 characters"
              value={formData.password || ""}
              onChange={handleChange}
              disabled={loading}
              required
            />
          </div>

          <div className="form-group">
            <label>Confirm Password *</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
              value={formData.confirmPassword || ""}
              onChange={handleChange}
              disabled={loading}
              required
            />
          </div>

          <button 
            type="submit"
            disabled={loading}
            className={`auth-btn ${loading ? "loading" : ""}`}
          >
            {loading ? "Creating Account..." : "Sign Up"}
          </button>

          <div className="auth-footer">
            <p>
              Already have an account?{" "}
              <button type="button" onClick={onLogin} className="auth-link">
                Sign In
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;