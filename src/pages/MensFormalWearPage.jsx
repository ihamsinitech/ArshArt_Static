import React, { useState } from 'react';
import './MensFormalWearPage.css';

const MensFormalWearPage = () => {
    const [filters, setFilters] = useState({
        type: 'all',
        priceRange: [2000, 30000],
        fabric: 'all',
        color: 'all'
    });
    
    const products = [
        {
            id: 1,
            name: "Premium Business Suit",
            price: 18999,
            originalPrice: 25000,
            discount: 24,
            image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            type: "suit",
            fabric: "wool",
            color: "navy"
        },
        {
            id: 2,
            name: "Designer Blazer",
            price: 12999,
            originalPrice: 18000,
            discount: 28,
            image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            type: "blazer",
            fabric: "polyester",
            color: "black"
        },
        {
            id: 3,
            name: "Formal Trousers Set",
            price: 8999,
            originalPrice: 12000,
            discount: 25,
            image: "https://images.unsplash.com/photo-1520975916090-3105956dac38?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            type: "trouser-set",
            fabric: "cotton",
            color: "grey"
        },
        {
            id: 4,
            name: "Executive Formal Shirt",
            price: 3999,
            originalPrice: 5500,
            discount: 27,
            image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            type: "shirt",
            fabric: "cotton",
            color: "white"
        },
        {
            id: 5,
            name: "Luxury Tuxedo",
            price: 29999,
            originalPrice: 40000,
            discount: 25,
            image: "https://images.unsplash.com/photo-1536766820879-059fec98ec0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            type: "tuxedo",
            fabric: "silk",
            color: "black"
        },
        {
            id: 6,
            name: "Casual Blazer",
            price: 14999,
            originalPrice: 20000,
            discount: 25,
            image: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            type: "blazer",
            fabric: "linen",
            color: "beige"
        }
    ];

    const handleFilterChange = (filterType, value) => {
        setFilters(prev => ({
            ...prev,
            [filterType]: value
        }));
    };

    const filteredProducts = products.filter(product => {
        if (filters.type !== 'all' && product.type !== filters.type) return false;
        if (filters.fabric !== 'all' && product.fabric !== filters.fabric) return false;
        if (filters.color !== 'all' && product.color !== filters.color) return false;
        if (product.price < filters.priceRange[0] || product.price > filters.priceRange[1]) return false;
        return true;
    });

    return (
        <div className="formal-page">
            {/* Breadcrumb */}
            <div className="formal-breadcrumb">
                <div className="formal-breadcrumb-container">
                    <span>Home</span>
                    <span className="formal-separator">/</span>
                    <span>Collections</span>
                    <span className="formal-separator">/</span>
                    <span className="formal-current">Men's Formal Wear</span>
                </div>
            </div>

            {/* Header */}
            <div className="formal-header-section">
                <div className="formal-header-container">
                    <h1 className="formal-header-title">Men's Formal Wear</h1>
                    <p className="formal-header-description">
                        Elegant suits, blazers, and office attire for the modern man
                    </p>
                    <div className="formal-results-count">
                        {filteredProducts.length} products found
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="formal-main-container">
                <div className="formal-content-wrapper">
                    {/* Filters Sidebar */}
                    <div className="formal-filters-sidebar">
                        <div className="formal-filter-section">
                            <h3 className="formal-filter-title">Type</h3>
                            <div className="formal-filter-options">
                                <button className={`formal-filter-btn ${filters.type === 'all' ? 'active' : ''}`} onClick={() => handleFilterChange('type', 'all')}>
                                    All
                                </button>
                                <button className={`formal-filter-btn ${filters.type === 'suit' ? 'active' : ''}`} onClick={() => handleFilterChange('type', 'suit')}>
                                    Suits
                                </button>
                                <button className={`formal-filter-btn ${filters.type === 'blazer' ? 'active' : ''}`} onClick={() => handleFilterChange('type', 'blazer')}>
                                    Blazers
                                </button>
                                <button className={`formal-filter-btn ${filters.type === 'tuxedo' ? 'active' : ''}`} onClick={() => handleFilterChange('type', 'tuxedo')}>
                                    Tuxedos
                                </button>
                                <button className={`formal-filter-btn ${filters.type === 'shirt' ? 'active' : ''}`} onClick={() => handleFilterChange('type', 'shirt')}>
                                    Shirts
                                </button>
                            </div>
                        </div>

                        <div className="formal-filter-section">
                            <h3 className="formal-filter-title">Fabric</h3>
                            <div className="formal-filter-options">
                                <button className={`formal-filter-btn ${filters.fabric === 'all' ? 'active' : ''}`} onClick={() => handleFilterChange('fabric', 'all')}>
                                    All
                                </button>
                                <button className={`formal-filter-btn ${filters.fabric === 'wool' ? 'active' : ''}`} onClick={() => handleFilterChange('fabric', 'wool')}>
                                    Wool
                                </button>
                                <button className={`formal-filter-btn ${filters.fabric === 'polyester' ? 'active' : ''}`} onClick={() => handleFilterChange('fabric', 'polyester')}>
                                    Polyester
                                </button>
                                <button className={`formal-filter-btn ${filters.fabric === 'cotton' ? 'active' : ''}`} onClick={() => handleFilterChange('fabric', 'cotton')}>
                                    Cotton
                                </button>
                                <button className={`formal-filter-btn ${filters.fabric === 'silk' ? 'active' : ''}`} onClick={() => handleFilterChange('fabric', 'silk')}>
                                    Silk
                                </button>
                                <button className={`formal-filter-btn ${filters.fabric === 'linen' ? 'active' : ''}`} onClick={() => handleFilterChange('fabric', 'linen')}>
                                    Linen
                                </button>
                            </div>
                        </div>

                        <button 
                            className="formal-clear-filters"
                            onClick={() => setFilters({
                                type: 'all',
                                priceRange: [2000, 30000],
                                fabric: 'all',
                                color: 'all'
                            })}
                        >
                            Clear All Filters
                        </button>
                    </div>

                    {/* Products Grid */}
                    <div className="formal-products-grid">
                        {filteredProducts.map(product => (
                            <div className="formal-product-card" key={product.id}>
                                <div className="formal-product-image">
                                    <img src={product.image} alt={product.name} />
                                    {product.discount && (
                                        <span className="formal-product-badge">
                                            {product.discount}% OFF
                                        </span>
                                    )}
                                </div>
                                <div className="formal-product-info">
                                    <h3>{product.name}</h3>
                                    <div className="formal-product-price">
                                        <span className="formal-current-price">₹{product.price.toLocaleString()}</span>
                                        {product.originalPrice && (
                                            <span className="formal-original-price">₹{product.originalPrice.toLocaleString()}</span>
                                        )}
                                    </div>
                                    <div className="formal-product-meta">
                                        <span className="formal-product-fabric">{product.fabric}</span>
                                        <span className="formal-product-color">{product.color}</span>
                                    </div>
                                    <button className="formal-add-to-cart">
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

export default MensFormalWearPage;