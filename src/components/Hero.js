import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero-content">
                    <h1>From Traditional Clothing to <span>Modern Elegance</span></h1>
                    <p>The finest collection of premium ethnic and contemporary wear for men and kids, which is part of a luxury brand to find with Arshart's exclusive designs.</p>
                    <div className="hero-subtitle">
                        <span className="gold-line"></span>
                        <h2>Premium Clothing for Men & Kids</h2>
                        <span className="gold-line"></span>
                    </div>
                    <div className="hero-buttons">
                        <a href="#" className="btn">Shop Now</a>
                        <a href="#" className="btn btn-outline">Explore Collections</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;