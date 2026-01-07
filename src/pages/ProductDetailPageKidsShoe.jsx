// src/pages/ProductDetailPageKidsShoe.js
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './ProductDetailPageKidsShoe.css';
import { FaStar, FaStarHalfAlt, FaRegStar, FaHeart, FaShoppingBag, FaTruck, FaUndo, FaShieldAlt, FaChevronLeft, FaChevronRight, FaCheck, FaShareAlt, FaChild, FaRuler } from 'react-icons/fa';

const ProductDetailPageKidsShoe = () => {
    const { id } = useParams();
    const [selectedSize, setSelectedSize] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [isWishlisted, setIsWishlisted] = useState(false);
    const [mainImage, setMainImage] = useState(0);

    const kidsShoeProducts = [
        {
            id: 1,
            title: "Kids Formal Leather Shoes",
            price: 39.99,
            oldPrice: 59.99,
            rating: 4.7,
            reviews: 128,
            description: "Premium leather formal shoes for school and special occasions.",
            detailedDescription: "These premium leather shoes are perfect for school events, weddings, and formal occasions. Made from genuine leather with soft lining for all-day comfort. Features a secure strap closure that's easy for kids to manage. The durable sole provides good grip while being flexible enough for active children.",
            color: "Black",
            sizes: ['2-3 Years', '4-5 Years', '6-7 Years', '8-10 Years'],
            ageGroup: "2-10 Years",
            inStock: true,
            stockCount: 45,
            images: [
                "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            ],
            badge: "FORMAL",
            category: "Kids Shoes",
            type: "Leather Formal Shoes",
            material: "Genuine Leather",
            careInstructions: "Wipe clean with damp cloth. Use leather conditioner occasionally.",
            occasion: "School, Weddings, Formal Events",
            deliveryTime: "2-4 business days",
            closure: "Strap & Buckle",
            sole: "Flexible Rubber Sole",
            lining: "Soft Breathable Fabric",
            features: "Easy Closure, Comfort Fit, Durable",
            ageRecommendation: "2-10 Years",
            comfortFeatures: "Padded Collar, Cushioned Insole, Flexible Sole",
            safetyFeatures: "Non-slip Sole, Rounded Toe, Child-Safe Materials"
        },
        {
            id: 2,
            title: "Kids Traditional Mojaris",
            price: 29.99,
            oldPrice: 39.99,
            rating: 4.8,
            reviews: 96,
            description: "Handcrafted traditional mojaris with embroidery for festivals.",
            detailedDescription: "Beautifully handcrafted mojaris perfect for traditional occasions and festivals. Each pair features intricate embroidery and comfortable fit. Made with soft leather and cotton lining for maximum comfort. The elastic back ensures easy wearing and removal.",
            color: "Red & Gold",
            sizes: ['3-4 Years', '5-6 Years', '7-8 Years', '9-12 Years'],
            ageGroup: "3-12 Years",
            inStock: true,
            stockCount: 38,
            images: [
                "https://images.unsplash.com/photo-1560343090-f0409e92791a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            ],
            badge: "TRADITIONAL",
            category: "Kids Shoes",
            type: "Embroidered Mojaris",
            material: "Leather with Cotton",
            careInstructions: "Spot clean only. Do not machine wash.",
            occasion: "Festivals, Weddings, Traditional Events",
            deliveryTime: "3-5 business days",
            closure: "Elastic Back",
            sole: "Leather Sole",
            lining: "Soft Cotton",
            features: "Hand Embroidery, Traditional Design",
            ageRecommendation: "3-12 Years",
            comfortFeatures: "Soft Lining, Lightweight, Flexible",
            safetyFeatures: "Non-toxic Dyes, Smooth Edges"
        }
    ];

    const product = kidsShoeProducts.find(p => p.id === parseInt(id)) || kidsShoeProducts[0];

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
                text: `Check out these adorable ${product.title} for kids on Arshart`,
                url: window.location.href,
            });
        } else {
            navigator.clipboard.writeText(window.location.href);
            alert('Link copied to clipboard!');
        }
    };

    return (
        <div className="product-detail-kids-shoe">
            <div className="container">
                <div className="breadcrumb">
                    <Link to="/">Home</Link>
                    <span>/</span>
                    <Link to="/kids-wear">Kids Wear</Link>
                    <span>/</span>
                    <Link to="/kids-shoes">Kids Shoes</Link>
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
                            <div className="product-badge shoes-badge">{product.badge}</div>
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
                            <p className="price-note">Perfect footwear for your little one! Free size exchange available.</p>
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
                                <Link to="/size-guide/kids-shoes" className="size-guide-link">
                                    <FaRuler /> View Kids Shoe Size Chart
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
                                <p>Unsure about size? <Link to="/size-guide/kids-shoes">Check our kids shoe size guide</Link> or contact us for assistance.</p>
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
                                        background: product.color.toLowerCase().includes('black') ? '#000000' :
                                                    product.color.toLowerCase().includes('red') ? '#DC143C' :
                                                    product.color.toLowerCase().includes('gold') ? '#FFD700' :
                                                    product.color.toLowerCase().includes('blue') ? '#4169E1' :
                                                    '#3498db'
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
                            <h3>Shoe Specifications</h3>
                            <div className="spec-grid">
                                <div className="spec-item">
                                    <span className="spec-label">Shoe Type:</span>
                                    <span className="spec-value">{product.type}</span>
                                </div>
                                <div className="spec-item">
                                    <span className="spec-label">Material:</span>
                                    <span className="spec-value">{product.material}</span>
                                </div>
                                <div className="spec-item">
                                    <span className="spec-label">Closure:</span>
                                    <span className="spec-value">{product.closure}</span>
                                </div>
                                <div className="spec-item">
                                    <span className="spec-label">Sole:</span>
                                    <span className="spec-value">{product.sole}</span>
                                </div>
                                <div className="spec-item">
                                    <span className="spec-label">Lining:</span>
                                    <span className="spec-value">{product.lining}</span>
                                </div>
                                <div className="spec-item">
                                    <span className="spec-label">Age Range:</span>
                                    <span className="spec-value kids-age">{product.ageRecommendation}</span>
                                </div>
                                <div className="spec-item">
                                    <span className="spec-label">Features:</span>
                                    <span className="spec-value">{product.features}</span>
                                </div>
                                <div className="spec-item">
                                    <span className="spec-label">Care Instructions:</span>
                                    <span className="spec-value">{product.careInstructions}</span>
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
                            </div>
                        </div>

                        {/* Delivery Info */}
                        <div className="delivery-info">
                            <div className="delivery-option">
                                <FaTruck className="delivery-icon" />
                                <div className="delivery-text">
                                    <strong>Free & Fast Delivery</strong>
                                    <p>Delivered in {product.deliveryTime}. Free size exchange available.</p>
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
                                    <strong>Child-Safe Guarantee</strong>
                                    <p>All materials are kid-friendly, non-toxic, and durable.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related Products */}
                <div className="related-products">
                    <h2>More Kids Shoes You'll Love</h2>
                    <div className="related-grid">
                        {kidsShoeProducts
                            .filter(p => p.id !== product.id)
                            .slice(0, 4)
                            .map(related => (
                                <Link to={`/product/kids-shoes/${related.id}`} key={related.id} className="related-item">
                                    <div className="related-image">
                                        <img src={related.images[0]} alt={related.title} />
                                        <div className="related-age">{related.ageGroup}</div>
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
                                    <strong>Anjali Sharma</strong>
                                    <div className="review-stars">
                                        {renderStars(5)}
                                    </div>
                                </div>
                                <span className="review-date">2 weeks ago</span>
                            </div>
                            <p className="review-text">"My son wore these to his cousin's wedding and they were perfect! The strap closure is easy for him to manage himself. Very comfortable and lasted all day."</p>
                        </div>
                        
                        <div className="review-item">
                            <div className="review-header">
                                <div className="reviewer-info">
                                    <strong>Rajesh Mehta</strong>
                                    <div className="review-stars">
                                        {renderStars(4)}
                                    </div>
                                </div>
                                <span className="review-date">1 month ago</span>
                            </div>
                            <p className="review-text">"Great quality for the price. The leather is soft and the shoes have held up well to my active 6-year-old. Would definitely buy again in a bigger size."</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailPageKidsShoe;