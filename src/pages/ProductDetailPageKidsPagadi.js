// src/pages/ProductDetailPageKidsPagadis.js
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './ProductDetailPageKidsPagadi.css';
import { FaStar, FaStarHalfAlt, FaRegStar, FaHeart, FaShoppingBag, FaTruck, FaUndo, FaShieldAlt, FaChevronLeft, FaChevronRight, FaCheck, FaShareAlt, FaChild, FaRuler } from 'react-icons/fa';

const ProductDetailPageKidsPagadis = () => {
    const { id } = useParams();
    const [selectedSize, setSelectedSize] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [isWishlisted, setIsWishlisted] = useState(false);
    const [mainImage, setMainImage] = useState(0);

    const kidsPagadisProducts = [
        {
            id: 1,
            title: "Kids Royal Silk Pagadi",
            price: 39.99,
            oldPrice: 54.99,
            rating: 4.9,
            reviews: 89,
            description: "Exquisite silk pagadi with intricate embroidery and zari work for royal occasions.",
            detailedDescription: "This royal silk pagadi is crafted for special occasions where your little prince needs to shine. Made from premium silk with intricate zari work and hand embroidery. The design features traditional motifs, detailed thread work, and comfortable fit. Perfect for weddings, ceremonies, and festive celebrations.",
            color: "Gold & Maroon",
            sizes: ['Small (3-5 yrs)', 'Medium (6-8 yrs)', 'Large (9-12 yrs)'],
            ageGroup: "3-12 Years",
            inStock: true,
            stockCount: 42,
            images: [
                "https://images.unsplash.com/photo-1620207418302-439b387441b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1539533113205-f5ae7ad028e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            ],
            badge: "PREMIUM",
            category: "Kids Pagadis",
            type: "Silk Pagadi",
            material: "Pure Silk",
            careInstructions: "Dry clean only. Store in dry place away from moisture.",
            occasion: "Weddings, Festivals, Ceremonies",
            deliveryTime: "2-4 business days",
            fabric: "100% Pure Silk",
            embroidery: "Hand Embroidery with Zari",
            accessories: "Matching Kalgi (Plume) Included",
            features: "Traditional Design, Comfortable Fit, Easy to Wear",
            ageRecommendation: "3-12 Years",
            comfortFeatures: "Soft Fabric, Lightweight, Tagless Design",
            safetyFeatures: "Child-safe Materials, Hypoallergenic, Non-toxic Dyes"
        },
        {
            id: 2,
            title: "Kids Safa Pagadi",
            price: 34.99,
            oldPrice: 44.99,
            rating: 4.7,
            reviews: 112,
            description: "Traditional Rajasthani safa pagadi with vibrant colors and patterns.",
            detailedDescription: "Authentic Rajasthani style safa pagadi with vibrant colors and traditional patterns. Crafted from premium cotton with comfortable lining for all-day wear. Features intricate bandhani patterns and traditional motifs. Perfect for cultural events, weddings, and festive celebrations.",
            color: "Orange & Yellow",
            sizes: ['Small (3-5 yrs)', 'Medium (6-8 yrs)', 'Large (9-12 yrs)'],
            ageGroup: "3-12 Years",
            inStock: true,
            stockCount: 58,
            images: [
                "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1620207418302-439b387441b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            ],
            badge: "SAFA",
            category: "Kids Pagadis",
            type: "Safa Pagadi",
            material: "Premium Cotton",
            careInstructions: "Hand wash recommended. Air dry.",
            occasion: "Cultural Events, Festivals, Weddings",
            deliveryTime: "3-5 business days",
            fabric: "Premium Cotton",
            embroidery: "Traditional Rajasthani Patterns",
            accessories: "Optional Kalgi Available",
            features: "Traditional Rajasthani Design, Colorful Patterns",
            ageRecommendation: "3-12 Years",
            comfortFeatures: "Breathable Cotton, Lightweight",
            safetyFeatures: "Child-friendly Materials, Secure Fit"
        },
        {
            id: 3,
            title: "Kids Wedding Pagadi with Kalgi",
            price: 49.99,
            oldPrice: 69.99,
            rating: 4.8,
            reviews: 76,
            description: "Elegant wedding pagadi with beautiful kalgi (plume) for special ceremonies.",
            detailedDescription: "Special wedding pagadi designed for grand ceremonies and celebrations. Features intricate embroidery, zari work, and comes with a matching kalgi (plume). Made from premium velvet with silk lining for comfort and elegance. Perfect for making your child stand out at weddings and special occasions.",
            color: "White & Gold",
            sizes: ['Small (3-5 yrs)', 'Medium (6-8 yrs)', 'Large (9-12 yrs)'],
            ageGroup: "3-12 Years",
            inStock: true,
            stockCount: 25,
            images: [
                "https://images.unsplash.com/photo-1539533113205-f5ae7ad028e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1620207418302-439b387441b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            ],
            badge: "WEDDING",
            category: "Kids Pagadis",
            type: "Wedding Pagadi",
            material: "Velvet with Silk Lining",
            careInstructions: "Dry clean only. Handle with care.",
            occasion: "Weddings, Grand Ceremonies",
            deliveryTime: "3-5 business days",
            fabric: "Premium Velvet",
            embroidery: "Zari and Thread Work",
            accessories: "Matching Kalgi Included",
            features: "Elegant Design, Royal Look, Comfortable Wear",
            ageRecommendation: "3-12 Years",
            comfortFeatures: "Soft Lining, Adjustable Fit",
            safetyFeatures: "Child-safe Embellishments"
        },
        {
            id: 4,
            title: "Kids Cotton Pagadi",
            price: 24.99,
            oldPrice: 34.99,
            rating: 4.5,
            reviews: 145,
            description: "Comfortable cotton pagadi for daily wear and casual occasions.",
            detailedDescription: "Perfect for everyday traditional wear, this cotton pagadi offers comfort and style. Made from 100% pure cotton with traditional prints and patterns. Lightweight and breathable, suitable for daily wear, school functions, and casual gatherings.",
            color: "Blue & White",
            sizes: ['Small (3-5 yrs)', 'Medium (6-8 yrs)', 'Large (9-12 yrs)'],
            ageGroup: "3-12 Years",
            inStock: true,
            stockCount: 72,
            images: [
                "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            ],
            badge: "COTTON",
            category: "Kids Pagadis",
            type: "Cotton Pagadi",
            material: "100% Pure Cotton",
            careInstructions: "Machine washable. Air dry.",
            occasion: "Daily Wear, School Functions, Casual Events",
            deliveryTime: "2-3 business days",
            fabric: "Pure Cotton",
            embroidery: "Traditional Prints",
            accessories: "None",
            features: "Comfortable, Breathable, Easy Care",
            ageRecommendation: "3-12 Years",
            comfortFeatures: "Lightweight, Soft Fabric",
            safetyFeatures: "Hypoallergenic, Skin-friendly"
        }
    ];

    const product = kidsPagadisProducts.find(p => p.id === parseInt(id)) || kidsPagadisProducts[0];

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

    const incrementQuantity = () => {
        setQuantity(prev => prev + 1);
    };

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(prev => prev - 1);
        }
    };

    const addToCart = () => {
        if (!selectedSize) {
            alert('Please select a size for your child');
            return;
        }
        alert(`Added ${quantity} ${product.title} (Size: ${selectedSize}) to cart!`);
    };

    const nextImage = () => {
        setMainImage((prev) => (prev + 1) % product.images.length);
    };

    const prevImage = () => {
        setMainImage((prev) => (prev - 1 + product.images.length) % product.images.length);
    };

    const shareProduct = () => {
        if (navigator.share) {
            navigator.share({
                title: product.title,
                text: `Check out this beautiful ${product.title} for kids on Arshart`,
                url: window.location.href,
            });
        } else {
            navigator.clipboard.writeText(window.location.href);
            alert('Link copied to clipboard!');
        }
    };

    return (
        <div className="product-detail-kids-pagadi">
            <div className="container">
                <div className="breadcrumb">
                    <Link to="/">Home</Link>
                    <span>/</span>
                    <Link to="/kids-wear">Kids Wear</Link>
                    <span>/</span>
                    <Link to="/kids-pagadis">Kids Pagadis</Link>
                    <span>/</span>
                    <span>{product.title}</span>
                </div>

                <div className="product-detail-container">
                    {/* Left Column - Images */}
                    <div className="product-images">
                        <div className="main-image">
                            <img src={product.images[mainImage]} alt={product.title} />
                            <div className="image-nav">
                                <button className="nav-btn prev-btn" onClick={prevImage}>
                                    <FaChevronLeft />
                                </button>
                                <button className="nav-btn next-btn" onClick={nextImage}>
                                    <FaChevronRight />
                                </button>
                            </div>
                            <div className="product-badge pagadi-badge">{product.badge}</div>
                            <div className="age-badge">
                                <FaChild /> {product.ageGroup}
                            </div>
                        </div>
                        
                        <div className="thumbnail-images">
                            {product.images.map((img, index) => (
                                <div 
                                    key={index} 
                                    className={`thumbnail ${index === mainImage ? 'active' : ''}`}
                                    onClick={() => setMainImage(index)}
                                >
                                    <img src={img} alt={`${product.title} ${index + 1}`} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column - Product Info */}
                    <div className="product-info">
                        <div className="product-header">
                            <h1 className="product-title">{product.title}</h1>
                            <div className="product-meta">
                                <div className="product-rating">
                                    <div className="stars">
                                        {renderStars(product.rating)}
                                        <span className="rating-value">{product.rating}</span>
                                    </div>
                                    <span className="reviews">({product.reviews} reviews)</span>
                                    <span className="stock-status">
                                        {product.inStock ? `${product.stockCount} in stock` : 'Out of Stock'}
                                    </span>
                                </div>
                                <div className="product-actions">
                                    <button 
                                        className={`wishlist-btn ${isWishlisted ? 'active' : ''}`}
                                        onClick={() => setIsWishlisted(!isWishlisted)}
                                    >
                                        <FaHeart />
                                        {isWishlisted ? 'Wishlisted' : 'Save for Later'}
                                    </button>
                                    <button className="share-btn" onClick={shareProduct}>
                                        <FaShareAlt />
                                        Share
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="product-price-section">
                            <div className="price-container">
                                <span className="current-price">${product.price.toFixed(2)}</span>
                                <span className="old-price">${product.oldPrice.toFixed(2)}</span>
                                <span className="discount-percentage">
                                    {Math.round((1 - product.price / product.oldPrice) * 100)}% OFF
                                </span>
                            </div>
                            <p className="price-note">Traditional headwear for your little prince! {product.accessories.includes('Included') ? product.accessories : ''}</p>
                        </div>

                        <div className="product-description">
                            <p className="main-description">{product.description}</p>
                            <p className="detailed-description">{product.detailedDescription}</p>
                        </div>

                        {/* Age Group Info */}
                        <div className="age-group-info">
                            <h3><FaChild /> Recommended Age Group:</h3>
                            <div className="age-display">
                                <span className="age-range">{product.ageGroup}</span>
                                <Link to="/size-guide/kids-pagadis" className="size-guide-link">
                                    <FaRuler /> View Kids Pagadi Size Chart
                                </Link>
                            </div>
                        </div>

                        {/* Size Selection */}
                        <div className="size-selection">
                            <h3>Select Size by Age:</h3>
                            <div className="size-options">
                                {product.sizes.map(size => (
                                    <button
                                        key={size}
                                        className={`size-btn ${selectedSize === size ? 'selected' : ''}`}
                                        onClick={() => setSelectedSize(size)}
                                    >
                                        {size}
                                        {selectedSize === size && <FaCheck className="check-icon" />}
                                    </button>
                                ))}
                            </div>
                            <div className="size-help">
                                <p>Unsure about size? <Link to="/size-guide/kids-pagadis">Check our kids pagadi size guide</Link> or contact us for assistance.</p>
                            </div>
                        </div>

                        {/* Color Info */}
                        <div className="color-info">
                            <h3>Color:</h3>
                            <div className="color-display">
                                <span className="color-name">{product.color}</span>
                                <div 
                                    className="color-sample" 
                                    style={{ 
                                        background: product.color.toLowerCase().includes('gold') ? '#FFD700' :
                                                    product.color.toLowerCase().includes('maroon') ? '#800000' :
                                                    product.color.toLowerCase().includes('orange') ? '#FFA500' :
                                                    product.color.toLowerCase().includes('yellow') ? '#FFD700' :
                                                    product.color.toLowerCase().includes('white') ? '#FFFFFF' :
                                                    product.color.toLowerCase().includes('blue') ? '#4169E1' :
                                                    '#e74c3c'
                                    }}
                                ></div>
                            </div>
                        </div>

                        {/* Quantity & Add to Cart */}
                        <div className="action-section">
                            <div className="quantity-selector">
                                <h3>Quantity:</h3>
                                <div className="quantity-controls">
                                    <button className="qty-btn" onClick={decrementQuantity}>-</button>
                                    <span className="quantity">{quantity}</span>
                                    <button className="qty-btn" onClick={incrementQuantity}>+</button>
                                </div>
                            </div>

                            <div className="add-to-cart-section">
                                <button className="add-to-cart-btn" onClick={addToCart}>
                                    <FaShoppingBag />
                                    Add to Cart
                                </button>
                                <button className="buy-now-btn">
                                    Buy Now
                                </button>
                            </div>
                        </div>

                        {/* Product Specifications */}
                        <div className="product-specifications">
                            <h3>Pagadi Specifications</h3>
                            <div className="spec-grid">
                                <div className="spec-item">
                                    <span className="spec-label">Pagadi Type:</span>
                                    <span className="spec-value">{product.type}</span>
                                </div>
                                <div className="spec-item">
                                    <span className="spec-label">Material:</span>
                                    <span className="spec-value">{product.material}</span>
                                </div>
                                <div className="spec-item">
                                    <span className="spec-label">Fabric:</span>
                                    <span className="spec-value">{product.fabric}</span>
                                </div>
                                <div className="spec-item">
                                    <span className="spec-label">Embroidery:</span>
                                    <span className="spec-value">{product.embroidery}</span>
                                </div>
                                <div className="spec-item">
                                    <span className="spec-label">Age Range:</span>
                                    <span className="spec-value kids-age">{product.ageRecommendation}</span>
                                </div>
                                <div className="spec-item">
                                    <span className="spec-label">Accessories:</span>
                                    <span className="spec-value">{product.accessories}</span>
                                </div>
                                <div className="spec-item">
                                    <span className="spec-label">Care Instructions:</span>
                                    <span className="spec-value">{product.careInstructions}</span>
                                </div>
                                <div className="spec-item">
                                    <span className="spec-label">Features:</span>
                                    <span className="spec-value">{product.features}</span>
                                </div>
                                <div className="spec-item">
                                    <span className="spec-label">Comfort Features:</span>
                                    <span className="spec-value">{product.comfortFeatures}</span>
                                </div>
                                <div className="spec-item">
                                    <span className="spec-label">Safety Features:</span>
                                    <span className="spec-value kids-safe">{product.safetyFeatures}</span>
                                </div>
                                <div className="spec-item">
                                    <span className="spec-label">Perfect For:</span>
                                    <span className="spec-value">{product.occasion}</span>
                                </div>
                                <div className="spec-item">
                                    <span className="spec-label">Traditional Style:</span>
                                    <span className="spec-value">{product.type.includes('Safa') ? 'Rajasthani' : 'Royal'}</span>
                                </div>
                            </div>
                        </div>

                        {/* Delivery Info */}
                        <div className="delivery-info">
                            <div className="delivery-option">
                                <FaTruck className="delivery-icon" />
                                <div className="delivery-text">
                                    <strong>Free & Fast Delivery</strong>
                                    <p>Delivered in {product.deliveryTime}. {product.accessories.includes('Included') ? product.accessories : 'Free styling guide included.'}</p>
                                </div>
                            </div>
                            <div className="delivery-option">
                                <FaUndo className="delivery-icon" />
                                <div className="delivery-text">
                                    <strong>Easy Returns & Exchange</strong>
                                    <p>30 days return policy. Free size exchange within 15 days.</p>
                                </div>
                            </div>
                            <div className="delivery-option">
                                <FaShieldAlt className="delivery-icon" />
                                <div className="delivery-text">
                                    <strong>Quality Guarantee</strong>
                                    <p>Authentic craftsmanship with child-safe materials.</p>
                                </div>
                            </div>
                        </div>

                        {/* Styling Tips */}
                        <div className="styling-tips">
                            <h3><span className="tip-icon">💡</span> Styling Tips</h3>
                            <ul className="tips-list">
                                <li>Pair with matching traditional outfits for complete look</li>
                                <li>Adjust for comfortable fit - not too tight, not too loose</li>
                                <li>Use bobby pins for secure placement during active events</li>
                                <li>Store flat in provided box to maintain shape</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Related Products */}
                <div className="related-products">
                    <h2>More Kids Pagadis You'll Love</h2>
                    <div className="related-grid">
                        {kidsPagadisProducts
                            .filter(p => p.id !== product.id)
                            .slice(0, 3)
                            .map(related => (
                                <Link to={`/product/kids-pagadis/${related.id}`} key={related.id} className="related-item">
                                    <div className="related-image">
                                        <img src={related.images[0]} alt={related.title} />
                                        <div className="related-age">{related.ageGroup}</div>
                                        <div className="related-type">{related.type}</div>
                                    </div>
                                    <h4>{related.title}</h4>
                                    <div className="related-price">
                                        <span className="current">${related.price.toFixed(2)}</span>
                                        <span className="old">${related.oldPrice.toFixed(2)}</span>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                </div>

                {/* Reviews Section */}
                <div className="reviews-section">
                    <h2>Parent Reviews</h2>
                    <div className="reviews-summary">
                        <div className="avg-rating">
                            <span className="rating-number">{product.rating}</span>
                            <div className="stars">{renderStars(product.rating)}</div>
                            <p>{product.reviews} parent reviews</p>
                        </div>
                        <div className="rating-breakdown">
                            <div className="rating-bar">
                                <span className="rating-label">5 Stars</span>
                                <div className="rating-progress">
                                    <div className="progress-bar" style={{ width: '82%' }}></div>
                                </div>
                                <span className="rating-percent">82%</span>
                            </div>
                            <div className="rating-bar">
                                <span className="rating-label">4 Stars</span>
                                <div className="rating-progress">
                                    <div className="progress-bar" style={{ width: '14%' }}></div>
                                </div>
                                <span className="rating-percent">14%</span>
                            </div>
                            <div className="rating-bar">
                                <span className="rating-label">3 Stars</span>
                                <div className="rating-progress">
                                    <div className="progress-bar" style={{ width: '3%' }}></div>
                                </div>
                                <span className="rating-percent">3%</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="customer-reviews">
                        <div className="review-item">
                            <div className="review-header">
                                <div className="reviewer-info">
                                    <strong>Amit Patel</strong>
                                    <div className="review-stars">
                                        {renderStars(5)}
                                    </div>
                                </div>
                                <span className="review-date">2 weeks ago</span>
                            </div>
                            <p className="review-text">"My son wore this silk pagadi for his uncle's wedding and looked absolutely regal! The embroidery work is exquisite and the fit was perfect. Received so many compliments!"</p>
                        </div>
                        
                        <div className="review-item">
                            <div className="review-header">
                                <div className="reviewer-info">
                                    <strong>Neha Gupta</strong>
                                    <div className="review-stars">
                                        {renderStars(5)}
                                    </div>
                                </div>
                                <span className="review-date">1 month ago</span>
                            </div>
                            <p className="review-text">"Beautiful safa pagadi for my son's school cultural event. The colors are vibrant and authentic. He was comfortable wearing it all day. Will definitely buy more!"</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailPageKidsPagadis;