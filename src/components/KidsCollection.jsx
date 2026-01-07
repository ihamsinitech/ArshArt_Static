

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './KidsCollection.css';

const KidsCollection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const navigate = useNavigate();
    
    const slides = [
        {
            src: "/sherwani11.jpg",
            title: "Men's Sherwani Collection",
            description: "Premium traditional sherwanis with exquisite embroidery",
            contentSide: "left",
            targetPage: "/mens-wear" // Men's page
        },
        {
            src: "/kid100.jpg",
            title: "Kids Traditional Wear",
            description: "Adorable traditional outfits for little ones",
            contentSide: "right",
            targetPage: "/kids-wear" // Kids page
        },
        {
            src: "/formal1.jpg", 
            title: "Men's Formal Collection",
            description: "Elegant formal wear for special occasions",
            contentSide: "left",
            targetPage: "/mens-wear" // Men's page
        },
        {
            src: "/kid122.jpg",
            title: "Kids Contemporary Wear",
            description: "Modern and comfortable outfits for kids",
            contentSide: "right",
            targetPage: "/kids-wear" // Kids page
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const currentSlide = slides[currentIndex];

    const handleShopNow = () => {
        navigate(currentSlide.targetPage);
    };

    return (
        <section className="kids-collection">
            <div className="slideshow-container">
                <div className={`slide-wrapper ${currentSlide.contentSide === 'left' ? 'left-layout' : 'right-layout'}`}>
                    {/* Image */}
                    <div className="slide-image">
                        <img src={currentSlide.src} alt={currentSlide.title} />
                    </div>
                    
                    {/* Content */}
                    <div className="slide-content">
                        <h2 className="slide-title">{currentSlide.title}</h2>
                        <p className="slide-description">{currentSlide.description}</p>
                        <p className="slide-text">
                            Discover exquisite collections combining traditional elegance with 
                            contemporary comfort.
                        </p>
                        <button className="shop-btn" onClick={handleShopNow}>
                            Shop Now
                        </button>
                    </div>
                </div>
                
                {/* Navigation */}
                <div className="slide-nav">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            className={`nav-dot ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => setCurrentIndex(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default KidsCollection;