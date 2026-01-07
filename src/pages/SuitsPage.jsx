// // import React, { useState } from 'react';
// // import './SuitsPage.css';
// // import { FaStar, FaStarHalfAlt, FaRegStar, FaHeart, FaShoppingBag, FaTruck, FaUndo, FaShieldAlt } from 'react-icons/fa';
// // import { Link } from 'react-router-dom';

// // const SuitsPage = () => {
// //     const [wishlisted, setWishlisted] = useState({});

// //     const suits = [
// //         {
// //             id: 1,
// //             title: "Premium Silk Embroidered Suit",
// //             price: 299.99,
// //             oldPrice: 399.99,
// //             rating: 4.8,
// //             reviews: 124,
// //             description: "Luxurious silk suit with intricate embroidery for formal occasions.",
// //             color: "Navy Blue",
// //             sizes: ['S', 'M', 'L', 'XL'],
// //             inStock: true,
// //             stockCount: 15,
// //             image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
// //             badge: "PREMIUM",
// //             type: "Formal"
// //         },
// //         {
// //             id: 2,
// //             title: "Wool Blend Business Suit",
// //             price: 249.99,
// //             oldPrice: 329.99,
// //             rating: 4.6,
// //             reviews: 89,
// //             description: "Professional business suit perfect for office wear and meetings.",
// //             color: "Charcoal Gray",
// //             sizes: ['M', 'L', 'XL', 'XXL'],
// //             inStock: true,
// //             stockCount: 22,
// //             image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
// //             badge: "BUSINESS",
// //             type: "Office"
// //         },
// //         {
// //             id: 3,
// //             title: "Designer Wedding Suit",
// //             price: 449.99,
// //             oldPrice: 599.99,
// //             rating: 4.9,
// //             reviews: 67,
// //             description: "Exclusive wedding suit with heavy embroidery and premium fabric.",
// //             color: "Ivory White",
// //             sizes: ['S', 'M', 'L', 'XL'],
// //             inStock: true,
// //             stockCount: 8,
// //             image: "https://images.unsplash.com/photo-1539533113205-f5ae7ad028e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
// //             badge: "WEDDING",
// //             type: "Wedding"
// //         },
// //         {
// //             id: 4,
// //             title: "Linen Summer Suit",
// //             price: 199.99,
// //             oldPrice: 269.99,
// //             rating: 4.5,
// //             reviews: 112,
// //             description: "Lightweight linen suit perfect for summer weddings and parties.",
// //             color: "Beige",
// //             sizes: ['S', 'M', 'L', 'XL'],
// //             inStock: true,
// //             stockCount: 30,
// //             image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
// //             badge: "SUMMER",
// //             type: "Casual"
// //         },
// //         {
// //             id: 5,
// //             title: "Three Piece Tuxedo Suit",
// //             price: 379.99,
// //             oldPrice: 499.99,
// //             rating: 4.7,
// //             reviews: 78,
// //             description: "Classic three-piece tuxedo for black-tie events and formal dinners.",
// //             color: "Black",
// //             sizes: ['M', 'L', 'XL'],
// //             inStock: true,
// //             stockCount: 12,
// //             image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
// //             badge: "TUXEDO",
// //             type: "Formal"
// //         },
// //         {
// //             id: 6,
// //             title: "Cotton Blend Casual Suit",
// //             price: 179.99,
// //             oldPrice: 239.99,
// //             rating: 4.4,
// //             reviews: 95,
// //             description: "Comfortable cotton blend suit for everyday casual wear.",
// //             color: "Light Gray",
// //             sizes: ['S', 'M', 'L', 'XL', 'XXL'],
// //             inStock: true,
// //             stockCount: 35,
// //             image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
// //             badge: "CASUAL",
// //             type: "Casual"
// //         },
// //         {
// //             id: 7,
// //             title: "Velvet Evening Suit",
// //             price: 329.99,
// //             oldPrice: 449.99,
// //             rating: 4.8,
// //             reviews: 56,
// //             description: "Luxurious velvet suit for evening parties and special events.",
// //             color: "Burgundy",
// //             sizes: ['M', 'L', 'XL'],
// //             inStock: true,
// //             stockCount: 10,
// //             image: "https://images.unsplash.com/photo-1539533113205-f5ae7ad028e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
// //             badge: "EVENING",
// //             type: "Party"
// //         },
// //         {
// //             id: 8,
// //             title: "Double Breasted Navy Suit",
// //             price: 279.99,
// //             oldPrice: 369.99,
// //             rating: 4.6,
// //             reviews: 103,
// //             description: "Classic double breasted navy suit with modern tailoring.",
// //             color: "Navy Blue",
// //             sizes: ['S', 'M', 'L'],
// //             inStock: true,
// //             stockCount: 18,
// //             image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
// //             badge: "CLASSIC",
// //             type: "Formal"
// //         }
// //     ];

// //     const renderStars = (rating) => {
// //         const stars = [];
// //         const fullStars = Math.floor(rating);
// //         const hasHalfStar = rating % 1 >= 0.5;

// //         for (let i = 1; i <= 5; i++) {
// //             if (i <= fullStars) {
// //                 stars.push(<FaStar key={i} className="star filled" />);
// //             } else if (i === fullStars + 1 && hasHalfStar) {
// //                 stars.push(<FaStarHalfAlt key={i} className="star half" />);
// //             } else {
// //                 stars.push(<FaRegStar key={i} className="star" />);
// //             }
// //         }
// //         return stars;
// //     };

// //     const toggleWishlist = (productId) => {
// //         setWishlisted(prev => ({
// //             ...prev,
// //             [productId]: !prev[productId]
// //         }));
// //     };

// //     const getStockStatus = (count) => {
// //         if (count > 10) return { text: 'In Stock', class: 'in-stock' };
// //         if (count > 0) return { text: 'Low Stock', class: 'low-stock' };
// //         return { text: 'Out of Stock', class: 'out-of-stock' };
// //     };

// //     return (
// //         <div className="suits-page">
// //             <div className="container">
// //                 <div className="breadcrumb">
// //                     <Link to="/">Home</Link>
// //                     <span>/</span>
// //                     <Link to="/mens-wear">Men's Wear</Link>
// //                     <span>/</span>
// //                     <span>Suits</span>
// //                 </div>

// //                 <div className="page-header">
// //                     <h1>Premium Suits Collection</h1>
// //                     <p>Luxurious suits for every occasion - Formal, Wedding, Business & Casual</p>
// //                     <div className="collection-highlights">
// //                         <span className="highlight">Premium Fabrics</span>
// //                         <span className="highlight">Perfect Fit</span>
// //                         <span className="highlight">Custom Tailoring</span>
// //                     </div>
// //                 </div>

// //                 <div className="stats-bar">
// //                     <div className="stat">
// //                         <span className="stat-number">{suits.length}</span>
// //                         <span className="stat-label">Suits Available</span>
// //                     </div>
// //                     <div className="stat">
// //                         <span className="stat-number">4.7</span>
// //                         <span className="stat-label">Avg. Rating</span>
// //                     </div>
// //                     <div className="stat">
// //                         <span className="stat-number">S-XXL</span>
// //                         <span className="stat-label">Sizes Available</span>
// //                     </div>
// //                     <div className="stat">
// //                         <span className="stat-number">Free</span>
// //                         <span className="stat-label">Alterations</span>
// //                     </div>
// //                 </div>

// //                 <div className="filter-bar">
// //                     <div className="filter-section">
// //                         <h4>Filter by Type:</h4>
// //                         <div className="filter-options">
// //                             <button className="filter-btn active">All Suits</button>
// //                             <button className="filter-btn">Formal</button>
// //                             <button className="filter-btn">Wedding</button>
// //                             <button className="filter-btn">Business</button>
// //                             <button className="filter-btn">Casual</button>
// //                             <button className="filter-btn">Party</button>
// //                         </div>
// //                     </div>
// //                     <div className="sort-section">
// //                         <select className="sort-select">
// //                             <option>Sort by: Featured</option>
// //                             <option>Price: Low to High</option>
// //                             <option>Price: High to Low</option>
// //                             <option>Rating: High to Low</option>
// //                             <option>Newest First</option>
// //                         </select>
// //                     </div>
// //                 </div>

