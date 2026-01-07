import React, { useState } from "react";
import axios from "axios";
import "./Auth.css";

const API_BASE_URL = "http://localhost:8083/api/v1/auth";

const ForgotPassword = ({ onSuccess, onBack }) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email) {
      setError("Please enter your email");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await axios.post(
        `${API_BASE_URL}/forgot-password`,
        { email: email.trim() },
        {
          headers: { 'Content-Type': 'application/json' },
          timeout: 15000
        }
      );

      if (response.data.success) {
        setSuccess(true);
        setTimeout(() => {
          onSuccess();
        }, 2000);
      } else {
        setError(response.data.message || "Failed to send reset email");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Request failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-bg">
      <div className="auth-card">
        <div className="auth-header">
          <h1 className="brand-title">ArshArt</h1>
          <p className="brand-subtitle">Reset Your Password</p>
        </div>

        {error && <div className="auth-error">{error}</div>}
        
        {success ? (
          <div className="auth-success">
            <div className="success-icon">✓</div>
            <h3>Email Sent!</h3>
            <p>Check your email for password reset instructions</p>
            <p className="redirecting">Redirecting...</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email Address *</label>
              <input
                type="email"
                placeholder="Enter your registered email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
                required
              />
              <p className="form-help">
                We'll send password reset instructions to your email
              </p>
            </div>

            <div className="action-buttons">
              <button 
                type="submit"
                disabled={loading || !email}
                className={`auth-btn ${loading ? "loading" : ""}`}
              >
                {loading ? "Sending..." : "Send Reset Email"}
              </button>

              <button 
                type="button"
                onClick={onBack}
                className="auth-btn secondary"
                disabled={loading}
              >
                Back to Sign In
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;