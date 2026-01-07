import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './ProductDetailPageKidsSuit.css';
import { FaStar, FaStarHalfAlt, FaRegStar, FaHeart, FaShoppingBag, FaTruck, FaUndo, FaShieldAlt, FaChevronLeft, FaChevronRight, FaCheck, FaShareAlt, FaChild, FaRuler } from 'react-icons/fa';

const ProductDetailPageKidsSuit = () => {
    const { id } = useParams();
    const [selectedSize, setSelectedSize] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [isWishlisted, setIsWishlisted] = useState(false);
    const [mainImage, setMainImage] = useState(0);

    const kidsSuitProducts = [
        {
            id: 1,
            title: "Kids Premium Wedding Sherwani Set",
            price: 89.99,
            oldPrice: 119.99,
            rating: 4.8,
            reviews: 142,
            description: "Elegant wedding sherwani for boys with intricate embroidery and premium fabric.",
            detailedDescription: "This premium kids sherwani is perfect for weddings and special occasions. Crafted from soft, breathable fabric with intricate embroidery and zari work. The design includes a kurta-style top with mandarin collar, matching bottoms, and a dupatta. Comfortable for kids to wear for extended periods while looking absolutely adorable. Comes with easy-to-wear elastic waistband for perfect fit.",
            color: "Gold & Red",
            sizes: ['2-3 Years', '4-5 Years', '6-7 Years', '8-10 Years'],
            ageGroup: "2-10 Years",
            inStock: true,
            stockCount: 32,
            images: [
                "https://images.unsplash.com/photo-1599423423927-a2c777b40f35?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1539533113205-f5ae7ad028e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            ],
            badge: "PREMIUM",
            category: "Kids Suits",
            type: "Wedding Sherwani",
            material: "Premium Silk Blend",
            careInstructions: "Dry clean recommended. Hand wash cold separately.",
            occasion: "Weddings, Festivals, Special Occasions",
            deliveryTime: "2-4 business days",
            fabric: "Silk Blend (60% Silk, 40% Cotton)",
            lining: "Soft Cotton Lining",
            pockets: "Two Side Pockets",
            closure: "Button Front",
            accessories: "Matching Dupatta Included",
            washing: "Hand Wash or Dry Clean",
            ironing: "Low Heat Iron",
            ageRecommendation: "2-10 Years",
            comfortFeatures: "Elastic Waistband, Soft Lining, Tagless Design",
            safetyFeatures: "Child-safe Buttons, Non-toxic Dyes, Hypoallergenic"
        },
        {
            id: 2,
            title: "Kids Formal Blazer & Trouser Set",
            price: 59.99,
            oldPrice: 79.99,
            rating: 4.6,
            reviews: 187,
            description: "Complete formal suit set with blazer and trousers, perfect for school events.",
            detailedDescription: "Designed for school events, parties, and formal occasions, this kids blazer set offers both style and comfort. The blazer features a classic single-button design with notch lapels, while the trousers have an elastic waistband for easy wear and comfort. Made from durable yet soft fabric that can withstand active play while maintaining a crisp appearance.",
            color: "Navy Blue",
            sizes: ['3-4 Years', '5-6 Years', '7-8 Years', '9-12 Years'],
            ageGroup: "3-12 Years",
            inStock: true,
            stockCount: 45,
            images: [
                "https://images.unsplash.com/photo-1539533113205-f5ae7ad028e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1599423423927-a2c777b40f35?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1520975916090-3105956dac38?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            ],
            badge: "FORMAL",
            category: "Kids Suits",
            type: "Formal Suit Set",
            material: "Polyester Wool Blend",
            careInstructions: "Machine wash cold. Tumble dry low.",
            occasion: "School Events, Parties, Photos",
            deliveryTime: "1-3 business days",
            fabric: "Poly-Wool Blend (Easy Care)",
            lining: "Breathable Polyester",
            pockets: "Two Front Pockets",
            closure: "Single Button",
            accessories: "None",
            washing: "Machine Washable",
            ironing: "Medium Heat Iron",
            ageRecommendation: "3-12 Years",
            comfortFeatures: "Elastic Waist Trousers, Soft Shoulder Padding",
            safetyFeatures: "Child-friendly Materials, Non-slip Buttons"
        },
        {
            id: 3,
            title: "Kids Velvet Party Blazer Set",
            price: 69.99,
            oldPrice: 89.99,
            rating: 4.7,
            reviews: 78,
            description: "Velvet blazer set with silk lining, perfect for parties and special occasions.",
            detailedDescription: "Make your child stand out at parties with this luxurious velvet blazer set. The soft velvet fabric feels comfortable against the skin while providing a rich, elegant look. The set includes a velvet blazer with satin lapels and matching trousers. Perfect for birthdays, family gatherings, and festive celebrations.",
            color: "Burgundy",
            sizes: ['4-5 Years', '6-7 Years', '8-9 Years', '10-12 Years'],
            ageGroup: "4-12 Years",
            inStock: true,
            stockCount: 25,
            images: [
                "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1539533113205-f5ae7ad028e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            ],
            badge: "PARTY",
            category: "Kids Suits",
            type: "Velvet Party Set",
            material: "Premium Velvet",
            careInstructions: "Dry clean only. Do not iron directly on velvet.",
            occasion: "Birthdays, Parties, Festivals",
            deliveryTime: "3-5 business days",
            fabric: "100% Polyester Velvet",
            lining: "Silk Polyester Blend",
            pockets: "Two Side Pockets",
            closure: "Hidden Snap Buttons",
            accessories: "None",
            washing: "Dry Clean Only",
            ironing: "Steam Only",
            ageRecommendation: "4-12 Years",
            comfortFeatures: "Soft Velvet Fabric, Silk Lining",
            safetyFeatures: "Hidden Fasteners, Non-toxic Materials"
        }
    ];

    const product = kidsSuitProducts.find(p => p.id === parseInt(id)) || kidsSuitProducts[0];

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
                text: `Check out this adorable ${product.title} for kids on Arshart`,
                url: window.location.href,
            });
        } else {
            navigator.clipboard.writeText(window.location.href);
            alert('Link copied to clipboard!');
        }
    };

    return (
        <div className="product-detail-kids-suit">
            <div className="container">
                <div className="breadcrumb">
                    <Link to="/">Home</Link>
                    <span>/</span>
                    <Link to="/kids-wear">Kids Wear</Link>
                    <span>/</span>
                    <Link to="/kids-suits">Kids Suits</Link>
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
                            <div className="product-badge kids-badge">{product.badge}</div>
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
                            <p className="price-note">Perfect gift for your little one! Free gift wrapping available.</p>
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
                                <Link to="/size-guide/kids" className="size-guide-link">
                                    <FaRuler /> View Kids Size Chart
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
                                <p>Unsure about size? <Link to="/size-guide/kids">Check our kids size guide</Link> or contact us for assistance.</p>
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
                                                    product.color.toLowerCase().includes('navy') ? '#000080' :
                                                    product.color.toLowerCase().includes('burgundy') ? '#800020' :
                                                    product.color.toLowerCase().includes('blue') ? '#4169E1' :
                                                    '#FF6B6B'
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

                        {/* Product Specifications - Kids Specific */}
                        <div className="product-specifications">
                            <h3>Kids-Suit Specifications</h3>
                            <div className="spec-grid">
                                <div className="spec-item">
                                    <span className="spec-label">Suit Type:</span>
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
                                    <span className="spec-label">Age Range:</span>
                                    <span className="spec-value kids-age">{product.ageRecommendation}</span>
                                </div>
                                <div className="spec-item">
                                    <span className="spec-label">Accessories:</span>
                                    <span className="spec-value">{product.accessories}</span>
                                </div>
                                <div className="spec-item">
                                    <span className="spec-label">Washing Care:</span>
                                    <span className="spec-value">{product.washing}</span>
                                </div>
                                <div className="spec-item">
                                    <span className="spec-label">Ironing:</span>
                                    <span className="spec-value">{product.ironing}</span>
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

                        {/* Delivery Info - Kids Specific */}
                        <div className="delivery-info">
                            <div className="delivery-option">
                                <FaTruck className="delivery-icon" />
                                <div className="delivery-text">
                                    <strong>Free & Fast Delivery</strong>
                                    <p>Delivered in {product.deliveryTime}. Free gift wrapping available.</p>
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
                                    <p>All materials are kid-friendly, non-toxic, and hypoallergenic.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related Products - Kids Suits */}
                <div className="related-products">
                    <h2>More Kids Suits You'll Love</h2>
                    <div className="related-grid">
                        {kidsSuitProducts
                            .filter(p => p.id !== product.id)
                            .slice(0, 4)
                            .map(related => (
                                <Link to={`/product/kids-suits/${related.id}`} key={related.id} className="related-item">
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
                                    <strong>Priya Sharma</strong>
                                    <div className="review-stars">
                                        {renderStars(5)}
                                    </div>
                                </div>
                                <span className="review-date">1 week ago</span>
                            </div>
                            <p className="review-text">"My son wore this sherwani for his aunt's wedding and received so many compliments! The fit was perfect and he was comfortable all day. The quality is excellent for the price."</p>
                        </div>
                        
                        <div className="review-item">
                            <div className="review-header">
                                <div className="reviewer-info">
                                    <strong>Amit Patel</strong>
                                    <div className="review-stars">
                                        {renderStars(4)}
                                    </div>
                                </div>
                                <span className="review-date">3 weeks ago</span>
                            </div>
                            <p className="review-text">"Great blazer set for school events. The elastic waistband makes it easy for my son to wear himself. The fabric is durable and washes well. Will buy again in a bigger size!"</p>
                        </div>

                        <div className="review-item">
                            <div className="review-header">
                                <div className="reviewer-info">
                                    <strong>Neha Gupta</strong>
                                    <div className="review-stars">
                                        {renderStars(5)}
                                    </div>
                                </div>
                                <span className="review-date">2 months ago</span>
                            </div>
                            <p className="review-text">"The velvet party set was perfect for my daughter's birthday party. She looked adorable and the fabric didn't irritate her skin. We got so many photos! Highly recommend for special occasions."</p>
                        </div>
                    </div>
                </div>

                {/* Kids Size Help Section */}
                <div className="size-help-section">
                    <h3>Need Help Choosing the Right Size?</h3>
                    <div className="size-help-content">
                        <div className="size-tip">
                            <h4><FaChild /> Measure Your Child</h4>
                            <p>Take measurements of chest, waist, and height for accurate sizing.</p>
                        </div>
                        <div className="size-tip">
                            <h4><FaRuler /> Check Our Size Chart</h4>
                            <p>Refer to our detailed kids size chart for perfect fit guidance.</p>
                        </div>
                        <div className="size-tip">
                            <h4>📞 Contact Us</h4>
                            <p>Call our customer care for personalized size recommendations.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailPageKidsSuit;