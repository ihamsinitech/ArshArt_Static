import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ShopOccasion.css';

const ShopOccasion = () => {
  const [activeTab, setActiveTab] = useState('men');
  const navigate = useNavigate();

  // Men occasions with page routes
  const menOccasions = [
    { 
      id: 1, 
      title: 'ENGAGEMENT', 
      image: "/engagement1.jpg",
      route: '/mens-wear?occasion=haldi'
    },
    
    { 
      id: 2,
      title: 'WEDDING', 
      image: "/wedding33.jpg",
      route: '/mens-wear?occasion=wedding'
    },

    { 
      id: 3, 
      title: 'RECEPTION', 
      image: "/reception1.jpg",
      route: '/mens-wear?occasion=reception'
    },
  ];

  // Kids occasions with page routes
  const kidsOccasions = [
    { 
      id: 1, 
      title: 'BIRTHDAY', 
      image: "/kidbdy.jpg",
      route: '/kids-wear?occasion=birthday'
    },
    { 
      id: 2, 
      title: 'WEDDING',
      image: "/kidwedding1.jpg",
      route: '/kids-wear?occasion=party'
    },
    { 
      id: 3, 
      title: 'FESTIVALS', 
      image: "/kidfest.jpg",
      route: '/kids-wear?occasion=festival'
    }
  ];

  const currentOccasions = activeTab === 'men' ? menOccasions : kidsOccasions;

  // Handle card click
  const handleCardClick = (route) => {
    navigate(route);
  };

  return (
    <div className="shop-occasion" style={{ minHeight: '100vh', paddingTop: '100px' }}>
      <div className="shop-occasion-container">
        {/* Header */}
        <div className="header">
          <h1 className="main-title">SHOP THE OCCASION</h1>
          <div className="gender-tabs">
            <button 
              className={`gender-tab ${activeTab === 'men' ? 'active' : ''}`}
              onClick={() => setActiveTab('men')}
            >
              Men
            </button>
            <button 
              className={`gender-tab ${activeTab === 'kids' ? 'active' : ''}`}
              onClick={() => setActiveTab('kids')}
            >
              Kids
            </button>
          </div>
          <div className="divider"></div>
        </div>

        {/* Occasions Grid */}
        <div className="occasions-grid">
          {currentOccasions.map((occasion) => (
            <div 
              key={occasion.id} 
              className="occasion-card"
              onClick={() => handleCardClick(occasion.route)}
            >
              <div className="image-container">
                <img 
                  src={occasion.image} 
                  alt={`${occasion.title} for ${activeTab}`} 
                  className="occasion-image"
                />
              </div>
              <h2 className="occasion-title">{occasion.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopOccasion;