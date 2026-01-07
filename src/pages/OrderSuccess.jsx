import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./OrderSuccess.css";

const OrderSuccess = () => {
  useEffect(() => {
    // Ensure cart is cleared
    localStorage.removeItem("cart");
  }, []);

  return (
    <div className="order-success-page">
      <div className="success-card">
        <h1>🎉 Order Placed Successfully!</h1>
        <p>
          Thank you for shopping with <strong>ArshArt</strong>.
        </p>
        <p>Your order will be delivered soon.</p>

        <Link to="/" className="home-btn">
          Go to Home
        </Link>

        <Link to="/sherwanis" className="shop-btn">
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default OrderSuccess;
