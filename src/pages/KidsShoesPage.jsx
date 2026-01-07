// src/pages/KidsShoesPage.js
import React, { useState } from 'react';
import './KidsShoesPage.css';
import { FaStar, FaStarHalfAlt, FaRegStar, FaHeart, FaShoppingBag, FaTruck, FaUndo, FaShieldAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const KidsShoesPage = () => {
    console.log("👟 KIDS SHOES PAGE LOADED");
    
    const [wishlisted, setWishlisted] = useState({});
    const [activeFilter, setActiveFilter] = useState('all');
    const [selectedSizes, setSelectedSizes] = useState({});

    const kidsShoes = [
        {
            id: 1,
            title: "Kids Formal Leather Shoes",
            price: 39.99,
            oldPrice: 59.99,
            rating: 4.7,
            reviews: 128,
            description: "Premium leather formal shoes for school and special occasions.",
            color: "Black",
            sizes: ['2-3 Years', '4-5 Years', '6-7 Years', '8-10 Years'],
            ageGroup: "2-10 Years",
            inStock: true,
            stockCount: 45,
            image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            badge: "FORMAL",
            category: "kids-shoes",
            type: "Leather Shoes",
            tags: ["formal", "leather", "school", "premium"]
        },
        {
            id: 2,
            title: "Kids Traditional Mojaris",
            price: 29.99,
            oldPrice: 39.99,
            rating: 4.8,
            reviews: 96,
            description: "Handcrafted traditional mojaris with embroidery for festivals.",
            color: "Red & Gold",
            sizes: ['3-4 Years', '5-6 Years', '7-8 Years', '9-12 Years'],
            ageGroup: "3-12 Years",
            inStock: true,
            stockCount: 38,
            image: "https://images.unsplash.com/photo-1560343090-f0409e92791a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            badge: "TRADITIONAL",
            category: "kids-shoes",
            type: "Mojaris",
            tags: ["traditional", "mojari", "festival", "embroidered"]
        },
        {
            id: 3,
            title: "Kids Casual Sneakers",
            price: 34.99,
            oldPrice: 49.99,
            rating: 4.5,
            reviews: 187,
            description: "Comfortable casual sneakers for everyday wear and play.",
            color: "Blue & White",
            sizes: ['2-4 Years', '5-7 Years', '8-10 Years'],
            ageGroup: "2-10 Years",
            inStock: true,
            stockCount: 52,
            image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            badge: "CASUAL",
            category: "kids-shoes",
            type: "Sneakers",
            tags: ["casual", "sneakers", "everyday", "comfort"]
        },
        {
            id: 4,
            title: "Kids Party Shoes with Bows",
            price: 44.99,
            oldPrice: 64.99,
            rating: 4.9,
            reviews: 78,
            description: "Elegant party shoes with decorative bows for special occasions.",
            color: "Gold & Silver",
            sizes: ['4-5 Years', '6-7 Years', '8-9 Years', '10-12 Years'],
            ageGroup: "4-12 Years",
            inStock: true,
            stockCount: 25,
            image: "https://images.unsplash.com/photo-1515023677547-593d7638cbd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            badge: "PARTY",
            category: "kids-shoes",
            type: "Party Shoes",
            tags: ["party", "bow", "elegant", "special"]
        },
        {
            id: 5,
            title: "Kids Sports Shoes",
            price: 49.99,
            oldPrice: 69.99,
            rating: 4.6,
            reviews: 112,
            description: "Durable sports shoes for active kids with good grip.",
            color: "Red & Black",
            sizes: ['3-5 Years', '6-8 Years', '9-11 Years'],
            ageGroup: "3-11 Years",
            inStock: true,
            stockCount: 42,
            image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            badge: "SPORTS",
            category: "kids-shoes",
            type: "Sports Shoes",
            tags: ["sports", "active", "durable", "grip"]
        },
        {
            id: 6,
            title: "Kids Sandals for Summer",
            price: 24.99,
            oldPrice: 34.99,
            rating: 4.4,
            reviews: 134,
            description: "Breathable sandals perfect for summer and hot weather.",
            color: "Brown",
            sizes: ['2-3 Years', '4-5 Years', '6-7 Years'],
            ageGroup: "2-7 Years",
            inStock: true,
            stockCount: 58,
            image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            badge: "SUMMER",
            category: "kids-shoes",
            type: "Sandals",
            tags: ["summer", "sandals", "breathable", "comfort"]
        },
        {
            id: 7,
            title: "Kids Designer Loafers",
            price: 37.99,
            oldPrice: 52.99,
            rating: 4.7,
            reviews: 89,
            description: "Stylish designer loafers for smart casual occasions.",
            color: "Tan Brown",
            sizes: ['4-6 Years', '7-9 Years', '10-12 Years'],
            ageGroup: "4-12 Years",
            inStock: true,
            stockCount: 30,
            image: "https://images.unsplash.com/photo-1611591447465-ea4b3d59e6e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            badge: "DESIGNER",
            category: "kids-shoes",
            type: "Loafers",
            tags: ["designer", "loafers", "smart", "casual"]
        },
        {
            id: 8,
            title: "Kids Boots for Winter",
            price: 54.99,
            oldPrice: 74.99,
            rating: 4.8,
            reviews: 67,
            description: "Warm winter boots with soft lining and waterproof finish.",
            color: "Navy Blue",
            sizes: ['3-5 Years', '6-8 Years', '9-11 Years'],
            ageGroup: "3-11 Years",
            inStock: true,
            stockCount: 28,
            image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            badge: "WINTER",
            category: "kids-shoes",
            type: "Boots",
            tags: ["winter", "boots", "warm", "waterproof"]
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

    const selectSize = (productId, size) => {
        setSelectedSizes(prev => ({
            ...prev,
            [productId]: size
        }));
    };

    const getStockStatus = (count) => {
        if (count > 20) return { text: 'In Stock', class: 'in-stock' };
        if (count > 10) return { text: 'Low Stock', class: 'low-stock' };
        if (count > 0) return { text: 'Few Left', class: 'few-left' };
        return { text: 'Out of Stock', class: 'out-of-stock' };
    };

    const handleFilter = (filterType) => {
        setActiveFilter(filterType);
    };

    const filteredShoes = activeFilter === 'all' 
        ? kidsShoes 
        : kidsShoes.filter(shoe => 
            shoe.tags.includes(activeFilter) || 
            shoe.type.toLowerCase().includes(activeFilter.toLowerCase())
        );

    return (
        <div className="kids-shoes-page">
            <div className="container">
                <div className="breadcrumb">
                    <Link to="/">Home</Link>
                    <span>/</span>
                    <Link to="/kids-wear">Kids Wear</Link>
                    <span>/</span>
                    <span>Kids Shoes</span>
                </div>

                <div className="page-header">
                    <h1>Kids Shoes Collection</h1>
                    <p>Comfortable and stylish footwear for your little ones - Formal, Casual, Sports & More</p>
                    <div className="collection-highlights">
                        <span className="highlight">Age 2-12 Years</span>
                        <span className="highlight">Premium Materials</span>
                        <span className="highlight">Perfect Fit</span>
                        <span className="highlight">Easy to Wear</span>
                    </div>
                </div>

                <div className="stats-bar">
                    <div className="stat">
                        <span className="stat-number">{kidsShoes.length}</span>
                        <span className="stat-label">Shoes Available</span>
                    </div>
                    <div className="stat">
                        <span className="stat-number">4.7</span>
                        <span className="stat-label">Avg. Rating</span>
                    </div>
                    <div className="stat">
                        <span className="stat-number">4</span>
                        <span className="stat-label">Sizes Each</span>
                    </div>
                    <div className="stat">
                        <span className="stat-number">Free</span>
                        <span className="stat-label">Exchange</span>
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
                                All Shoes
                            </button>
                            <button 
                                className={`filter-btn ${activeFilter === 'formal' ? 'active' : ''}`}
                                onClick={() => handleFilter('formal')}
                            >
                                Formal
                            </button>
                            <button 
                                className={`filter-btn ${activeFilter === 'traditional' ? 'active' : ''}`}
                                onClick={() => handleFilter('traditional')}
                            >
                                Traditional
                            </button>
                            <button 
                                className={`filter-btn ${activeFilter === 'casual' ? 'active' : ''}`}
                                onClick={() => handleFilter('casual')}
                            >
                                Casual
                            </button>
                            <button 
                                className={`filter-btn ${activeFilter === 'sports' ? 'active' : ''}`}
                                onClick={() => handleFilter('sports')}
                            >
                                Sports
                            </button>
                            <button 
                                className={`filter-btn ${activeFilter === 'party' ? 'active' : ''}`}
                                onClick={() => handleFilter('party')}
                            >
                                Party
                            </button>
                        </div>
                    </div>
                    <div className="sort-section">
                        <select className="sort-select">
                            <option>Sort by: Recommended</option>
                            <option>Price: Low to High</option>
                            <option>Price: High to Low</option>
                            <option>Age: Low to High</option>
                            <option>Rating: High to Low</option>
                        </select>
                    </div>
                </div>

                <div className="products-grid">
                    {filteredShoes.map(product => {
                        const stockStatus = getStockStatus(product.stockCount);
                        const selectedSize = selectedSizes[product.id];
                        
                        return (
                            <div className="product-card" key={product.id}>
                                <div className="product-image">
                                    <img src={product.image} alt={product.title} />
                                    <div className="product-badge shoes-badge">{product.badge}</div>
                                    <button 
                                        className={`wishlist-icon ${wishlisted[product.id] ? 'active' : ''}`}
                                        onClick={() => toggleWishlist(product.id)}
                                    >
                                        <FaHeart />
                                    </button>
                                    <div className="stock-badge">
                                        <span className={stockStatus.class}>{stockStatus.text}</span>
                                    </div>
                                    <div className="age-badge">
                                        {product.ageGroup}
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
                                            <span className="info-label">Age Group:</span>
                                            <span className="info-value age-value">{product.ageGroup}</span>
                                        </div>
                                        <div className="info-row">
                                            <span className="info-label">Type:</span>
                                            <span className="info-value type-value">{product.type}</span>
                                        </div>
                                        <div className="info-row">
                                            <span className="info-label">Stock:</span>
                                            <span className={`info-value ${stockStatus.class}`}>
                                                {product.stockCount} pairs
                                            </span>
                                        </div>
                                    </div>

                                    <div className="size-selection">
                                        <h4>Select Size:</h4>
                                        <div className="size-options">
                                            {product.sizes.map(size => (
                                                <button
                                                    key={size}
                                                    className={`size-btn ${selectedSize === size ? 'selected' : ''}`}
                                                    onClick={() => selectSize(product.id, size)}
                                                >
                                                    {size}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="quick-actions">
                                        <button className="add-to-cart-btn">
                                            <FaShoppingBag /> Add to Cart
                                        </button>
                                        <Link to={`/product/kids-shoes/${product.id}`} className="view-details-btn">
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
                                            <span>Easy Returns</span>
                                        </div>
                                        <div className="policy">
                                            <span className="policy-icon">👟</span>
                                            <span>Size Exchange</span>
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
                    <button className="page-btn">5</button>
                    <button className="page-btn next-btn">Next →</button>
                </div>

                <div className="collection-info">
                    <h3>Perfect Shoes for Growing Feet</h3>
                    <div className="collection-details">
                        <div className="collection-text">
                            <p>
                                Our kids shoes are designed with growing feet in mind. We focus on comfort, 
                                support, and durability to ensure your child's feet develop properly while 
                                staying stylish. Each pair is crafted with child-friendly materials and 
                                ergonomic design.
                            </p>
                            <div className="collection-features">
                                <div className="collection-feature">
                                    <span className="feature-icon">👣</span>
                                    <span>Foot Development Support</span>
                                </div>
                                <div className="collection-feature">
                                    <span className="feature-icon">👟</span>
                                    <span>Easy Velcro Fasteners</span>
                                </div>
                                <div className="collection-feature">
                                    <span className="feature-icon">🛡️</span>
                                    <span>Durable Materials</span>
                                </div>
                                <div className="collection-feature">
                                    <span className="feature-icon">🎨</span>
                                    <span>Kid-Friendly Designs</span>
                                </div>
                            </div>
                        </div>
                        <div className="collection-image">
                            <img src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                 alt="Kids Shoes Collection" />
                        </div>
                    </div>
                </div>

                <div className="additional-info">
                    <h3>Why Choose Our Kids Shoes?</h3>
                    <div className="features-grid">
                        <div className="feature">
                            <FaShieldAlt className="feature-icon" />
                            <h4>Foot-Friendly Design</h4>
                            <p>Ergonomic design supporting proper foot development</p>
                        </div>
                        <div className="feature">
                            <FaTruck className="feature-icon" />
                            <h4>Size Exchange</h4>
                            <p>Free size exchange within 30 days</p>
                        </div>
                        <div className="feature">
                            <FaUndo className="feature-icon" />
                            <h4>Easy Returns</h4>
                            <p>30-day return policy, no questions asked</p>
                        </div>
                        <div className="feature">
                            <span className="feature-icon">👶</span>
                            <h4>Age-Appropriate</h4>
                            <p>Shoes designed for different age groups</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KidsShoesPage;