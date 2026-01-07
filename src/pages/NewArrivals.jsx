import React from 'react';
import './NewArrivals.css';
import { FaStar, FaShoppingBag } from 'react-icons/fa';

const NewArrivals = () => {
    const newProducts = [
        {
            id: 1,
            title: "Designer Silk Kurta Set",
            category: "Men's Ethnic",
            price: 129.99,
            oldPrice: 169.99,
            rating: 4.9,
            image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
            badge: "NEW"
        },
        {
            id: 2,
            title: "Kids Royal Sherwani",
            category: "Kids Traditional",
            price: 89.99,
            oldPrice: 119.99,
            rating: 4.8,
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
            badge: "NEW"
        },
        {
            id: 3,
            title: "Premium Linen Shirt",
            category: "Men's Casual",
            price: 69.99,
            oldPrice: 89.99,
            rating: 4.7,
            image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
            badge: "NEW"
        },
        {
            id: 4,
            title: "Kids Party Suit",
            category: "Kids Party Wear",
            price: 99.99,
            oldPrice: 129.99,
            rating: 5.0,
            image: "https://images.unsplash.com/photo-1513519245088-0e129a5c42b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
            badge: "HOT"
        },
        {
            id: 5,
            title: "Embroidered Waistcoat",
            category: "Men's Accessories",
            price: 59.99,
            oldPrice: 79.99,
            rating: 4.6,
            image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2067&q=80",
            badge: "NEW"
        },
        {
            id: 6,
            title: "Kids Traditional Kurta",
            category: "Kids Traditional",
            price: 49.99,
            oldPrice: 69.99,
            rating: 4.5,
            image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
            badge: "NEW"
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
        <div className="new-arrivals-page">
            <div className="container">
                {/* Hero Section */}
                <div className="page-hero">
                    <h1>New Arrivals</h1>
                    <p>Discover our latest collection of premium clothing for men and kids</p>
                </div>

                {/* Banner */}
                <div className="arrivals-banner">
                    <div className="banner-content">
                        <h2>Fresh Collection Just Landed</h2>
                        <p>Shop our newest arrivals before they're gone</p>
                        <button className="banner-btn">Shop Now</button>
                    </div>
                </div>

                {/* Products Grid */}
                <div className="products-section">
                    <div className="section-header">
                        <h2>Latest Products</h2>
                        <p>Check out our newest additions</p>
                    </div>
                    
                    <div className="products-grid">
                        {newProducts.map(product => (
                            <div className="product-card" key={product.id}>
                                <div className="product-badge">{product.badge}</div>
                                <div className="product-image">
                                    <img src={product.image} alt={product.title} />
                                    <div className="product-overlay">
                                        <button className="quick-view-btn">Quick View</button>
                                        <button className="add-to-cart-btn">
                                            <FaShoppingBag /> Add to Cart
                                        </button>
                                    </div>
                                </div>
                                <div className="product-info">
                                    <span className="product-category">{product.category}</span>
                                    <h3 className="product-title">{product.title}</h3>
                                    <div className="product-rating">
                                        {renderStars(product.rating)}
                                        <span>({product.rating})</span>
                                    </div>
                                    <div className="product-price">
                                        <span className="current-price">${product.price.toFixed(2)}</span>
                                        <span className="old-price">${product.oldPrice.toFixed(2)}</span>
                                    </div>
                                    <div className="product-actions">
                                        <button className="add-to-wishlist">Add to Wishlist</button>
                                        <button className="view-details">View Details</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Newsletter Section */}
                <div className="newsletter-section">
                    <div className="newsletter-content">
                        <h3>Stay Updated</h3>
                        <p>Be the first to know about new arrivals and exclusive offers</p>
                        <form className="newsletter-form">
                            <input type="email" placeholder="Enter your email address" />
                            <button type="submit">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewArrivals;