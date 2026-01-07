import React from 'react';
import './Offers.css';
import { FaStar, FaShoppingBag, FaClock, FaFire } from 'react-icons/fa';

const Offers = () => {
    const offers = [
        {
            id: 1,
            title: "Festive Sale",
            discount: "50% OFF",
            description: "On all ethnic wear collections",
            expires: "Ends in 2 days",
            code: "FESTIVE50",
            image: "https://images.unsplash.com/photo-1594938374184-8f7d62879f1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80"
        },
        {
            id: 2,
            title: "Kids Special",
            discount: "40% OFF",
            description: "On kids party wear collection",
            expires: "Ends in 5 days",
            code: "KIDS40",
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        },
        {
            id: 3,
            title: "Clearance Sale",
            discount: "60% OFF",
            description: "Selected items only",
            expires: "Limited time offer",
            code: "CLEAR60",
            image: "https://images.unsplash.com/photo-1519241047957-be31d7379a5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        }
    ];

    const products = [
        {
            id: 1,
            title: "Silk Sherwani Set",
            originalPrice: 299.99,
            discountedPrice: 149.99,
            discount: 50,
            rating: 4.8,
            image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2088&q=80"
        },
        {
            id: 2,
            title: "Kids Traditional Outfit",
            originalPrice: 99.99,
            discountedPrice: 59.99,
            discount: 40,
            rating: 4.9,
            image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        },
        {
            id: 3,
            title: "Formal Suit",
            originalPrice: 399.99,
            discountedPrice: 159.99,
            discount: 60,
            rating: 4.7,
            image: "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80"
        },
        {
            id: 4,
            title: "Casual Kurta",
            originalPrice: 79.99,
            discountedPrice: 39.99,
            discount: 50,
            rating: 4.5,
            image: "https://images.unsplash.com/photo-1519241047957-be31d7379a5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        }
    ];

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <FaStar 
                    key={i} 
                    className={i <= Math.floor(rating) ? "star filled" : "star"}
                />
            );
        }
        return stars;
    };

    return (
        <div className="offers-page">
            <div className="container">
                {/* Hero Section */}
                <div className="page-hero">
                    <h1>Special Offers</h1>
                    <p>Don't miss out on these amazing deals and discounts</p>
                    <div className="trending-tag">
                        <FaFire /> Trending Offers
                    </div>
                </div>

                {/* Offers Banner */}
                <div className="offers-banner">
                    <div className="banner-content">
                        <h2>Mega Sale Week</h2>
                        <p>Up to 70% OFF on selected items. Limited time offer!</p>
                        <div className="countdown">
                            <div className="countdown-item">
                                <span>02</span>
                                <small>Days</small>
                            </div>
                            <div className="countdown-item">
                                <span>14</span>
                                <small>Hours</small>
                            </div>
                            <div className="countdown-item">
                                <span>35</span>
                                <small>Minutes</small>
                            </div>
                        </div>
                        <button className="shop-now-btn">Shop Now</button>
                    </div>
                </div>

                {/* Current Offers */}
                <div className="current-offers">
                    <h2>Current Offers</h2>
                    <div className="offers-grid">
                        {offers.map(offer => (
                            <div className="offer-card" key={offer.id}>
                                <div className="offer-image">
                                    <img src={offer.image} alt={offer.title} />
                                    <div className="offer-discount">{offer.discount}</div>
                                </div>
                                <div className="offer-info">
                                    <h3>{offer.title}</h3>
                                    <p>{offer.description}</p>
                                    <div className="offer-meta">
                                        <div className="expiry">
                                            <FaClock /> {offer.expires}
                                        </div>
                                        <div className="offer-code">
                                            Use code: <strong>{offer.code}</strong>
                                        </div>
                                    </div>
                                    <button className="apply-offer-btn">Apply Offer</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Discounted Products */}
                <div className="discounted-products">
                    <div className="section-header">
                        <h2>Best Deals</h2>
                        <p>Products with biggest discounts</p>
                    </div>
                    
                    <div className="products-grid">
                        {products.map(product => (
                            <div className="product-card" key={product.id}>
                                <div className="product-badge">{product.discount}% OFF</div>
                                <div className="product-image">
                                    <img src={product.image} alt={product.title} />
                                    <div className="product-overlay">
                                        <button className="add-to-cart-btn">
                                            <FaShoppingBag /> Add to Cart
                                        </button>
                                    </div>
                                </div>
                                <div className="product-info">
                                    <h3 className="product-title">{product.title}</h3>
                                    <div className="product-rating">
                                        {renderStars(product.rating)}
                                        <span>({product.rating})</span>
                                    </div>
                                    <div className="product-price">
                                        <div className="discount-price">
                                            <span className="current-price">${product.discountedPrice.toFixed(2)}</span>
                                            <span className="original-price">${product.originalPrice.toFixed(2)}</span>
                                        </div>
                                        <div className="save-amount">
                                            Save ${(product.originalPrice - product.discountedPrice).toFixed(2)}
                                        </div>
                                    </div>
                                    <button className="view-details-btn">View Details</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Newsletter Offer */}
                <div className="newsletter-offer">
                    <div className="newsletter-content">
                        <h3>Get 20% OFF Your First Order</h3>
                        <p>Subscribe to our newsletter and get exclusive offers</p>
                        <form className="newsletter-form">
                            <input type="email" placeholder="Enter your email address" />
                            <button type="submit">Subscribe & Get 20% OFF</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offers;