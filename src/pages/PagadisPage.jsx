// src/pages/PagadisPage.js
import React, { useState } from 'react';
import './PagadisPage.css';
import { FaStar, FaStarHalfAlt, FaRegStar, FaHeart, FaShoppingBag, FaTruck, FaUndo, FaShieldAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const PagadisPage = () => {
    console.log("🟤 PAGADIS PAGE LOADED - Component: PagadisPage");
    
    const [wishlisted, setWishlisted] = useState({});
    const [activeFilter, setActiveFilter] = useState('all');

    const pagadis = [
        {
            id: 1,
            title: "Royal Silk Pagdi",
            price: 7996.99,
            oldPrice: 99.99,
            rating: 4.8,
            reviews: 145,
            description: "Premium silk pagdi with intricate zari work and elegant drape.",
            color: "Gold & Red",
            sizes: ['Regular', 'Large'],
            inStock: true,
            stockCount: 28,
            image: "https://m.media-amazon.com/images/I/71mqmUAnsqL._AC_UY1100_.jpg",
            badge: "PREMIUM",
            category: "pagadis",
            type: "Silk Pagdi",
            tags: ["silk", "premium", "royal"]
        },
        {
            id: 2,
            title: "Traditional Safa Pagdi",
            price: 59.99,
            oldPrice: 79.99,
            rating: 4.6,
            reviews: 89,
            description: "Classic Rajasthani safa with traditional patterns and comfortable fit.",
            color: "Orange & Yellow",
            sizes: ['Regular', 'Large', 'XL'],
            inStock: true,
            stockCount: 35,
            image: "https://m.media-amazon.com/images/I/81nTyqbZZ0L._AC_UY1100_.jpg",
            badge: "TRADITIONAL",
            category: "pagadis",
            type: "Safa",
            tags: ["traditional", "cotton", "safa"]
        },
        {
            id: 3,
            title: "Wedding Pagdi with Kalgi",
            price: 129.99,
            oldPrice: 169.99,
            rating: 4.9,
            reviews: 67,
            description: "Elegant wedding pagdi with kalgi (plume) and pearl embellishments.",
            color: "White & Gold",
            sizes: ['Regular', 'Large'],
            inStock: true,
            stockCount: 15,
            image: "https://images.unsplash.com/photo-1539533113205-f5ae7ad028e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            badge: "WEDDING",
            category: "pagadis",
            type: "Wedding Pagdi",
            tags: ["wedding", "premium", "kalgi"]
        },
        {
            id: 4,
            title: "Cotton Casual Pagdi",
            price: 39.99,
            oldPrice: 49.99,
            rating: 4.4,
            reviews: 112,
            description: "Lightweight cotton pagdi for daily wear and casual occasions.",
            color: "Blue & White",
            sizes: ['Regular', 'Large', 'XL'],
            inStock: true,
            stockCount: 42,
            image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            badge: "CASUAL",
            category: "pagadis",
            type: "Cotton Pagdi",
            tags: ["cotton", "casual", "daily"]
        },
        {
            id: 5,
            title: "Velvet Royal Pagdi",
            price: 89.99,
            oldPrice: 119.99,
            rating: 4.7,
            reviews: 78,
            description: "Luxurious velvet pagdi with golden embroidery and regal look.",
            color: "Maroon & Gold",
            sizes: ['Regular', 'Large'],
            inStock: true,
            stockCount: 20,
            image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            badge: "VELVET",
            category: "pagadis",
            type: "Velvet Pagdi",
            tags: ["velvet", "royal", "premium"]
        },
        {
            id: 6,
            title: "Bandhani Print Pagdi",
            price: 49.99,
            oldPrice: 69.99,
            rating: 4.5,
            reviews: 96,
            description: "Traditional bandhani print pagdi with vibrant colors and patterns.",
            color: "Multicolor",
            sizes: ['Regular', 'Large'],
            inStock: true,
            stockCount: 38,
            image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            badge: "TRADITIONAL",
            category: "pagadis",
            type: "Bandhani",
            tags: ["bandhani", "traditional", "colorful"]
        },
        {
            id: 7,
            title: "Designer Party Pagdi",
            price: 99.99,
            oldPrice: 129.99,
            rating: 4.8,
            reviews: 54,
            description: "Contemporary designer pagdi with modern patterns and style.",
            color: "Black & Silver",
            sizes: ['Regular', 'Large'],
            inStock: true,
            stockCount: 18,
            image: "https://images.unsplash.com/photo-1539533113205-f5ae7ad028e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            badge: "DESIGNER",
            category: "pagadis",
            type: "Designer Pagdi",
            tags: ["designer", "party", "modern"]
        },
        {
            id: 8,
            title: "Simple Linen Pagdi",
            price: 34.99,
            oldPrice: 44.99,
            rating: 4.3,
            reviews: 87,
            description: "Simple and elegant linen pagdi for everyday traditional wear.",
            color: "Beige & Brown",
            sizes: ['Regular', 'Large', 'XL'],
            inStock: true,
            stockCount: 50,
            image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            badge: "LINEN",
            category: "pagadis",
            type: "Linen Pagdi",
            tags: ["linen", "simple", "everyday"]
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

    const filteredPagadis = activeFilter === 'all' 
        ? pagadis 
        : pagadis.filter(pagadi => 
            pagadi.tags.includes(activeFilter) || 
            pagadi.type.toLowerCase().includes(activeFilter.toLowerCase())
        );

    return (
        <div className="pagadis-page">
            <div className="container">
                <div className="breadcrumb">
                    <Link to="/">Home</Link>
                    <span>/</span>
                    <Link to="/mens-wear">Men's Wear</Link>
                    <span>/</span>
                    <span>Pagadis</span>
                </div>

                <div className="page-header">
                    <h1>Traditional Pagadis Collection</h1>
                    <p>Elegant headwear for traditional occasions - Safa, Pagdi, Turban & More</p>
                    <div className="collection-highlights">
                        <span className="highlight">Traditional Craft</span>
                        <span className="highlight">Premium Fabrics</span>
                        <span className="highlight">Perfect Drape</span>
                    </div>
                </div>

                <div className="stats-bar">
                    <div className="stat">
                        <span className="stat-number">{pagadis.length}</span>
                        <span className="stat-label">Pagadis Available</span>
                    </div>
                    <div className="stat">
                        <span className="stat-number">4.6</span>
                        <span className="stat-label">Avg. Rating</span>
                    </div>
                    <div className="stat">
                        <span className="stat-number">3</span>
                        <span className="stat-label">Sizes Available</span>
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
                            <option>Sort by: Featured</option>
                            <option>Price: Low to High</option>
                            <option>Price: High to Low</option>
                            <option>Rating: High to Low</option>
                            <option>Newest First</option>
                        </select>
                    </div>
                </div>

                <div className="products-grid">
                    {filteredPagadis.map(product => {
                        const stockStatus = getStockStatus(product.stockCount);
                        
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
                                        <Link to={`/product/pagadis/${product.id}`} className="view-details-btn">
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
                    <h3>The Heritage of Pagadis</h3>
                    <div className="collection-details">
                        <div className="collection-text">
                            <p>
                                Pagadis represent the rich cultural heritage of Indian tradition. 
                                Each pagadi is carefully crafted using traditional techniques 
                                passed down through generations of artisans. From royal ceremonies 
                                to everyday wear, our pagadis combine elegance with comfort.
                            </p>
                            <div className="collection-features">
                                <div className="collection-feature">
                                    <span className="feature-icon">👑</span>
                                    <span>Royal Heritage</span>
                                </div>
                                <div className="collection-feature">
                                    <span className="feature-icon">🧵</span>
                                    <span>Handcrafted Details</span>
                                </div>
                                <div className="collection-feature">
                                    <span className="feature-icon">🎨</span>
                                    <span>Traditional Patterns</span>
                                </div>
                            </div>
                        </div>
                        <div className="collection-image">
                            <img src="https://images.unsplash.com/photo-1620207418302-439b387441b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                 alt="Traditional Pagadis" />
                        </div>
                    </div>
                </div>

                <div className="additional-info">
                    <h3>Why Choose Our Pagadis?</h3>
                    <div className="features-grid">
                        <div className="feature">
                            <FaShieldAlt className="feature-icon" />
                            <h4>Authentic Craftsmanship</h4>
                            <p>Handmade by skilled artisans using traditional techniques</p>
                        </div>
                        <div className="feature">
                            <FaTruck className="feature-icon" />
                            <h4>Free Styling Guide</h4>
                            <p>Free guide on how to drape different styles</p>
                        </div>
                        <div className="feature">
                            <FaUndo className="feature-icon" />
                            <h4>Easy Returns</h4>
                            <p>30-day return policy with free returns</p>
                        </div>
                        <div className="feature">
                            <FaShieldAlt className="feature-icon" />
                            <h4>Premium Materials</h4>
                            <p>Made with silk, velvet, cotton and quality embellishments</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PagadisPage;