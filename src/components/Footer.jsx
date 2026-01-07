import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaTwitter, FaPinterest, FaHeart } from 'react-icons/fa';

const Footer = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email) {
            alert('Thank you for subscribing to our newsletter!');
            setEmail('');
        }
    };

    return (
        <footer>
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-col">
                        <h3>Arshart</h3>
                        <p>Premium destination for men's and kids' clothing. Experience luxury with our exclusive collection of ethnic and contemporary wear.</p>
                        <div className="social-links">
                            <a href="#"><FaFacebookF /></a>
                            <a href="#"><FaInstagram /></a>
                            <a href="#"><FaTwitter /></a>
                            <a href="#"><FaPinterest /></a>
                        </div>
                    </div>
                    
                    <div className="footer-col">
                        <h3>Shop Categories</h3>
                        <ul>
                            <li><Link to="/mens-wear">Men's Ethnic Wear</Link></li>
                            <li><Link to="/kids-wear">Kids Traditional</Link></li>
                            <li><Link to="/mens-wear">Formal Wear</Link></li>
                            <li><Link to="/mens-wear">Casual Collections</Link></li>
                            <li><Link to="/new-arrivals">New Arrivals</Link></li>
                            <li><Link to="/mens-wear">Best Sellers</Link></li>
                        </ul>
                    </div>
                    
                    <div className="footer-col">
                        <h3>Customer Support</h3>
                        <ul>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">FAQs</a></li>
                            <li><a href="#">Shipping Policy</a></li>
                            <li><a href="#">Returns & Exchange</a></li>
                            <li><a href="#">Size Guide</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </div>
                    
                    <div className="footer-col">
                        <h3>Stay Updated</h3>
                        <div className="newsletter">
                            <p>Subscribe for exclusive offers and new arrivals</p>
                            <form className="newsletter-form" onSubmit={handleSubmit}>
                                <input 
                                    type="email" 
                                    placeholder="Enter your email" 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required 
                                />
                                <button type="submit">Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
                
                <div className="copyright">
                    <p>&copy; 2023 Arshart. All Rights Reserved. | Premium Clothing for Men & Kids</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;