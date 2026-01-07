import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CategoryPage.css';

const MensEthnicWearPage = () => {
    const navigate = useNavigate();
    const [filters, setFilters] = useState({
        type: 'all',
        priceRange: [1000, 50000],
        occasion: 'all',
        color: 'all',
        size: 'all'
    });
    
    const products = [
        {
            id: 1,
            name: "Designer Embroidered Sherwani",
            price: 25999,
            originalPrice: 32000,
            discount: 19,
            image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            type: "sherwani",
            occasion: "wedding",
            color: "gold",
            size: ["M", "L", "XL"]
        },
        {
            id: 2,
            name: "Silk Kurta with Jacket Set",
            price: 18999,
            originalPrice: 24000,
            discount: 21,
            image: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            type: "kurta-set",
            occasion: "festival",
            color: "maroon",
            size: ["S", "M", "L"]
        },
        {
            id: 3,
            name: "Jodhpuri Indo Western Suit",
            price: 22999,
            originalPrice: 28000,
            discount: 18,
            image: "https://images.unsplash.com/photo-1536766820879-059fec98ec0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            type: "indo-western",
            occasion: "reception",
            color: "navy",
            size: ["L", "XL", "XXL"]
        },
        {
            id: 4,
            name: "Traditional Cotton Kurta",
            price: 4999,
            originalPrice: 6500,
            discount: 23,
            image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            type: "kurta",
            occasion: "casual",
            color: "white",
            size: ["S", "M", "L", "XL"]
        },
        {
            id: 5,
            name: "Royal Wedding Sherwani",
            price: 34999,
            originalPrice: 45000,
            discount: 22,
            image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            type: "sherwani",
            occasion: "wedding",
            color: "ivory",
            size: ["M", "L", "XL", "XXL"]
        },
        {
            id: 6,
            name: "Printed Pathani Suit",
            price: 7999,
            originalPrice: 11000,
            discount: 27,
            image: "https://images.unsplash.com/photo-1520006403909-838d6b92c22e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            type: "pathani",
            occasion: "festival",
            color: "blue",
            size: ["S", "M", "L"]
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

    const handleQuickView = (e, productId) => {
        e.stopPropagation();
        console.log('Quick view for product:', productId);
    };

    const filteredProducts = products.filter(product => {
        if (filters.type !== 'all' && product.type !== filters.type) return false;
        if (filters.occasion !== 'all' && product.occasion !== filters.occasion) return false;
        if (filters.color !== 'all' && product.color !== filters.color) return false;
        if (filters.size !== 'all' && !product.size.includes(filters.size)) return false;
        if (product.price < filters.priceRange[0] || product.price > filters.priceRange[1]) return false;
        return true;
    });

    return (
        <div className="category-page">
            {/* Breadcrumb */}
            <div className="category-breadcrumb">
                <div className="category-breadcrumb-container">
                    <span>Home</span>
                    <span className="breadcrumb-separator">/</span>
                    <span>Collections</span>
                    <span className="breadcrumb-separator">/</span>
                    <span className="breadcrumb-current">Men's Ethnic Wear</span>
                </div>
            </div>

            {/* Header - SEPARATE from content grid */}
            <div className="category-header-section">
                <div className="category-header-container">
                    <h1 className="category-header-title">Men's Ethnic Wear</h1>
                    <p className="category-header-description">
                        Premium sherwanis, kurtas, and traditional outfits for men
                    </p>
                    <div className="category-results-count">
                        {filteredProducts.length} products found
                    </div>
                </div>
            </div>

            {/* Main Content Grid - This contains sidebar + products ONLY */}
            <div className="category-main-container">
                <div className="category-content-wrapper">
                    {/* Filters Sidebar */}
                    <div className="category-filters-sidebar">
                        <div className="category-filter-section">
                            <h3 className="category-filter-title">Type</h3>
                            <div className="category-filter-options">
                                <button 
                                    className={`category-filter-button ${filters.type === 'all' ? 'active' : ''}`}
                                    onClick={() => handleFilterChange('type', 'all')}
                                >
                                    All
                                </button>
                                <button 
                                    className={`category-filter-button ${filters.type === 'sherwani' ? 'active' : ''}`}
                                    onClick={() => handleFilterChange('type', 'sherwani')}
                                >
                                    Sherwani
                                </button>
                                <button 
                                    className={`category-filter-button ${filters.type === 'kurta' ? 'active' : ''}`}
                                    onClick={() => handleFilterChange('type', 'kurta')}
                                >
                                    Kurta
                                </button>
                                <button 
                                    className={`category-filter-button ${filters.type === 'kurta-set' ? 'active' : ''}`}
                                    onClick={() => handleFilterChange('type', 'kurta-set')}
                                >
                                    Kurta Set
                                </button>
                                <button 
                                    className={`category-filter-button ${filters.type === 'indo-western' ? 'active' : ''}`}
                                    onClick={() => handleFilterChange('type', 'indo-western')}
                                >
                                    Indo Western
                                </button>
                            </div>
                        </div>

                        <div className="category-filter-section">
                            <h3 className="category-filter-title">Price Range</h3>
                            <div className="category-price-range">
                                <input 
                                    type="range" 
                                    min="1000" 
                                    max="50000" 
                                    step="1000"
                                    value={filters.priceRange[1]}
                                    onChange={(e) => handleFilterChange('priceRange', [filters.priceRange[0], parseInt(e.target.value)])}
                                />
                                <div className="category-price-values">
                                    <span>₹{filters.priceRange[0].toLocaleString()}</span>
                                    <span>₹{filters.priceRange[1].toLocaleString()}</span>
                                </div>
                            </div>
                        </div>

                        <div className="category-filter-section">
                            <h3 className="category-filter-title">Occasion</h3>
                            <div className="category-filter-options">
                                <button 
                                    className={`category-filter-button ${filters.occasion === 'all' ? 'active' : ''}`}
                                    onClick={() => handleFilterChange('occasion', 'all')}
                                >
                                    All
                                </button>
                                <button 
                                    className={`category-filter-button ${filters.occasion === 'wedding' ? 'active' : ''}`}
                                    onClick={() => handleFilterChange('occasion', 'wedding')}
                                >
                                    Wedding
                                </button>
                                <button 
                                    className={`category-filter-button ${filters.occasion === 'reception' ? 'active' : ''}`}
                                    onClick={() => handleFilterChange('occasion', 'reception')}
                                >
                                    Reception
                                </button>
                                <button 
                                    className={`category-filter-button ${filters.occasion === 'festival' ? 'active' : ''}`}
                                    onClick={() => handleFilterChange('occasion', 'festival')}
                                >
                                    Festival
                                </button>
                                <button 
                                    className={`category-filter-button ${filters.occasion === 'casual' ? 'active' : ''}`}
                                    onClick={() => handleFilterChange('occasion', 'casual')}
                                >
                                    Casual
                                </button>
                            </div>
                        </div>

                        <div className="category-filter-section">
                            <h3 className="category-filter-title">Color</h3>
                            <div className="category-color-filters">
                                <button className={`category-color-button category-color-gold ${filters.color === 'gold' ? 'active' : ''}`} onClick={() => handleFilterChange('color', 'gold')}></button>
                                <button className={`category-color-button category-color-maroon ${filters.color === 'maroon' ? 'active' : ''}`} onClick={() => handleFilterChange('color', 'maroon')}></button>
                                <button className={`category-color-button category-color-navy ${filters.color === 'navy' ? 'active' : ''}`} onClick={() => handleFilterChange('color', 'navy')}></button>
                                <button className={`category-color-button category-color-ivory ${filters.color === 'ivory' ? 'active' : ''}`} onClick={() => handleFilterChange('color', 'ivory')}></button>
                                <button className={`category-color-button category-color-blue ${filters.color === 'blue' ? 'active' : ''}`} onClick={() => handleFilterChange('color', 'blue')}></button>
                                <button className={`category-color-button category-color-white ${filters.color === 'white' ? 'active' : ''}`} onClick={() => handleFilterChange('color', 'white')}></button>
                            </div>
                        </div>

                        <button 
                            className="category-clear-filters"
                            onClick={() => setFilters({
                                type: 'all',
                                priceRange: [1000, 50000],
                                occasion: 'all',
                                color: 'all',
                                size: 'all'
                            })}
                        >
                            Clear All Filters
                        </button>
                    </div>

                    {/* Products Grid */}
                    <div className="category-products-grid">
                        {filteredProducts.map(product => (
                            <div 
                                className="category-product-card" 
                                key={product.id}
                                onClick={() => handleProductClick(product.id)}
                                style={{ cursor: 'pointer' }}
                            >
                                <div className="category-product-image">
                                    <img src={product.image} alt={product.name} />
                                    {product.discount && (
                                        <span className="category-product-badge">
                                            {product.discount}% OFF
                                        </span>
                                    )}
                                    <button 
                                        className="category-quick-view"
                                        onClick={(e) => handleQuickView(e, product.id)}
                                    >
                                        Quick View
                                    </button>
                                </div>
                                <div className="category-product-info">
                                    <h3>{product.name}</h3>
                                    <div className="category-product-price">
                                        <span className="category-current-price">₹{product.price.toLocaleString()}</span>
                                        {product.originalPrice && (
                                            <span className="category-original-price">₹{product.originalPrice.toLocaleString()}</span>
                                        )}
                                    </div>
                                    <div className="category-product-meta">
                                        <span className="category-product-occasion">{product.occasion}</span>
                                        <span className="category-product-color">Color: {product.color}</span>
                                    </div>
                                    <button className="category-add-to-cart">
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

export default MensEthnicWearPage;