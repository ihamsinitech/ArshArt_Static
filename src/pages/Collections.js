import React from 'react';
import './Collections.css';
import { Link } from 'react-router-dom';

const Collections = () => {
    const collections = [
        {
            id: 1,
            title: "Wedding Collection",
            description: "Elegant outfits for special occasions",
            image: "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
            count: "24 Products"
        },
        {
            id: 2,
            title: "Festival Wear",
            description: "Traditional outfits for festivals",
            image: "https://images.unsplash.com/photo-1594938374184-8f7d62879f1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
            count: "18 Products"
        },
        {
            id: 3,
            title: "Summer Collection",
            description: "Light and comfortable summer wear",
            image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
            count: "32 Products"
        },
        {
            id: 4,
            title: "Winter Wear",
            description: "Warm and cozy winter collection",
            image: "https://images.unsplash.com/photo-1521341057461-6eb5f40b07ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
            count: "16 Products"
        },
        {
            id: 5,
            title: "Kids Party Wear",
            description: "Adorable outfits for little ones",
            image: "https://images.unsplash.com/photo-1513519245088-0e129a5c42b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
            count: "22 Products"
        },
        {
            id: 6,
            title: "Office Formal",
            description: "Professional and stylish office wear",
            image: "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80",
            count: "20 Products"
        }
    ];

    return (
        <div className="collections-page">
            <div className="container">
                {/* Hero Section */}
                <div className="page-hero">
                    <h1>Our Collections</h1>
                    <p>Curated collections for every occasion and season</p>
                </div>

                {/* Collections Grid */}
                <div className="collections-grid">
                    {collections.map(collection => (
                        <Link to="/mens-wear" className="collection-card" key={collection.id}>
                            <div className="collection-image">
                                <img src={collection.image} alt={collection.title} />
                                <div className="collection-overlay">
                                    <button className="view-collection-btn">View Collection</button>
                                </div>
                            </div>
                            <div className="collection-info">
                                <h3>{collection.title}</h3>
                                <p>{collection.description}</p>
                                <span className="product-count">{collection.count}</span>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Featured Collection */}
                <div className="featured-collection">
                    <div className="featured-content">
                        <h2>Premium Wedding Collection</h2>
                        <p>Discover our exclusive range of wedding wear for men and kids. Perfect for making your special day even more memorable.</p>
                        <Link to="/mens-wear" className="featured-btn">Explore Collection</Link>
                    </div>
                    <div className="featured-image">
                        <img src="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2088&q=80" alt="Wedding Collection" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Collections;