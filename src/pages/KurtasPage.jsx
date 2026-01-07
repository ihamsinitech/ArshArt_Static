// src/pages/KurtasPage.js
import React, { useState } from 'react';
import './KurtasPage.css';
import { FaStar, FaStarHalfAlt, FaRegStar, FaHeart, FaShoppingBag, FaTruck, FaUndo, FaShieldAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const KurtasPage = () => {
    console.log("🟢 KURTAS PAGE LOADED - Component: KurtasPage");
    
    const [wishlisted, setWishlisted] = useState({});
    const [activeFilter, setActiveFilter] = useState('all');

    const kurtas = [
        {
            id: 1,
            title: "Royal Silk Kurta Set",
            price: 89.99,
            oldPrice: 119.99,
            rating: 4.8,
            reviews: 156,
            description: "Premium silk kurta with intricate embroidery and matching pajama.",
            color: "Ivory & Gold",
            sizes: ['S', 'M', 'L', 'XL'],
            inStock: true,
            stockCount: 32,
            image: "https://scrollandshops.com/cdn/shop/files/Dark_Blue_Royal_Silk_Kurta_Set_SNS11419_2_5d892e12-51e1-4d66-901b-1b8eb114e1db.jpg?v=1755517847",
            badge: "PREMIUM",
            category: "kurtas",
            type: "Silk Kurta Set",
            tags: ["silk", "premium", "wedding"]
        },
        {
            id: 2,
            title: "Cotton Pathani Kurta",
            price: 49.99,
            oldPrice: 69.99,
            rating: 4.6,
            reviews: 112,
            description: "Comfortable cotton Pathani style kurta for everyday wear.",
            color: "White & Blue",
            sizes: ['M', 'L', 'XL', 'XXL'],
            inStock: true,
            stockCount: 45,
            image: "https://www.anantexports.in/cdn/shop/files/WhatsAppImage2024-03-21at2.09.27PM.jpg?v=1711010661",
            badge: "TRADITIONAL",
            category: "kurtas",
            type: "Pathani Kurta",
            tags: ["cotton", "traditional", "casual"]
        },
        {
            id: 3,
            title: "Designer Wedding Kurta",
            price: 129.99,
            oldPrice: 169.99,
            rating: 4.9,
            reviews: 89,
            description: "Elegant designer kurta with heavy embroidery for weddings.",
            color: "Maroon & Gold",
            sizes: ['S', 'M', 'L'],
            inStock: true,
            stockCount: 18,
            image: "https://kalpraag.com/cdn/shop/files/shoot6782_3d47b28e-7798-4db4-a7e2-3d72c2819f17.jpg?v=1754288437&width=320",
            badge: "WEDDING",
            category: "kurtas",
            type: "Wedding Kurta",
            tags: ["wedding", "designer", "embroidery"]
        },
        {
            id: 4,
            title: "Linen Summer Kurta",
            price: 59.99,
            oldPrice: 79.99,
            rating: 4.5,
            reviews: 134,
            description: "Lightweight linen kurta perfect for summer occasions.",
            color: "Beige & Brown",
            sizes: ['S', 'M', 'L', 'XL'],
            inStock: true,
            stockCount: 38,
            image: "https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/2025/AUGUST/9/vns3nEz7_86aa5fa151cc46009c5931001bac9f50.jpg",
            badge: "SUMMER",
            category: "kurtas",
            type: "Linen Kurta",
            tags: ["linen", "summer", "casual"]
        },
        {
            id: 5,
            title: "Printed Casual Kurta",
            price: 44.99,
            oldPrice: 59.99,
            rating: 4.4,
            reviews: 96,
            description: "Colorful printed kurta for casual and festive wear.",
            color: "Multicolor",
            sizes: ['S', 'M', 'L', 'XL'],
            inStock: true,
            stockCount: 52,
            image: "https://dennison.in/cdn/shop/files/SSKR-25-017-40_1.jpg?v=1757421623",
            badge: "CASUAL",
            category: "kurtas",
            type: "Printed Kurta",
            tags: ["printed", "casual", "festive"]
        },
        {
            id: 6,
            title: "Embroidered Anarkali Kurta",
            price: 79.99,
            oldPrice: 99.99,
            rating: 4.7,
            reviews: 78,
            description: "Flowy Anarkali style kurta with beautiful embroidery.",
            color: "Pink & Silver",
            sizes: ['S', 'M', 'L'],
            inStock: true,
            stockCount: 25,
            image: "https://tathastu.com/media/catalog/product/cache/c2b985002ec8c1866ddc498e4f17ad3e/1/8/18102.jpg",
            badge: "DESIGNER",
            category: "kurtas",
            type: "Anarkali Kurta",
            tags: ["anarkali", "designer", "party"]
        },
        {
            id: 7,
            title: "Handblock Printed Kurta",
            price: 54.99,
            oldPrice: 74.99,
            rating: 4.6,
            reviews: 103,
            description: "Traditional handblock printed kurta with natural dyes.",
            color: "Indigo & White",
            sizes: ['M', 'L', 'XL'],
            inStock: true,
            stockCount: 30,
            image: "https://www.javinishka.com/cdn/shop/products/PBPR8359-Edit.jpg?v=1746467729&width=1445",
            badge: "HANDCRAFTED",
            category: "kurtas",
            type: "Handblock Kurta",
            tags: ["handcrafted", "traditional", "eco-friendly"]
        },
        {
            id: 8,
            title: "Formal Nehru Jacket Kurta",
            price: 99.99,
            oldPrice: 129.99,
            rating: 4.8,
            reviews: 67,
            description: "Formal kurta with Nehru jacket for special occasions.",
            color: "Black & Silver",
            sizes: ['S', 'M', 'L', 'XL'],
            inStock: true,
            stockCount: 20,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_QRuC4MCwLrNxEFApKDu45SxT_7fk6Jg3TA&s",
            badge: "FORMAL",
            category: "kurtas",
            type: "Nehru Jacket Set",
            tags: ["formal", "jacket", "occasion"]
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

    const filteredKurtas = activeFilter === 'all' 
        ? kurtas 
        : kurtas.filter(kurta => 
            kurta.tags.includes(activeFilter) || 
            kurta.type.toLowerCase().includes(activeFilter.toLowerCase())
        );

    return (
        <div className="kurtas-page">
            <div className="container">
                <div className="breadcrumb">
                    <Link to="/">Home</Link>
                    <span>/</span>
                    <Link to="/mens-wear">Men's Wear</Link>
                    <span>/</span>
                    <span>Kurtas</span>
                </div>

                <div className="page-header">
                    <h1>Traditional Kurtas Collection</h1>
                    <p>Elegant ethnic wear for every occasion - Silk, Cotton, Linen & More</p>
                    <div className="collection-highlights">
                        <span className="highlight">Premium Fabrics</span>
                        <span className="highlight">Traditional Designs</span>
                        <span className="highlight">Perfect Fit</span>
                    </div>
                </div>

                <div className="stats-bar">
                    <div className="stat">
                        <span className="stat-number">{kurtas.length}</span>
                        <span className="stat-label">Kurtas Available</span>
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
                        <span className="stat-label">Alterations</span>
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
                                All Kurtas
                            </button>
                            <button 
                                className={`filter-btn ${activeFilter === 'silk' ? 'active' : ''}`}
                                onClick={() => handleFilter('silk')}
                            >
                                Silk
                            </button>
                            <button 
                                className={`filter-btn ${activeFilter === 'cotton' ? 'active' : ''}`}
                                onClick={() => handleFilter('cotton')}
                            >
                                Cotton
                            </button>
                            <button 
                                className={`filter-btn ${activeFilter === 'wedding' ? 'active' : ''}`}
                                onClick={() => handleFilter('wedding')}
                            >
                                Wedding
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
                    {filteredKurtas.map(product => {
                        const stockStatus = getStockStatus(product.stockCount);
                        
                        return (
                            <div className="product-card" key={product.id}>
                                <div className="product-image">
                                    <img src={product.image} alt={product.title} />
                                    <div className="product-badge kurta-badge">{product.badge}</div>
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
                                        <Link to={`/product/kurtas/${product.id}`} className="view-details-btn">
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
                    <h3>The Art of Traditional Kurtas</h3>
                    <div className="collection-details">
                        <div className="collection-text">
                            <p>
                                Our kurta collection celebrates the timeless elegance of Indian ethnic wear. 
                                Each piece is crafted with attention to detail, using premium fabrics and 
                                traditional techniques that have been perfected over generations.
                            </p>
                            <div className="collection-features">
                                <div className="collection-feature">
                                    <span className="feature-icon">👕</span>
                                    <span>Premium Fabrics</span>
                                </div>
                                <div className="collection-feature">
                                    <span className="feature-icon">🧵</span>
                                    <span>Hand Embroidery</span>
                                </div>
                                <div className="collection-feature">
                                    <span className="feature-icon">✂️</span>
                                    <span>Perfect Tailoring</span>
                                </div>
                            </div>
                        </div>
                        <div className="collection-image">
                            <img src="https://fabriclore.com/cdn/shop/articles/Men_s_Kurta_Based_on_Style_and_Design_f480d5f8-77b2-439b-b3b8-8bb11a4e02b9.jpg?v=1746700048&width=1500" 
                                 alt="Traditional Kurtas" />
                        </div>
                    </div>
                </div>

                <div className="additional-info">
                    <h3>Why Choose Our Kurtas?</h3>
                    <div className="features-grid">
                        <div className="feature">
                            <FaShieldAlt className="feature-icon" />
                            <h4>Premium Quality</h4>
                            <p>Made with finest fabrics and expert craftsmanship</p>
                        </div>
                        <div className="feature">
                            <FaTruck className="feature-icon" />
                            <h4>Free Alterations</h4>
                            <p>Free tailoring services for perfect fit</p>
                        </div>
                        <div className="feature">
                            <FaUndo className="feature-icon" />
                            <h4>Easy Returns</h4>
                            <p>30-day return policy with free returns</p>
                        </div>
                        <div className="feature">
                            <FaShieldAlt className="feature-icon" />
                            <h4>Traditional Designs</h4>
                            <p>Authentic traditional patterns and embroidery</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KurtasPage;