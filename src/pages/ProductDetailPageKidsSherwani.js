// src/pages/ProductDetailPageKidsSherwani.js
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './ProductDetailPageKidsSherwani.css';
import { FaStar, FaStarHalfAlt, FaRegStar, FaHeart, FaShoppingBag, FaTruck, FaUndo, FaShieldAlt, FaChevronLeft, FaChevronRight, FaCheck, FaShareAlt, FaChild, FaRuler } from 'react-icons/fa';

const ProductDetailPageKidsSherwani = () => {
    const { id } = useParams();
    const [selectedSize, setSelectedSize] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [isWishlisted, setIsWishlisted] = useState(false);
    const [mainImage, setMainImage] = useState(0);

    const kidsSherwaniProducts = [
        {
            id: 1,
            title: "Kids Royal Wedding Sherwani",
            price: 89.99,
            oldPrice: 119.99,
            rating: 4.9,
            reviews: 142,
            description: "Exquisite royal wedding sherwani with intricate embroidery and zari work.",
            detailedDescription: "This royal wedding sherwani is crafted for special occasions where your little prince needs to shine. Made from premium silk blend fabric with intricate zari work and hand embroidery. The design features traditional motifs, detailed thread work, and comes with a matching dupatta. Comfortable lining ensures your child can wear it for extended periods during weddings and ceremonies.",
            color: "Gold & Red",
            sizes: ['2-3 Years', '4-5 Years', '6-7 Years', '8-10 Years'],
            ageGroup: "2-10 Years",
            inStock: true,
            stockCount: 28,
            images: [
                "https://images.unsplash.com/photo-1599423423927-a2c777b40f35?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1539533113205-f5ae7ad028e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            ],
            badge: "ROYAL",
            category: "Kids Sherwanis",
            type: "Wedding Sherwani",
            material: "Premium Silk Blend",
            careInstructions: "Dry clean only. Store in cotton cloth.",
            occasion: "Weddings, Grand Ceremonies, Festivals",
            deliveryTime: "3-5 business days",
            fabric: "Silk Blend with Zari Work",
            lining: "Soft Cotton Lining",
            embroidery: "Hand Embroidery with Zari",
            accessories: "Matching Dupatta Included",
            features: "Traditional Motifs, Royal Design, Comfort Fit",
            ageRecommendation: "2-10 Years",
            comfortFeatures: "Soft Lining, Breathable Fabric, Tagless Design",
            safetyFeatures: "Child-safe Embellishments, Non-toxic Dyes, Hypoallergenic"
        },
        {
            id: 2,
            title: "Kids Silk Sherwani Set",
            price: 74.99,
            oldPrice: 99.99,
            rating: 4.8,
            reviews: 96,
            description: "Pure silk sherwani with traditional embroidery for festivals and ceremonies.",
            detailedDescription: "Crafted from pure silk with traditional embroidery, this sherwani is perfect for festivals and ceremonies. The lightweight fabric ensures comfort while the intricate design adds elegance. Comes with a matching dupatta and features easy-to-wear design for children.",
            color: "Maroon & Gold",
            sizes: ['3-4 Years', '5-6 Years', '7-8 Years', '9-12 Years'],
            ageGroup: "3-12 Years",
            inStock: true,
            stockCount: 35,
            images: [
                "https://images.unsplash.com/photo-1539533113205-f5ae7ad028e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1599423423927-a2c777b40f35?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            ],
            badge: "SILK",
            category: "Kids Sherwanis",
            type: "Silk Sherwani",
            material: "Pure Silk",
            careInstructions: "Dry clean recommended. Handle with care.",
            occasion: "Festivals, Ceremonies, Family Functions",
            deliveryTime: "2-4 business days",
            fabric: "100% Pure Silk",
            lining: "Silk Cotton Blend",
            embroidery: "Traditional Thread Work",
            accessories: "Matching Dupatta Included",
            features: "Lightweight, Traditional Design, Festive Look",
            ageRecommendation: "3-12 Years",
            comfortFeatures: "Breathable Silk, Soft Lining, Easy to Wear",
            safetyFeatures: "Secure Stitching, Child-friendly Materials"
        }
    ];

    const product = kidsSherwaniProducts.find(p => p.id === parseInt(id)) || kidsSherwaniProducts[0];

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
        <div className="product-detail-kids-sherwani">
            <div className="container">
                <div className="breadcrumb">
                    <Link to="/">Home</Link>
                    <span>/</span>
                    <Link to="/kids-wear">Kids Wear</Link>
                    <span>/</span>
                    <Link to="/kids-sherwanis">Kids Sherwanis</Link>
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
                            <div className="product-badge sherwani-badge">{product.badge}</div>
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
                            <p className="price-note">Royal outfit for your little prince! Free dupatta included.</p>
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
                                <Link to="/size-guide/kids-sherwanis" className="size-guide-link">
                                    <FaRuler /> View Kids Sherwani Size Chart
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
                                <p>Unsure about size? <Link to="/size-guide/kids-sherwanis">Check our kids sherwani size guide</Link> or contact us for assistance.</p>
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
                                                    product.color.toLowerCase().includes('red') ? '#DC143C' :
                                                    product.color.toLowerCase().includes('maroon') ? '#800000' :
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
                            <h3>Sherwani Specifications</h3>
                            <div className="spec-grid">
                                <div className="spec-item">
                                    <span className="spec-label">Sherwani Type:</span>
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
                            </div>
                        </div>

                        {/* Delivery Info */}
                        <div className="delivery-info">
                            <div className="delivery-option">
                                <FaTruck className="delivery-icon" />
                                <div className="delivery-text">
                                    <strong>Free & Fast Delivery</strong>
                                    <p>Delivered in {product.deliveryTime}. Free dupatta included.</p>
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
                                    <p>Premium craftsmanship with child-safe materials.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related Products */}
                <div className="related-products">
                    <h2>More Kids Sherwanis You'll Love</h2>
                    <div className="related-grid">
                        {kidsSherwaniProducts
                            .filter(p => p.id !== product.id)
                            .slice(0, 4)
                            .map(related => (
                                <Link to={`/product/kids-sherwanis/${related.id}`} key={related.id} className="related-item">
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
                        </div>
                    </div>
                    
                    <div className="customer-reviews">
                        <div className="review-item">
                            <div className="review-header">
                                <div className="reviewer-info">
                                    <strong>Priya Sharma</strong>
                                    <div className="review-stars">
                                        {renderStars(5)}
                                    </div>
                                </div>
                                <span className="review-date">3 weeks ago</span>
                            </div>
                            <p className="review-text">"My son wore this for his cousin's wedding and received so many compliments! The embroidery is exquisite and the fit was perfect. He was comfortable throughout the ceremony."</p>
                        </div>
                        
                        <div className="review-item">
                            <div className="review-header">
                                <div className="reviewer-info">
                                    <strong>Rahul Verma</strong>
                                    <div className="review-stars">
                                        {renderStars(5)}
                                    </div>
                                </div>
                                <span className="review-date">1 month ago</span>
                            </div>
                            <p className="review-text">"Absolutely stunning sherwani! The quality exceeded my expectations. The dupatta matches perfectly and the whole set looks royal. Worth every penny for our Diwali celebrations."</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailPageKidsSherwani;