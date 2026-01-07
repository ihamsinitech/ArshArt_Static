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
        // ... rest of your products
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
                    {/* ... rest of your product detail JSX remains the same ... */}
                </div>
            </div>
        </div>
    );
};

export default ProductDetailPageSuit;