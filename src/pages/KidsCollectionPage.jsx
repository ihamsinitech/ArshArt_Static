import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './KidsCollection.css'; // Updated CSS file

const KidsCollectionPage = () => {
    const navigate = useNavigate();
    const [filters, setFilters] = useState({
        type: 'all',
        priceRange: [500, 20000],
        ageGroup: 'all',
        occasion: 'all',
        gender: 'all'
    });
    
    const products = [
        {
            id: 1,
            name: "Kids Designer Sherwani",
            price: 8999,
            originalPrice: 12000,
            discount: 25,
            image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            type: "sherwani",
            ageGroup: "5-8",
            occasion: "wedding",
            gender: "boys"
        },
        {
            id: 2,
            name: "Colorful Kurta Pajama Set",
            price: 5499,
            originalPrice: 7500,
            discount: 27,
            image: "https://images.unsplash.com/photo-1588508065123-287b28e9da6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            type: "kurta-pajama",
            ageGroup: "2-5",
            occasion: "festival",
            gender: "boys"
        },
        {
            id: 3,
            name: "Kids Indo Western Suit",
            price: 6999,
            originalPrice: 9500,
            discount: 26,
            image: "https://images.unsplash.com/photo-1558769132-cb1cb458edcb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            type: "indo-western",
            ageGroup: "8-12",
            occasion: "party",
            gender: "boys"
        },
        {
            id: 4,
            name: "Kids Kurta Dhoti Set",
            price: 4999,
            originalPrice: 6800,
            discount: 26,
            image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            type: "kurta-dhoti",
            ageGroup: "5-8",
            occasion: "festival",
            gender: "boys"
        },
        {
            id: 5,
            name: "Baby Sherwani Set",
            price: 3999,
            originalPrice: 5500,
            discount: 27,
            image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            type: "sherwani",
            ageGroup: "0-2",
            occasion: "wedding",
            gender: "boys"
        },
        {
            id: 6,
            name: "Girls Lehenga Choli",
            price: 7499,
            originalPrice: 10000,
            discount: 25,
            image: "https://images.unsplash.com/photo-1519238263530-99c8c6d5d90a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            type: "lehenga",
            ageGroup: "5-8",
            occasion: "wedding",
            gender: "girls"
        }
    ];

    const handleFilterChange = (filterType, value) => {
        setFilters(prev => ({
            ...prev,
            [filterType]: value
        }));
    };

    const handleProductClick = (productId) => {
        navigate(`/product/${productId}`);
    };

    const filteredProducts = products.filter(product => {
        if (filters.type !== 'all' && product.type !== filters.type) return false;
        if (filters.ageGroup !== 'all' && product.ageGroup !== filters.ageGroup) return false;
        if (filters.occasion !== 'all' && product.occasion !== filters.occasion) return false;
        if (filters.gender !== 'all' && product.gender !== filters.gender) return false;
        if (product.price < filters.priceRange[0] || product.price > filters.priceRange[1]) return false;
        return true;
    });

    return (
        <div className="kids-page">
            {/* Breadcrumb */}
            <div className="kids-breadcrumb">
                <div className="kids-breadcrumb-container">
                    <span>Home</span>
                    <span className="kids-breadcrumb-separator">/</span>
                    <span>Collections</span>
                    <span className="kids-breadcrumb-separator">/</span>
                    <span className="kids-breadcrumb-current">Kids Collection</span>
                </div>
            </div>

            {/* Header */}
            <div className="kids-header-section">
                <div className="kids-header-container">
                    <h1 className="kids-header-title">Kids Collection</h1>
                    <p className="kids-header-description">
                        Adorable traditional and contemporary outfits for kids
                    </p>
                    <div className="kids-results-count">
                        {filteredProducts.length} products found
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="kids-main-container">
                <div className="kids-content-wrapper">
                    {/* Filters Sidebar */}
                    <div className="kids-filters-sidebar">
                        <div className="kids-filter-section">
                            <h3 className="kids-filter-title">Type</h3>
                            <div className="kids-filter-options">
                                <button className={`kids-filter-button ${filters.type === 'all' ? 'active' : ''}`} onClick={() => handleFilterChange('type', 'all')}>All</button>
                                <button className={`kids-filter-button ${filters.type === 'sherwani' ? 'active' : ''}`} onClick={() => handleFilterChange('type', 'sherwani')}>Sherwani</button>
                                <button className={`kids-filter-button ${filters.type === 'kurta-pajama' ? 'active' : ''}`} onClick={() => handleFilterChange('type', 'kurta-pajama')}>Kurta Pajama</button>
                                <button className={`kids-filter-button ${filters.type === 'indo-western' ? 'active' : ''}`} onClick={() => handleFilterChange('type', 'indo-western')}>Indo Western</button>
                                <button className={`kids-filter-button ${filters.type === 'kurta-dhoti' ? 'active' : ''}`} onClick={() => handleFilterChange('type', 'kurta-dhoti')}>Kurta Dhoti</button>
                                <button className={`kids-filter-button ${filters.type === 'lehenga' ? 'active' : ''}`} onClick={() => handleFilterChange('type', 'lehenga')}>Lehenga</button>
                            </div>
                        </div>

                        <div className="kids-filter-section">
                            <h3 className="kids-filter-title">Age Group</h3>
                            <div className="kids-filter-options">
                                <button className={`kids-filter-button ${filters.ageGroup === 'all' ? 'active' : ''}`} onClick={() => handleFilterChange('ageGroup', 'all')}>All</button>
                                <button className={`kids-filter-button ${filters.ageGroup === '0-2' ? 'active' : ''}`} onClick={() => handleFilterChange('ageGroup', '0-2')}>0-2 Years</button>
                                <button className={`kids-filter-button ${filters.ageGroup === '2-5' ? 'active' : ''}`} onClick={() => handleFilterChange('ageGroup', '2-5')}>2-5 Years</button>
                                <button className={`kids-filter-button ${filters.ageGroup === '5-8' ? 'active' : ''}`} onClick={() => handleFilterChange('ageGroup', '5-8')}>5-8 Years</button>
                                <button className={`kids-filter-button ${filters.ageGroup === '8-12' ? 'active' : ''}`} onClick={() => handleFilterChange('ageGroup', '8-12')}>8-12 Years</button>
                            </div>
                        </div>

                        <div className="kids-filter-section">
                            <h3 className="kids-filter-title">Gender</h3>
                            <div className="kids-filter-options">
                                <button className={`kids-filter-button ${filters.gender === 'all' ? 'active' : ''}`} onClick={() => handleFilterChange('gender', 'all')}>All</button>
                                <button className={`kids-filter-button ${filters.gender === 'boys' ? 'active' : ''}`} onClick={() => handleFilterChange('gender', 'boys')}>Boys</button>
                                <button className={`kids-filter-button ${filters.gender === 'girls' ? 'active' : ''}`} onClick={() => handleFilterChange('gender', 'girls')}>Girls</button>
                            </div>
                        </div>

                        <div className="kids-filter-section">
                            <h3 className="kids-filter-title">Price Range</h3>
                            <div className="kids-price-range">
                                <input 
                                    type="range" 
                                    min="500" 
                                    max="20000" 
                                    step="500"
                                    value={filters.priceRange[1]}
                                    onChange={(e) => handleFilterChange('priceRange', [filters.priceRange[0], parseInt(e.target.value)])}
                                />
                                <div className="kids-price-values">
                                    <span>₹{filters.priceRange[0].toLocaleString()}</span>
                                    <span>₹{filters.priceRange[1].toLocaleString()}</span>
                                </div>
                            </div>
                        </div>

                        <button 
                            className="kids-clear-filters"
                            onClick={() => setFilters({
                                type: 'all',
                                priceRange: [500, 20000],
                                ageGroup: 'all',
                                occasion: 'all',
                                gender: 'all'
                            })}
                        >
                            Clear All Filters
                        </button>
                    </div>

                    {/* Products Grid */}
                    <div className="kids-products-grid">
                        {filteredProducts.map(product => (
                            <div 
                                className="kids-product-card" 
                                key={product.id}
                                onClick={() => handleProductClick(product.id)}
                                style={{ cursor: 'pointer' }}
                            >
                                <div className="kids-product-image">
                                    <img src={product.image} alt={product.name} />
                                    {product.discount && (
                                        <span className="kids-product-badge">
                                            {product.discount}% OFF
                                        </span>
                                    )}
                                    <div className="kids-age-group">
                                        {product.ageGroup} Years
                                    </div>
                                </div>
                                <div className="kids-product-info">
                                    <h3>{product.name}</h3>
                                    <div className="kids-product-price">
                                        <span className="kids-current-price">₹{product.price.toLocaleString()}</span>
                                        {product.originalPrice && (
                                            <span className="kids-original-price">₹{product.originalPrice.toLocaleString()}</span>
                                        )}
                                    </div>
                                    <div className="kids-product-meta">
                                        <span className="kids-product-occasion">{product.occasion}</span>
                                        <span className="kids-product-gender">{product.gender}</span>
                                    </div>
                                    <button className="kids-add-to-cart">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KidsCollectionPage;