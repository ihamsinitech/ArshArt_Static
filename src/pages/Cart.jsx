import React, { useState } from 'react';
import './Cart.css';
import { FaTrash, FaPlus, FaMinus, FaArrowLeft, FaShoppingBag } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Cart = () => {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            title: "Silk Embroidered Kurta",
            size: "M",
            color: "Maroon",
            price: 89.99,
            quantity: 1,
            image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2088&q=80"
        },
        {
            id: 2,
            title: "Kids Sherwani Set",
            size: "5-6 Years",
            color: "Blue",
            price: 64.99,
            quantity: 1,
            image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        },
        {
            id: 3,
            title: "Casual Cotton Kurta",
            size: "L",
            color: "White",
            price: 49.99,
            quantity: 2,
            image: "https://images.unsplash.com/photo-1519241047957-be31d7379a5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        }
    ]);

    const updateQuantity = (id, change) => {
        setCartItems(items =>
            items.map(item => {
                if (item.id === id) {
                    const newQuantity = item.quantity + change;
                    if (newQuantity < 1) return item;
                    return { ...item, quantity: newQuantity };
                }
                return item;
            })
        );
    };

    const removeItem = (id) => {
        setCartItems(items => items.filter(item => item.id !== id));
    };

    const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = subtotal > 100 ? 0 : 9.99;
    const total = subtotal + shipping;

    return (
        <div className="cart-page">
            <div className="container">
                <div className="cart-header">
                    <h1>Shopping Cart</h1>
                    <p>{cartItems.length} items in your cart</p>
                </div>

                <div className="cart-content">
                    {cartItems.length > 0 ? (
                        <>
                            <div className="cart-items">
                                {cartItems.map(item => (
                                    <div className="cart-item" key={item.id}>
                                        <div className="item-image">
                                            <img src={item.image} alt={item.title} />
                                        </div>
                                        <div className="item-details">
                                            <h3>{item.title}</h3>
                                            <div className="item-attributes">
                                                <span className="item-size">Size: {item.size}</span>
                                                <span className="item-color">Color: {item.color}</span>
                                            </div>
                                            <div className="item-price">
                                                ${item.price.toFixed(2)}
                                            </div>
                                        </div>
                                        <div className="item-quantity">
                                            <button onClick={() => updateQuantity(item.id, -1)}>
                                                <FaMinus />
                                            </button>
                                            <span>{item.quantity}</span>
                                            <button onClick={() => updateQuantity(item.id, 1)}>
                                                <FaPlus />
                                            </button>
                                        </div>
                                        <div className="item-total">
                                            ${(item.price * item.quantity).toFixed(2)}
                                        </div>
                                        <button className="remove-item" onClick={() => removeItem(item.id)}>
                                            <FaTrash />
                                        </button>
                                    </div>
                                ))}
                            </div>

                            <div className="cart-summary">
                                <div className="summary-card">
                                    <h3>Order Summary</h3>
                                    <div className="summary-row">
                                        <span>Subtotal</span>
                                        <span>${subtotal.toFixed(2)}</span>
                                    </div>
                                    <div className="summary-row">
                                        <span>Shipping</span>
                                        <span>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
                                    </div>
                                    <div className="summary-row discount">
                                        <span>Discount</span>
                                        <span>- $0.00</span>
                                    </div>
                                    <div className="summary-row total">
                                        <span>Total</span>
                                        <span>${total.toFixed(2)}</span>
                                    </div>
                                    <button className="checkout-btn">Proceed to Checkout</button>
                                    <Link to="/mens-wear" className="continue-shopping">
                                        <FaArrowLeft /> Continue Shopping
                                    </Link>
                                </div>

                                <div className="promo-code">
                                    <h4>Have a Promo Code?</h4>
                                    <div className="promo-input">
                                        <input type="text" placeholder="Enter promo code" />
                                        <button>Apply</button>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="empty-cart">
                            <FaShoppingBag className="empty-icon" />
                            <h2>Your cart is empty</h2>
                            <p>Add some items to your cart to proceed</p>
                            <Link to="/mens-wear" className="shop-now-btn">
                                Start Shopping
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Cart;