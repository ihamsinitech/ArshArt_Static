

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Add this import
import "./EcommerceDashboard.css";

const EcommerceDashboard = ({ productType, onLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('men');
  const [cartItems, setCartItems] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [userData, setUserData] = useState({
    username: '',
    role: '',
    mobile: ''
  });

  const navigate = useNavigate(); // For navigation

  // Carousel images
  const carouselImages = [
    
    "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1505022610485-0249ba5b3675?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1594576722512-25dfa6d5552d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1589310243389-96a5483213a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1596363503918-9c8dd8346e48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  ];

  // Load user data from localStorage on component mount
  useEffect(() => {
    const username = localStorage.getItem("arshart_username");
    const role = localStorage.getItem("arshart_role");
    const mobile = localStorage.getItem("arshart_mobile");
    
    if (username && role) {
      setUserData({
        username,
        role,
        mobile: mobile || ''
      });
    } else {
      // If no user data, redirect to login
      handleLogout();
    }
  }, []);

  // Auto slide carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const handleTabClick = (tab) => setActiveTab(tab);

  const handleAddToCart = (item) => {
    const newCartItems = [...cartItems, { ...item, quantity: 1, id: Date.now() }];
    setCartItems(newCartItems);
    
    // Show notification
    const notification = document.createElement('div');
    notification.className = 'cart-notification';
    notification.innerHTML = `<i class="fas fa-check-circle"></i> ${item.name} added to cart!`;
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
      notification.style.animation = 'slideOut 0.3s ease';
      setTimeout(() => notification.remove(), 300);
    }, 3000);
  };

  const handleLogout = () => {
    // Clear all user data from localStorage
    localStorage.removeItem("arshart_username");
    localStorage.removeItem("arshart_role");
    localStorage.removeItem("arshart_token");
    localStorage.removeItem("arshart_mobile");
    localStorage.removeItem("arshart_user_data");
    
    // If onLogout prop is provided, use it
    if (onLogout && typeof onLogout === 'function') {
      onLogout();
    } else {
      // Otherwise navigate to login page
      navigate('/login');
    }
    
    // Close mobile menu if open
    setIsMenuOpen(false);
  };

  // Collections data - shortened for example
  const collections = {
    men: [
      { id: 1, name: "Designer Sherwani", description: "Embroidered wedding sherwani", price: "₹25,999", originalPrice: "₹32,000", discount: 19, image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
      { id: 2, name: "Indo-Western Suit", description: "Contemporary fusion wear", price: "₹18,499", originalPrice: "₹22,000", discount: 16, image: "https://images.unsplash.com/photo-1520975916090-3105956dac38?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" }
    ],
    kids: [
      { id: 3, name: "Kids Sherwani", description: "Adorable miniature sherwanis", price: "₹8,999", originalPrice: "₹12,000", discount: 25, image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
      { id: 4, name: "Kids Kurta Set", description: "Colorful kurta pajama sets", price: "₹5,499", originalPrice: "₹7,500", discount: 27, image: "https://images.unsplash.com/photo-1588508065123-287b28e9da6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" }
    ],
    accessories: [
      { id: 5, name: "Safari Suits", description: "Comfortable safari suits", price: "₹9,999", originalPrice: "₹13,000", discount: 23, image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
      { id: 6, name: "Ethnic Accessories", description: "Traditional mojaris, stoles", price: "₹1,499 - ₹4,999", image: "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" }
    ]
  };

  // Quick categories
  const quickCategories = [
    { icon: "fas fa-user-tie", title: "Men's Wear", description: "Sherwanis, Kurtas & Suits", tab: "men" },
    { icon: "fas fa-child", title: "Kids Collection", description: "Traditional & Modern Wear", tab: "kids" },
    { icon: "fas fa-tshirt", title: "Accessories", description: "Mojaris, Shawls & More", tab: "accessories" },
    { icon: "fas fa-gem", title: "Premium Collection", description: "Designer Outfits", tab: "men" }
  ];

  return (
    <div className="ecommerce-dashboard">
      {/* Top Banner */}
      <div className="top-banner">
        <p><span>FREE SHIPPING</span> on every order — delivered across India!</p>
      </div>

      {/* Header */}
      <header className="main-header">
        <div className="header-container">
          <div className="logo">
            <i className="fas fa-crown"></i> Arsh<span>Art</span>
          </div>
          
          <button className="mobile-menu-btn" onClick={toggleMenu}>
            <i className={isMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
          </button>
          
          <nav className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
            <ul>
              <li><a href="#" className="active">Home</a></li>
              <li><a href="#collections" onClick={() => setIsMenuOpen(false)}>Men</a></li>
              <li><a href="#collections" onClick={() => setIsMenuOpen(false)}>Kids</a></li>
              <li><a href="#collections" onClick={() => setIsMenuOpen(false)}>Collections</a></li>
              <li><a href="#features" onClick={() => setIsMenuOpen(false)}>Features</a></li>
              <li><a href="#" onClick={() => setIsMenuOpen(false)}><i className="fas fa-blog"></i> Blogs</a></li>
            </ul>
          </nav>
          
          <div className="nav-icons">
            {/* User Profile Dropdown */}
            <div className="user-profile-dropdown">
              <div className="user-icon">
                <i className="fas fa-user-circle"></i>
                <span className="user-name">{userData.username || "User"}</span>
              </div>
              <div className="dropdown-content">
                <div className="user-info">
                  <strong>{userData.username || "Guest User"}</strong>
                  <small>{userData.role || "Customer"}</small>
                  {userData.mobile && <small>+91 {userData.mobile}</small>}
                </div>
                <a href="#"><i className="fas fa-user"></i> My Profile</a>
                <a href="#"><i className="fas fa-shopping-bag"></i> My Orders</a>
                <a href="#"><i className="fas fa-heart"></i> Wishlist</a>
                <a href="#" onClick={handleLogout}><i className="fas fa-sign-out-alt"></i> Logout</a>
              </div>
            </div>
            
            <a href="#" className="search-icon"><i className="fas fa-search"></i></a>
            <a href="#" className="cart-icon">
              <i className="fas fa-shopping-bag"></i>
              {cartItems.length > 0 && <span className="cart-count">{cartItems.length}</span>}
            </a>
          </div>
        </div>
      </header>

      {/* Image Carousel */}
      <section className="image-carousel">
        <div className="carousel-container">
          {carouselImages.map((img, index) => (
            <div 
              key={index} 
              className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url(${img})` }}
            >
              <div className="carousel-content">
                <h2>Welcome {userData.username || "to ArshArt"}</h2>
                <p>Discover premium ethnic wear for men & kids. Perfect for every occasion.</p>
                <a href="#collections" className="btn btn-primary">Shop Now</a>
              </div>
            </div>
          ))}
          <div className="carousel-dots">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Quick Categories */}
      <section className="quick-categories">
        <div className="container">
          <h2>Shop By Category</h2>
          <div className="category-grid">
            {quickCategories.map((category, index) => (
              <div 
                key={index} 
                className="category-card" 
                onClick={() => {
                  handleTabClick(category.tab);
                  setIsMenuOpen(false);
                }}
              >
                <div className="category-icon">
                  <i className={category.icon}></i>
                </div>
                <h3>{category.title}</h3>
                <p>{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collections Section */}
      <section className="collections-section" id="collections">
        <div className="container">
          <div className="section-header">
            <h2>Featured Collections</h2>
            <p>Handpicked outfits for your special moments</p>
          </div>
          
          <div className="collection-tabs">
            <button className={`tab-btn ${activeTab === 'men' ? 'active' : ''}`} onClick={() => handleTabClick('men')}>
              <i className="fas fa-user-tie"></i> Men's Collection
            </button>
            <button className={`tab-btn ${activeTab === 'kids' ? 'active' : ''}`} onClick={() => handleTabClick('kids')}>
              <i className="fas fa-child"></i> Kids Collection
            </button>
            <button className={`tab-btn ${activeTab === 'accessories' ? 'active' : ''}`} onClick={() => handleTabClick('accessories')}>
              <i className="fas fa-tshirt"></i> Accessories
            </button>
          </div>
          
          {/* Men's Collection */}
          <div className={`tab-content ${activeTab === 'men' ? 'active' : ''}`}>
            <div className="products-grid">
              {collections.men.map(item => (
                <div className="product-card" key={item.id}>
                  <div className="product-image">
                    <img src={item.image} alt={item.name} />
                    {item.discount && <span className="discount-tag">{item.discount}% OFF</span>}
                    <button className="quick-view"><i className="fas fa-eye"></i></button>
                  </div>
                  <div className="product-info">
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <div className="price">
                      <span className="current-price">{item.price}</span>
                      {item.originalPrice && <span className="old-price">{item.originalPrice}</span>}
                    </div>
                    <button className="add-to-cart" onClick={() => handleAddToCart(item)}>
                      <i className="fas fa-shopping-cart"></i> Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Kids Collection */}
          <div className={`tab-content ${activeTab === 'kids' ? 'active' : ''}`}>
            <div className="products-grid">
              {collections.kids.map(item => (
                <div className="product-card" key={item.id}>
                  <div className="product-image">
                    <img src={item.image} alt={item.name} />
                    {item.discount && <span className="discount-tag">{item.discount}% OFF</span>}
                    <button className="quick-view"><i className="fas fa-eye"></i></button>
                  </div>
                  <div className="product-info">
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <div className="price">
                      <span className="current-price">{item.price}</span>
                      {item.originalPrice && <span className="old-price">{item.originalPrice}</span>}
                    </div>
                    <button className="add-to-cart" onClick={() => handleAddToCart(item)}>
                      <i className="fas fa-shopping-cart"></i> Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Accessories */}
          <div className={`tab-content ${activeTab === 'accessories' ? 'active' : ''}`}>
            <div className="products-grid">
              {collections.accessories.map(item => (
                <div className="product-card" key={item.id}>
                  <div className="product-image">
                    <img src={item.image} alt={item.name} />
                    {item.discount && <span className="discount-tag">{item.discount}% OFF</span>}
                    <button className="quick-view"><i className="fas fa-eye"></i></button>
                  </div>
                  <div className="product-info">
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <div className="price">
                      <span className="current-price">{item.price}</span>
                      {item.originalPrice && <span className="old-price">{item.originalPrice}</span>}
                    </div>
                    <button className="add-to-cart" onClick={() => handleAddToCart(item)}>
                      <i className="fas fa-shopping-cart"></i> Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section" id="features">
        <div className="container">
          <div className="features-grid">
            <div className="feature">
              <i className="fas fa-shipping-fast"></i>
              <h3>Free Shipping</h3>
              <p>On orders above ₹5,000</p>
            </div>
            <div className="feature">
              <i className="fas fa-undo"></i>
              <h3>Easy Returns</h3>
              <p>30 Day Return Policy</p>
            </div>
            <div className="feature">
              <i className="fas fa-shield-alt"></i>
              <h3>Secure Payment</h3>
              <p>100% Secure Transactions</p>
            </div>
            <div className="feature">
              <i className="fas fa-headset"></i>
              <h3>24/7 Support</h3>
              <p>Dedicated Customer Care</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="main-footer">
        <div className="container">
          <div className="footer-top">
            <div className="footer-brand">
              <div className="logo">
                <i className="fas fa-crown"></i> Arsh<span>Art</span>
              </div>
              <p className="brand-description">Premium ethnic wear for men and kids. Crafted with tradition, designed for modern elegance.</p>
              <div className="social-links">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-pinterest-p"></i></a>
                <a href="#"><i className="fab fa-youtube"></i></a>
              </div>
            </div>
            
            <div className="footer-links">
              <div className="links-column">
                <h3>Shop</h3>
                <ul>
                  <li><a href="#collections">Men's Collection</a></li>
                  <li><a href="#collections">Kids Collection</a></li>
                  <li><a href="#collections">New Arrivals</a></li>
                  <li><a href="#collections">Best Sellers</a></li>
                  <li><a href="#collections">Sale</a></li>
                </ul>
              </div>
              
              <div className="links-column">
                <h3>Information</h3>
                <ul>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Contact Us</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Terms & Conditions</a></li>
                  <li><a href="#">Shipping Policy</a></li>
                </ul>
              </div>
              
              <div className="links-column">
                <h3>Customer Service</h3>
                <ul>
                  <li><a href="#">FAQs</a></li>
                  <li><a href="#">Track Order</a></li>
                  <li><a href="#">Returns & Exchanges</a></li>
                  <li><a href="#">Size Guide</a></li>
                  <li><a href="#">Care Instructions</a></li>
                </ul>
              </div>
              
              <div className="links-column">
                <h3>Contact Info</h3>
                <div className="contact-info">
                  <p><i className="fas fa-map-marker-alt"></i> 123 Fashion Street, Mumbai, India</p>
                  <p><i className="fas fa-phone"></i> +91 98765 43210</p>
                  <p><i className="fas fa-envelope"></i> support@arshart.com</p>
                  <p><i className="fas fa-clock"></i> Mon-Sat: 10AM - 8PM</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <div className="payment-methods">
              <span>We Accept:</span>
              <i className="fab fa-cc-visa"></i>
              <i className="fab fa-cc-mastercard"></i>
              <i className="fab fa-cc-amex"></i>
              <i className="fab fa-cc-paypal"></i>
              <i className="fas fa-university"></i>
            </div>
            <div className="copyright">
              <p>&copy; 2024 ArshArt. All rights reserved. | Designed with <i className="fas fa-heart"></i> in India</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EcommerceDashboard;