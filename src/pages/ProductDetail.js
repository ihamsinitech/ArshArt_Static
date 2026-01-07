import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './ProductDetail.css';
import { FaStar, FaStarHalfAlt, FaRegStar, FaHeart, FaShareAlt, FaTruck, FaUndo, FaShieldAlt, FaShoppingBag } from 'react-icons/fa';

const ProductDetail = () => {
    const { id } = useParams();
    const [selectedSize, setSelectedSize] = useState('M');
    const [selectedColor, setSelectedColor] = useState('Maroon');
    const [quantity, setQuantity] = useState(1);
    const [isWishlisted, setIsWishlisted] = useState(false);

    const product = {
        id: 1,
        title: "Royal Silk Embroidered Sherwani",
        category: "Men's Ethnic Wear",
        price: 299.99,
        oldPrice: 399.99,
        rating: 4.8,
        reviews: 128,
        description: "Experience luxury with our premium silk sherwani featuring intricate embroidery work. Perfect for weddings and special occasions. Made from 100% pure silk with handcrafted details.",
        features: [
            "100% Pure Silk",
            "Hand Embroidered",
            "Comfort Fit",
            "Dry Clean Only",
            "Premium Packaging"
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        colors: [
            { name: 'Maroon', code: '#800000' },
            { name: 'Navy Blue', code: '#000080' },
            { name: 'Black', code: '#000000' },
            { name: 'Burgundy', code: '#800020' }
        ],
        images: [
            "https://ik.imagekit.io/4sjmoqtje/tr:c-at_max/cdn/shop/files/royal_blue_silk_sherwani_with_intricate_neckline_embroidery-sg195312_5.jpg?v=1744190916&w=1000",
            "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
            "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        ]
    };

    const relatedProducts = [
        {
            id: 2,
            title: "Designer Kurta Set",
            price: 149.99,
            image: "https://images.unsplash.com/photo-1594938374184-8f7d62879f1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80"
        },
        {
            id: 3,
            title: "Kids Traditional Sherwani",
            price: 89.99,
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        },
        {
            id: 4,
            title: "Formal Suit",
            price: 399.99,
            image: "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80"
        }
    ];

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

    const handleQuantityChange = (change) => {
        const newQuantity = quantity + change;
        if (newQuantity >= 1 && newQuantity <= 10) {
            setQuantity(newQuantity);
        }
    };

    const addToCart = () => {
        alert(`Added ${quantity} ${product.title} to cart!`);
    };

    const toggleWishlist = () => {
        setIsWishlisted(!isWishlisted);
        if (!isWishlisted) {
            alert('Added to wishlist!');
        }
    };

    return (
        <div className="product-detail-page">
            <div className="container">
                {/* Breadcrumb */}
                <div className="breadcrumb">
                    <Link to="/">Home</Link>
                    <span>/</span>
                    <Link to="/mens-wear">Men's Wear</Link>
                    <span>/</span>
                    <span>Product Detail</span>
                </div>

                {/* Product Detail Section */}
                <div className="product-detail">
                    {/* Product Images */}
                    <div className="product-images">
                        <div className="main-image">
                            <img src={product.images[0]} alt={product.title} />
                        </div>
                        <div className="thumbnail-images">
                            {product.images.map((img, index) => (
                                <img key={index} src={img} alt={`View ${index + 1}`} />
                            ))}
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="product-info">
                        <div className="product-header">
                            <span className="product-category">{product.category}</span>
                            <h1>{product.title}</h1>
                            <div className="product-rating">
                                <div className="stars">
                                    {renderStars(product.rating)}
                                    <span>({product.rating})</span>
                                </div>
                                <span className="review-count">{product.reviews} reviews</span>
                            </div>
                        </div>

                        <div className="product-price">
                            <div className="current-price">${product.price.toFixed(2)}</div>
                            <div className="old-price">${product.oldPrice.toFixed(2)}</div>
                            <div className="discount-badge">Save ${(product.oldPrice - product.price).toFixed(2)}</div>
                        </div>

                        <div className="product-description">
                            <p>{product.description}</p>
                        </div>

                        <div className="product-features">
                            <h3>Features:</h3>
                            <ul>
                                {product.features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Size Selection */}
                        <div className="size-selection">
                            <h3>Select Size:</h3>
                            <div className="size-options">
                                {product.sizes.map(size => (
                                    <button
                                        key={size}
                                        className={`size-btn ${selectedSize === size ? 'active' : ''}`}
                                        onClick={() => setSelectedSize(size)}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Color Selection */}
                        <div className="color-selection">
                            <h3>Select Color:</h3>
                            <div className="color-options">
                                {product.colors.map(color => (
                                    <button
                                        key={color.name}
                                        className={`color-btn ${selectedColor === color.name ? 'active' : ''}`}
                                        onClick={() => setSelectedColor(color.name)}
                                        style={{ backgroundColor: color.code }}
                                        title={color.name}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Quantity & Actions */}
                        <div className="product-actions">
                            <div className="quantity-selector">
                                <button onClick={() => handleQuantityChange(-1)}>-</button>
                                <span>{quantity}</span>
                                <button onClick={() => handleQuantityChange(1)}>+</button>
                            </div>

                            <div className="action-buttons">
                                <button className="add-to-cart-btn" onClick={addToCart}>
                                    <FaShoppingBag /> Add to Cart
                                </button>
                                <button className="buy-now-btn">Buy Now</button>
                                <button className="wishlist-btn" onClick={toggleWishlist}>
                                    <FaHeart className={isWishlisted ? 'filled' : ''} />
                                </button>
                                <button className="share-btn">
                                    <FaShareAlt />
                                </button>
                            </div>
                        </div>

                        {/* Product Policies */}
                        <div className="product-policies">
                            <div className="policy-item">
                                <FaTruck />
                                <div>
                                    <strong>Free Shipping</strong>
                                    <p>On orders over $100</p>
                                </div>
                            </div>
                            <div className="policy-item">
                                <FaUndo />
                                <div>
                                    <strong>Easy Returns</strong>
                                    <p>30-day return policy</p>
                                </div>
                            </div>
                            <div className="policy-item">
                                <FaShieldAlt />
                                <div>
                                    <strong>Secure Payment</strong>
                                    <p>100% secure payment</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Product Tabs */}
                <div className="product-tabs">
                    <div className="tabs-header">
                        <button className="tab-btn active">Description</button>
                        <button className="tab-btn">Reviews ({product.reviews})</button>
                        <button className="tab-btn">Shipping Info</button>
                        <button className="tab-btn">Size Guide</button>
                    </div>
                    <div className="tab-content">
                        <p>{product.description}</p>
                        <p>This premium sherwani is crafted with the finest quality silk and features intricate embroidery work done by skilled artisans. The comfortable fit and elegant design make it perfect for weddings, festivals, and other special occasions.</p>
                        <ul>
                            <li>Material: 100% Pure Silk</li>
                            <li>Care Instructions: Dry Clean Only</li>
                            <li>Fit: Regular Fit</li>
                            <li>Occasion: Wedding, Party, Festival</li>
                            <li>Delivery: 5-7 business days</li>
                        </ul>
                    </div>
                </div>

                {/* Related Products */}
                <div className="related-products">
                    <h2>You May Also Like</h2>
                    <div className="products-grid">
                        {relatedProducts.map(related => (
                            <Link to={`/product/${related.id}`} className="product-card" key={related.id}>
                                <div className="product-image">
                                    <img src={related.image} alt={related.title} />
                                </div>
                                <div className="product-info">
                                    <h3>{related.title}</h3>
                                    <div className="price">${related.price.toFixed(2)}</div>
                                    <button className="view-btn">View Product</button>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;