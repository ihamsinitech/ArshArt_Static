// src/pages/ShoesPage.js
import React, { useState } from 'react';
import './ShoesPage.css';
import { FaStar, FaStarHalfAlt, FaRegStar, FaHeart, FaShoppingBag, FaTruck, FaUndo, FaShieldAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ShoesPage = () => {
    console.log("👟 SHOES PAGE LOADED");
    
    const [wishlisted, setWishlisted] = useState({});
    const [activeFilter, setActiveFilter] = useState('all');

    const traditionalShoes = [
        {
            id: 1,
            title: "Royal Embroidered Juttis",
            price: 89.99,
            oldPrice: 119.99,
            rating: 4.7,
            reviews: 96,
            description: "Traditional Punjabi juttis with intricate zari embroidery and mirror work.",
            color: "Gold & Maroon",
            sizes: ['7', '8', '9', '10'],
            inStock: true,
            stockCount: 25,
            image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            badge: "TRADITIONAL",
            category: "shoes",
            type: "Juttis",
            tags: ["juttis", "traditional", "embroidery"]
        },
        {
            id: 2,
            title: "Handcrafted Kolhapuri Chappals",
            price: 129.99,
            oldPrice: 169.99,
            rating: 4.8,
            reviews: 128,
            description: "Authentic Kolhapuri leather chappals with traditional hand-tooling.",
            color: "Natural Tan",
            sizes: ['8', '9', '10', '11'],
            inStock: true,
            stockCount: 18,
            image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            badge: "TRADITIONAL",
            category: "shoes",
            type: "Kolhapuris",
            tags: ["kolhapuris", "leather", "handcrafted"]
        },
        {
            id: 3,
            title: "Wedding Mojari Shoes",
            price: 159.99,
            oldPrice: 199.99,
            rating: 4.9,
            reviews: 89,
            description: "Elegant wedding mojaris with heavy embroidery and pearl work.",
            color: "Ivory & Gold",
            sizes: ['7', '8', '9', '10'],
            inStock: true,
            stockCount: 12,
            image: "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            badge: "WEDDING",
            category: "shoes",
            type: "Wedding",
            tags: ["wedding", "mojaris", "premium"]
        },
        {
            id: 4,
            title: "Traditional Nagra Shoes",
            price: 74.99,
            oldPrice: 99.99,
            rating: 4.5,
            reviews: 67,
            description: "Comfortable Nagra shoes with traditional Punjabi embroidery.",
            color: "Red & Gold",
            sizes: ['7', '8', '9', '10'],
            inStock: true,
            stockCount: 32,
            image: "https://images.unsplash.com/photo-1560769624-6a4fdf6f5c2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            badge: "TRADITIONAL",
            category: "shoes",
            type: "Nagra",
            tags: ["nagra", "traditional", "punjabi"]
        },
        {
            id: 5,
            title: "Royal Rajasthani Mojaris",
            price: 109.99,
            oldPrice: 139.99,
            rating: 4.6,
            reviews: 112,
            description: "Rajasthani style mojaris with traditional mirror and bead work.",
            color: "Blue & Silver",
            sizes: ['8', '9', '10', '11'],
            inStock: true,
            stockCount: 20,
            image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            badge: "TRADITIONAL",
            category: "shoes",
            type: "Mojaris",
            tags: ["mojaris", "rajasthani", "beaded"]
        },
        {
            id: 6,
            title: "Classic Khussa Shoes",
            price: 94.99,
            oldPrice: 124.99,
            rating: 4.4,
            reviews: 74,
            description: "Traditional Khussa shoes with pointed toe and ethnic embroidery.",
            color: "Brown & Gold",
            sizes: ['7', '8', '9', '10'],
            inStock: true,
            stockCount: 28,
            image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            badge: "TRADITIONAL",
            category: "shoes",
            type: "Khussa",
            tags: ["khussa", "classic", "pointed"]
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

    const handleFilter = (filterType) => {
        setActiveFilter(filterType);
    };

    const filteredShoes = activeFilter === 'all' 
        ? traditionalShoes 
        : traditionalShoes.filter(shoe => 
            shoe.tags.includes(activeFilter) || 
            shoe.type.toLowerCase().includes(activeFilter.toLowerCase())
        );

    return (
        <div className="shoes-page">
            <div className="container">
                <div className="breadcrumb">
                    <Link to="/">Home</Link>
                    <span>/</span>
                    <Link to="/mens-wear">Men's Wear</Link>
                    <span>/</span>
                    <span>Traditional Shoes</span>
                </div>

                <div className="page-header">
                    <h1>Traditional Shoes Collection</h1>
                    <p>Authentic traditional footwear - Juttis, Mojaris, Kolhapuris & More</p>
                    <div className="collection-highlights">
                        <span className="highlight">Handcrafted</span>
                        <span className="highlight">Ethnic Designs</span>
                        <span className="highlight">Premium Quality</span>
                    </div>
                </div>

                <div className="stats-bar">
                    <div className="stat">
                        <span className="stat-number">{traditionalShoes.length}</span>
                        <span className="stat-label">Traditional Shoes</span>
                    </div>
                    <div className="stat">
                        <span className="stat-number">4.7</span>
                        <span className="stat-label">Avg. Rating</span>
                    </div>
                    <div className="stat">
                        <span className="stat-number">7-11</span>
                        <span className="stat-label">Sizes Available</span>
                    </div>
                    <div className="stat">
                        <span className="stat-number">Free</span>
                        <span className="stat-label">Shipping</span>
                    </div>
                </div>

                <div className="filter-bar">
                    <div className="filter-section">
                        <h4>Filter by Type:</h4>
                        <div className="filter-options">
                            <button 
                                className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
                                onClick={() => handleFilter('all')}
                            >
                                All Traditional
                            </button>
                            <button 
                                className={`filter-btn ${activeFilter === 'juttis' ? 'active' : ''}`}
                                onClick={() => handleFilter('juttis')}
                            >
                                Juttis
                            </button>
                            <button 
                                className={`filter-btn ${activeFilter === 'kolhapuris' ? 'active' : ''}`}
                                onClick={() => handleFilter('kolhapuris')}
                            >
                                Kolhapuris
                            </button>
                            <button 
                                className={`filter-btn ${activeFilter === 'mojaris' ? 'active' : ''}`}
                                onClick={() => handleFilter('mojaris')}
                            >
                                Mojaris
                            </button>
                            <button 
                                className={`filter-btn ${activeFilter === 'wedding' ? 'active' : ''}`}
                                onClick={() => handleFilter('wedding')}
                            >
                                Wedding
                            </button>
                            <button 
                                className={`filter-btn ${activeFilter === 'khussa' ? 'active' : ''}`}
                                onClick={() => handleFilter('khussa')}
                            >
                                Khussa
                            </button>
                        </div>
                    </div>
                    <div className="sort-section">
                        <select className="sort-select">
                            <option>Sort by: Featured</option>
                            <option>Price: Low to High</option>
                            <option>Price: High to Low</option>
                            <option>Rating: High to Low</option>
                            <option>Newest First</option>
                        </select>
                    </div>
                </div>

                <div className="products-grid">
                    {filteredShoes.map(product => {
                        const stockStatus = getStockStatus(product.stockCount);
                        
                        return (
                            <div className="product-card" key={product.id}>
                                <div className="product-image">
                                    <img src={product.image} alt={product.title} />
                                    <div className="product-badge traditional-badge">{product.badge}</div>
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

                                <div className="product-details">
                                    <h3 className="product-title">{product.title}</h3>
                                    
                                    <div className="product-type-badge">
                                        <span className="type-label">{product.type}</span>
                                    </div>
                                    
                                    <div className="product-rating">
                                        <div className="stars">
                                            {renderStars(product.rating)}
                                            <span>({product.rating})</span>
                                        </div>
                                        <span className="reviews">{product.reviews} reviews</span>
                                    </div>

                                    <p className="product-description">{product.description}</p>

                                    <div className="product-price">
                                        <span className="current-price">${product.price.toFixed(2)}</span>
                                        <span className="old-price">${product.oldPrice.toFixed(2)}</span>
                                        <span className="discount">
                                            Save ${(product.oldPrice - product.price).toFixed(2)}
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
                                            <span className="info-label">Type:</span>
                                            <span className="info-value type-value">{product.type}</span>
                                        </div>
                                        <div className="info-row">
                                            <span className="info-label">Stock:</span>
                                            <span className={`info-value ${stockStatus.class}`}>
                                                {product.stockCount} units
                                            </span>
                                        </div>
                                    </div>

                                    <div className="quick-actions">
                                        <button className="add-to-cart-btn">
                                            <FaShoppingBag /> Add to Cart
                                        </button>
                                        <Link to={`/product/traditional-shoes/${product.id}`} className="view-details-btn">
                                            View Details
                                        </Link>
                                    </div>

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

                <div className="pagination">
                    <button className="page-btn active">1</button>
                    <button className="page-btn">2</button>
                    <button className="page-btn">3</button>
                    <span className="page-dots">...</span>
                    <button className="page-btn">8</button>
                    <button className="page-btn next-btn">Next →</button>
                </div>

                <div className="traditional-collection-info">
                    <h3>The Art of Traditional Footwear</h3>
                    <div className="collection-details">
                        <div className="collection-text">
                            <p>
                                Our traditional shoe collection represents the rich heritage of Indian craftsmanship. 
                                Each pair is meticulously crafted by skilled artisans using techniques passed down 
                                through generations. From intricate embroidery to hand-tooled leather, every detail 
                                tells a story of cultural pride and artistic excellence.
                            </p>
                            <div className="collection-features">
                                <div className="collection-feature">
                                    <span className="feature-icon">✋</span>
                                    <span>Handcrafted by Artisans</span>
                                </div>
                                <div className="collection-feature">
                                    <span className="feature-icon">🎨</span>
                                    <span>Traditional Embroidery</span>
                                </div>
                                <div className="collection-feature">
                                    <span className="feature-icon">👑</span>
                                    <span>Royal Heritage Designs</span>
                                </div>
                            </div>
                        </div>
                        <div className="collection-image">
                            <img src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                 alt="Traditional Craftsmanship" />
                        </div>
                    </div>
                </div>

                <div className="additional-info">
                    <h3>Why Choose Our Traditional Shoes?</h3>
                    <div className="features-grid">
                        <div className="feature">
                            <FaShieldAlt className="feature-icon" />
                            <h4>Authentic Craftsmanship</h4>
                            <p>Each pair is handmade by skilled artisans using traditional techniques</p>
                        </div>
                        <div className="feature">
                            <FaTruck className="feature-icon" />
                            <h4>Free Shipping</h4>
                            <p>Free delivery on all traditional shoe orders above $75</p>
                        </div>
                        <div className="feature">
                            <FaUndo className="feature-icon" />
                            <h4>Easy Returns</h4>
                            <p>30-day return policy with free returns for unworn shoes</p>
                        </div>
                        <div className="feature">
                            <FaShieldAlt className="feature-icon" />
                            <h4>Premium Materials</h4>
                            <p>Made with genuine leather, silk threads, and quality embellishments</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShoesPage;