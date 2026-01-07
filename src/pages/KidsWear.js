import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './KidsWear.css';
import { FaStar, FaFilter, FaSortAmountDown, FaShoppingBag, FaArrowRight } from 'react-icons/fa';

const KidsWear = () => {
    const [filterOpen, setFilterOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('all');

    // KIDS CATEGORIES FOR QUICK NAVIGATION
    const kidsCategories = [
        {
            id: 1,
            title: 'Kids Suits',
            image: 'https://images.unsplash.com/photo-1599423423927-a2c777b40f35?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            path: '/kids-suits',
            description: 'Wedding, Formal & Party Suits',
            count: '28 Products',
            badge: 'NEW'
        },
        {
            id: 2,
            title: 'Kids Sherwanis',
            image: 'https://images.unsplash.com/photo-1539533113205-f5ae7ad028e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            path: '/kids-sherwanis',
            description: 'Traditional Wedding Wear',
            count: '15 Products',
            badge: 'POPULAR'
        },
        {
            id: 3,
            title: 'Kids Blazers',
            image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            path: '/kids-blazers',
            description: 'Party & Formal Blazers',
            count: '22 Products',
            badge: 'TRENDING'
        },
        {
            id: 4,
            title: 'Kids Kurtas',
            image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            path: '/kids-kurtas',
            description: 'Traditional & Casual Kurta Sets',
            count: '35 Products',
            badge: 'BESTSELLER'
        },
        {
            id: 5,
            title: 'Kids Pagadis',
            image: 'https://images.unsplash.com/photo-1620207418302-439b387441b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            path: '/kids-pagadis',
            description: 'Traditional Headwear',
            count: '18 Products',
            badge: 'TRADITIONAL'
        },
        {
            id: 6,
            title: 'Kids Shoes',
            image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            path: '/kids-shoes',
            description: 'Formal & Traditional Footwear',
            count: '42 Products',
            badge: 'ESSENTIAL'
        }
    ];

    const categories = [
        { id: 'all', name: 'All Products' },
        { id: 'suits', name: 'Suits' },
        { id: 'sherwanis', name: 'Sherwanis' },
        { id: 'blazers', name: 'Blazers' },
        { id: 'kurtas', name: 'Kurtas' },
        { id: 'pagadis', name: 'Pagadis' },
        { id: 'shoes', name: 'Shoes' },
        { id: 'accessories', name: 'Accessories' }
    ];

    const products = [
        {
            id: 1,
            title: "Kids Premium Wedding Sherwani",
            category: "sherwanis",
            price: 89.99,
            oldPrice: 119.99,
            rating: 4.8,
            image: "https://images.unsplash.com/photo-1599423423927-a2c777b40f35?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            age: "5-8 Years",
            color: "Gold & Red",
            link: '/product/kids-sherwanis/1'
        },
        {
            id: 2,
            title: "Kids Formal Suit Set",
            category: "suits",
            price: 59.99,
            oldPrice: 79.99,
            rating: 4.6,
            image: "https://images.unsplash.com/photo-1539533113205-f5ae7ad028e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            age: "3-5 Years",
            color: "Navy Blue",
            link: '/product/kids-suits/2'
        },
        {
            id: 3,
            title: "Kids Party Blazer Set",
            category: "blazers",
            price: 69.99,
            oldPrice: 89.99,
            rating: 4.7,
            image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            age: "6-10 Years",
            color: "Burgundy",
            link: '/product/kids-blazers/3'
        },
        {
            id: 4,
            title: "Kids Traditional Kurta Set",
            category: "kurtas",
            price: 44.99,
            oldPrice: 59.99,
            rating: 4.5,
            image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            age: "2-4 Years",
            color: "White & Blue",
            link: '/product/kids-kurtas/4'
        },
        {
            id: 5,
            title: "Kids Silk Pagadi",
            category: "pagadis",
            price: 29.99,
            oldPrice: 39.99,
            rating: 4.4,
            image: "https://images.unsplash.com/photo-1620207418302-439b387441b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            age: "One Size",
            color: "Maroon",
            link: '/product/kids-pagadis/5'
        },
        {
            id: 6,
            title: "Kids Formal Shoes",
            category: "shoes",
            price: 39.99,
            oldPrice: 49.99,
            rating: 4.6,
            image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            age: "4-7 Years",
            color: "Black",
            link: '/product/kids-shoes/6'
        },
        {
            id: 7,
            title: "Kids Casual Jeans Set",
            category: "casual",
            price: 39.99,
            oldPrice: 49.99,
            rating: 4.3,
            image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            age: "5-7 Years",
            color: "Denim",
            link: '/product/7'
        },
        {
            id: 8,
            title: "Kids Designer Waistcoat",
            category: "accessories",
            price: 24.99,
            oldPrice: 34.99,
            rating: 4.5,
            image: "https://images.unsplash.com/photo-1544441893-675973e31985?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            age: "3-6 Years",
            color: "Grey",
            link: '/product/8'
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
        <div className="kids-wear-page">
            <div className="container">
                {/* Hero Section */}
                <div className="page-hero">
                    <h1>Kids Collection</h1>
                    <p>Adorable outfits for your little ones, combining comfort with style</p>
                </div>

                {/* Kids Categories Grid */}
                <div className="kids-categories-section">
                    <div className="section-header">
                        <h2>Shop by Category</h2>
                        <p>Explore our complete kids wear collection</p>
                    </div>
                    <div className="categories-grid">
                        {kidsCategories.map(category => (
                            <Link to={category.path} key={category.id} className="category-card">
                                <div className="category-image">
                                    <img src={category.image} alt={category.title} />
                                    <div className="category-badge">{category.badge}</div>
                                </div>
                                <div className="category-info">
                                    <h3>{category.title}</h3>
                                    <p>{category.description}</p>
                                    <div className="category-meta">
                                        <span className="product-count">{category.count}</span>
                                        <span className="explore-link">
                                            Explore <FaArrowRight />
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
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
                            <option>Age: Low to High</option>
                            <option>Age: High to Low</option>
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
                        <h4>Age Group</h4>
                        <div className="age-filters">
                            {['1-3 Years', '3-5 Years', '5-8 Years', '8-12 Years'].map(age => (
                                <button key={age} className="age-btn">{age}</button>
                            ))}
                        </div>
                    </div>
                    
                    <div className="filter-section">
                        <h4>Price Range</h4>
                        <div className="price-range">
                            <input type="range" min="0" max="150" defaultValue="75" className="price-slider" />
                            <div className="price-values">
                                <span>$0</span>
                                <span>$75</span>
                                <span>$150</span>
                            </div>
                        </div>
                    </div>
                    
                    <button className="apply-filters-btn">Apply Filters</button>
                </div>

                {/* Overlay for mobile filter */}
                {filterOpen && <div className="filter-overlay" onClick={() => setFilterOpen(false)} />}

                {/* Featured Products Grid */}
                <div className="products-section">
                    <div className="products-header">
                        <h2>Featured Products</h2>
                        <p className="product-count">{filteredProducts.length} products found</p>
                    </div>
                    
                    <div className="products-grid">
                        {filteredProducts.map(product => (
                            <div className="product-card" key={product.id}>
                                <div className="product-image">
                                    <img src={product.image} alt={product.title} />
                                    <div className="product-overlay">
                                        <Link to={product.link} className="quick-view-btn">
                                            View Details
                                        </Link>
                                        <button className="add-to-cart-btn">
                                            <FaShoppingBag /> Add to Cart
                                        </button>
                                    </div>
                                </div>
                                <div className="product-info">
                                    <div className="product-meta">
                                        <span className="product-category">{product.category}</span>
                                        <span className="product-age">{product.age}</span>
                                    </div>
                                    <Link to={product.link} className="product-title-link">
                                        <h3 className="product-title">{product.title}</h3>
                                    </Link>
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
                                    <p className="product-color">Color: {product.color}</p>
                                    <div className="product-actions">
                                        <Link to={product.link} className="view-details-btn">
                                            View Details
                                        </Link>
                                        <button className="add-to-wishlist">Add to Wishlist</button>
                                    </div>
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
                    <button className="page-btn">6</button>
                    <button className="page-btn">Next</button>
                </div>

                {/* Kids Collection Info */}
                <div className="collection-info">
                    <div className="info-text">
                        <h2>Perfect Fit for Your Little Ones</h2>
                        <p>
                            Our kids wear collection is designed with comfort, safety, and style in mind. 
                            From traditional wedding wear to casual everyday outfits, we ensure the best 
                            quality fabrics and child-friendly designs. Each piece is crafted to provide 
                            maximum comfort while looking absolutely adorable.
                        </p>
                        <div className="collection-features">
                            <div className="feature">
                                <span className="feature-icon">🧵</span>
                                <span>Child-Safe Materials</span>
                            </div>
                            <div className="feature">
                                <span className="feature-icon">👕</span>
                                <span>Easy Wash & Care</span>
                            </div>
                            <div className="feature">
                                <span className="feature-icon">📏</span>
                                <span>Perfect Fit Guarantee</span>
                            </div>
                            <div className="feature">
                                <span className="feature-icon">🎁</span>
                                <span>Gift Ready Packaging</span>
                            </div>
                        </div>
                    </div>
                    <div className="info-image">
                        <img src="https://images.unsplash.com/photo-1599423423927-a2c777b40f35?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Kids Collection" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KidsWear;