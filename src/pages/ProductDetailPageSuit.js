import React, { useState } from 'react';
import './ProductDetailPageSuit.css';
import { FaStar, FaStarHalfAlt, FaRegStar, FaHeart, FaShoppingBag, FaTruck, FaUndo, FaShieldAlt, FaCheck, FaShareAlt, FaArrowLeft } from 'react-icons/fa';
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ProductDetailPageSuit = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [selectedSize, setSelectedSize] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [wishlisted, setWishlisted] = useState(false);
    const [activeImage, setActiveImage] = useState(0);

    const suitProducts = {
        1: {
            id: 1,
            title: "Premium Silk Embroidered Suit",
            price: 299.99,
            oldPrice: 399.99,
            rating: 4.8,
            reviews: 124,
            description: "Luxurious silk suit with intricate embroidery for formal occasions.",
            detailedDescription: "This premium silk suit is crafted from the finest mulberry silk, featuring intricate hand-embroidery with silk threads. Perfect for weddings, formal events, and special occasions. The suit includes jacket and trousers with premium lining for ultimate comfort.",
            color: "Navy Blue",
            sizes: ['S', 'M', 'L', 'XL'],
            inStock: true,
            stockCount: 15,
            images: [
                "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1539533113205-f5ae7ad028e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            ],
            badge: "PREMIUM",
            type: "Formal Suit",
            features: [
                "Premium Mulberry Silk Fabric",
                "Hand-embroidery with Silk Threads",
                "Premium Silk Lining",
                "Perfect for Weddings & Formal Events",
                "Includes Jacket & Trousers",
                "Expert Tailoring"
            ],
            specifications: {
                fabric: "100% Mulberry Silk",
                lining: "Premium Silk Lining",
                closure: "Button Front",
                pockets: "2 Front, 1 Chest",
                care: "Dry Clean Only",
                origin: "Handcrafted in India"
            }
        },
        2: {
            id: 2,
            title: "Wool Blend Business Suit",
            price: 249.99,
            oldPrice: 329.99,
            rating: 4.6,
            reviews: 89,
            description: "Professional business suit perfect for office wear and meetings.",
            detailedDescription: "This wool blend business suit offers exceptional comfort and professional appearance. Made with premium wool blend fabric that maintains its shape throughout the day. Perfect for corporate meetings, interviews, and daily office wear.",
            color: "Charcoal Gray",
            sizes: ['M', 'L', 'XL', 'XXL'],
            inStock: true,
            stockCount: 22,
            images: [
                "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            ],
            badge: "BUSINESS",
            type: "Office Suit",
            features: [
                "Premium Wool Blend Fabric",
                "Professional Business Design",
                "Comfortable All-Day Wear",
                "Perfect for Corporate Settings",
                "Includes Jacket & Trousers",
                "Modern Tailoring"
            ],
            specifications: {
                fabric: "70% Wool, 30% Polyester",
                lining: "Polyester Lining",
                closure: "Single Button",
                pockets: "2 Front, 1 Chest, 1 Inside",
                care: "Dry Clean Recommended",
                origin: "Tailored in Italy"
            }
        },
        3: {
            id: 3,
            title: "Designer Wedding Suit",
            price: 449.99,
            oldPrice: 599.99,
            rating: 4.9,
            reviews: 67,
            description: "Exclusive wedding suit with heavy embroidery and premium fabric.",
            detailedDescription: "This luxurious wedding suit features intricate embroidery with silk threads, pearls, and semi-precious stones. Designed specifically for weddings and grand celebrations.",
            color: "Ivory White",
            sizes: ['S', 'M', 'L', 'XL'],
            inStock: true,
            stockCount: 8,
            images: [
                "https://images.unsplash.com/photo-1539533113205-f5ae7ad028e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            ],
            badge: "WEDDING",
            type: "Wedding Suit",
            features: [
                "Heavy Silk Embroidery",
                "Pearl and Stone Embellishments",
                "Premium Velvet Fabric",
                "Royal Wedding Design",
                "Custom Tailoring Available"
            ],
            specifications: {
                fabric: "Premium Velvet with Silk",
                lining: "Silk Lining",
                closure: "Button Front with Brooch",
                pockets: "2 Front, 1 Chest",
                care: "Professional Dry Clean",
                origin: "Designed in India"
            }
        }
    };

    const product = suitProducts[id] || suitProducts[1];

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

    const handleAddToCart = () => {
        if (!selectedSize) {
            alert('Please select a size first');
            return;
        }
        alert(`Added ${quantity} ${product.title} (Size: ${selectedSize}) to cart!`);
    };

    const handleBuyNow = () => {
        if (!selectedSize) {
            alert('Please select a size first');
            return;
        }
        alert(`Proceeding to checkout with ${product.title} (Size: ${selectedSize})`);
    };

    const handleQuantityChange = (change) => {
        const newQuantity = quantity + change;
        if (newQuantity >= 1 && newQuantity <= product.stockCount) {
            setQuantity(newQuantity);
        }
    };

    const getStockStatus = (count) => {
        if (count > 10) return { text: 'In Stock', class: 'in-stock' };
        if (count > 0) return { text: 'Low Stock', class: 'low-stock' };
        return { text: 'Out of Stock', class: 'out-of-stock' };
    };

    const stockStatus = getStockStatus(product.stockCount);

    return (
        <div className="product-detail-suit">
            <div className="container">
                <div className="breadcrumb">
                    <Link to="/">Home</Link>
                    <span>/</span>
                    <Link to="/mens-wear">Men's Wear</Link>
                    <span>/</span>
                    <Link to="/suits">Suits</Link>
                    <span>/</span>
                    <span>{product.title}</span>
                </div>

                <button className="back-button" onClick={() => navigate(-1)}>
                    <FaArrowLeft /> Back to Suits
                </button>

                <div className="product-detail-container">
                    <div className="product-images">
                        <div className="main-image">
                            <img src={product.images[activeImage]} alt={product.title} />
                            <div className="product-badge suit-badge">{product.badge}</div>
                        </div>
                        <div className="thumbnail-images">
                            {product.images.map((img, index) => (
                                <div 
                                    key={index} 
                                    className={`thumbnail ${activeImage === index ? 'active' : ''}`}
                                    onClick={() => setActiveImage(index)}
                                >
                                    <img src={img} alt={`${product.title} view ${index + 1}`} />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="product-info">
                        <h1 className="product-title">{product.title}</h1>
                        
                        <div className="product-rating-section">
                            <div className="rating">
                                {renderStars(product.rating)}
                                <span className="rating-value">{product.rating}</span>
                                <span className="reviews">({product.reviews} reviews)</span>
                            </div>
                            <div className="product-code">
                                Product Code: SUIT{product.id.toString().padStart(3, '0')}
                            </div>
                        </div>

                        <div className="product-price-section">
                            <div className="current-price">${product.price.toFixed(2)}</div>
                            <div className="old-price">${product.oldPrice.toFixed(2)}</div>
                            <div className="discount">Save ${(product.oldPrice - product.price).toFixed(2)}</div>
                            <div className="tax-info">(Inclusive of all taxes)</div>
                        </div>

                        <div className="product-description">
                            <p>{product.description}</p>
                            <p className="detailed-description">{product.detailedDescription}</p>
                        </div>

                        <div className="product-features">
                            <h3>Key Features</h3>
                            <ul>
                                {product.features.map((feature, index) => (
                                    <li key={index}>
                                        <FaCheck className="check-icon" /> {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="size-selection">
                            <h3>Select Size</h3>
                            <div className="size-options">
                                {product.sizes.map(size => (
                                    <button
                                        key={size}
                                        className={`size-btn ${selectedSize === size ? 'selected' : ''}`}
                                        onClick={() => setSelectedSize(size)}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="color-selection">
                            <h3>Color: <span className="color-name">{product.color}</span></h3>
                        </div>

                        <div className="stock-status">
                            <div className={`status-badge ${stockStatus.class}`}>
                                {stockStatus.text}
                            </div>
                            <span className="stock-count">({product.stockCount} units available)</span>
                        </div>
                    </div>

                    <div className="product-actions">
                        <div className="action-card">
                            <h3>Buy Now</h3>
                            
                            <div className="quantity-selector">
                                <label>Quantity:</label>
                                <div className="quantity-controls">
                                    <button 
                                        className="qty-btn" 
                                        onClick={() => handleQuantityChange(-1)}
                                        disabled={quantity <= 1}
                                    >
                                        -
                                    </button>
                                    <input 
                                        type="text" 
                                        value={quantity} 
                                        readOnly 
                                        className="qty-input"
                                    />
                                    <button 
                                        className="qty-btn" 
                                        onClick={() => handleQuantityChange(1)}
                                        disabled={quantity >= product.stockCount}
                                    >
                                        +
                                    </button>
                                </div>
                            </div>

                            <div className="action-buttons">
                                <button 
                                    className="add-to-cart-btn"
                                    onClick={handleAddToCart}
                                    disabled={!selectedSize || product.stockCount === 0}
                                >
                                    <FaShoppingBag /> Add to Cart
                                </button>
                                <button 
                                    className="buy-now-btn"
                                    onClick={handleBuyNow}
                                    disabled={!selectedSize || product.stockCount === 0}
                                >
                                    Buy Now
                                </button>
                            </div>

                            <button 
                                className={`wishlist-btn ${wishlisted ? 'active' : ''}`}
                                onClick={() => setWishlisted(!wishlisted)}
                            >
                                <FaHeart /> {wishlisted ? 'Added to Wishlist' : 'Add to Wishlist'}
                            </button>

                            <button className="share-btn">
                                <FaShareAlt /> Share this Product
                            </button>

                            <div className="policies">
                                <div className="policy-item">
                                    <FaTruck />
                                    <div>
                                        <h4>Free Shipping</h4>
                                        <p>Free delivery on orders above $100</p>
                                    </div>
                                </div>
                                <div className="policy-item">
                                    <FaUndo />
                                    <div>
                                        <h4>Free Alterations</h4>
                                        <p>Free tailoring services included</p>
                                    </div>
                                </div>
                                <div className="policy-item">
                                    <FaShieldAlt />
                                    <div>
                                        <h4>Secure Payment</h4>
                                        <p>100% secure payment processing</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="specifications-section">
                    <h2>Product Specifications</h2>
                    <div className="specs-grid">
                        {Object.entries(product.specifications).map(([key, value]) => (
                            <div key={key} className="spec-item">
                                <span className="spec-label">{key.replace(/([A-Z])/g, ' $1').toUpperCase()}:</span>
                                <span className="spec-value">{value}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="related-products">
                    <h2>You May Also Like</h2>
                    <div className="related-products-grid">
                        {Object.values(suitProducts)
                            .filter(p => p.id !== product.id)
                            .slice(0, 4)
                            .map(item => (
                                <div key={item.id} className="related-product">
                                    <img src={item.images[0]} alt={item.title} />
                                    <h4>{item.title}</h4>
                                    <p>${item.price.toFixed(2)}</p>
                                    <Link to={`/product/suits/${item.id}`} className="view-btn">
                                        View Details
                                    </Link>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailPageSuit;