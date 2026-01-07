import React, { useState } from 'react';
import './SherwaniPage.css';
import { FaStar, FaStarHalfAlt, FaRegStar, FaHeart, FaShoppingBag, FaTruck, FaUndo, FaShieldAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SherwaniPage = () => {
    const [wishlisted, setWishlisted] = useState({});

    const sherwanis = [
        {
            id: 1,
            title: "Royal Silk Embroidered Sherwani",
            price: 299.99,
            oldPrice: 399.99,
            rating: 4.8,
            reviews: 128,
            description: "Premium silk sherwani with intricate embroidery work.",
            color: "Maroon",
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
            inStock: true,
            stockCount: 15,
            image: "https://ik.imagekit.io/4sjmoqtje/tr:c-at_max/cdn/shop/files/royal_blue_silk_sherwani_with_intricate_neckline_embroidery-sg195312_5.jpg?v=1744190916&w=1000",
            badge: "BESTSELLER"
        },
        {
            id: 2,
            title: "Designer Velvet Sherwani",
            price: 349.99,
            oldPrice: 449.99,
            rating: 4.9,
            reviews: 96,
            description: "Luxury velvet sherwani with golden embroidery.",
            color: "Burgundy",
            sizes: ['M', 'L', 'XL'],
            inStock: true,
            stockCount: 8,
            image: "https://img2.ogaanindia.com/pub/media/catalog/product/cache/3f6619daccdb194398d06464ab49fa6e/s/g/sg00358_1.jpg",
            badge: "NEW"
        },
        {
            id: 3,
            title: "Casual Cotton Sherwani",
            price: 189.99,
            oldPrice: 249.99,
            rating: 4.5,
            reviews: 72,
            description: "Comfortable cotton sherwani for daily wear.",
            color: "White",
            sizes: ['S', 'M', 'L', 'XL'],
            inStock: true,
            stockCount: 20,
            image: "https://medias.utsavfashion.com/media/catalog/product/cache/1/image/500x/040ec09b1e35df139433887a97daa66f/c/h/chikankari-cotton-sherwani-in-white-v1-mdw481.jpg",
            badge: "TRENDING"
        },
        {
            id: 4,
            title: "Wedding Sherwani Set",
            price: 499.99,
            oldPrice: 599.99,
            rating: 5.0,
            reviews: 45,
            description: "Complete wedding sherwani set with accessories.",
            color: "Cream",
            sizes: ['M', 'L', 'XL', 'XXL'],
            inStock: true,
            stockCount: 5,
            image: "https://5.imimg.com/data5/SELLER/Default/2024/4/411410055/EJ/XG/AY/81847244/men-wedding-sherwani-set.jpg",
            badge: "PREMIUM"
        },
        {
            id: 5,
            title: "Embroidered Silk Sherwani",
            price: 329.99,
            oldPrice: 429.99,
            rating: 4.7,
            reviews: 89,
            description: "Silk sherwani with detailed embroidery patterns.",
            color: "Navy Blue",
            sizes: ['S', 'M', 'L', 'XL'],
            inStock: true,
            stockCount: 12,
            image:"https://www.anitadongre.com/dw/image/v2/BGCX_PRD/on/demandware.static/-/Sites-masterCatalog_AD_India/default/dw7746c252/images/hires/F25/Men/F25MR31SR_Cream_1.jpg?sw=850&sh=1275&sm=fit&strip=false",
            badge: "LIMITED"
        },
        {
            id: 6,
            title: "Traditional Silk Sherwani",
            price: 279.99,
            oldPrice: 379.99,
            rating: 4.6,
            reviews: 67,
            description: "Traditional design with modern comfort.",
            color: "Black",
            sizes: ['M', 'L', 'XL'],
            inStock: true,
            stockCount: 18,
            image: "https://rechannelfashions.com/cdn/shop/files/73_8f4f1047-7f15-49b4-9be0-633b5d13e847.jpg?v=1763711444&width=1080",
            badge: "CLASSIC"
        },
        {
            id: 7,
            title: "Luxury Embroidered Sherwani",
            price: 429.99,
            oldPrice: 529.99,
            rating: 4.8,
            reviews: 112,
            description: "Luxury sherwani with handcrafted embroidery.",
            color: "Gold",
            sizes: ['L', 'XL', 'XXL'],
            inStock: true,
            stockCount: 7,
            image: "https://i.pinimg.com/736x/0c/91/4e/0c914e4d41b5fc58d96b83bb3371789c.jpg",
            badge: "LUXURY"
        },
        {
            id: 8,
            title: "Simple Silk Sherwani",
            price: 249.99,
            oldPrice: 349.99,
            rating: 4.4,
            reviews: 53,
            description: "Simple yet elegant silk sherwani.",
            color: "Red",
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
            inStock: true,
            stockCount: 25,
            image: "https://rechannelfashions.com/cdn/shop/files/2231.jpg?v=1684929539&width=1080",
            badge: "VALUE"
        }
    ];

    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;

        for (let i = 1; i <= 5; i++) {
            if (i <= fullStars) {
                stars.push(<FaStar key={i} className="star filled" />);
            } else if (i === fullStars + 1 && hasHalfStar) {
                stars.push(<FaStarHalfAlt key={i} className="star half" />);
            } else {
                stars.push(<FaRegStar key={i} className="star" />);
            }
        }

        return stars;
    };

    const toggleWishlist = (productId) => {
        setWishlisted(prev => ({
            ...prev,
            [productId]: !prev[productId]
        }));
    };

    const getStockStatus = (count) => {
        if (count > 10) return { text: 'In Stock', class: 'in-stock' };
        if (count > 0) return { text: 'Low Stock', class: 'low-stock' };
        return { text: 'Out of Stock', class: 'out-of-stock' };
    };

    return (
        <div className="sherwani-page">
            <div className="container">
                {/* Breadcrumb */}
                <div className="breadcrumb">
                    <Link to="/">Home</Link>
                    <span>/</span>
                    <Link to="/mens-wear">Men's Wear</Link>
                    <span>/</span>
                    <span>Sherwanis</span>
                </div>

                {/* Page Header */}
                <div className="page-header">
                    <h1>Sherwani Collection</h1>
                    <p>Premium sherwanis for weddings and special occasions</p>
                </div>

                {/* Stats */}
                <div className="stats-bar">
                    <div className="stat">
                        <span className="stat-number">{sherwanis.length}</span>
                        <span className="stat-label">Products</span>
                    </div>
                    <div className="stat">
                        <span className="stat-number">4.7</span>
                        <span className="stat-label">Avg. Rating</span>
                    </div>
                    <div className="stat">
                        <span className="stat-number">All</span>
                        <span className="stat-label">Sizes Available</span>
                    </div>
                    <div className="stat">
                        <span className="stat-number">Free</span>
                        <span className="stat-label">Shipping</span>
                    </div>
                </div>

                {/* Products Grid - 4 per row */}
                <div className="products-grid">
                    {sherwanis.map(product => {
                        const stockStatus = getStockStatus(product.stockCount);
                        
                        return (
                            <div className="product-card" key={product.id}>
                                {/* Product Image */}
                                <div className="product-image">
                                    <img src={product.image} alt={product.title} />
                                    {product.badge && (
                                        <div className="product-badge">{product.badge}</div>
                                    )}
                                    <button 
                                        className={`wishlist-icon ${wishlisted[product.id] ? 'active' : ''}`}
                                        onClick={() => toggleWishlist(product.id)}
                                    >
                                        <FaHeart />
                                    </button>
                                    <div className="stock-badge">
                                        <span className={stockStatus.class}>{stockStatus.text}</span>
                                    </div>
                                </div>

                                {/* Product Details */}
                                <div className="product-details">
                                    <h3 className="product-title">{product.title}</h3>
                                    
                                    <div className="product-rating">
                                        <div className="stars">
                                            {renderStars(product.rating)}
                                            <span>({product.rating})</span>
                                        </div>
                                        <span className="reviews">{product.reviews} reviews</span>
                                    </div>

                                    <p className="product-description">{product.description}</p>

                                    <div className="product-price">
                                        <span className="current-price">₹{product.price.toFixed(0)}</span>
                                        <span className="old-price">₹{product.oldPrice.toFixed(0)}</span>
                                        <span className="discount">
                                            Save ₹{(product.oldPrice - product.price).toFixed(0)}
                                        </span>
                                    </div>

                                    <div className="product-info">
                                        <div className="info-row">
                                            <span className="info-label">Color:</span>
                                            <span className="info-value">{product.color}</span>
                                        </div>
                                        <div className="info-row">
                                            <span className="info-label">Sizes:</span>
                                            <span className="info-value">{product.sizes.join(', ')}</span>
                                        </div>
                                        <div className="info-row">
                                            <span className="info-label">Stock:</span>
                                            <span className={`info-value ${stockStatus.class}`}>
                                                {product.stockCount} units
                                            </span>
                                        </div>
                                    </div>

                                    {/* Quick Actions */}
                                    <div className="quick-actions">
                                        <button className="add-to-cart-btn">
                                            <FaShoppingBag /> Add to Cart
                                        </button>
                                        <Link to={`/product/${product.id}`} className="view-details-btn">
                                            View Details
                                        </Link>
                                    </div>

                                    {/* Policies */}
                                    <div className="product-policies">
                                        <div className="policy">
                                            <FaTruck />
                                            <span>Free Shipping</span>
                                        </div>
                                        <div className="policy">
                                            <FaUndo />
                                            <span>30 Days Return</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Pagination */}
                <div className="pagination">
                    <button className="page-btn active">1</button>
                    <button className="page-btn">2</button>
                    <button className="page-btn">3</button>
                    <button className="page-btn">4</button>
                    <span className="page-dots">...</span>
                    <button className="page-btn">8</button>
                    <button className="page-btn next-btn">Next →</button>
                </div>

                {/* Additional Info */}
                <div className="additional-info">
                    <h3>Why Choose Our Sherwanis?</h3>
                    <div className="features-grid">
                        <div className="feature">
                            <FaShieldAlt className="feature-icon" />
                            <h4>Premium Quality</h4>
                            <p>Made with finest fabrics and detailed embroidery</p>
                        </div>
                        <div className="feature">
                            <FaTruck className="feature-icon" />
                            <h4>Free Shipping</h4>
                            <p>Free delivery on all orders above $100</p>
                        </div>
                        <div className="feature">
                            <FaUndo className="feature-icon" />
                            <h4>Easy Returns</h4>
                            <p>30-day return policy for all products</p>
                        </div>
                        <div className="feature">
                            <FaShieldAlt className="feature-icon" />
                            <h4>Secure Payment</h4>
                            <p>100% secure payment with SSL encryption</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SherwaniPage;