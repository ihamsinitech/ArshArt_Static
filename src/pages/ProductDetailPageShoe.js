// src/pages/ProductDetailPageShoe.js
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './ProductDetailPageShoe.css';
import { FaStar, FaStarHalfAlt, FaRegStar, FaHeart, FaShoppingBag, FaTruck, FaUndo, FaShieldAlt, FaChevronLeft, FaChevronRight, FaCheck, FaShareAlt } from 'react-icons/fa';

const ProductDetailPageShoe = () => {
    const { id } = useParams();
    const [selectedSize, setSelectedSize] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [isWishlisted, setIsWishlisted] = useState(false);
    const [mainImage, setMainImage] = useState(0);

    const shoeProducts = [
        {
            id: 1,
            title: "Royal Embroidered Juttis",
            price: 89.99,
            oldPrice: 119.99,
            rating: 4.7,
            reviews: 96,
            description: "Traditional Punjabi juttis with intricate zari embroidery and mirror work.",
            detailedDescription: "These exquisite royal juttis are handcrafted by skilled artisans using traditional techniques passed down through generations. Made with premium silk fabric, each pair features intricate zari embroidery with gold and silver threads, complemented by mirror work that catches the light beautifully. Perfect for weddings, festivals, and special occasions.",
            color: "Gold & Maroon",
            sizes: ['7', '8', '9', '10'],
            inStock: true,
            stockCount: 25,
            images: [
                "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1560769624-6a4fdf6f5c2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            ],
            badge: "TRADITIONAL",
            category: "Shoes",
            type: "Juttis",
            material: "Silk with Zari Embroidery",
            careInstructions: "Clean with dry cloth. Store in dust bag provided.",
            occasion: "Weddings, Festivals, Special Occasions",
            deliveryTime: "3-5 business days",
            sole: "Leather Sole",
            closure: "Slip-on",
            embroidery: "Zari & Mirror Work",
            craftsmanship: "Handcrafted by Artisans"
        },
        {
            id: 2,
            title: "Handcrafted Kolhapuri Chappals",
            price: 129.99,
            oldPrice: 169.99,
            rating: 4.8,
            reviews: 128,
            description: "Authentic Kolhapuri leather chappals with traditional hand-tooling.",
            detailedDescription: "Authentic Kolhapuri leather chappals handcrafted by traditional artisans from Maharashtra. Made from premium vegetable-tanned leather, these chappals feature intricate hand-tooling and embroidery. The comfortable footbed molds to your feet over time, providing perfect comfort for daily wear.",
            color: "Natural Tan",
            sizes: ['8', '9', '10', '11'],
            inStock: true,
            stockCount: 18,
            images: [
                "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            ],
            badge: "TRADITIONAL",
            category: "Shoes",
            type: "Kolhapuris",
            material: "Vegetable-Tanned Leather",
            careInstructions: "Apply leather conditioner monthly. Keep away from water.",
            occasion: "Daily Wear, Cultural Events, Casual Outings",
            deliveryTime: "2-4 business days",
            sole: "Leather Sole",
            closure: "Adjustable Strap",
            embroidery: "Hand-Tooled Patterns",
            craftsmanship: "Traditional Kolhapuri Craft"
        }
    ];

    const product = shoeProducts.find(p => p.id === parseInt(id)) || shoeProducts[0];

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
                text: `Check out these beautiful ${product.title} on Arshart`,
                url: window.location.href,
            });
        } else {
            navigator.clipboard.writeText(window.location.href);
            alert('Link copied to clipboard!');
        }
    };

    return (
        <div className="product-detail-shoe">
            <div className="container">
                <div className="breadcrumb">
                    <Link to="/">Home</Link>
                    <span>/</span>
                    <Link to="/mens-wear">Men's Wear</Link>
                    <span>/</span>
                    <Link to="/shoes">Traditional Shoes</Link>
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
                            <div className="product-badge shoe-badge">{product.badge}</div>
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
                                                    product.color.toLowerCase().includes('maroon') ? '#800000' :
                                                    product.color.toLowerCase().includes('tan') ? '#D2B48C' :
                                                    product.color.toLowerCase().includes('ivory') ? '#FFFFF0' :
                                                    product.color.toLowerCase().includes('red') ? '#FF0000' :
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
                                    <span className="spec-label">Sole:</span>
                                    <span className="spec-value">{product.sole}</span>
                                </div>
                                <div className="spec-item">
                                    <span className="spec-label">Closure:</span>
                                    <span className="spec-value">{product.closure}</span>
                                </div>
                                <div className="spec-item">
                                    <span className="spec-label">Embroidery:</span>
                                    <span className="spec-value">{product.embroidery}</span>
                                </div>
                                <div className="spec-item">
                                    <span className="spec-label">Craftsmanship:</span>
                                    <span className="spec-value">{product.craftsmanship}</span>
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
                                    <strong>Authentic Product</strong>
                                    <p>100% traditional craftsmanship</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related Products */}
                <div className="related-products">
                    <h2>You May Also Like</h2>
                    <div className="related-grid">
                        {shoeProducts
                            .filter(p => p.id !== product.id)
                            .slice(0, 4)
                            .map(related => (
                                <Link to={`/product/traditional-shoes/${related.id}`} key={related.id} className="related-item">
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
                                    <div className="progress-bar" style={{ width: '78%' }}></div>
                                </div>
                                <span className="rating-percent">78%</span>
                            </div>
                            <div className="rating-bar">
                                <span className="rating-label">4 Stars</span>
                                <div className="rating-progress">
                                    <div className="progress-bar" style={{ width: '15%' }}></div>
                                </div>
                                <span className="rating-percent">15%</span>
                            </div>
                            <div className="rating-bar">
                                <span className="rating-label">3 Stars</span>
                                <div className="rating-progress">
                                    <div className="progress-bar" style={{ width: '5%' }}></div>
                                </div>
                                <span className="rating-percent">5%</span>
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
                                    <strong>Amit Sharma</strong>
                                    <div className="review-stars">
                                        {renderStars(5)}
                                    </div>
                                </div>
                                <span className="review-date">3 weeks ago</span>
                            </div>
                            <p className="review-text">"Absolutely beautiful craftsmanship! The embroidery is stunning and the shoes are very comfortable. Perfect for my brother's wedding!"</p>
                        </div>
                        
                        <div className="review-item">
                            <div className="review-header">
                                <div className="reviewer-info">
                                    <strong>Raj Patel</strong>
                                    <div className="review-stars">
                                        {renderStars(4)}
                                    </div>
                                </div>
                                <span className="review-date">1 month ago</span>
                            </div>
                            <p className="review-text">"Great quality traditional shoes. The fit was perfect and they look exactly as shown in the pictures. Very satisfied with my purchase."</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailPageShoe;