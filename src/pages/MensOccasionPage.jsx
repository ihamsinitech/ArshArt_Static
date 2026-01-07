// src/pages/MensOccasionPage.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './OccasionPage.css';

const MensOccasionPage = () => {
  const { occasion } = useParams();
  const navigate = useNavigate();

  // Map occasion parameters to display names
  const occasionNames = {
    'haldi': 'HALDI CEREMONY',
    'reception': 'RECEPTION',
    'wedding': 'WEDDING'
  };

  // Sample products for each occasion
  const occasionProducts = {
    'haldi': [
      { id: 1, name: 'Yellow Kurta Set', price: '₹1,999', image: '/haldi1.jpg' },
      { id: 2, name: 'Traditional Kurta', price: '₹2,499', image: '/haldi2.jpg' },
      { id: 3, name: 'Silk Kurta', price: '₹3,199', image: '/haldi3.jpg' }
    ],
    'reception': [
      { id: 1, name: 'Black Suit', price: '₹5,999', image: '/reception1.jpg' },
      { id: 2, name: 'Blue Blazer', price: '₹4,499', image: '/reception2.jpg' },
      { id: 3, name: 'Tuxedo', price: '₹7,199', image: '/reception3.jpg' }
    ],
    'wedding': [
      { id: 1, name: 'Sherwani Set', price: '₹9,999', image: '/wedding1.jpg' },
      { id: 2, name: 'Jodhpuri Suit', price: '₹8,499', image: '/wedding2.jpg' },
      { id: 3, name: 'Designer Kurta', price: '₹6,799', image: '/wedding3.jpg' }
    ]
  };

  const products = occasionProducts[occasion] || [];

  return (
    <div className="occasion-page">
      <div className="occasion-page-container">
        <button 
          className="back-button"
          onClick={() => navigate(-1)}
        >
          ← Back to Shop
        </button>
        
        <div className="occasion-header">
          <h1 className="occasion-page-title">{occasionNames[occasion]}</h1>
          <p className="occasion-description">
            Browse our exclusive collection for {occasionNames[occasion].toLowerCase()} outfits.
            Perfect traditional and modern wear for men.
          </p>
        </div>

        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img 
                src={product.image} 
                alt={product.name}
                className="product-image"
              />
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">{product.price}</p>
              <button className="view-button">View Details</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MensOccasionPage;