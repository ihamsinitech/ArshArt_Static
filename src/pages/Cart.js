import React, { useState, useEffect } from "react";
import "./Cart.css";
import {
  FaTrash,
  FaPlus,
  FaMinus,
  FaArrowLeft,
  FaShoppingBag,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const location = useLocation();

  /* =======================
     LOAD CART ON ROUTE CHANGE
  ======================= */
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, [location.pathname]);

  /* =======================
     SAVE CART TO STORAGE
  ======================= */
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const updateQuantity = (index, change) => {
    setCartItems((items) =>
      items.map((item, i) => {
        if (i === index) {
          const newQty = item.qty + change;
          if (newQty < 1) return item;
          return { ...item, qty: newQty };
        }
        return item;
      })
    );
  };

  const removeItem = (index) => {
    setCartItems((items) => items.filter((_, i) => i !== index));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );
  const shipping = subtotal > 100 ? 0 : 9.99;
  const total = subtotal + shipping;

  return (
    <div className="cart-page">
      <div className="container">
        <div className="cart-header">
          <h1>Shopping Cart</h1>
          <p>{cartItems.length} items in your cart</p>
        </div>

        {cartItems.length > 0 ? (
          <div className="cart-content">
            <div className="cart-items">
              {cartItems.map((item, index) => (
                <div className="cart-item" key={index}>
                  <img src={item.image} alt={item.name} />
                  <h3>{item.name}</h3>
                  <p>Size: {item.size}</p>
                  <p>Color: {item.color}</p>

                  <div className="item-quantity">
                    <button onClick={() => updateQuantity(index, -1)}>
                      <FaMinus />
                    </button>
                    <span>{item.qty}</span>
                    <button onClick={() => updateQuantity(index, 1)}>
                      <FaPlus />
                    </button>
                  </div>

                  <p>₹{item.price * item.qty}</p>

                  <button onClick={() => removeItem(index)}>
                    <FaTrash />
                  </button>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <p>Total: ₹{total.toFixed(2)}</p>
              <Link to="/checkout">Proceed to Checkout</Link>
            </div>
          </div>
        ) : (
          <div className="empty-cart">
            <FaShoppingBag />
            <h2>Your cart is empty</h2>
            <Link to="/sherwanis">Start Shopping</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
