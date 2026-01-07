// src/pages/BlazersPage.js
import React, { useState } from 'react';
import './BlazersPage.css';
import { FaStar, FaStarHalfAlt, FaRegStar, FaHeart, FaShoppingBag, FaTruck, FaUndo, FaShieldAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const BlazersPage = () => {
    console.log("🔵 BLAZERS PAGE LOADED - Component: BlazersPage");
    
    const [wishlisted, setWishlisted] = useState({});
    const [activeFilter, setActiveFilter] = useState('all');

    const blazers = [
        {
            id: 1,
            title: "Classic Navy Blazer",
            price: 129.99,
            oldPrice: 169.99,
            rating: 4.8,
            reviews: 178,
            description: "Timeless navy blue blazer perfect for formal and semi-formal occasions.",
            color: "Navy Blue",
            sizes: ['S', 'M', 'L', 'XL'],
            inStock: true,
            stockCount: 42,
            image: "https://m.media-amazon.com/images/I/718rvRYpprL._AC_SL1500_.jpg",
            badge: "CLASSIC",
            category: "blazers",
            type: "Single Breasted",
            tags: ["formal", "classic", "navy"]
        },
        {
            id: 2,
            title: "Wool Blend Business Blazer",
            price: 14956.99,
            oldPrice: 19569.99,
            rating: 4.7,
            reviews: 134,
            description: "Premium wool blend blazer for professional business settings.",
            color: "Charcoal Gray",
            sizes: ['M', 'L', 'XL', 'XXL'],
            inStock: true,
            stockCount: 28,
            image: "https://ae01.alicdn.com/kf/HTB1hXK_lyAKL1JjSZFoq6ygCFXaf/Autumn-Winter-Single-Breasted-Woolen-Coats-Mens-Wool-Jackets-Turn-down-Collar-Wool-Blends-Overcoat-long.jpg",
            badge: "BUSINESS",
            category: "blazers",
            type: "Wool Blazer",
            tags: ["wool", "business", "professional"]
        },
        {
            id: 3,
            title: "Double Breasted Blazer",
            price: 15900.99,
            oldPrice: 219.99,
            rating: 4.9,
            reviews: 89,
            description: "Elegant double breasted blazer with peak lapels for a sophisticated look.",
            color: "Black",
            sizes: ['S', 'M', 'L'],
            inStock: true,
            stockCount: 15,
            image: "https://italianvega.in/cdn/shop/files/ScreenShot2022-09-29at4.31.37AM.png?v=1733687532&width=1445",
            badge: "PREMIUM",
            category: "blazers",
            type: "Double Breasted",
            tags: ["double-breasted", "premium", "formal"]
        },
        {
            id: 4,
            title: "Linen Summer Blazer",
            price: 99.99,
            oldPrice: 139.99,
            rating: 4.6,
            reviews: 112,
            description: "Lightweight linen blazer perfect for summer weddings and parties.",
            color: "Beige",
            sizes: ['S', 'M', 'L', 'XL'],
            inStock: true,
            stockCount: 35,
            image: "https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/29886313/2024/6/3/b33b4e49-0a22-4712-a779-29cb4f754ffd1717418409845Blazers1.jpg",
            badge: "SUMMER",
            category: "blazers",
            type: "Linen Blazer",
            tags: ["linen", "summer", "casual"]
        },
        {
            id: 5,
            title: "Velvet Evening Blazer",
            price: 179.99,
            oldPrice: 239.99,
            rating: 4.8,
            reviews: 67,
            description: "Luxurious velvet blazer for evening parties and special events.",
            color: "Burgundy",
            sizes: ['M', 'L', 'XL'],
            inStock: true,
            stockCount: 18,
            image: "https://i.pinimg.com/736x/82/b6/a1/82b6a1025427d1055c7c482561633541.jpg",
            badge: "EVENING",
            category: "blazers",
            type: "Velvet Blazer",
            tags: ["velvet", "evening", "luxury"]
        },
        {
            id: 6,
            title: "Cotton Casual Blazer",
            price: 89.99,
            oldPrice: 119.99,
            rating: 4.5,
            reviews: 96,
            description: "Comfortable cotton blazer for smart casual office wear.",
            color: "Light Gray",
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
            inStock: true,
            stockCount: 52,
            image: "https://showoffff.in/cdn/shop/files/EX-3019_NavyBlue_1_4225c2ff-8386-497f-8c1a-4b1fd86090c5.jpg?v=1748611323",
            badge: "CASUAL",
            category: "blazers",
            type: "Casual Blazer",
            tags: ["cotton", "casual", "office"]
        },
        {
            id: 7,
            title: "Designer Patterned Blazer",
            price: 199.99,
            oldPrice: 269.99,
            rating: 4.7,
            reviews: 54,
            description: "Contemporary designer blazer with unique patterns and modern cut.",
            color: "Navy & White",
            sizes: ['S', 'M', 'L'],
            inStock: true,
            stockCount: 12,
            image: "https://vastramay.com/cdn/shop/products/VASMCT006NB_2_1.jpg?v=1753875000",
            badge: "DESIGNER",
            category: "blazers",
            type: "Designer Blazer",
            tags: ["designer", "patterned", "modern"]
        },
        {
            id: 8,
            title: "Three Piece Blazer Set",
            price: 249.99,
            oldPrice: 329.99,
            rating: 4.9,
            reviews: 78,
            description: "Complete three-piece blazer set with vest for formal occasions.",
            color: "Navy Blue",
            sizes: ['M', 'L', 'XL'],
            inStock: true,
            stockCount: 20,
            image: "https://assets.myntassets.com/h_1440,q_75,w_1080/v1/assets/images/27025236/2024/1/20/7afba5bb-59f1-49f6-907f-61d4338767f81705762523478VanHeusen3-PcsSingle-BreastedSlimFitCasualSuit1.jpg",
            badge: "FORMAL",
            category: "blazers",
            type: "Three Piece Set",
            tags: ["three-piece", "formal", "complete-set"]
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

    const filteredBlazers = activeFilter === 'all' 
        ? blazers 
        : blazers.filter(blazer => 
            blazer.tags.includes(activeFilter) || 
            blazer.type.toLowerCase().includes(activeFilter.toLowerCase())
        );

    return (
        <div className="blazers-page">
            <div className="container">
                <div className="breadcrumb">
                    <Link to="/">Home</Link>
                    <span>/</span>
                    <Link to="/mens-wear">Men's Wear</Link>
                    <span>/</span>
                    <span>Blazers</span>
                </div>

                <div className="page-header">
                    <h1>Premium Blazers Collection</h1>
                    <p>Elegant blazers for every occasion - Formal, Casual, Business & Evening Wear</p>
                    <div className="collection-highlights">
                        <span className="highlight">Premium Fabrics</span>
                        <span className="highlight">Perfect Fit</span>
                        <span className="highlight">Modern Tailoring</span>
                    </div>
                </div>

                <div className="stats-bar">
                    <div className="stat">
                        <span className="stat-number">{blazers.length}</span>
                        <span className="stat-label">Blazers Available</span>
                    </div>
                    <div className="stat">
                        <span className="stat-number">4.7</span>
                        <span className="stat-label">Avg. Rating</span>
                    </div>
                    <div className="stat">
                        <span className="stat-number">S-XXL</span>
                        <span className="stat-label">Sizes Available</span>
                    </div>
                    <div className="stat">
                        <span className="stat-number">Free</span>
                        <span className="stat-label">Tailoring</span>
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
                                All Blazers
                            </button>
                            <button 
                                className={`filter-btn ${activeFilter === 'formal' ? 'active' : ''}`}
                                onClick={() => handleFilter('formal')}
                            >
                                Formal
                            </button>
                            <button 
                                className={`filter-btn ${activeFilter === 'casual' ? 'active' : ''}`}
                                onClick={() => handleFilter('casual')}
                            >
                                Casual
                            </button>
                            <button 
                                className={`filter-btn ${activeFilter === 'wool' ? 'active' : ''}`}
                                onClick={() => handleFilter('wool')}
                            >
                                Wool
                            </button>
                            <button 
                                className={`filter-btn ${activeFilter === 'linen' ? 'active' : ''}`}
                                onClick={() => handleFilter('linen')}
                            >
                                Linen
                            </button>
                            <button 
                                className={`filter-btn ${activeFilter === 'designer' ? 'active' : ''}`}
                                onClick={() => handleFilter('designer')}
                            >
                                Designer
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
                    {filteredBlazers.map(product => {
                        const stockStatus = getStockStatus(product.stockCount);
                        
                        return (
                            <div className="product-card" key={product.id}>
                                <div className="product-image">
                                    <img src={product.image} alt={product.title} />
                                    <div className="product-badge blazer-badge">{product.badge}</div>
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
                                        <Link to={`/product/blazers/${product.id}`} className="view-details-btn">
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

                <div className="collection-info">
                    <h3>The Art of Tailored Blazers</h3>
                    <div className="collection-details">
                        <div className="collection-text">
                            <p>
                                Our blazer collection features meticulously crafted garments 
                                using premium fabrics and modern tailoring techniques. Each blazer 
                                is designed to provide the perfect fit and sophisticated style for 
                                every occasion, from business meetings to evening events.
                            </p>
                            <div className="collection-features">
                                <div className="collection-feature">
                                    <span className="feature-icon">👔</span>
                                    <span>Premium Fabrics</span>
                                </div>
                                <div className="collection-feature">
                                    <span className="feature-icon">✂️</span>
                                    <span>Modern Tailoring</span>
                                </div>
                                <div className="collection-feature">
                                    <span className="feature-icon">🎯</span>
                                    <span>Perfect Fit Guarantee</span>
                                </div>
                            </div>
                        </div>
                        <div className="collection-image">
                            <img src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                 alt="Tailored Blazers" />
                        </div>
                    </div>
                </div>

                <div className="additional-info">
                    <h3>Why Choose Our Blazers?</h3>
                    <div className="features-grid">
                        <div className="feature">
                            <FaShieldAlt className="feature-icon" />
                            <h4>Premium Quality</h4>
                            <p>Made with finest fabrics and expert craftsmanship</p>
                        </div>
                        <div className="feature">
                            <FaTruck className="feature-icon" />
                            <h4>Free Tailoring</h4>
                            <p>Free alteration services for perfect fit</p>
                        </div>
                        <div className="feature">
                            <FaUndo className="feature-icon" />
                            <h4>Easy Returns</h4>
                            <p>30-day return policy with free returns</p>
                        </div>
                        <div className="feature">
                            <FaShieldAlt className="feature-icon" />
                            <h4>Modern Designs</h4>
                            <p>Contemporary designs with classic appeal</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlazersPage;