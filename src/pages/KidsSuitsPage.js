import React, { useState } from 'react';
import './KidsSuitsPage.css';
import { FaStar, FaStarHalfAlt, FaRegStar, FaHeart, FaShoppingBag, FaTruck, FaUndo, FaShieldAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const KidsSuitsPage = () => {
    console.log("👕 KIDS SUITS PAGE LOADED - Component: KidsSuitsPage");
    
    const [wishlisted, setWishlisted] = useState({});
    const [activeFilter, setActiveFilter] = useState('all');
    const [selectedSizes, setSelectedSizes] = useState({});

    const kidsSuits = [
        {
            id: 1,
            title: "Kids Premium Wedding Sherwani",
            price: 89.99,
            oldPrice: 119.99,
            rating: 4.8,
            reviews: 142,
            description: "Elegant wedding sherwani for boys with intricate embroidery and premium fabric.",
            color: "Gold & Red",
            sizes: ['2-3 Years', '4-5 Years', '6-7 Years', '8-10 Years'],
            ageGroup: "2-10 Years",
            inStock: true,
            stockCount: 32,
            image: "https://images.unsplash.com/photo-1599423423927-a2c777b40f35?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            badge: "PREMIUM",
            category: "kids-suits",
            type: "Wedding Sherwani",
            tags: ["wedding", "premium", "sherwani", "embroidered"]
        },
        {
            id: 2,
            title: "Kids Formal Suit Set",
            price: 59.99,
            oldPrice: 79.99,
            rating: 4.6,
            reviews: 187,
            description: "Complete formal suit set with blazer and trousers, perfect for school events.",
            color: "Navy Blue",
            sizes: ['3-4 Years', '5-6 Years', '7-8 Years', '9-12 Years'],
            ageGroup: "3-12 Years",
            inStock: true,
            stockCount: 45,
            image: "https://images.unsplash.com/photo-1539533113205-f5ae7ad028e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            badge: "FORMAL",
            category: "kids-suits",
            type: "Formal Suit",
            tags: ["formal", "school", "blazer", "trousers"]
        },
        {
            id: 3,
            title: "Kids Casual Summer Suit",
            price: 49.99,
            oldPrice: 69.99,
            rating: 4.5,
            reviews: 96,
            description: "Lightweight linen suit for summer occasions, comfortable and stylish.",
            color: "Light Grey",
            sizes: ['2-4 Years', '5-7 Years', '8-10 Years'],
            ageGroup: "2-10 Years",
            inStock: true,
            stockCount: 38,
            image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            badge: "CASUAL",
            category: "kids-suits",
            type: "Casual Suit",
            tags: ["casual", "summer", "linen", "lightweight"]
        },
        {
            id: 4,
            title: "Kids Velvet Party Blazer Set",
            price: 69.99,
            oldPrice: 89.99,
            rating: 4.7,
            reviews: 78,
            description: "Velvet blazer set with silk lining, perfect for parties and special occasions.",
            color: "Burgundy",
            sizes: ['4-5 Years', '6-7 Years', '8-9 Years', '10-12 Years'],
            ageGroup: "4-12 Years",
            inStock: true,
            stockCount: 25,
            image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            badge: "PARTY",
            category: "kids-suits",
            type: "Party Blazer",
            tags: ["party", "velvet", "blazer", "festive"]
        },
        {
            id: 5,
            title: "Kids Indo-Western Suit",
            price: 74.99,
            oldPrice: 99.99,
            rating: 4.4,
            reviews: 112,
            description: "Contemporary Indo-western fusion suit with modern cuts and traditional elements.",
            color: "Royal Blue & Gold",
            sizes: ['3-5 Years', '6-8 Years', '9-11 Years'],
            ageGroup: "3-11 Years",
            inStock: true,
            stockCount: 28,
            image: "https://images.unsplash.com/photo-1599423423927-a2c777b40f35?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            badge: "FUSION",
            category: "kids-suits",
            type: "Indo-Western",
            tags: ["indowestern", "fusion", "modern", "traditional"]
        },
        {
            id: 6,
            title: "Kids Birthday Tuxedo Set",
            price: 79.99,
            oldPrice: 109.99,
            rating: 4.9,
            reviews: 65,
            description: "Elegant tuxedo set for birthday celebrations with bow tie and accessories.",
            color: "Black & White",
            sizes: ['2-3 Years', '4-5 Years', '6-7 Years', '8-10 Years'],
            ageGroup: "2-10 Years",
            inStock: true,
            stockCount: 20,
            image: "https://images.unsplash.com/photo-1520975916090-3105956dac38?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            badge: "BIRTHDAY",
            category: "kids-suits",
            type: "Tuxedo",
            tags: ["birthday", "tuxedo", "celebration", "formal"]
        },
        {
            id: 7,
            title: "Kids Cotton Kurta Suit",
            price: 44.99,
            oldPrice: 59.99,
            rating: 4.3,
            reviews: 134,
            description: "Traditional cotton kurta pajama set for daily wear and small gatherings.",
            color: "White & Blue",
            sizes: ['3-4 Years', '5-6 Years', '7-8 Years', '9-12 Years'],
            ageGroup: "3-12 Years",
            inStock: true,
            stockCount: 52,
            image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            badge: "TRADITIONAL",
            category: "kids-suits",
            type: "Kurta Set",
            tags: ["traditional", "cotton", "kurta", "daily"]
        },
        {
            id: 8,
            title: "Kids Designer Three-Piece Suit",
            price: 94.99,
            oldPrice: 129.99,
            rating: 4.8,
            reviews: 48,
            description: "Designer three-piece suit with waistcoat, perfect for photo shoots and weddings.",
            color: "Emerald Green",
            sizes: ['4-6 Years', '7-9 Years', '10-12 Years'],
            ageGroup: "4-12 Years",
            inStock: true,
            stockCount: 18,
            image: "https://images.unsplash.com/photo-1539533113205-f5ae7ad028e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            badge: "DESIGNER",
            category: "kids-suits",
            type: "Three-Piece",
            tags: ["designer", "waistcoat", "premium", "photoshoot"]
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
        if (count > 15) return { text: 'In Stock', class: 'in-stock' };
        if (count > 5) return { text: 'Low Stock', class: 'low-stock' };
        if (count > 0) return { text: 'Few Left', class: 'few-left' };
        return { text: 'Out of Stock', class: 'out-of-stock' };
    };

    const handleFilter = (filterType) => {
        setActiveFilter(filterType);
    };

    const filteredSuits = activeFilter === 'all' 
        ? kidsSuits 
        : kidsSuits.filter(suit => 
            suit.tags.includes(activeFilter) || 
            suit.type.toLowerCase().includes(activeFilter.toLowerCase())
        );

    return (
        <div className="kids-suits-page">
            <div className="container">
                <div className="breadcrumb">
                    <Link to="/">Home</Link>
                    <span>/</span>
                    <Link to="/kids-wear">Kids Wear</Link>
                    <span>/</span>
                    <span>Kids Suits</span>
                </div>

                <div className="page-header">
                    <h1>Kids Suits Collection</h1>
                    <p>Premium suits for boys - Wedding, Formal, Party & Casual Wear</p>
                    <div className="collection-highlights">
                        <span className="highlight">Age 2-12 Years</span>
                        <span className="highlight">Premium Fabrics</span>
                        <span className="highlight">Easy Wash & Care</span>
                        <span className="highlight">Perfect Fit Guarantee</span>
                    </div>
                </div>

                <div className="stats-bar">
                    <div className="stat">
                        <span className="stat-number">{kidsSuits.length}</span>
                        <span className="stat-label">Suits Available</span>
                    </div>
                    <div className="stat">
                        <span className="stat-number">4.6</span>
                        <span className="stat-label">Avg. Rating</span>
                    </div>
                    <div className="stat">
                        <span className="stat-number">4</span>
                        <span className="stat-label">Sizes Each</span>
                    </div>
                    <div className="stat">
                        <span className="stat-number">Free</span>
                        <span className="stat-label">Alteration</span>
                    </div>
                </div>

                <div className="filter-bar">
                    <div className="filter-section">
                        <h4>Filter by Occasion:</h4>
                        <div className="filter-options">
                            <button 
                                className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
                                onClick={() => handleFilter('all')}
                            >
                                All Suits
                            </button>
                            <button 
                                className={`filter-btn ${activeFilter === 'wedding' ? 'active' : ''}`}
                                onClick={() => handleFilter('wedding')}
                            >
                                Wedding
                            </button>
                            <button 
                                className={`filter-btn ${activeFilter === 'formal' ? 'active' : ''}`}
                                onClick={() => handleFilter('formal')}
                            >
                                Formal
                            </button>
                            <button 
                                className={`filter-btn ${activeFilter === 'party' ? 'active' : ''}`}
                                onClick={() => handleFilter('party')}
                            >
                                Party
                            </button>
                            <button 
                                className={`filter-btn ${activeFilter === 'casual' ? 'active' : ''}`}
                                onClick={() => handleFilter('casual')}
                            >
                                Casual
                            </button>
                            <button 
                                className={`filter-btn ${activeFilter === 'birthday' ? 'active' : ''}`}
                                onClick={() => handleFilter('birthday')}
                            >
                                Birthday
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
                    {filteredSuits.map(product => {
                        const stockStatus = getStockStatus(product.stockCount);
                        const selectedSize = selectedSizes[product.id];
                        
                        return (
                            <div className="product-card" key={product.id}>
                                <div className="product-image">
                                    <img src={product.image} alt={product.title} />
                                    <div className="product-badge kids-badge">{product.badge}</div>
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
                                                {product.stockCount} units
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
                                        <Link to={`/product/kids-suits/${product.id}`} className="view-details-btn">
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
                                            <span className="policy-icon">👕</span>
                                            <span>Free Alteration</span>
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
                    <button className="page-btn">6</button>
                    <button className="page-btn next-btn">Next →</button>
                </div>

                <div className="collection-info">
                    <h3>Perfect Suits for Your Little Prince</h3>
                    <div className="collection-details">
                        <div className="collection-text">
                            <p>
                                Our kids suits collection is designed with comfort, style, and durability in mind. 
                                From wedding celebrations to school events, we have the perfect suit for every occasion. 
                                Each piece is crafted with child-friendly fabrics and easy-care materials.
                            </p>
                            <div className="collection-features">
                                <div className="collection-feature">
                                    <span className="feature-icon">👶</span>
                                    <span>Age-Appropriate Designs</span>
                                </div>
                                <div className="collection-feature">
                                    <span className="feature-icon">🧼</span>
                                    <span>Easy Wash & Care</span>
                                </div>
                                <div className="collection-feature">
                                    <span className="feature-icon">📏</span>
                                    <span>Perfect Fit Guarantee</span>
                                </div>
                                <div className="collection-feature">
                                    <span className="feature-icon">🎁</span>
                                    <span>Free Accessories Included</span>
                                </div>
                            </div>
                        </div>
                        <div className="collection-image">
                            <img src="https://images.unsplash.com/photo-1599423423927-a2c777b40f35?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                 alt="Kids Suits Collection" />
                        </div>
                    </div>
                </div>

                <div className="additional-info">
                    <h3>Why Our Kids Suits are Special</h3>
                    <div className="features-grid">
                        <div className="feature">
                            <FaShieldAlt className="feature-icon" />
                            <h4>Child-Safe Materials</h4>
                            <p>Hypoallergenic and skin-friendly fabrics</p>
                        </div>
                        <div className="feature">
                            <FaTruck className="feature-icon" />
                            <h4>Free Alteration</h4>
                            <p>Free minor alterations for perfect fit</p>
                        </div>
                        <div className="feature">
                            <FaUndo className="feature-icon" />
                            <h4>Easy Returns</h4>
                            <p>30-day return policy, no questions asked</p>
                        </div>
                        <div className="feature">
                            <span className="feature-icon">🎨</span>
                            <h4>Wide Variety</h4>
                            <p>From traditional to modern designs</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KidsSuitsPage;