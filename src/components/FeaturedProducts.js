import React, { useState } from 'react';
import './FeaturedProducts.css';
import { FaStar, FaStarHalfAlt, FaRegStar, FaRegHeart, FaHeart } from 'react-icons/fa';

const FeaturedProducts = () => {
    const [wishlist, setWishlist] = useState({});
    const [cartCount, setCartCount] = useState(2);

    const products = [
        {
            id: 1,
            title: "Silk Embroidered Kurta",
            rating: 4.5,
            price: 10000,
            oldPrice: 20000,
            badge: "BESTSELLER",
            image: "https://textile-export.b-cdn.net/images/800/20250120/1737363089647082392-Manyavar%20V-4-001.jpeg"
        },
        {
            id: 2,
            title: "Kids Traditional Sherwani",
            rating: 4.8,
            price: 5000,
            oldPrice: null,
            badge: "NEW",
            image: "https://manyavar.scene7.com/is/image/manyavar/CIWD095-302-Cream+(4)_17-04-2024-15-41:650x900?&dpr=on,2"
        },
        {
            id: 3,
            title: "Premium Wool Blend Suit",
            rating: 5.0,
            price: 12000,
            oldPrice: 16000,
            badge: "TRENDING",
            image: "https://manyavar.scene7.com/is/image/manyavar/TWS0070_310-BLACK.11668_26-08-2023-22-50:345x488?&dpr=on,2"
        },
        {
            id: 4,
            title: "Casual Cotton Kurta",
            rating: 4.3,
            price: 4000,
            oldPrice: 8000,
            badge: "SALE",
            image: "https://manyavar.scene7.com/is/image/manyavar/M201008_101-WHITE.4152_22-04-2024-11-08:650x900?&dpr=on,2"
        }
    ];

    const handleAddToCart = (productId) => {
        setCartCount(cartCount + 1);
        
        // Show feedback
        const button = document.querySelector(`.add-to-cart[data-id="${productId}"]`);
        if (button) {
            const originalText = button.textContent;
            button.textContent = 'Added!';
            button.style.backgroundColor = '#27ae60';
            
            setTimeout(() => {
                button.textContent = originalText;
                button.style.backgroundColor = '';
            }, 1500);
        }
    };

    const toggleWishlist = (productId) => {
        setWishlist(prev => ({
            ...prev,
            [productId]: !prev[productId]
        }));
    };

    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;

        for (let i = 1; i <= 5; i++) {
            if (i <= fullStars) {
                stars.push(<FaStar key={i} />);
            } else if (i === fullStars + 1 && hasHalfStar) {
                stars.push(<FaStarHalfAlt key={i} />);
            } else {
                stars.push(<FaRegStar key={i} />);
            }
        }

        return stars;
    };

    return (
        <section className="featured-products">
            <div className="container">
                <div className="section-title">
                    <h2>Featured Collections</h2>
                    <p>Handpicked selection of our premium products</p>
                </div>
                
                <div className="product-grid">
                    {products.map(product => (
                        <div className="product-card" key={product.id}>
                            <div className="product-badge">{product.badge}</div>
                            <div className="product-img">
                                <img src={product.image} alt={product.title} />
                            </div>
                            <div className="product-info">
                                <h3 className="product-title">{product.title}</h3>
                                <div className="product-rating">
                                    {renderStars(product.rating)}
                                    <span>({product.rating})</span>
                                </div>
                                <p className="product-price">
                                    ₹{product.price.toFixed(0)}
                                    {product.oldPrice && (
                                        <span className="old-price">₹{product.oldPrice.toFixed(0)}</span>
                                    )}
                                </p>
                                <div className="product-actions">
                                    <button 
                                        className="add-to-cart" 
                                        data-id={product.id}
                                        onClick={() => handleAddToCart(product.id)}
                                    >
                                        Add to Cart
                                    </button>
                                    <button 
                                        className="wishlist-btn" 
                                        onClick={() => toggleWishlist(product.id)}
                                    >
                                        {wishlist[product.id] ? (
                                            <FaHeart style={{color: '#e74c3c'}} />
                                        ) : (
                                            <FaRegHeart />
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedProducts;