import React, { useState } from 'react';
import './Wishlist.css';
import { FaHeart, FaTrash, FaShoppingBag, FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Wishlist = () => {
    const [wishlistItems, setWishlistItems] = useState([
        {
            id: 1,
            title: "Royal Silk Sherwani",
            category: "Men's Ethnic",
            price: 299.99,
            oldPrice: 399.99,
            image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
            inStock: true
        },
        {
            id: 2,
            title: "Kids Party Suit",
            category: "Kids Wear",
            price: 89.99,
            oldPrice: 119.99,
            image: "https://images.unsplash.com/photo-1513519245088-0e129a5c42b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
            inStock: true
        },
        {
            id: 3,
            title: "Premium Wool Suit",
            category: "Men's Formal",
            price: 399.99,
            oldPrice: 499.99,
            image: "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80",
            inStock: false
        },
        {
            id: 4,
            title: "Designer Kurta Set",
            category: "Men's Ethnic",
            price: 149.99,
            oldPrice: 199.99,
            image: "https://images.unsplash.com/photo-1594938374184-8f7d62879f1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
            inStock: true
        }
    ]);

    const removeFromWishlist = (id) => {
        setWishlistItems(items => items.filter(item => item.id !== id));
    };

    const moveAllToCart = () => {
        // In a real app, this would add all items to cart
        alert('All items added to cart!');
        setWishlistItems([]);
    };

    return (
        <div className="wishlist-page">
            <div className="container">
                <div className="wishlist-header">
                    <h1>My Wishlist</h1>
                    <p>{wishlistItems.length} items saved for later</p>
                </div>

                <div className="wishlist-content">
                    {wishlistItems.length > 0 ? (
                        <>
                            <div className="wishlist-actions">
                                <button className="move-all-btn" onClick={moveAllToCart}>
                                    <FaShoppingBag /> Move All to Cart
                                </button>
                            </div>

                            <div className="wishlist-grid">
                                {wishlistItems.map(item => (
                                    <div className="wishlist-item" key={item.id}>
                                        <div className="item-image">
                                            <img src={item.image} alt={item.title} />
                                            <button 
                                                className="remove-wishlist"
                                                onClick={() => removeFromWishlist(item.id)}
                                            >
                                                <FaHeart className="filled-heart" />
                                            </button>
                                            {!item.inStock && (
                                                <div className="out-of-stock">Out of Stock</div>
                                            )}
                                        </div>
                                        <div className="item-info">
                                            <span className="item-category">{item.category}</span>
                                            <h3>{item.title}</h3>
                                            <div className="item-price">
                                                <span className="current-price">${item.price.toFixed(2)}</span>
                                                <span className="old-price">${item.oldPrice.toFixed(2)}</span>
                                            </div>
                                            <div className="item-status">
                                                {item.inStock ? (
                                                    <span className="in-stock">In Stock</span>
                                                ) : (
                                                    <span className="notify-btn">Notify When Available</span>
                                                )}
                                            </div>
                                            <div className="item-actions">
                                                <button 
                                                    className="add-to-cart-btn"
                                                    disabled={!item.inStock}
                                                >
                                                    <FaShoppingBag /> Add to Cart
                                                </button>
                                                <button 
                                                    className="remove-btn"
                                                    onClick={() => removeFromWishlist(item.id)}
                                                >
                                                    <FaTrash /> Remove
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </>
                    ) : (
                        <div className="empty-wishlist">
                            <FaHeart className="empty-icon" />
                            <h2>Your wishlist is empty</h2>
                            <p>Save items you like to your wishlist for later</p>
                            <Link to="/mens-wear" className="shop-now-btn">
                                <FaArrowLeft /> Start Shopping
                            </Link>
                        </div>
                    )}
                </div>

                {wishlistItems.length > 0 && (
                    <div className="wishlist-footer">
                        <Link to="/mens-wear" className="continue-shopping">
                            <FaArrowLeft /> Continue Shopping
                        </Link>
                        <button className="clear-wishlist" onClick={() => setWishlistItems([])}>
                            Clear Wishlist
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Wishlist;