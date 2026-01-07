

import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    
    const heroImages = [
        "/arshart.jpeg",
        "/hero.webp",
        "/hero1.jpg",
        "/banner.avif"
        // "/banner1.jpg",
        
    
    ];

    const nextSlide = () => {
        setCurrentImageIndex((prevIndex) => 
            prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentImageIndex((prevIndex) => 
            prevIndex === 0 ? heroImages.length - 1 : prevIndex - 1
        );
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="hero">
            {/* Navigation Arrows */}
            <button className="slider-nav prev" onClick={prevSlide}>
                <i className="fas fa-chevron-left"></i>
            </button>
            <button className="slider-nav next" onClick={nextSlide}>
                <i className="fas fa-chevron-right"></i>
            </button>
            
            <div className="hero-slider">
                {heroImages.map((image, index) => (
                    <div 
                        key={index}
                        className={`hero-slide ${index === currentImageIndex ? 'active' : ''}`}
                        style={{ 
                            backgroundImage: `url(${image})`
                        }}
                    />
                ))}
            </div>

            {/* Light gradient overlay */}
            <div className="hero-overlay"></div>

            <div className="container">
                {/* <div className="hero-content-wrapper"> */}
                <div className="hero-content" style={{
        position: 'absolute',
        bottom: '10px',
        left: '0',
        right: '0',
        margin: '0 auto',
        textAlign: 'center'
    }}>
                 
                    {/* <h1>ARSH<span>ART</span></h1> */}
                    {/* <p>The finest collection of premium ethnic and contemporary wear for men and kids, which is part of a luxury brand to find with Arshart's exclusive designs.</p> */}
                    <div className="hero-subtitle">
                        <span className="gold-line"></span>
                        <h2>Premium Clothing for Men & Kids</h2>
                        <span className="gold-line"></span>
                    </div>
                    <div className="hero-buttons">
                        <a href="#" className="btn">Shop Now</a>
                        <a href="#" className="btn btn-outline">Explore Collections</a>
                    </div>
                    
                    <div className="slider-indicators">
                        {heroImages.map((_, index) => (
                            <button
                                key={index}
                                className={`slider-dot ${index === currentImageIndex ? 'active' : ''}`}
                                onClick={() => setCurrentImageIndex(index)}
                            />
                        ))}
                    </div>
                    </div>
                </div>
            {/* </div> */}
        </section> 
    );
};

export default Hero;