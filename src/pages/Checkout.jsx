import React, { useState } from "react";
import "./Checkout.css";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const isFormValid = () => {
    return (
      form.name &&
      form.phone &&
      form.address &&
      form.city &&
      form.pincode
    );
  };

  const continueToPayment = () => {
    if (!isFormValid()) {
      alert("Please fill all address details");
      return;
    }

    // Save address
    localStorage.setItem("deliveryAddress", JSON.stringify(form));

    navigate("/payment");
  };

  return (
    <div className="checkout-page">
      <div className="container">
        <h1>Delivery Address</h1>

        <div className="checkout-address">
          <input name="name" placeholder="Full Name" onChange={handleChange} />
          <input name="phone" placeholder="Phone Number" onChange={handleChange} />
          <textarea name="address" placeholder="Full Address" onChange={handleChange} />
          <input name="city" placeholder="City" onChange={handleChange} />
          <input name="pincode" placeholder="Pincode" onChange={handleChange} />

          <button className="place-order-btn" onClick={continueToPayment}>
            Continue to Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
