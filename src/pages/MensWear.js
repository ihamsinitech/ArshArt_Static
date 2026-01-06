import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './MensWear.css';
import { FaStar, FaFilter, FaSortAmountDown, FaShoppingBag } from 'react-icons/fa';

const MensWear = () => {
    const [filterOpen, setFilterOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('all');

    const categories = [
        { id: 'all', name: 'All Products' },
        { id: 'shoes', name: 'Suits' },
        { id: 'suits', name: 'Shoes' },
        { id: 'sherwani', name: 'Sherwani' },
        { id: 'pagadis', name: 'Pagadis' },
        { id: 'kurtas', name: 'Kurtas' },
        { id: 'blazers', name: 'Blazers' }
    ];

    const products = [
        {
            id: 1,
            title: "Royal Silk Sherwani",
            category: "sherwani",
            price: 299.99,
            oldPrice: 399.99,
            rating: 4.8,
            image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
            color: "Maroon",
            sizes: ['S', 'M', 'L', 'XL'],
            inStock: true
        },
        {
            id: 2,
            title: "Designer Jutti Shoes",
            category: "shoes",
            price: 89.99,
            oldPrice: 119.99,
            rating: 4.5,
            image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
            color: "Gold",
            sizes: ['7', '8', '9', '10'],
            inStock: true
        },
        {
            id: 3,
            title: "Premium Wool Suit",
            category: "suits",
            price: 399.99,
            oldPrice: 499.99,
            rating: 5.0,
            image: "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80",
            color: "Black",
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
            inStock: true
        },
        {
            id: 4,
            title: "Silk Embroidered Kurta",
            category: "kurtas",
            price: 149.99,
            oldPrice: 199.99,
            rating: 4.7,
            image: "https://images.unsplash.com/photo-1594938374184-8f7d62879f1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
            color: "Blue",
            sizes: ['M', 'L', 'XL'],
            inStock: true
        },
        {
            id: 5,
            title: "Designer Blazer",
            category: "blazers",
            price: 189.99,
            oldPrice: 249.99,
            rating: 4.6,
            image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2067&q=80",
            color: "Navy Blue",
            sizes: ['S', 'M', 'L'],
            inStock: true
        },
        {
            id: 6,
            title: "Traditional Pagdi",
            category: "pagadis",
            price: 49.99,
            oldPrice: 69.99,
            rating: 4.4,
            image: "https://images.unsplash.com/photo-1525450824786-227cbef70703?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
            color: "White",
            sizes: ['One Size'],
            inStock: true
        },
        {
            id: 7,
            title: "Casual Linen Kurta",
            category: "kurtas",
            price: 79.99,
            oldPrice: 99.99,
            rating: 4.3,
            image: "https://images.unsplash.com/photo-1519241047957-be31d7379a5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
            color: "Beige",
            sizes: ['S', 'M', 'L', 'XL'],
            inStock: true
        },
        {
            id: 8,
            title: "Formal Leather Shoes",
            category: "shoes",
            price: 129.99,
            oldPrice: 169.99,
            rating: 4.7,
            image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
            color: "Brown",
            sizes: ['8', '9', '10', '11'],
            inStock: true
        }
    ];

    const filteredProducts = selectedCategory === 'all' 
        ? products 
        : products.filter(product => product.category === selectedCategory);

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= Math.floor(rating)) {
                stars.push(<FaStar key={i} className="star filled" />);
            } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
                stars.push(<FaStar key={i} className="star half" />);
            } else {
                stars.push(<FaStar key={i} className="star" />);
            }
        }
        return stars;
    };

    return (
        <div className="mens-wear-page">
            <div className="container">
                {/* Hero Section */}
                <div className="page-hero">
                    <h1>Men's Collection</h1>
                    <p>Discover premium ethnic and contemporary wear for men</p>
                </div>

                {/* Filter and Sort Bar */}
                <div className="filter-sort-bar">
                    <button 
                        className="filter-btn" 
                        onClick={() => setFilterOpen(!filterOpen)}
                    >
                        <FaFilter /> Filter
                    </button>
                    
                    <div className="sort-options">
                        <FaSortAmountDown />
                        <select className="sort-select">
                            <option>Sort by: Featured</option>
                            <option>Price: Low to High</option>
                            <option>Price: High to Low</option>
                            <option>Rating: High to Low</option>
                            <option>Newest First</option>
                        </select>
                    </div>
                </div>

                {/* Filter Sidebar */}
                <div className={`filter-sidebar ${filterOpen ? 'open' : ''}`}>
                    <div className="filter-header">
                        <h3>Filter by</h3>
                        <button className="close-filter" onClick={() => setFilterOpen(false)}>×</button>
                    </div>
                    
                    <div className="filter-section">
                        <h4>Categories</h4>
                        <div className="category-filters">
                            {categories.map(cat => (
                                <button
                                    key={cat.id}
                                    className={`category-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                                    onClick={() => {
                                        setSelectedCategory(cat.id);
                                        if (window.innerWidth < 992) setFilterOpen(false);
                                    }}
                                >
                                    {cat.name}
                                </button>
                            ))}
                        </div>
                    </div>
                    
                    <div className="filter-section">
                        <h4>Price Range</h4>
                        <div className="price-range">
                            <input type="range" min="0" max="500" defaultValue="250" className="price-slider" />
                            <div className="price-values">
                                <span>$0</span>
                                <span>$250</span>
                                <span>$500</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="filter-section">
                        <h4>Colors</h4>
                        <div className="color-filters">
                            {['Maroon', 'Gold', 'Black', 'Blue', 'Navy Blue', 'White', 'Beige', 'Brown'].map(color => (
                                <button key={color} className="color-btn" style={{ backgroundColor: color.toLowerCase() }} />
                            ))}
                        </div>
                    </div>
                    
                    <button className="apply-filters-btn">Apply Filters</button>
                </div>

                {/* Overlay for mobile filter */}
                {filterOpen && <div className="filter-overlay" onClick={() => setFilterOpen(false)} />}

                {/* Products Grid */}
                <div className="products-section">
                    <div className="products-header">
                        <h2>{categories.find(c => c.id === selectedCategory)?.name || 'All Products'}</h2>
                        <p className="product-count">{filteredProducts.length} products found</p>
                    </div>
                    
                    <div className="products-grid">
                        {filteredProducts.map(product => (
                            <div className="product-card" key={product.id}>
                                <Link to={`/category/${product.category}/${product.id}`} className="product-link">
                                    <div className="product-image">
                                        <img src={product.image} alt={product.title} />
                                        <div className="product-overlay">
                                            <span className="quick-view-text">View Details</span>
                                        </div>
                                    </div>
                                    <div className="product-info">
                                        <span className="product-category">{product.category.toUpperCase()}</span>
                                        <h3 className="product-title">{product.title}</h3>
                                        <div className="product-rating">
                                            {renderStars(product.rating)}
                                            <span>({product.rating})</span>
                                        </div>
                                        <div className="product-price">
                                            <span className="current-price">${product.price.toFixed(2)}</span>
                                            {product.oldPrice && (
                                                <span className="old-price">${product.oldPrice.toFixed(2)}</span>
                                            )}
                                        </div>
                                        <div className="product-meta">
                                            <span className="product-color">Color: {product.color}</span>
                                            <span className="product-sizes">Sizes: {product.sizes.join(', ')}</span>
                                        </div>
                                        <div className="stock-status">
                                            {product.inStock ? (
                                                <span className="in-stock">✓ In Stock</span>
                                            ) : (
                                                <span className="out-of-stock">Out of Stock</span>
                                            )}
                                        </div>
                                    </div>
                                </Link>
                                <div className="product-actions">
                                    <button className="add-to-cart-btn">
                                        <FaShoppingBag /> Add to Cart
                                    </button>
                                    <button className="wishlist-btn">♡</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Pagination */}
                <div className="pagination">
                    <button className="page-btn disabled">Previous</button>
                    <button className="page-btn active">1</button>
                    <button className="page-btn">2</button>
                    <button className="page-btn">3</button>
                    <span className="page-dots">...</span>
                    <button className="page-btn">8</button>
                    <button className="page-btn">Next</button>
                </div>
            </div>
        </div>
    );
};

export default MensWear;