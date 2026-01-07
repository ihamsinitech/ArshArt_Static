// src/pages/KidsOccasionPage.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './OccasionPage.css';

const KidsOccasionPage = () => {
  const { occasion } = useParams();
  const navigate = useNavigate();

  // Map occasion parameters to display names
  const occasionNames = {
    'birthday': 'BIRTHDAY PARTY',
    'school-parties': 'SCHOOL PARTIES',
    'festivals': 'FESTIVALS'
  };

  // Sample products for each occasion
  const occasionProducts = {
    'birthday': [
      { id: 1, name: 'Birthday Suit Set', price: '₹1,299', image: '/birthday1.jpg' },
      { id: 2, name: 'Party Dress', price: '₹1,499', image: '/birthday2.jpg' },
      { id: 3, name: 'Cute Top & Skirt', price: '₹999', image: '/birthday3.jpg' }
    ],
    'school-parties': [
      { id: 1, name: 'School Uniform', price: '₹1,599', image: '/school1.jpg' },
      { id: 2, name: 'Party Dress', price: '₹1,799', image: '/school2.jpg' },
      { id: 3, name: 'Casual Outfit', price: '₹1,199', image: '/school3.jpg' }
    ],
    'festivals': [
      { id: 1, name: 'Traditional Kurta', price: '₹1,499', image: '/festival1.jpg' },
      { id: 2, name: 'Lehenga Set', price: '₹2,199', image: '/festival2.jpg' },
      { id: 3, name: 'Sherwani', price: '₹1,899', image: '/festival3.jpg' }
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
          <h1 className="occasion-page-title kids-title">{occasionNames[occasion]}</h1>
          <p className="occasion-description">
            Browse our cute collection for {occasionNames[occasion].toLowerCase()} outfits.
            Perfect outfits for kids of all ages.
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

export default KidsOccasionPage;