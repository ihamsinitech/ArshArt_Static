// src/pages/KidsPagadisPage.js
import React, { useState } from 'react';
import './KidsPagadisPage.css';
import { FaStar, FaStarHalfAlt, FaRegStar, FaHeart, FaShoppingBag, FaTruck, FaUndo, FaShieldAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const KidsPagadisPage = () => {
    console.log("👳 KIDS PAGADIS PAGE LOADED");
    
    const [wishlisted, setWishlisted] = useState({});
    const [activeFilter, setActiveFilter] = useState('all');
    const [selectedSizes, setSelectedSizes] = useState({});

    const kidsPagadis = [
        {
            id: 1,
            title: "Kids Royal Silk Pagadi",
            price: 39.99,
            oldPrice: 54.99,
            rating: 4.9,
            reviews: 89,
            description: "Exquisite silk pagadi with intricate embroidery and zari work for royal occasions.",
            color: "Gold & Maroon",
            sizes: ['Small (3-5 yrs)', 'Medium (6-8 yrs)', 'Large (9-12 yrs)'],
            ageGroup: "3-12 Years",
            inStock: true,
            stockCount: 42,
            image: "https://images.unsplash.com/photo-1620207418302-439b387441b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            badge: "PREMIUM",
            category: "kids-pagadis",
            type: "Silk Pagadi",
            tags: ["silk", "premium", "royal", "embroidered"]
        },
        {
            id: 2,
            title: "Kids Safa Pagadi",
            price: 34.99,
            oldPrice: 44.99,
            rating: 4.7,
            reviews: 112,
            description: "Traditional Rajasthani safa pagadi with vibrant colors and patterns.",
            color: "Orange & Yellow",
            sizes: ['Small (3-5 yrs)', 'Medium (6-8 yrs)', 'Large (9-12 yrs)'],
            ageGroup: "3-12 Years",
            inStock: true,
            stockCount: 58,
            image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            badge: "SAFA",
            category: "kids-pagadis",
            type: "Safa Pagadi",
            tags: ["safa", "traditional", "colorful", "rajasthani"]
        },
        {
            id: 3,
            title: "Kids Wedding Pagadi with Kalgi",
            price: 49.99,
            oldPrice: 69.99,
            rating: 4.8,
            reviews: 76,
            description: "Elegant wedding pagadi with beautiful kalgi (plume) for special ceremonies.",
            color: "White & Gold",
            sizes: ['Small (3-5 yrs)', 'Medium (6-8 yrs)', 'Large (9-12 yrs)'],
            ageGroup: "3-12 Years",
            inStock: true,
            stockCount: 25,
            image: "https://images.unsplash.com/photo-1539533113205-f5ae7ad028e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            badge: "WEDDING",
            category: "kids-pagadis",
            type: "Wedding Pagadi",
            tags: ["wedding", "kalgi", "elegant", "ceremony"]
        },
        {
            id: 4,
            title: "Kids Cotton Pagadi",
            price: 24.99,
            oldPrice: 34.99,
            rating: 4.5,
            reviews: 145,
            description: "Comfortable cotton pagadi for daily wear and casual occasions.",
            color: "Blue & White",
            sizes: ['Small (3-5 yrs)', 'Medium (6-8 yrs)', 'Large (9-12 yrs)'],
            ageGroup: "3-12 Years",
            inStock: true,
            stockCount: 72,
            image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            badge: "COTTON",
            category: "kids-pagadis",
            type: "Cotton Pagadi",
            tags: ["cotton", "casual", "comfortable", "daily"]
        },
        {
            id: 5,
            title: "Kids Velvet Pagadi",
            price: 45.99,
            oldPrice: 59.99,
            rating: 4.6,
            reviews: 88,
            description: "Luxurious velvet pagadi with golden thread work for grand events.",
            color: "Maroon & Gold",
            sizes: ['Medium (6-8 yrs)', 'Large (9-12 yrs)'],
            ageGroup: "6-12 Years",
            inStock: true,
            stockCount: 32,
            image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            badge: "VELVET",
            category: "kids-pagadis",
            type: "Velvet Pagadi",
            tags: ["velvet", "luxury", "grand", "threadwork"]
        },
        {
            id: 6,
            title: "Kids Bandhani Pagadi",
            price: 32.99,
            oldPrice: 42.99,
            rating: 4.4,
            reviews: 91,
            description: "Traditional bandhani print pagadi with vibrant tie-dye patterns.",
            color: "Multicolor",
            sizes: ['Small (3-5 yrs)', 'Medium (6-8 yrs)', 'Large (9-12 yrs)'],
            ageGroup: "3-12 Years",
            inStock: true,
            stockCount: 48,
            image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            badge: "BANDHANI",
            category: "kids-pagadis",
            type: "Bandhani Pagadi",
            tags: ["bandhani", "traditional", "tie-dye", "colorful"]
        },
        {
            id: 7,
            title: "Kids Designer Pagadi",
            price: 37.99,
            oldPrice: 49.99,
            rating: 4.7,
            reviews: 63,
            description: "Contemporary designer pagadi with modern patterns and styling.",
            color: "Black & Silver",
            sizes: ['Medium (6-8 yrs)', 'Large (9-12 yrs)'],
            ageGroup: "6-12 Years",
            inStock: true,
            stockCount: 29,
            image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            badge: "DESIGNER",
            category: "kids-pagadis",
            type: "Designer Pagadi",
            tags: ["designer", "modern", "stylish", "contemporary"]
        },
        {
            id: 8,
            title: "Kids Linen Pagadi",
            price: 28.99,
            oldPrice: 38.99,
            rating: 4.3,
            reviews: 78,
            description: "Simple and elegant linen pagadi for everyday traditional wear.",
            color: "Beige & Brown",
            sizes: ['Small (3-5 yrs)', 'Medium (6-8 yrs)', 'Large (9-12 yrs)'],
            ageGroup: "3-12 Years",
            inStock: true,
            stockCount: 51,
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            badge: "LINEN",
            category: "kids-pagadis",
            type: "Linen Pagadi",
            tags: ["linen", "simple", "elegant", "everyday"]
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

    const filteredPagadis = activeFilter === 'all' 
        ? kidsPagadis 
        : kidsPagadis.filter(pagadi => 
            pagadi.tags.includes(activeFilter) || 
            pagadi.type.toLowerCase().includes(activeFilter.toLowerCase())
        );

    return (
        <div className="kids-pagadis-page">
            <div className="container">
                <div className="breadcrumb">
                    <Link to="/">Home</Link>
                    <span>/</span>
                    <Link to="/kids-wear">Kids Wear</Link>
                    <span>/</span>
                    <span>Kids Pagadis</span>
                </div>

                <div className="page-header">
                    <h1>Kids Pagadis Collection</h1>
                    <p>Traditional headwear for your little ones - Silk, Safa, Wedding & Casual Pagadis</p>
                    <div className="collection-highlights">
                        <span className="highlight">Age 3-12 Years</span>
                        <span className="highlight">Traditional Craft</span>
                        <span className="highlight">Perfect Drape</span>
                        <span className="highlight">Easy to Wear</span>
                    </div>
                </div>

                <div className="stats-bar">
                    <div className="stat">
                        <span className="stat-number">{kidsPagadis.length}</span>
                        <span className="stat-label">Pagadis Available</span>
                    </div>
                    <div className="stat">
                        <span className="stat-number">4.6</span>
                        <span className="stat-label">Avg. Rating</span>
                    </div>
                    <div className="stat">
                        <span className="stat-number">3</span>
                        <span className="stat-label">Sizes Each</span>
                    </div>
                    <div className="stat">
                        <span className="stat-number">Free</span>
                        <span className="stat-label">Styling Guide</span>
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
                                All Pagadis
                            </button>
                            <button 
                                className={`filter-btn ${activeFilter === 'silk' ? 'active' : ''}`}
                                onClick={() => handleFilter('silk')}
                            >
                                Silk
                            </button>
                            <button 
                                className={`filter-btn ${activeFilter === 'safa' ? 'active' : ''}`}
                                onClick={() => handleFilter('safa')}
                            >
                                Safa
                            </button>
                            <button 
                                className={`filter-btn ${activeFilter === 'wedding' ? 'active' : ''}`}
                                onClick={() => handleFilter('wedding')}
                            >
                                Wedding
                            </button>
                            <button 
                                className={`filter-btn ${activeFilter === 'cotton' ? 'active' : ''}`}
                                onClick={() => handleFilter('cotton')}
                            >
                                Cotton
                            </button>
                            <button 
                                className={`filter-btn ${activeFilter === 'velvet' ? 'active' : ''}`}
                                onClick={() => handleFilter('velvet')}
                            >
                                Velvet
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
                    {filteredPagadis.map(product => {
                        const stockStatus = getStockStatus(product.stockCount);
                        const selectedSize = selectedSizes[product.id];
                        
                        return (
                            <div className="product-card" key={product.id}>
                                <div className="product-image">
                                    <img src={product.image} alt={product.title} />
                                    <div className="product-badge pagadi-badge">{product.badge}</div>
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
                                        <Link to={`/product/kids-pagadis/${product.id}`} className="view-details-btn">
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
                                            <span className="policy-icon">📖</span>
                                            <span>Styling Guide</span>
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
                    <h3>Traditional Headwear for Kids</h3>
                    <div className="collection-details">
                        <div className="collection-text">
                            <p>
                                Our kids pagadis bring traditional elegance to your child's attire. 
                                Each pagadi is crafted with attention to detail, using traditional 
                                techniques passed down through generations. From silk to cotton, 
                                each piece offers comfort while maintaining cultural authenticity.
                            </p>
                            <div className="collection-features">
                                <div className="collection-feature">
                                    <span className="feature-icon">👑</span>
                                    <span>Traditional Craft</span>
                                </div>
                                <div className="collection-feature">
                                    <span className="feature-icon">🧵</span>
                                    <span>Handmade Details</span>
                                </div>
                                <div className="collection-feature">
                                    <span className="feature-icon">🎨</span>
                                    <span>Vibrant Colors</span>
                                </div>
                                <div className="collection-feature">
                                    <span className="feature-icon">👶</span>
                                    <span>Child-Friendly Fit</span>
                                </div>
                            </div>
                        </div>
                        <div className="collection-image">
                            <img src="https://images.unsplash.com/photo-1620207418302-439b387441b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                 alt="Kids Pagadis Collection" />
                        </div>
                    </div>
                </div>

                <div className="additional-info">
                    <h3>Why Choose Our Kids Pagadis?</h3>
                    <div className="features-grid">
                        <div className="feature">
                            <FaShieldAlt className="feature-icon" />
                            <h4>Authentic Craftsmanship</h4>
                            <p>Handmade by skilled artisans using traditional techniques</p>
                        </div>
                        <div className="feature">
                            <FaTruck className="feature-icon" />
                            <h4>Free Styling Guide</h4>
                            <p>Free guide on how to drape different pagadi styles</p>
                        </div>
                        <div className="feature">
                            <FaUndo className="feature-icon" />
                            <h4>Easy Returns</h4>
                            <p>30-day return policy with free returns</p>
                        </div>
                        <div className="feature">
                            <span className="feature-icon">🎁</span>
                            <h4>Perfect Gift</h4>
                            <p>Beautifully packaged for gifting on special occasions</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KidsPagadisPage;