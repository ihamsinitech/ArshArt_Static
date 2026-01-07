import React, { useState } from "react";
import axios from "axios";
import "./Auth.css";

const API_BASE_URL = "http://localhost:8083/api/v1/auth";

const ResetPassword = ({ onSuccess, onBack }) => {
  const [formData, setFormData] = useState({
    token: "",
    newPassword: "",
    confirmPassword: ""
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const validateForm = () => {
    if (!formData.newPassword || formData.newPassword.length < 6) {
      return "Password must be at least 6 characters";
    }
    if (formData.newPassword !== formData.confirmPassword) {
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
      // Get token from URL or generate one
      const token = new URLSearchParams(window.location.search).get('token') || 'reset-token';
      
      const response = await axios.post(
        `${API_BASE_URL}/reset-password`,
        {
          token: token,
          newPassword: formData.newPassword,
          confirmPassword: formData.confirmPassword
        },
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
        setError(response.data.message || "Failed to reset password");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Reset failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-bg">
      <div className="auth-card">
        <div className="auth-header">
          <h1 className="brand-title">ArshArt</h1>
          <p className="brand-subtitle">Set New Password</p>
        </div>

        {error && <div className="auth-error">{error}</div>}
        
        {success ? (
          <div className="auth-success">
            <div className="success-icon">✓</div>
            <h3>Password Reset!</h3>
            <p>Your password has been updated successfully</p>
            <p className="redirecting">Redirecting to signin...</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>New Password *</label>
              <input
                type="password"
                placeholder="At least 6 characters"
                value={formData.newPassword}
                onChange={(e) => setFormData({...formData, newPassword: e.target.value})}
                disabled={loading}
                required
              />
            </div>

            <div className="form-group">
              <label>Confirm New Password *</label>
              <input
                type="password"
                placeholder="Confirm your new password"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                disabled={loading}
                required
              />
            </div>

            <div className="action-buttons">
              <button 
                type="submit"
                disabled={loading}
                className={`auth-btn ${loading ? "loading" : ""}`}
              >
                {loading ? "Resetting..." : "Reset Password"}
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

export default ResetPassword;