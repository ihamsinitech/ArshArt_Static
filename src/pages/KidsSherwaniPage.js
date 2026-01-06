// src/pages/KidsSherwaniPage.js
import React, { useState } from 'react';
import './KidsSherwaniPage.css';
import { FaStar, FaStarHalfAlt, FaRegStar, FaHeart, FaShoppingBag, FaTruck, FaUndo, FaShieldAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const KidsSherwaniPage = () => {
    console.log("👑 KIDS SHERWANI PAGE LOADED");
    
    const [wishlisted, setWishlisted] = useState({});
    const [activeFilter, setActiveFilter] = useState('all');
    const [selectedSizes, setSelectedSizes] = useState({});

    const kidsSherwanis = [
        {
            id: 1,
            title: "Kids Royal Wedding Sherwani",
            price: 89.99,
            oldPrice: 119.99,
            rating: 4.9,
            reviews: 142,
            description: "Exquisite royal wedding sherwani with intricate embroidery and zari work.",
            color: "Gold & Red",
            sizes: ['2-3 Years', '4-5 Years', '6-7 Years', '8-10 Years'],
            ageGroup: "2-10 Years",
            inStock: true,
            stockCount: 28,
            image: "https://images.unsplash.com/photo-1599423423927-a2c777b40f35?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            badge: "ROYAL",
            category: "kids-sherwanis",
            type: "Wedding Sherwani",
            tags: ["wedding", "royal", "embroidered", "premium"]
        },
        {
            id: 2,
            title: "Kids Silk Sherwani Set",
            price: 74.99,
            oldPrice: 99.99,
            rating: 4.8,
            reviews: 96,
            description: "Pure silk sherwani with traditional embroidery for festivals and ceremonies.",
            color: "Maroon & Gold",
            sizes: ['3-4 Years', '5-6 Years', '7-8 Years', '9-12 Years'],
            ageGroup: "3-12 Years",
            inStock: true,
            stockCount: 35,
            image: "https://images.unsplash.com/photo-1539533113205-f5ae7ad028e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            badge: "SILK",
            category: "kids-sherwanis",
            type: "Silk Sherwani",
            tags: ["silk", "traditional", "festival", "ceremony"]
        },
        {
            id: 3,
            title: "Kids Designer Sherwani",
            price: 69.99,
            oldPrice: 89.99,
            rating: 4.7,
            reviews: 78,
            description: "Contemporary designer sherwani with modern cuts and traditional elements.",
            color: "Ivory White",
            sizes: ['4-5 Years', '6-7 Years', '8-9 Years', '10-12 Years'],
            ageGroup: "4-12 Years",
            inStock: true,
            stockCount: 22,
            image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            badge: "DESIGNER",
            category: "kids-sherwanis",
            type: "Designer Sherwani",
            tags: ["designer", "modern", "contemporary", "stylish"]
        },
        {
            id: 4,
            title: "Kids Embroidered Sherwani",
            price: 64.99,
            oldPrice: 84.99,
            rating: 4.6,
            reviews: 112,
            description: "Hand-embroidered sherwani with detailed thread work for special occasions.",
            color: "Navy Blue",
            sizes: ['2-4 Years', '5-7 Years', '8-10 Years'],
            ageGroup: "2-10 Years",
            inStock: true,
            stockCount: 42,
            image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            badge: "EMBROIDERED",
            category: "kids-sherwanis",
            type: "Embroidered Sherwani",
            tags: ["embroidered", "handmade", "detailed", "special"]
        },
        {
            id: 5,
            title: "Kids Festive Sherwani",
            price: 59.99,
            oldPrice: 79.99,
            rating: 4.5,
            reviews: 134,
            description: "Vibrant festive sherwani perfect for Diwali, Eid, and other celebrations.",
            color: "Green & Gold",
            sizes: ['3-5 Years', '6-8 Years', '9-11 Years'],
            ageGroup: "3-11 Years",
            inStock: true,
            stockCount: 38,
            image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            badge: "FESTIVE",
            category: "kids-sherwanis",
            type: "Festive Sherwani",
            tags: ["festive", "vibrant", "celebration", "colorful"]
        },
        {
            id: 6,
            title: "Kids Velvet Sherwani",
            price: 79.99,
            oldPrice: 109.99,
            rating: 4.8,
            reviews: 67,
            description: "Luxurious velvet sherwani with golden embroidery for grand occasions.",
            color: "Burgundy",
            sizes: ['4-6 Years', '7-9 Years', '10-12 Years'],
            ageGroup: "4-12 Years",
            inStock: true,
            stockCount: 20,
            image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            badge: "VELVET",
            category: "kids-sherwanis",
            type: "Velvet Sherwani",
            tags: ["velvet", "luxurious", "grand", "rich"]
        },
        {
            id: 7,
            title: "Kids Casual Sherwani",
            price: 44.99,
            oldPrice: 59.99,
            rating: 4.4,
            reviews: 89,
            description: "Lightweight casual sherwani for daily wear and small gatherings.",
            color: "Sky Blue",
            sizes: ['2-3 Years', '4-5 Years', '6-7 Years'],
            ageGroup: "2-7 Years",
            inStock: true,
            stockCount: 52,
            image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            badge: "CASUAL",
            category: "kids-sherwanis",
            type: "Casual Sherwani",
            tags: ["casual", "lightweight", "daily", "comfortable"]
        },
        {
            id: 8,
            title: "Kids Premium Sherwani Set",
            price: 94.99,
            oldPrice: 129.99,
            rating: 4.9,
            reviews: 48,
            description: "Complete premium sherwani set with dupatta and accessories included.",
            color: "Royal Blue & Silver",
            sizes: ['3-5 Years', '6-8 Years', '9-11 Years'],
            ageGroup: "3-11 Years",
            inStock: true,
            stockCount: 18,
            image: "https://images.unsplash.com/photo-1544441893-675973e31985?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            badge: "PREMIUM",
            category: "kids-sherwanis",
            type: "Complete Set",
            tags: ["premium", "complete", "accessories", "luxury"]
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

    const filteredSherwanis = activeFilter === 'all' 
        ? kidsSherwanis 
        : kidsSherwanis.filter(sherwani => 
            sherwani.tags.includes(activeFilter) || 
            sherwani.type.toLowerCase().includes(activeFilter.toLowerCase())
        );

    return (
        <div className="kids-sherwani-page">
            <div className="container">
                <div className="breadcrumb">
                    <Link to="/">Home</Link>
                    <span>/</span>
                    <Link to="/kids-wear">Kids Wear</Link>
                    <span>/</span>
                    <span>Kids Sherwanis</span>
                </div>

                <div className="page-header">
                    <h1>Kids Sherwanis Collection</h1>
                    <p>Royal, Traditional & Designer Sherwanis for your little prince - Perfect for Weddings & Festivals</p>
                    <div className="collection-highlights">
                        <span className="highlight">Age 2-12 Years</span>
                        <span className="highlight">Royal Fabrics</span>
                        <span className="highlight">Hand Embroidery</span>
                        <span className="highlight">Complete Sets</span>
                    </div>
                </div>

                <div className="stats-bar">
                    <div className="stat">
                        <span className="stat-number">{kidsSherwanis.length}</span>
                        <span className="stat-label">Sherwanis Available</span>
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
                        <span className="stat-label">Dupatta</span>
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
                                All Sherwanis
                            </button>
                            <button 
                                className={`filter-btn ${activeFilter === 'wedding' ? 'active' : ''}`}
                                onClick={() => handleFilter('wedding')}
                            >
                                Wedding
                            </button>
                            <button 
                                className={`filter-btn ${activeFilter === 'silk' ? 'active' : ''}`}
                                onClick={() => handleFilter('silk')}
                            >
                                Silk
                            </button>
                            <button 
                                className={`filter-btn ${activeFilter === 'velvet' ? 'active' : ''}`}
                                onClick={() => handleFilter('velvet')}
                            >
                                Velvet
                            </button>
                            <button 
                                className={`filter-btn ${activeFilter === 'festive' ? 'active' : ''}`}
                                onClick={() => handleFilter('festive')}
                            >
                                Festive
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
                            <option>Sort by: Recommended</option>
                            <option>Price: Low to High</option>
                            <option>Price: High to Low</option>
                            <option>Age: Low to High</option>
                            <option>Rating: High to Low</option>
                        </select>
                    </div>
                </div>

                <div className="products-grid">
                    {filteredSherwanis.map(product => {
                        const stockStatus = getStockStatus(product.stockCount);
                        const selectedSize = selectedSizes[product.id];
                        
                        return (
                            <div className="product-card" key={product.id}>
                                <div className="product-image">
                                    <img src={product.image} alt={product.title} />
                                    <div className="product-badge sherwani-badge">{product.badge}</div>
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
                                                {product.stockCount} pieces
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
                                        <Link to={`/product/kids-sherwanis/${product.id}`} className="view-details-btn">
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
                                            <span className="policy-icon">👑</span>
                                            <span>Free Dupatta</span>
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
                    <h3>Royal Sherwanis for Your Little Prince</h3>
                    <div className="collection-details">
                        <div className="collection-text">
                            <p>
                                Our kids sherwani collection brings royal elegance to your little ones. 
                                Each piece is crafted with traditional techniques, premium fabrics, and 
                                intricate embroidery that makes your child stand out at weddings, festivals, 
                                and special occasions. Comfort meets tradition in every design.
                            </p>
                            <div className="collection-features">
                                <div className="collection-feature">
                                    <span className="feature-icon">👑</span>
                                    <span>Royal Designs</span>
                                </div>
                                <div className="collection-feature">
                                    <span className="feature-icon">🧵</span>
                                    <span>Hand Embroidery</span>
                                </div>
                                <div className="collection-feature">
                                    <span className="feature-icon">🎁</span>
                                    <span>Free Dupatta Included</span>
                                </div>
                                <div className="collection-feature">
                                    <span className="feature-icon">👶</span>
                                    <span>Child-Friendly Fabrics</span>
                                </div>
                            </div>
                        </div>
                        <div className="collection-image">
                            <img src="https://ahhaaaa.com/cdn/shop/files/ahhaaaa-kids-ethnic-silk-blend-waistcoat-kurta-pyjama-3-piece-sherwani-set-for-boys-ahhaaaa-com-59660.jpg?v=1749028218" 
                                 alt="Kids Sherwanis Collection" />
                        </div>
                    </div>
                </div>

                <div className="additional-info">
                    <h3>Why Choose Our Kids Sherwanis?</h3>
                    <div className="features-grid">
                        <div className="feature">
                            <FaShieldAlt className="feature-icon" />
                            <h4>Authentic Craftsmanship</h4>
                            <p>Handcrafted by skilled artisans using traditional techniques</p>
                        </div>
                        <div className="feature">
                            <FaTruck className="feature-icon" />
                            <h4>Complete Sets</h4>
                            <p>Most sherwanis come with matching dupatta included</p>
                        </div>
                        <div className="feature">
                            <FaUndo className="feature-icon" />
                            <h4>Easy Returns</h4>
                            <p>30-day return policy with free returns</p>
                        </div>
                        <div className="feature">
                            <span className="feature-icon">🎨</span>
                            <h4>Wide Variety</h4>
                            <p>From royal weddings to casual festive wear</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KidsSherwaniPage;