// src/pages/ProductDetailPageBlazer.js
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './ProductDetailPageBlazer.css';
import { FaStar, FaStarHalfAlt, FaRegStar, FaHeart, FaShoppingBag, FaTruck, FaUndo, FaShieldAlt, FaChevronLeft, FaChevronRight, FaCheck, FaShareAlt } from 'react-icons/fa';

const ProductDetailPageBlazer = () => {
    const { id } = useParams();
    const [selectedSize, setSelectedSize] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [isWishlisted, setIsWishlisted] = useState(false);
    const [mainImage, setMainImage] = useState(0);

    const blazerProducts = [
        {
            id: 1,
            title: "Classic Navy Blazer",
            price: 129.99,
            oldPrice: 169.99,
            rating: 4.8,
            reviews: 178,
            description: "Timeless navy blue blazer perfect for formal and semi-formal occasions.",
            detailedDescription: "This classic navy blazer is crafted from premium wool blend fabric, offering both comfort and durability. Features a single-breasted design with notch lapels, two-button closure, and flap pockets. The tailored fit ensures a sharp, professional appearance suitable for business meetings, interviews, and formal events. Made with attention to detail and quality stitching.",
            color: "Navy Blue",
            sizes: ['S', 'M', 'L', 'XL'],
            inStock: true,
            stockCount: 42,
            images: [
                "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1539533113205-f5ae7ad028e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            ],
            badge: "CLASSIC",
            category: "Blazers",
            type: "Single Breasted Blazer",
            material: "Premium Wool Blend",
            careInstructions: "Dry clean recommended. Steam iron on low heat.",
            occasion: "Business, Formal Events, Weddings",
            deliveryTime: "3-5 business days",
            fabric: "Wool Blend (70% Wool, 30% Polyester)",
            lining: "Silk Polyester Blend",
            pockets: "Two Flap Pockets, One Breast Pocket",
            closure: "Two-Button",
            lapel: "Notch Lapel"
        },
        {
            id: 2,
            title: "Wool Blend Business Blazer",
            price: 149.99,
            oldPrice: 199.99,
            rating: 4.7,
            reviews: 134,
            description: "Premium wool blend blazer for professional business settings.",
            detailedDescription: "Designed for the modern professional, this wool blend blazer features a tailored slim fit with contemporary styling. Perfect for office wear and business meetings, it offers both comfort and style. The breathable fabric ensures all-day comfort while maintaining a crisp appearance.",
            color: "Charcoal Gray",
            sizes: ['M', 'L', 'XL', 'XXL'],
            inStock: true,
            stockCount: 28,
            images: [
                "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            ],
            badge: "BUSINESS",
            category: "Blazers",
            type: "Business Blazer",
            material: "Premium Wool Blend",
            careInstructions: "Dry clean only. Do not bleach.",
            occasion: "Office, Business Meetings, Interviews",
            deliveryTime: "2-4 business days",
            fabric: "Wool Blend",
            lining: "Breathable Polyester",
            pockets: "Two Jetted Pockets",
            closure: "Single-Button",
            lapel: "Peak Lapel"
        }
    ];

    const product = blazerProducts.find(p => p.id === parseInt(id)) || blazerProducts[0];

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
            alert('Please select a size');
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
                text: `Check out this stylish ${product.title} on Arshart`,
                url: window.location.href,
            });
        } else {
            navigator.clipboard.writeText(window.location.href);
            alert('Link copied to clipboard!');
        }
    };

    return (
        <div className="product-detail-blazer">
            <div className="container">
                <div className="breadcrumb">
                    <Link to="/">Home</Link>
                    <span>/</span>
                    <Link to="/mens-wear">Men's Wear</Link>
                    <span>/</span>
                    <Link to="/blazers">Blazers</Link>
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
                            <div className="product-badge blazer-badge">{product.badge}</div>
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
                                        {product.inStock ? 'In Stock' : 'Out of Stock'}
                                    </span>
                                </div>
                                <div className="product-actions">
                                    <button 
                                        className={`wishlist-btn ${isWishlisted ? 'active' : ''}`}
                                        onClick={() => setIsWishlisted(!isWishlisted)}
                                    >
                                        <FaHeart />
                                        {isWishlisted ? 'Wishlisted' : 'Add to Wishlist'}
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
                            <p className="price-note">Inclusive of all taxes</p>
                        </div>

                        <div className="product-description">
                            <p>{product.description}</p>
                            <p className="detailed-description">{product.detailedDescription}</p>
                        </div>

                        {/* Size Selection */}
                        <div className="size-selection">
                            <h3>Select Size:</h3>
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
                            <Link to="/size-guide" className="size-guide-link">Size Guide</Link>
                        </div>

                        {/* Color Info */}
                        <div className="color-info">
                            <h3>Color:</h3>
                            <div className="color-display">
                                <span className="color-name">{product.color}</span>
                                <div 
                                    className="color-sample" 
                                    style={{ 
                                        background: product.color.toLowerCase().includes('navy') ? '#000080' :
                                                    product.color.toLowerCase().includes('charcoal') ? '#36454F' :
                                                    product.color.toLowerCase().includes('black') ? '#000000' :
                                                    product.color.toLowerCase().includes('beige') ? '#F5F5DC' :
                                                    product.color.toLowerCase().includes('burgundy') ? '#800020' :
                                                    '#1E3A8A'
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

                        {/* Product Details */}
                        <div className="product-specifications">
                            <h3>Product Specifications</h3>
                            <div className="spec-grid">
                                <div className="spec-item">
                                    <span className="spec-label">Type:</span>
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
                                    <span className="spec-label">Lining:</span>
                                    <span className="spec-value">{product.lining}</span>
                                </div>
                                <div className="spec-item">
                                    <span className="spec-label">Pockets:</span>
                                    <span className="spec-value">{product.pockets}</span>
                                </div>
                                <div className="spec-item">
                                    <span className="spec-label">Closure:</span>
                                    <span className="spec-value">{product.closure}</span>
                                </div>
                                <div className="spec-item">
                                    <span className="spec-label">Lapel Style:</span>
                                    <span className="spec-value">{product.lapel}</span>
                                </div>
                                <div className="spec-item">
                                    <span className="spec-label">Care Instructions:</span>
                                    <span className="spec-value">{product.careInstructions}</span>
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
                                    <strong>Free Delivery</strong>
                                    <p>Delivered by {product.deliveryTime}</p>
                                </div>
                            </div>
                            <div className="delivery-option">
                                <FaUndo className="delivery-icon" />
                                <div className="delivery-text">
                                    <strong>Easy Returns</strong>
                                    <p>30 days return policy</p>
                                </div>
                            </div>
                            <div className="delivery-option">
                                <FaShieldAlt className="delivery-icon" />
                                <div className="delivery-text">
                                    <strong>Quality Guarantee</strong>
                                    <p>Premium quality assurance</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related Products */}
                <div className="related-products">
                    <h2>You May Also Like</h2>
                    <div className="related-grid">
                        {blazerProducts
                            .filter(p => p.id !== product.id)
                            .slice(0, 4)
                            .map(related => (
                                <Link to={`/product/blazers/${related.id}`} key={related.id} className="related-item">
                                    <img src={related.images[0]} alt={related.title} />
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
                    <h2>Customer Reviews</h2>
                    <div className="reviews-summary">
                        <div className="avg-rating">
                            <span className="rating-number">{product.rating}</span>
                            <div className="stars">{renderStars(product.rating)}</div>
                            <p>{product.reviews} reviews</p>
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
                            <div className="rating-bar">
                                <span className="rating-label">2 Stars</span>
                                <div className="rating-progress">
                                    <div className="progress-bar" style={{ width: '1%' }}></div>
                                </div>
                                <span className="rating-percent">1%</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="customer-reviews">
                        <div className="review-item">
                            <div className="review-header">
                                <div className="reviewer-info">
                                    <strong>Rajesh Kumar</strong>
                                    <div className="review-stars">
                                        {renderStars(5)}
                                    </div>
                                </div>
                                <span className="review-date">2 weeks ago</span>
                            </div>
                            <p className="review-text">"Perfect fit and excellent quality. The blazer looks exactly as shown and feels premium. Highly recommended!"</p>
                        </div>
                        
                        <div className="review-item">
                            <div className="review-header">
                                <div className="reviewer-info">
                                    <strong>Vikram Singh</strong>
                                    <div className="review-stars">
                                        {renderStars(4)}
                                    </div>
                                </div>
                                <span className="review-date">1 month ago</span>
                            </div>
                            <p className="review-text">"Great blazer for business meetings. The fabric is comfortable and the tailoring is spot on. Would buy again."</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailPageBlazer;