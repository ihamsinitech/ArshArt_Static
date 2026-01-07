import React, { useEffect, useState } from "react";
import "./Payment.css";
import { useNavigate } from "react-router-dom";
import { FaCreditCard } from "react-icons/fa";

const Payment = () => {
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState([]);
  const [method, setMethod] = useState("UPI");

  const [upiId, setUpiId] = useState("");
  const [card, setCard] = useState({
    number: "",
    name: "",
    expiry: "",
    cvv: "",
  });

  /* LOAD CART */
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (cart.length === 0) {
      navigate("/cart");
      return;
    }
    setCartItems(cart);
  }, [navigate]);

  /* TOTAL */
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  /* PAY ACTION */
  const payNow = () => {
    if (method === "UPI" && !upiId.includes("@")) {
      alert("Please enter a valid UPI ID");
      return;
    }

    if (method === "CARD") {
      if (
        !card.number ||
        !card.name ||
        !card.expiry ||
        !card.cvv
      ) {
        alert("Please fill all card details");
        return;
      }
    }

    localStorage.removeItem("cart");
    navigate("/order-success");
  };

  return (
    <div className="payment-page">
      {/* HEADER */}
      <div className="payment-header">
        <span className="back" onClick={() => navigate(-1)}>←</span>
        <h2>Complete Payment</h2>
        <span className="secure">🔒 100% Secure</span>
      </div>

      <div className="payment-container">
        {/* LEFT */}
        <div className="payment-left">
          {["UPI", "CARD", "EMI", "COD"].map((m) => (
            <div
              key={m}
              className={`pay-option ${method === m ? "active" : ""}`}
              onClick={() => setMethod(m)}
            >
              {m === "UPI" && "UPI"}
              {m === "CARD" && "Credit / Debit / ATM Card"}
              {m === "EMI" && "EMI"}
              {m === "COD" && "Cash on Delivery"}
            </div>
          ))}
        </div>

        {/* CENTER */}
        <div className="payment-center">
          {/* UPI */}
          {method === "UPI" && (
            <>
              <h3>Add new UPI ID</h3>
              <input
                placeholder="example@upi"
                value={upiId}
                onChange={(e) => setUpiId(e.target.value)}
              />
              <button className="verify-btn">Verify</button>
            </>
          )}

          {/* CARD */}
          {method === "CARD" && (
            <>
              <h3>Enter Card Details</h3>

              {/* CARD NUMBER WITH ICON */}
              <div className="input-with-icon">
                <input
                  type="text"
                  placeholder="Card Number"
                  maxLength="19"
                  value={card.number}
                  onChange={(e) =>
                    setCard({ ...card, number: e.target.value })
                  }
                />
                <FaCreditCard className="input-icon" />
              </div>

              <input
                type="text"
                placeholder="Name on Card"
                value={card.name}
                onChange={(e) =>
                  setCard({ ...card, name: e.target.value })
                }
              />

              <div className="row">
                <input
                  type="text"
                  placeholder="MM / YY"
                  value={card.expiry}
                  onChange={(e) =>
                    setCard({ ...card, expiry: e.target.value })
                  }
                />
                <input
                  type="password"
                  placeholder="CVV"
                  maxLength="3"
                  value={card.cvv}
                  onChange={(e) =>
                    setCard({ ...card, cvv: e.target.value })
                  }
                />
              </div>
            </>
          )}

          {/* EMI */}
          {method === "EMI" && (
            <>
              <h3>Select Bank for EMI</h3>

              <div className="emi-grid">
                {[
                  "HDFC Bank",
                  "ICICI Bank",
                  "SBI",
                  "Axis Bank",
                  "Kotak Bank",
                  "Yes Bank",
                ].map((bank) => (
                  <div className="emi-bank" key={bank}>
                    <div className="bank-icon">
                      {bank.split(" ")[0]}
                    </div>
                    <span>{bank}</span>
                  </div>
                ))}
              </div>

              <p className="emi-note">
                EMI available for 3, 6, 9 & 12 months
              </p>
            </>
          )}

          {/* COD */}
          {method === "COD" && (
            <p className="info">
              Pay in cash when your order is delivered.
            </p>
          )}

          <button className="pay-btn" onClick={payNow}>
            Pay ₹{subtotal}
          </button>
        </div>

        {/* RIGHT */}
        <div className="payment-right">
          <h3>Price Details</h3>

          <div className="price-row">
            <span>Price ({cartItems.length} items)</span>
            <span>₹{subtotal}</span>
          </div>

          <div className="price-row">
            <span>Shipping</span>
            <span className="free">FREE</span>
          </div>

          <div className="price-total">
            <span>Total Amount</span>
            <span>₹{subtotal}</span>
          </div>

          <div className="discount-box">
            <strong>10% Instant Discount</strong>
            <p>Available on select payment methods</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
