// src/pages/ProductDetailPageKurta.js
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './ProductDetailPageKurta.css';
import { FaStar, FaStarHalfAlt, FaRegStar, FaHeart, FaShoppingBag, FaTruck, FaUndo, FaShieldAlt, FaChevronLeft, FaChevronRight, FaCheck, FaShareAlt } from 'react-icons/fa';

const ProductDetailPageKurta = () => {
    const { id } = useParams();
    const [selectedSize, setSelectedSize] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [isWishlisted, setIsWishlisted] = useState(false);
    const [mainImage, setMainImage] = useState(0);

    const kurtaProducts = [
        {
            id: 1,
            title: "Royal Silk Kurta Set",
            price: 89.99,
            oldPrice: 119.99,
            rating: 4.8,
            reviews: 156,
            description: "Premium silk kurta with intricate embroidery and matching pajama.",
            detailedDescription: "This exquisite royal silk kurta set features traditional zari embroidery with gold and silver threads. Made from 100% pure silk, it offers a luxurious feel and elegant drape. The intricate patterns are inspired by Mughal art and are handcrafted by skilled artisans. Perfect for weddings and special occasions.",
            color: "Ivory & Gold",
            sizes: ['S', 'M', 'L', 'XL'],
            inStock: true,
            stockCount: 32,
            images: [
                "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1539533113205-f5ae7ad028e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            ],
            badge: "PREMIUM",
            category: "Kurtas",
            type: "Silk Kurta Set",
            material: "100% Pure Silk",
            careInstructions: "Dry clean only. Store in a cool, dry place.",
            occasion: "Weddings, Festivals, Special Occasions",
            deliveryTime: "3-5 business days",
            fabric: "Pure Silk",
            embroidery: "Zari & Resham Work",
            length: "Knee Length",
            neck: "Mandarin Collar"
        },
        {
            id: 2,
            title: "Cotton Pathani Kurta",
            price: 49.99,
            oldPrice: 69.99,
            rating: 4.6,
            reviews: 112,
            description: "Comfortable cotton Pathani style kurta for everyday wear.",
            detailedDescription: "Authentic Pathani style kurta made with premium cotton. Features traditional straight cut and comfortable fit for all-day wear. Perfect for daily use, office wear, and casual gatherings. The breathable fabric makes it ideal for all seasons.",
            color: "White & Blue",
            sizes: ['M', 'L', 'XL', 'XXL'],
            inStock: true,
            stockCount: 45,
            images: [
                "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            ],
            badge: "TRADITIONAL",
            category: "Kurtas",
            type: "Pathani Kurta",
            material: "Premium Cotton",
            careInstructions: "Machine wash cold. Do not bleach.",
            occasion: "Daily Wear, Office, Casual Events",
            deliveryTime: "2-4 business days",
            fabric: "100% Cotton",
            embroidery: "Minimal Embroidery",
            length: "Below Knee",
            neck: "Round Neck"
        }
    ];

    const product = kurtaProducts.find(p => p.id === parseInt(id)) || kurtaProducts[0];

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
                text: `Check out this beautiful ${product.title} on Arshart`,
                url: window.location.href,
            });
        } else {
            navigator.clipboard.writeText(window.location.href);
            alert('Link copied to clipboard!');
        }
    };

    return (
        <div className="product-detail-kurta">
            <div className="container">
                <div className="breadcrumb">
                    <Link to="/">Home</Link>
                    <span>/</span>
                    <Link to="/mens-wear">Men's Wear</Link>
                    <span>/</span>
                    <Link to="/kurtas">Kurtas</Link>
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
                            <div className="product-badge kurta-badge">{product.badge}</div>
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
                                        background: product.color.toLowerCase().includes('gold') ? 'linear-gradient(45deg, #FFD700, #FFA500)' :
                                                    product.color.toLowerCase().includes('white') ? '#FFFFFF' :
                                                    product.color.toLowerCase().includes('blue') ? '#1E90FF' :
                                                    product.color.toLowerCase().includes('maroon') ? '#800000' :
                                                    '#000000'
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
                            <h3>Product Details</h3>
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
                                    <span className="spec-label">Embroidery:</span>
                                    <span className="spec-value">{product.embroidery}</span>
                                </div>
                                <div className="spec-item">
                                    <span className="spec-label">Care Instructions:</span>
                                    <span className="spec-value">{product.careInstructions}</span>
                                </div>
                                <div className="spec-item">
                                    <span className="spec-label">Perfect For:</span>
                                    <span className="spec-value">{product.occasion}</span>
                                </div>
                                <div className="spec-item">
                                    <span className="spec-label">Length:</span>
                                    <span className="spec-value">{product.length}</span>
                                </div>
                                <div className="spec-item">
                                    <span className="spec-label">Neck Style:</span>
                                    <span className="spec-value">{product.neck}</span>
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
                                    <p>100% quality assurance</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related Products */}
                <div className="related-products">
                    <h2>You May Also Like</h2>
                    <div className="related-grid">
                        {kurtaProducts
                            .filter(p => p.id !== product.id)
                            .slice(0, 4)
                            .map(related => (
                                <Link to={`/product/kurtas/${related.id}`} key={related.id} className="related-item">
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
                                    <div className="progress-bar" style={{ width: '85%' }}></div>
                                </div>
                                <span className="rating-percent">85%</span>
                            </div>
                            <div className="rating-bar">
                                <span className="rating-label">4 Stars</span>
                                <div className="rating-progress">
                                    <div className="progress-bar" style={{ width: '12%' }}></div>
                                </div>
                                <span className="rating-percent">12%</span>
                            </div>
                            <div className="rating-bar">
                                <span className="rating-label">3 Stars</span>
                                <div className="rating-progress">
                                    <div className="progress-bar" style={{ width: '2%' }}></div>
                                </div>
                                <span className="rating-percent">2%</span>
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
                </div>
            </div>
        </div>
    );
};

export default ProductDetailPageKurta;