// //                 <div className="products-grid">
// //                     {suits.map(product => {
// //                         const stockStatus = getStockStatus(product.stockCount);
                        
// //                         return (
// //                             <div className="product-card" key={product.id}>
// //                                 <div className="product-image">
// //                                     <img src={product.image} alt={product.title} />
// //                                     <div className="product-badge suit-badge">{product.badge}</div>
// //                                     <button 
// //                                         className={`wishlist-icon ${wishlisted[product.id] ? 'active' : ''}`}
// //                                         onClick={() => toggleWishlist(product.id)}
// //                                     >
// //                                         <FaHeart />
// //                                     </button>
// //                                     <div className="stock-badge">
// //                                         <span className={stockStatus.class}>{stockStatus.text}</span>
// //                                     </div>
// //                                 </div>

// //                                 <div className="product-details">
// //                                     <h3 className="product-title">{product.title}</h3>
                                    
// //                                     <div className="product-type-badge">
// //                                         <span className="type-label">{product.type}</span>
// //                                     </div>
                                    
// //                                     <div className="product-rating">
// //                                         <div className="stars">
// //                                             {renderStars(product.rating)}
// //                                             <span>({product.rating})</span>
// //                                         </div>
// //                                         <span className="reviews">{product.reviews} reviews</span>
// //                                     </div>

// //                                     <p className="product-description">{product.description}</p>

// //                                     <div className="product-price">
// //                                         <span className="current-price">${product.price.toFixed(2)}</span>
// //                                         <span className="old-price">${product.oldPrice.toFixed(2)}</span>
// //                                         <span className="discount">
// //                                             Save ${(product.oldPrice - product.price).toFixed(2)}
// //                                         </span>
// //                                     </div>

// //                                     <div className="product-info">
// //                                         <div className="info-row">
// //                                             <span className="info-label">Color:</span>
// //                                             <span className="info-value">{product.color}</span>
// //                                         </div>
// //                                         <div className="info-row">
// //                                             <span className="info-label">Sizes:</span>
// //                                             <span className="info-value">{product.sizes.join(', ')}</span>
// //                                         </div>
// //                                         <div className="info-row">
// //                                             <span className="info-label">Type:</span>
// //                                             <span className="info-value type-value">{product.type}</span>
// //                                         </div>
// //                                         <div className="info-row">
// //                                             <span className="info-label">Stock:</span>
// //                                             <span className={`info-value ${stockStatus.class}`}>
// //                                                 {product.stockCount} units
// //                                             </span>
// //                                         </div>
// //                                     </div>

// //                                     <div className="quick-actions">
// //                                         <button className="add-to-cart-btn">
// //                                             <FaShoppingBag /> Add to Cart
// //                                         </button>
// //                                         <Link to={`/product/suits/${product.id}`} className="view-details-btn">
// //                                             View Details
// //                                         </Link>
// //                                     </div>

// //                                     <div className="product-policies">
// //                                         <div className="policy">
// //                                             <FaTruck />
// //                                             <span>Free Shipping</span>
// //                                         </div>
// //                                         <div className="policy">
// //                                             <FaUndo />
// //                                             <span>30 Days Return</span>
// //                                         </div>
// //                                     </div>
// //                                 </div>
// //                             </div>
// //                         );
// //                     })}
// //                 </div>

// //                 <div className="pagination">
// //                     <button className="page-btn active">1</button>
// //                     <button className="page-btn">2</button>
// //                     <button className="page-btn">3</button>
// //                     <span className="page-dots">...</span>
// //                     <button className="page-btn">8</button>
// //                     <button className="page-btn next-btn">Next →</button>
// //                 </div>

// //                 <div className="collection-info">
// //                     <h3>The Art of Tailored Suits</h3>
// //                     <div className="collection-details">
// //                         <div className="collection-text">
// //                             <p>
// //                                 Our premium suits collection features meticulously crafted garments 
// //                                 using the finest fabrics and tailoring techniques. Each suit is 
// //                                 designed to provide the perfect fit and exceptional comfort for 
// //                                 every occasion.
// //                             </p>
// //                             <div className="collection-features">
// //                                 <div className="collection-feature">
// //                                     <span className="feature-icon">✂️</span>
// //                                     <span>Expert Tailoring</span>
// //                                 </div>
// //                                 <div className="collection-feature">
// //                                     <span className="feature-icon">👔</span>
// //                                     <span>Premium Fabrics</span>
// //                                 </div>
// //                                 <div className="collection-feature">
// //                                     <span className="feature-icon">🎯</span>
// //                                     <span>Perfect Fit Guarantee</span>
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div className="collection-image">
// //                             <img src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
// //                                  alt="Tailored Suits" />
// //                         </div>
// //                     </div>
// //                 </div>

// //                 <div className="additional-info">
// //                     <h3>Why Choose Our Suits?</h3>
// //                     <div className="features-grid">
// //                         <div className="feature">
// //                             <FaShieldAlt className="feature-icon" />
// //                             <h4>Premium Quality</h4>
// //                             <p>Made with finest fabrics and expert craftsmanship</p>
// //                         </div>
// //                         <div className="feature">
// //                             <FaTruck className="feature-icon" />
// //                             <h4>Free Alterations</h4>
// //                             <p>Free tailoring services for perfect fit</p>
// //                         </div>
// //                         <div className="feature">
// //                             <FaUndo className="feature-icon" />
// //                             <h4>Easy Returns</h4>
// //                             <p>30-day return policy with free returns</p>
// //                         </div>
// //                         <div className="feature">
// //                             <FaShieldAlt className="feature-icon" />
// //                             <h4>Expert Tailoring</h4>
// //                             <p>Custom tailoring available for all suits</p>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };

// // export default SuitsPage;

// import React, { useState } from 'react';
// import './SuitsPage.css';
// import { 
//     FaStar, 
//     FaHeart, 
//     FaShoppingBag, 
//     FaTruck, 
//     FaUndo, 
//     FaShieldAlt,
//     FaFilter,
//     FaChevronDown,
//     FaChevronUp,
//     FaFire,
//     FaTimes,
//     FaTag,
//     FaLeaf,
//     FaCheckCircle,
//     FaRuler,
//     FaClock,
//     FaGem
// } from 'react-icons/fa';
// import { Link } from 'react-router-dom';

// const SuitsPage = () => {
//     const [wishlisted, setWishlisted] = useState({});
//     const [selectedFilters, setSelectedFilters] = useState({
//         category: 'all',
//         size: [],
//         priceRange: [0, 5000],
//         colors: []
//     });
//     const [showFilters, setShowFilters] = useState(false);
//     const [sortBy, setSortBy] = useState('featured');

//     const suits = [
//         {
//             id: 1,
//             title: "Tom Ford Black Label Silk Suit",
//             price: 2999.99,
//             oldPrice: 3999.99,
//             rating: 4.9,
//             reviews: 287,
//             description: "Italian silk with Milanese tailoring, peak lapels",
//             color: "Midnight Black",
//             colors: ["#000000", "#1C1C1C"],
//             sizes: ['48R', '50R', '52R', '54R', '56R'],
//             inStock: true,
//             stockCount: 5,
//             image: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//             badge: "PREMIUM",
//             type: "Formal",
//             fabric: "Italian Silk",
//             fit: "Slim Fit",
//             delivery: "Express 2-3 Days",
//             exclusive: true,
//             trending: true
//         },
//         {
//             id: 2,
//             title: "Brioni Super 150s Wool Business Suit",
//             price: 2499.99,
//             oldPrice: 3299.99,
//             rating: 4.8,
//             reviews: 154,
//             description: "Super 150s wool for executive elegance",
//             color: "Charcoal Gray",
//             colors: ["#36454F", "#5D6D7E"],
//             sizes: ['46R', '48R', '50R', '52R', '54R', '56R'],
//             inStock: true,
//             stockCount: 12,
//             image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//             badge: "BUSINESS",
//             type: "Business",
//             fabric: "Super 150s Wool",
//             fit: "Classic Fit",
//             delivery: "Next Day",
//             exclusive: false,
//             trending: true
//         },
//         {
//             id: 3,
//             title: "Ermenegildo Zegna Bespoke Wedding Tuxedo",
//             price: 4499.99,
//             oldPrice: 5999.99,
//             rating: 5.0,
//             reviews: 89,
//             description: "Bespoke wedding suit with silk satin lapels",
//             color: "Ivor White",
//             colors: ["#FFFFF0", "#FAF0E6"],
//             sizes: ['48R', '50R', '52R', '54R'],
//             inStock: true,
//             stockCount: 3,
//             image: "https://images.unsplash.com/photo-1539533113205-f5ae7ad028e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//             badge: "WEDDING",
//             type: "Wedding",
//             fabric: "Cashmere Blend",
//             fit: "Bespoke",
//             delivery: "5-7 Days Tailoring",
//             exclusive: true,
//             trending: true
//         },
//         {
//             id: 4,
//             title: "Loro Piana Summer Linen Collection",
//             price: 2199.99,
//             oldPrice: 2999.99,
//             rating: 4.7,
//             reviews: 132,
//             description: "Summer-weight linen for Mediterranean elegance",
//             color: "Cream Beige",
//             colors: ["#F5F5DC", "#FAF0E6"],
//             sizes: ['48R', '50R', '52R', '54R', '56R'],
//             inStock: true,
//             stockCount: 8,
//             image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//             badge: "SUMMER",
//             type: "Casual",
//             fabric: "Premium Linen",
//             fit: "Relaxed Fit",
//             delivery: "3-4 Days",
//             exclusive: true,
//             trending: false
//         },
//         {
//             id: 5,
//             title: "Giorgio Armani Black Tie Tuxedo",
//             price: 3299.99,
//             oldPrice: 4499.99,
//             rating: 4.8,
//             reviews: 98,
//             description: "Black tie perfection with grosgrain lapels",
//             color: "Onyx Black",
//             colors: ["#0A0A0A", "#2C2C2C"],
//             sizes: ['48R', '50R', '52R'],
//             inStock: true,
//             stockCount: 6,
//             image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//             badge: "TUXEDO",
//             type: "Formal",
//             fabric: "Wool-Silk Blend",
//             fit: "Modern Fit",
//             delivery: "Express 2-3 Days",
//             exclusive: false,
//             trending: true
//         },
//         {
//             id: 6,
//             title: "Brunello Cucinelli Unstructured Cashmere",
//             price: 3999.99,
//             oldPrice: 5299.99,
//             rating: 4.6,
//             reviews: 76,
//             description: "Unstructured cashmere for contemporary luxury",
//             color: "Stone Gray",
//             colors: ["#708090", "#808080"],
//             sizes: ['48R', '50R', '52R', '54R', '56R'],
//             inStock: true,
//             stockCount: 4,
//             image: "https://images.unsplash.com/photo-1520975954732-35dd22299614?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//             badge: "LUXURY",
//             type: "Casual",
//             fabric: "Cashmere",
//             fit: "Unstructured",
//             delivery: "4-5 Days",
//             exclusive: true,
//             trending: false
//         },
//         {
//             id: 7,
//             title: "Dolce & Gabbana Velvet Evening Suit",
//             price: 3599.99,
//             oldPrice: 4799.99,
//             rating: 4.9,
//             reviews: 64,
//             description: "Evening velvet suit for gala events",
//             color: "Burgundy Wine",
//             colors: ["#800020", "#9B1B30"],
//             sizes: ['48R', '50R', '52R'],
//             inStock: true,
//             stockCount: 2,
//             image: "https://images.unsplash.com/photo-1519457431-44ccd64a579b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//             badge: "EVENING",
//             type: "Party",
//             fabric: "Italian Velvet",
//             fit: "Fitted",
//             delivery: "7-10 Days Bespoke",
//             exclusive: true,
//             trending: true
//         },
//         {
//             id: 8,
//             title: "Ralph Lauren Purple Label Double Breasted",
//             price: 2799.99,
//             oldPrice: 3699.99,
//             rating: 4.7,
//             reviews: 143,
//             description: "Double breasted navy with British tailoring",
//             color: "Royal Navy",
//             colors: ["#000080", "#1E3A8A"],
//             sizes: ['48R', '50R', '52R', '54R'],
//             inStock: true,
//             stockCount: 9,
//             image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//             badge: "CLASSIC",
//             type: "Business",
//             fabric: "British Wool",
//             fit: "Double Breasted",
//             delivery: "2-3 Days",
//             exclusive: false,
//             trending: false
//         },
//         {
//             id: 9,
//             title: "Canali Navy Blue Power Suit",
//             price: 1899.99,
//             oldPrice: 2499.99,
//             rating: 4.5,
//             reviews: 201,
//             description: "Power suit for corporate leadership",
//             color: "Navy Blue",
//             colors: ["#000080", "#1B2A4E"],
//             sizes: ['46R', '48R', '50R', '52R', '54R', '56R'],
//             inStock: true,
//             stockCount: 15,
//             image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//             badge: "EXECUTIVE",
//             type: "Business",
//             fabric: "Super 120s Wool",
//             fit: "Power Fit",
//             delivery: "Next Day",
//             exclusive: false,
//             trending: true
//         },
//         {
//             id: 10,
//             title: "Hugo Boss Modern Fit Suit",
//             price: 899.99,
//             oldPrice: 1299.99,
//             rating: 4.3,
//             reviews: 312,
//             description: "Contemporary fit for modern professionals",
//             color: "Slate Gray",
//             colors: ["#708090", "#778899"],
//             sizes: ['44R', '46R', '48R', '50R', '52R', '54R'],
//             inStock: true,
//             stockCount: 25,
//             image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//             badge: "MODERN",
//             type: "Business",
//             fabric: "Wool Blend",
//             fit: "Modern Fit",
//             delivery: "1-2 Days",
//             exclusive: false,
//             trending: true
//         },
//         {
//             id: 11,
//             title: "Alexander McQueen Avant-Garde Suit",
//             price: 5299.99,
//             oldPrice: 6999.99,
//             rating: 4.8,
//             reviews: 47,
//             description: "Avant-garde tailoring with dramatic silhouette",
//             color: "Anthracite Black",
//             colors: ["#2C3539", "#3B444B"],
//             sizes: ['48R', '50R', '52R'],
//             inStock: true,
//             stockCount: 3,
//             image: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//             badge: "DESIGNER",
//             type: "Formal",
//             fabric: "Technical Wool",
//             fit: "Extreme Slim",
//             delivery: "10-14 Days Bespoke",
//             exclusive: true,
//             trending: false
//         },
//         {
//             id: 12,
//             title: "Suitsupply Traveler Wool Suit",
//             price: 699.99,
//             oldPrice: 999.99,
//             rating: 4.4,
//             reviews: 189,
//             description: "Wrinkle-resistant wool for frequent travelers",
//             color: "Taupe Brown",
//             colors: ["#483C32", "#8B7355"],
//             sizes: ['44R', '46R', '48R', '50R', '52R', '54R', '56R'],
//             inStock: true,
//             stockCount: 18,
//             image: "https://images.unsplash.com/photo-1593032465822-44bb84df7c82?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//             badge: "TRAVEL",
//             type: "Business",
//             fabric: "Travel Wool",
//             fit: "Comfort Fit",
//             delivery: "2-3 Days",
//             exclusive: false,
//             trending: true
//         },
//         {
//             id: 13,
//             title: "Gucci Embroidered Silk Blend",
//             price: 4599.99,
//             oldPrice: 5999.99,
//             rating: 4.7,
//             reviews: 68,
//             description: "Embroidered silk blend with signature detailing",
//             color: "Emerald Green",
//             colors: ["#046307", "#228B22"],
//             sizes: ['48R', '50R', '52R'],
//             inStock: true,
//             stockCount: 4,
//             image: "https://images.unsplash.com/photo-1519457431-44ccd64a579b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//             badge: "DESIGNER",
//             type: "Party",
//             fabric: "Silk-Wool Blend",
//             fit: "Fitted",
//             delivery: "7-10 Days",
//             exclusive: true,
//             trending: true
//         },
//         {
//             id: 14,
//             title: "Burberry Check Lined Suit",
//             price: 2399.99,
//             oldPrice: 3199.99,
//             rating: 4.6,
//             reviews: 124,
//             description: "Classic suit with signature check lining",
//             color: "British Khaki",
//             colors: ["#C3B091", "#F0E68C"],
//             sizes: ['46R', '48R', '50R', '52R', '54R'],
//             inStock: true,
//             stockCount: 11,
//             image: "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//             badge: "HERITAGE",
//             type: "Business",
//             fabric: "Gabardine Wool",
//             fit: "Classic Fit",
//             delivery: "3-4 Days",
//             exclusive: true,
//             trending: false
//         },
//         {
//             id: 15,
//             title: "Prada Technical Nylon Blazer Set",
//             price: 3899.99,
//             oldPrice: 5199.99,
//             rating: 4.8,
//             reviews: 56,
//             description: "Technical nylon with innovative construction",
//             color: "Graphite Gray",
//             colors: ["#464646", "#5D5D5D"],
//             sizes: ['48R', '50R', '52R'],
//             inStock: true,
//             stockCount: 5,
//             image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//             badge: "TECHNICAL",
//             type: "Casual",
//             fabric: "Technical Nylon",
//             fit: "Architectural Fit",
//             delivery: "5-7 Days",
//             exclusive: true,
//             trending: true
//         },
//         {
//             id: 16,
//             title: "Versace Baroque Print Dinner Suit",
//             price: 5699.99,
//             oldPrice: 7499.99,
//             rating: 4.9,
//             reviews: 42,
//             description: "Baroque print silk for red carpet events",
//             color: "Royal Purple",
//             colors: ["#4B0082", "#9370DB"],
//             sizes: ['48R', '50R', '52R'],
//             inStock: true,
//             stockCount: 2,
//             image: "https://images.unsplash.com/photo-1520975954732-35dd22299614?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//             badge: "COUTURE",
//             type: "Party",
//             fabric: "Silk Jacquard",
//             fit: "Body Contour",
//             delivery: "14-21 Days Bespoke",
//             exclusive: true,
//             trending: true
//         }
//     ];

//     const filters = {
//         categories: [
//             { id: 'all', label: 'All Suits', count: suits.length },
//             { id: 'formal', label: 'Formal', count: suits.filter(s => s.type.toLowerCase().includes('formal')).length },
//             { id: 'business', label: 'Business', count: suits.filter(s => s.type.toLowerCase().includes('business')).length },
//             { id: 'wedding', label: 'Wedding', count: suits.filter(s => s.type.toLowerCase().includes('wedding')).length },
//             { id: 'casual', label: 'Casual', count: suits.filter(s => s.type.toLowerCase().includes('casual')).length },
//             { id: 'party', label: 'Party', count: suits.filter(s => s.type.toLowerCase().includes('party')).length }
//         ],
//         sizes: ['44R', '46R', '48R', '50R', '52R', '54R', '56R', '58R'],
//         priceRanges: [
//             { label: 'Under $1000', min: 0, max: 1000 },
//             { label: '$1000 - $2500', min: 1000, max: 2500 },
//             { label: '$2500 - $4000', min: 2500, max: 4000 },
//             { label: '$4000+', min: 4000, max: 10000 }
//         ],
//         colors: [
//             { name: 'Black', value: '#000000' },
//             { name: 'Navy', value: '#000080' },
//             { name: 'Gray', value: '#808080' },
//             { name: 'Charcoal', value: '#36454F' },
//             { name: 'Brown', value: '#8B4513' },
//             { name: 'Burgundy', value: '#800020' },
//             { name: 'Cream', value: '#F5F5DC' },
//             { name: 'Green', value: '#228B22' },
//             { name: 'Purple', value: '#4B0082' }
//         ]
//     };

//     const sortOptions = [
//         { id: 'featured', label: 'Featured' },
//         { id: 'price_asc', label: 'Price: Low to High' },
//         { id: 'price_desc', label: 'Price: High to Low' },
//         { id: 'rating', label: 'Top Rated' },
//         { id: 'newest', label: 'Newest First' },
//         { id: 'trending', label: 'Trending Now' },
//         { id: 'discount', label: 'Best Discount' }
//     ];

//     const toggleWishlist = (productId) => {
//         setWishlisted(prev => ({
//             ...prev,
//             [productId]: !prev[productId]
//         }));
//     };

//     const toggleFilter = (filterType, value) => {
//         setSelectedFilters(prev => {
//             if (filterType === 'category') {
//                 return { ...prev, category: value };
//             }
            
//             if (filterType === 'size') {
//                 const sizes = prev.size.includes(value)
//                     ? prev.size.filter(s => s !== value)
//                     : [...prev.size, value];
//                 return { ...prev, size: sizes };
//             }
            
//             if (filterType === 'priceRange') {
//                 return { ...prev, priceRange: value };
//             }
            
//             if (filterType === 'colors') {
//                 const colors = prev.colors.includes(value)
//                     ? prev.colors.filter(c => c !== value)
//                     : [...prev.colors, value];
//                 return { ...prev, colors: colors };
//             }
            
//             return prev;
//         });
//     };

//     const clearFilters = () => {
//         setSelectedFilters({
//             category: 'all',
//             size: [],
//             priceRange: [0, 5000],
//             colors: []
//         });
//     };

//     const getFilteredSuits = () => {
//         return suits.filter(suit => {
//             // Category filter
//             if (selectedFilters.category !== 'all' && !suit.type.toLowerCase().includes(selectedFilters.category)) {
//                 return false;
//             }
            
//             // Size filter
//             if (selectedFilters.size.length > 0 && !selectedFilters.size.some(size => suit.sizes.includes(size))) {
//                 return false;
//             }
            
//             // Price filter
//             if (suit.price < selectedFilters.priceRange[0] || suit.price > selectedFilters.priceRange[1]) {
//                 return false;
//             }
            
//             // Color filter
//             if (selectedFilters.colors.length > 0 && !selectedFilters.colors.some(color => suit.colors.includes(color))) {
//                 return false;
//             }
            
//             return true;
//         });
//     };

//     const getSortedSuits = () => {
//         const filteredSuits = getFilteredSuits();
        
//         switch(sortBy) {
//             case 'price_asc':
//                 return [...filteredSuits].sort((a, b) => a.price - b.price);
//             case 'price_desc':
//                 return [...filteredSuits].sort((a, b) => b.price - a.price);
//             case 'rating':
//                 return [...filteredSuits].sort((a, b) => b.rating - a.rating);
//             case 'newest':
//                 return [...filteredSuits].sort((a, b) => b.id - a.id);
//             case 'trending':
//                 return [...filteredSuits].sort((a, b) => (b.trending ? 1 : 0) - (a.trending ? 1 : 0));
//             case 'discount':
//                 return [...filteredSuits].sort((a, b) => 
//                     ((b.oldPrice - b.price) / b.oldPrice) - ((a.oldPrice - a.price) / a.oldPrice)
//                 );
//             default:
//                 return filteredSuits;
//         }
//     };

//     const renderStars = (rating) => {
//         const stars = [];
//         for (let i = 1; i <= 5; i++) {
//             stars.push(
//                 <FaStar 
//                     key={i} 
//                     className={`suits-star ${i <= Math.floor(rating) ? 'filled' : ''} ${i === Math.ceil(rating) && rating % 1 > 0 ? 'half' : ''}`}
//                 />
//             );
//         }
//         return stars;
//     };

//     const formatPrice = (price) => {
//         return new Intl.NumberFormat('en-US', {
//             style: 'currency',
//             currency: 'USD',
//             minimumFractionDigits: 0,
//             maximumFractionDigits: price % 1 === 0 ? 0 : 2
//         }).format(price);
//     };

//     const getDiscountPercentage = (price, oldPrice) => {
//         return Math.round(((oldPrice - price) / oldPrice) * 100);
//     };

//     const filteredAndSortedSuits = getSortedSuits();

//     // Helper function to check if filters are active
//     const hasActiveFilters = () => {
//         return (
//             selectedFilters.category !== 'all' ||
//             selectedFilters.size.length > 0 ||
//             selectedFilters.priceRange[0] !== 0 ||
//             selectedFilters.priceRange[1] !== 5000 ||
//             selectedFilters.colors.length > 0
//         );
//     };

//     return (
//         <div className="suits-page">
//             {/* Hero Section */}
//             <div className="suits-hero">
//                 <div className="suits-hero-content">
//                     <div className="suits-hero-text">
//                         <h1 className="suits-hero-title">Master Tailored<br />Luxury Suits</h1>
//                         <p className="suits-hero-subtitle">Crafted by artisans from Italy's finest ateliers. Bespoke perfection in every stitch.</p>
//                         <div className="suits-hero-stats">
//                             <div className="suits-hero-stat">
//                                 <span className="suits-hero-stat-number">16</span>
//                                 <span className="suits-hero-stat-label">Designer Brands</span>
//                             </div>
//                             <div className="suits-hero-stat">
//                                 <span className="suits-hero-stat-number">48h</span>
//                                 <span className="suits-hero-stat-label">Express Tailoring</span>
//                             </div>
//                             <div className="suits-hero-stat">
//                                 <span className="suits-hero-stat-number">Lifetime</span>
//                                 <span className="suits-hero-stat-label">Fit Guarantee</span>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="suits-hero-image">
//                         <img src="https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Luxury Suit Tailoring" />
//                         <div className="suits-hero-badge">
//                             <FaGem />
//                             <span>Since 1928</span>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div className="suits-container">
//                 {/* Page Header */}
//                 <div className="suits-page-header">
//                     <div className="suits-header-content">
//                         <div>
//                             <div className="suits-breadcrumb">
//                                 <Link to="/">Home</Link>
//                                 <span className="suits-breadcrumb-divider">/</span>
//                                 <Link to="/menswear">Menswear</Link>
//                                 <span className="suits-breadcrumb-divider">/</span>
//                                 <Link to="/suits">Suits</Link>
//                                 <span className="suits-breadcrumb-divider">/</span>
//                                 <span className="suits-breadcrumb-current">Designer Collection</span>
//                             </div>
//                             <h1 className="suits-page-title">Premium Suits Collection</h1>
//                             <p className="suits-page-subtitle">From timeless classics to avant-garde designs - perfection tailored for you</p>
//                         </div>
//                         <div className="suits-results-info">
//                             <span className="suits-results-count">
//                                 Showing {filteredAndSortedSuits.length} of {suits.length} luxury suits
//                             </span>
//                             {hasActiveFilters() && (
//                                 <button className="suits-clear-filters" onClick={clearFilters}>
//                                     <FaTimes /> Clear all filters
//                                 </button>
//                             )}
//                         </div>
//                     </div>
//                 </div>

//                 {/* Main Content */}
//                 <div className="suits-main-content">
//                     {/* Filters Sidebar */}
//                     <aside className={`suits-filters-sidebar ${showFilters ? 'active' : ''}`}>
//                         <div className="suits-filters-header">
//                             <h3>Refine Selection</h3>
//                             <button className="suits-close-filters" onClick={() => setShowFilters(false)}>
//                                 <FaTimes />
//                             </button>
//                         </div>

//                         {/* Category Filter */}
//                         <div className="suits-filter-group">
//                             <h4 className="suits-filter-title">Category</h4>
//                             <div className="suits-filter-options">
//                                 {filters.categories.map(category => (
//                                     <button
//                                         key={category.id}
//                                         className={`suits-filter-option ${
//                                             selectedFilters.category === category.id ? 'active' : ''
//                                         }`}
//                                         onClick={() => toggleFilter('category', category.id)}
//                                     >
//                                         <span className="suits-filter-label">{category.label}</span>
//                                         <span className="suits-filter-count">{category.count}</span>
//                                     </button>
//                                 ))}
//                             </div>
//                         </div>

//                         {/* Price Filter */}
//                         <div className="suits-filter-group">
//                             <h4 className="suits-filter-title">Price Range</h4>
//                             <div className="suits-price-filter">
//                                 <div className="suits-price-display">
//                                     <span>{formatPrice(selectedFilters.priceRange[0])}</span>
//                                     <span>-</span>
//                                     <span>{formatPrice(selectedFilters.priceRange[1])}</span>
//                                 </div>
//                                 <input 
//                                     type="range" 
//                                     min="0" 
//                                     max="10000" 
//                                     step="100"
//                                     value={selectedFilters.priceRange[1]}
//                                     onChange={(e) => toggleFilter('priceRange', [0, parseInt(e.target.value)])}
//                                     className="suits-price-slider"
//                                 />
//                                 <div className="suits-price-options">
//                                     {filters.priceRanges.map((range, index) => (
//                                         <button
//                                             key={index}
//                                             className={`suits-price-option ${
//                                                 selectedFilters.priceRange[0] === range.min && 
//                                                 selectedFilters.priceRange[1] === range.max ? 'active' : ''
//                                             }`}
//                                             onClick={() => toggleFilter('priceRange', [range.min, range.max])}
//                                         >
//                                             {range.label}
//                                         </button>
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Size Filter */}
//                         <div className="suits-filter-group">
//                             <h4 className="suits-filter-title">Size (US)</h4>
//                             <div className="suits-size-options">
//                                 {filters.sizes.map(size => (
//                                     <button
//                                         key={size}
//                                         className={`suits-size-option ${
//                                             selectedFilters.size.includes(size) ? 'selected' : ''
//                                         }`}
//                                         onClick={() => toggleFilter('size', size)}
//                                     >
//                                         {size}
//                                         {selectedFilters.size.includes(size) && (
//                                             <FaCheckCircle className="suits-size-check" />
//                                         )}
//                                     </button>
//                                 ))}
//                             </div>
//                         </div>

//                         {/* Color Filter */}
//                         <div className="suits-filter-group">
//                             <h4 className="suits-filter-title">Color</h4>
//                             <div className="suits-color-options">
//                                 {filters.colors.map(color => (
//                                     <button
//                                         key={color.value}
//                                         className={`suits-color-option ${
//                                             selectedFilters.colors.includes(color.value) ? 'selected' : ''
//                                         }`}
//                                         style={{ backgroundColor: color.value }}
//                                         onClick={() => toggleFilter('colors', color.value)}
//                                         title={color.name}
//                                     />
//                                 ))}
//                             </div>
//                         </div>

//                         {/* Clear Filters */}
//                         <button className="suits-apply-filters" onClick={clearFilters}>
//                             <FaTimes /> Clear All Filters
//                         </button>
//                     </aside>

//                     {/* Products Grid */}
//                     <main className="suits-products-section">
//                         {/* Filters Bar */}
//                         <div className="suits-filters-bar">
//                             <div className="suits-filters-left">
//                                 <button 
//                                     className="suits-toggle-filters"
//                                     onClick={() => setShowFilters(!showFilters)}
//                                 >
//                                     <FaFilter />
//                                     <span>Filters</span>
//                                     {showFilters ? <FaChevronUp /> : <FaChevronDown />}
//                                 </button>
//                                 <span className="suits-mobile-results">
//                                     {filteredAndSortedSuits.length} suits
//                                 </span>
//                             </div>
                            
//                             <div className="suits-sort-options">
//                                 <label htmlFor="sort-select" className="suits-sort-label">Sort by:</label>
//                                 <select 
//                                     id="sort-select"
//                                     className="suits-sort-select"
//                                     value={sortBy}
//                                     onChange={(e) => setSortBy(e.target.value)}
//                                 >
//                                     {sortOptions.map(option => (
//                                         <option key={option.id} value={option.id}>
//                                             {option.label}
//                                         </option>
//                                     ))}
//                                 </select>
//                             </div>
//                         </div>

//                         {/* Active Filters */}
//                         {hasActiveFilters() && (
//                             <div className="suits-active-filters">
//                                 <span className="suits-active-filters-label">Active filters:</span>
//                                 {selectedFilters.category !== 'all' && (
//                                     <span className="suits-active-filter">
//                                         {filters.categories.find(c => c.id === selectedFilters.category)?.label}
//                                         <button onClick={() => toggleFilter('category', 'all')}>×</button>
//                                     </span>
//                                 )}
//                                 {selectedFilters.size.map(size => (
//                                     <span key={size} className="suits-active-filter">
//                                         Size: {size}
//                                         <button onClick={() => toggleFilter('size', size)}>×</button>
//                                     </span>
//                                 ))}
//                                 {selectedFilters.colors.map(color => (
//                                     <span key={color} className="suits-active-filter">
//                                         {filters.colors.find(c => c.value === color)?.name}
//                                         <button onClick={() => toggleFilter('colors', color)}>×</button>
//                                     </span>
//                                 ))}
//                                 {(selectedFilters.priceRange[0] !== 0 || selectedFilters.priceRange[1] !== 5000) && (
//                                     <span className="suits-active-filter">
//                                         Price: {formatPrice(selectedFilters.priceRange[0])} - {formatPrice(selectedFilters.priceRange[1])}
//                                         <button onClick={() => toggleFilter('priceRange', [0, 5000])}>×</button>
//                                     </span>
//                                 )}
//                             </div>
//                         )}

//                         {/* Products Grid */}
//                         {filteredAndSortedSuits.length > 0 ? (
//                             <div className="suits-products-grid">
//                                 {filteredAndSortedSuits.map(suit => (
//                                     <div className="suits-product-card" key={suit.id}>
//                                         {/* Product Image */}
//                                         <div className="suits-product-image">
//                                             <img src={suit.image} alt={suit.title} />
//                                             <div className="suits-product-badges">
//                                                 {suit.exclusive && (
//                                                     <span className="suits-badge exclusive">
//                                                         <FaGem /> EXCLUSIVE
//                                                     </span>
//                                                 )}
//                                                 {suit.trending && (
//                                                     <span className="suits-badge trending">
//                                                         <FaFire /> TRENDING
//                                                     </span>
//                                                 )}
//                                                 {suit.oldPrice && (
//                                                     <span className="suits-badge discount">
//                                                         -{getDiscountPercentage(suit.price, suit.oldPrice)}%
//                                                     </span>
//                                                 )}
//                                                 <span className="suits-badge type">{suit.badge}</span>
//                                             </div>
//                                             <button 
//                                                 className={`suits-wishlist-btn ${wishlisted[suit.id] ? 'active' : ''}`}
//                                                 onClick={() => toggleWishlist(suit.id)}
//                                                 title={wishlisted[suit.id] ? 'Remove from wishlist' : 'Add to wishlist'}
//                                             >
//                                                 <FaHeart />
//                                             </button>
//                                             {suit.stockCount <= 5 && (
//                                                 <div className="suits-low-stock">
//                                                     <FaClock /> Only {suit.stockCount} left
//                                                 </div>
//                                             )}
//                                         </div>

//                                         {/* Product Info */}
//                                         <div className="suits-product-info">
//                                             <h3 className="suits-product-title">{suit.title}</h3>
//                                             <p className="suits-product-description">{suit.description}</p>
                                            
//                                             <div className="suits-product-specs">
//                                                 <span className="suits-spec">
//                                                     <FaLeaf /> {suit.fabric}
//                                                 </span>
//                                                 <span className="suits-spec">
//                                                     <FaRuler /> {suit.fit}
//                                                 </span>
//                                                 {suit.exclusive && (
//                                                     <span className="suits-spec exclusive">
//                                                         <FaCheckCircle /> Exclusive
//                                                     </span>
//                                                 )}
//                                             </div>

//                                             <div className="suits-product-rating">
//                                                 <div className="suits-stars">
//                                                     {renderStars(suit.rating)}
//                                                     <span className="suits-rating-value">{suit.rating.toFixed(1)}</span>
//                                                 </div>
//                                                 <span className="suits-reviews">{suit.reviews} reviews</span>
//                                             </div>

//                                             <div className="suits-product-price">
//                                                 <div className="suits-price-main">
//                                                     <span className="suits-current-price">{formatPrice(suit.price)}</span>
//                                                     {suit.oldPrice && (
//                                                         <span className="suits-old-price">{formatPrice(suit.oldPrice)}</span>
//                                                     )}
//                                                 </div>
//                                                 {suit.oldPrice && (
//                                                     <div className="suits-price-details">
//                                                         <span className="suits-discount">
//                                                             Save {formatPrice(suit.oldPrice - suit.price)}
//                                                         </span>
//                                                         <span className="suits-discount-percentage">
//                                                             ({getDiscountPercentage(suit.price, suit.oldPrice)}% off)
//                                                         </span>
//                                                     </div>
//                                                 )}
//                                             </div>

//                                             <div className="suits-product-colors">
//                                                 <span className="suits-colors-label">Color:</span>
//                                                 <div className="suits-colors-swatches">
//                                                     {suit.colors.map((color, index) => (
//                                                         <div 
//                                                             key={index}
//                                                             className="suits-color-swatch"
//                                                             style={{ backgroundColor: color }}
//                                                             title={suit.color}
//                                                         />
//                                                     ))}
//                                                 </div>
//                                                 <span className="suits-color-name">{suit.color}</span>
//                                             </div>

//                                             <div className="suits-product-actions">
//                                                 <button className="suits-add-to-cart">
//                                                     <FaShoppingBag />
//                                                     <span>Add to Cart</span>
//                                                 </button>
//                                                 <Link to={`/suits/${suit.id}`} className="suits-view-details">
//                                                     View Details
//                                                 </Link>
//                                             </div>

//                                             <div className="suits-product-features">
//                                                 <div className="suits-feature">
//                                                     <FaTruck />
//                                                     <span>{suit.delivery}</span>
//                                                 </div>
//                                                 <div className="suits-feature">
//                                                     <FaShieldAlt />
//                                                     <span>Free Alterations</span>
//                                                 </div>
//                                                 <div className="suits-feature">
//                                                     <FaCheckCircle />
//                                                     <span>Authenticity</span>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 ))}
//                             </div>
//                         ) : (
//                             <div className="suits-no-results">
//                                 <h3>No suits match your filters</h3>
//                                 <p>Try adjusting your filters or browse our complete collection</p>
//                                 <button className="suits-clear-filters-btn" onClick={clearFilters}>
//                                     Clear All Filters
//                                 </button>
//                             </div>
//                         )}
//                     </main>
//                 </div>

//                 {/* Brand Assurance */}
//                 <div className="suits-brand-assurance">
//                     <h3>The Luxury Tailoring Experience</h3>
//                     <div className="suits-assurance-grid">
//                         <div className="suits-assurance-card">
//                             <div className="suits-assurance-icon">
//                                 <FaShieldAlt />
//                             </div>
//                             <h4>Authenticity Guaranteed</h4>
//                             <p>All designer suits include certificates of authenticity and original house labels</p>
//                         </div>
//                         <div className="suits-assurance-card">
//                             <div className="suits-assurance-icon">
//                                 <FaTruck />
//                             </div>
//                             <h4>Free Express Shipping</h4>
//                             <p>Next-day delivery worldwide with complimentary insurance coverage</p>
//                         </div>
//                         <div className="suits-assurance-card">
//                             <div className="suits-assurance-icon">
//                                 <FaUndo />
//                             </div>
//                             <h4>60-Day Returns</h4>
//                             <p>Extended returns with complimentary alterations and free pick-up service</p>
//                         </div>
//                         <div className="suits-assurance-card">
//                             <div className="suits-assurance-icon">
//                                 <FaGem />
//                             </div>
//                             <h4>Bespoke Services</h4>
//                             <p>Personal tailoring consultations and custom measurements available</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default SuitsPage;


import React, { useState } from 'react';
import './SuitsPage.css';
import { 
    FaStar, 
    FaHeart, 
    FaShoppingBag, 
    FaTruck, 
    FaFilter,
    FaChevronDown,
    FaChevronUp,
    FaTimes,
    FaCheck,
    FaShoppingCart
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SuitsPage = () => {
    const [wishlisted, setWishlisted] = useState({});
    const [selectedFilters, setSelectedFilters] = useState({
        category: 'all',
        priceRange: [0, 5000]
    });
    const [showFilters, setShowFilters] = useState(false);
    const [sortBy, setSortBy] = useState('featured');
    const [viewDetails, setViewDetails] = useState(null);

    const suits = [
        {
            id: 1,
            title: "Tom Ford Silk Suit",
            price: 1299.99,
            oldPrice: 1899.99,
            rating: 4.9,
            reviews: 287,
            description: "Italian silk suit with Milanese tailoring, perfect for formal occasions and luxury events.",
            fullDescription: "Crafted from the finest Italian silk, this Tom Ford suit features Milanese tailoring with peak lapels, functional buttonholes, and a hand-finished interior. The lightweight construction ensures comfort while maintaining structure. Perfect for black-tie events, weddings, and important business meetings.",
            color: "Midnight Black",
            colors: ["#000000", "#1C1C1C"],
            sizes: ['48R', '50R', '52R', '54R', '56R'],
            inStock: true,
            stockCount: 5,
            image: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            badge: "PREMIUM",
            type: "Formal",
            fabric: "Italian Silk",
            fit: "Slim Fit",
            delivery: "2-3 Days",
            exclusive: true,
            trending: true,
            features: [
                "Hand-finished construction",
                "Italian silk fabric",
                "Peak lapels",
                "Functional buttonholes",
                "Lightweight lining"
            ]
        },
        {
            id: 2,
            title: "Brioni Business Suit",
            price: 899.99,
            oldPrice: 1199.99,
            rating: 4.8,
            reviews: 154,
            description: "Super 120s wool for boardroom excellence and professional settings.",
            fullDescription: "This Brioni suit is crafted from Super 120s wool, offering exceptional comfort and drape. The classic fit provides room for movement while maintaining a professional silhouette. Perfect for daily office wear and important business meetings.",
            color: "Charcoal Gray",
            colors: ["#36454F", "#5D6D7E"],
            sizes: ['46R', '48R', '50R', '52R', '54R', '56R'],
            inStock: true,
            stockCount: 12,
            image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            badge: "BUSINESS",
            type: "Business",
            fabric: "Super 120s Wool",
            fit: "Classic Fit",
            delivery: "Next Day",
            exclusive: false,
            trending: true,
            features: [
                "Super 120s wool",
                "Classic professional fit",
                "Functional pockets",
                "Durable construction",
                "Office ready"
            ]
        },
        {
            id: 3,
            title: "Wedding Tuxedo",
            price: 1599.99,
            oldPrice: 2199.99,
            rating: 5.0,
            reviews: 89,
            description: "Bespoke wedding suit with silk lining for your special day.",
            fullDescription: "Make your wedding day unforgettable with this elegant tuxedo. Features satin lapels, silk lining, and a tailored fit. Available with custom alterations for perfect fit.",
            color: "Ivor White",
            colors: ["#FFFFF0", "#FAF0E6"],
            sizes: ['48R', '50R', '52R', '54R'],
            inStock: true,
            stockCount: 8,
            image: "https://images.unsplash.com/photo-1539533113205-f5ae7ad028e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            badge: "WEDDING",
            type: "Wedding",
            fabric: "Cashmere Blend",
            fit: "Bespoke",
            delivery: "5-7 Days",
            exclusive: true,
            trending: true,
            features: [
                "Satin lapels",
                "Silk lining",
                "Custom alterations",
                "Wedding-ready",
                "Premium buttons"
            ]
        },
        {
            id: 4,
            title: "Linen Summer Suit",
            price: 799.99,
            oldPrice: 1099.99,
            rating: 4.7,
            reviews: 132,
            description: "Summer-weight linen for warm weather elegance and comfort.",
            fullDescription: "Stay cool and stylish with this premium linen suit. Perfect for summer weddings, garden parties, and warm-weather events. The breathable fabric ensures comfort throughout the day.",
            color: "Cream Beige",
            colors: ["#F5F5DC", "#FAF0E6"],
            sizes: ['48R', '50R', '52R', '54R', '56R'],
            inStock: true,
            stockCount: 15,
            image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            badge: "SUMMER",
            type: "Casual",
            fabric: "Premium Linen",
            fit: "Relaxed Fit",
            delivery: "3-4 Days",
            exclusive: false,
            trending: false,
            features: [
                "Breathable linen",
                "Summer weight",
                "Relaxed fit",
                "Light construction",
                "Warm weather ready"
            ]
        },
        {
            id: 5,
            title: "Classic Navy Suit",
            price: 699.99,
            oldPrice: 999.99,
            rating: 4.6,
            reviews: 201,
            description: "Versatile navy suit for business and formal occasions.",
            fullDescription: "A timeless navy suit that works for both business and formal events. The medium-weight wool provides year-round versatility and comfort.",
            color: "Royal Navy",
            colors: ["#000080", "#1E3A8A"],
            sizes: ['46R', '48R', '50R', '52R', '54R'],
            inStock: true,
            stockCount: 20,
            image: "https://images.unsplash.com/photo-1594938328875-5c5e8e8b9b9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            badge: "CLASSIC",
            type: "Business",
            fabric: "Wool Blend",
            fit: "Modern Fit",
            delivery: "1-2 Days",
            exclusive: false,
            trending: true,
            features: [
                "Versatile navy color",
                "Year-round wool",
                "Modern fit",
                "Professional styling",
                "Quick delivery"
            ]
        }
    ];

    const filters = {
        categories: [
            { id: 'all', label: 'All Suits', count: suits.length },
            { id: 'formal', label: 'Formal', count: suits.filter(s => s.type.toLowerCase().includes('formal')).length },
            { id: 'business', label: 'Business', count: suits.filter(s => s.type.toLowerCase().includes('business')).length },
            { id: 'wedding', label: 'Wedding', count: suits.filter(s => s.type.toLowerCase().includes('wedding')).length },
            { id: 'casual', label: 'Casual', count: suits.filter(s => s.type.toLowerCase().includes('casual')).length }
        ],
        priceRanges: [
            { label: 'Under $500', min: 0, max: 500 },
            { label: '$500 - $1000', min: 500, max: 1000 },
            { label: '$1000 - $2000', min: 1000, max: 2000 },
            { label: '$2000+', min: 2000, max: 5000 }
        ]
    };

    const sortOptions = [
        { id: 'featured', label: 'Featured' },
        { id: 'price_asc', label: 'Price: Low to High' },
        { id: 'price_desc', label: 'Price: High to Low' },
        { id: 'rating', label: 'Top Rated' }
    ];

    const toggleWishlist = (productId) => {
        setWishlisted(prev => ({
            ...prev,
            [productId]: !prev[productId]
        }));
    };

    const toggleFilter = (filterType, value) => {
        setSelectedFilters(prev => ({
            ...prev,
            [filterType]: value
        }));
    };

    const clearFilters = () => {
        setSelectedFilters({
            category: 'all',
            priceRange: [0, 5000]
        });
    };

    const getFilteredSuits = () => {
        return suits.filter(suit => {
            // Category filter
            if (selectedFilters.category !== 'all' && !suit.type.toLowerCase().includes(selectedFilters.category)) {
                return false;
            }
            
            // Price filter
            if (suit.price < selectedFilters.priceRange[0] || suit.price > selectedFilters.priceRange[1]) {
                return false;
            }
            
            return true;
        });
    };

    const getSortedSuits = () => {
        const filteredSuits = getFilteredSuits();
        
        switch(sortBy) {
            case 'price_asc':
                return [...filteredSuits].sort((a, b) => a.price - b.price);
            case 'price_desc':
                return [...filteredSuits].sort((a, b) => b.price - a.price);
            case 'rating':
                return [...filteredSuits].sort((a, b) => b.rating - a.rating);
            default:
                return filteredSuits;
        }
    };

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <FaStar 
                    key={i} 
                    className={`suits-star ${i <= Math.floor(rating) ? 'filled' : ''}`}
                />
            );
        }
        return stars;
    };

    const formatPrice = (price) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: price % 1 === 0 ? 0 : 2
        }).format(price);
    };

    const filteredAndSortedSuits = getSortedSuits();

    // Helper function to check if filters are active
    const hasActiveFilters = () => {
        return (
            selectedFilters.category !== 'all' ||
            selectedFilters.priceRange[0] !== 0 ||
            selectedFilters.priceRange[1] !== 5000
        );
    };

    const handleBuyNow = (suit) => {
        alert(`Added ${suit.title} to cart - Total: ${formatPrice(suit.price)}`);
        // Here you would typically dispatch to Redux or context
    };

    const handleViewDetails = (suit) => {
        setViewDetails(suit);
    };

    const closeDetails = () => {
        setViewDetails(null);
    };

    return (
        <div className="suits-page">
            {/* Details Modal */}
            {viewDetails && (
                <div className="suits-details-modal">
                    <div className="suits-details-content">
                        <button className="suits-details-close" onClick={closeDetails}>
                            <FaTimes />
                        </button>
                        <div className="suits-details-grid">
                            <div className="suits-details-image">
                                <img src={viewDetails.image} alt={viewDetails.title} />
                            </div>
                            <div className="suits-details-info">
                                <h2>{viewDetails.title}</h2>
                                <div className="suits-details-rating">
                                    {renderStars(viewDetails.rating)}
                                    <span>{viewDetails.rating} ({viewDetails.reviews} reviews)</span>
                                </div>
                                
                                <div className="suits-details-price">
                                    <span className="suits-details-current">{formatPrice(viewDetails.price)}</span>
                                    {viewDetails.oldPrice && (
                                        <span className="suits-details-old">{formatPrice(viewDetails.oldPrice)}</span>
                                    )}
                                </div>

                                <div className="suits-details-description">
                                    <h4>Description</h4>
                                    <p>{viewDetails.fullDescription}</p>
                                </div>

                                <div className="suits-details-specs">
                                    <h4>Specifications</h4>
                                    <div className="suits-specs-grid">
                                        <div className="suits-spec-item">
                                            <span>Color</span>
                                            <span>{viewDetails.color}</span>
                                        </div>
                                        <div className="suits-spec-item">
                                            <span>Fabric</span>
                                            <span>{viewDetails.fabric}</span>
                                        </div>
                                        <div className="suits-spec-item">
                                            <span>Fit</span>
                                            <span>{viewDetails.fit}</span>
                                        </div>
                                        <div className="suits-spec-item">
                                            <span>Delivery</span>
                                            <span>{viewDetails.delivery}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="suits-details-sizes">
                                    <h4>Available Sizes</h4>
                                    <div className="suits-size-options">
                                        {viewDetails.sizes.map(size => (
                                            <button key={size} className="suits-size-option">
                                                {size}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="suits-details-features">
                                    <h4>Key Features</h4>
                                    <ul>
                                        {viewDetails.features.map((feature, index) => (
                                            <li key={index}>
                                                <FaCheck /> {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="suits-details-actions">
                                    <button 
                                        className="suits-buy-now-btn"
                                        onClick={() => handleBuyNow(viewDetails)}
                                    >
                                        <FaShoppingCart /> Buy Now
                                    </button>
                                    <button 
                                        className="suits-add-cart-btn"
                                        onClick={() => handleBuyNow(viewDetails)}
                                    >
                                        <FaShoppingBag /> Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Hero Section */}
            <div className="suits-hero">
                <div className="suits-hero-content">
                    <div className="suits-hero-text">
                        <h1 className="suits-hero-title">Premium Suits Collection</h1>
                        <p className="suits-hero-subtitle">Find the perfect suit for every occasion</p>
                    </div>
                </div>
            </div>

            <div className="suits-container">
                {/* Filters & Sort */}
                <div className="suits-controls">
                    <button 
                        className="suits-toggle-filters"
                        onClick={() => setShowFilters(!showFilters)}
                    >
                        <FaFilter />
                        <span>Filters</span>
                        {showFilters ? <FaChevronUp /> : <FaChevronDown />}
                    </button>
                    
                    <div className="suits-sort">
                        <select 
                            className="suits-sort-select"
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                        >
                            {sortOptions.map(option => (
                                <option key={option.id} value={option.id}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Filters Sidebar */}
                {showFilters && (
                    <div className="suits-filters-sidebar">
                        <div className="suits-filter-group">
                            <h4>Category</h4>
                            <div className="suits-filter-options">
                                {filters.categories.map(category => (
                                    <button
                                        key={category.id}
                                        className={`suits-filter-btn ${
                                            selectedFilters.category === category.id ? 'active' : ''
                                        }`}
                                        onClick={() => toggleFilter('category', category.id)}
                                    >
                                        {category.label} ({category.count})
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="suits-filter-group">
                            <h4>Price Range</h4>
                            <div className="suits-price-options">
                                {filters.priceRanges.map((range, index) => (
                                    <button
                                        key={index}
                                        className={`suits-price-btn ${
                                            selectedFilters.priceRange[0] === range.min && 
                                            selectedFilters.priceRange[1] === range.max ? 'active' : ''
                                        }`}
                                        onClick={() => toggleFilter('priceRange', [range.min, range.max])}
                                    >
                                        {range.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {hasActiveFilters() && (
                            <button className="suits-clear-btn" onClick={clearFilters}>
                                Clear Filters
                            </button>
                        )}
                    </div>
                )}

                {/* Products Grid */}
                <div className="suits-products-grid">
                    {filteredAndSortedSuits.map(suit => (
                        <div className="suits-product-card" key={suit.id}>
                            {/* Product Image */}
                            <div className="suits-product-image">
                                <img src={suit.image} alt={suit.title} />
                                <div className="suits-product-badge">{suit.badge}</div>
                                <button 
                                    className={`suits-wishlist-btn ${wishlisted[suit.id] ? 'active' : ''}`}
                                    onClick={() => toggleWishlist(suit.id)}
                                    title="Add to wishlist"
                                >
                                    <FaHeart />
                                </button>
                                {suit.stockCount <= 5 && (
                                    <div className="suits-low-stock">
                                        Low Stock
                                    </div>
                                )}
                            </div>

                            {/* Product Info */}
                            <div className="suits-product-info">
                                <h3 className="suits-product-title">{suit.title}</h3>
                                <p className="suits-product-description">{suit.description}</p>
                                
                                <div className="suits-product-rating">
                                    {renderStars(suit.rating)}
                                    <span>{suit.rating} ({suit.reviews})</span>
                                </div>

                                <div className="suits-product-price">
                                    <span className="suits-current-price">{formatPrice(suit.price)}</span>
                                    {suit.oldPrice && (
                                        <span className="suits-old-price">{formatPrice(suit.oldPrice)}</span>
                                    )}
                                </div>

                                <div className="suits-product-color">
                                    <span>Color: {suit.color}</span>
                                </div>

                                <div className="suits-product-actions">
                                    <button 
                                        className="suits-add-to-cart"
                                        onClick={() => handleBuyNow(suit)}
                                    >
                                        <FaShoppingBag /> Add to Cart
                                    </button>
                                    <button 
                                        className="suits-view-details"
                                        onClick={() => handleViewDetails(suit)}
                                    >
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Results Info */}
                <div className="suits-results-info">
                    <p>Showing {filteredAndSortedSuits.length} of {suits.length} suits</p>
                </div>
            </div>
        </div>
    );
};

export default SuitsPage;