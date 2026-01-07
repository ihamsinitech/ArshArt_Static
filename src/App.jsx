


// src/App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';

import IntroScreen from './components/IntroScreen';

import SignIn from './components/SignIn';

import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import MensWear from './pages/MensWear';
import KidsWear from './pages/KidsWear';
import NewArrivals from './pages/NewArrivals';
import Collections from './pages/Collections';
import Offers from './pages/Offers';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';
import SherwaniPage from './pages/SherwaniPage';
import ShoesPage from './pages/ShoesPage';
import SuitsPage from './pages/SuitsPage';
import PagadisPage from './pages/PagadisPage';
import KurtasPage from './pages/KurtasPage';
import BlazersPage from './pages/BlazersPage';
import ProductDetail from './pages/ProductDetail';
import ProductDetailPageShoe from './pages/ProductDetailPageShoe';
import ProductDetailPageSuit from './pages/ProductDetailPageSuit';
import ProductDetailPagePagadi from './pages/ProductDetailPagePagadi';
import ProductDetailPageKurta from './pages/ProductDetailPageKurta';
import ProductDetailPageBlazer from './pages/ProductDetailPageBlazer';
import KidsShoesPage from './pages/KidsShoesPage';
import ProductDetailPageKidsShoe from './pages/ProductDetailPageKidsShoe';

// KIDS SUITS PAGES - ONLY CREATE THESE 2 FILES FOR NOW
import KidsSuitsPage from './pages/KidsSuitsPage';
import ProductDetailPageKidsSuit from './pages/ProductDetailPageKidsSuit';

// TEMPORARILY COMMENT OUT OTHER KIDS PAGES UNTIL YOU CREATE THEM
// import KidsSherwaniPage from './pages/KidsSherwaniPage';
// import KidsShoesPage from './pages/KidsShoesPage';
// import KidsPagadisPage from './pages/KidsPagadisPage';
// import KidsKurtasPage from './pages/KidsKurtasPage';
// import KidsBlazersPage from './pages/KidsBlazersPage';
// import ProductDetailPageKidsSherwani from './pages/ProductDetailPageKidsSherwani';
// import ProductDetailPageKidsShoe from './pages/ProductDetailPageKidsShoe';
// import ProductDetailPageKidsPagadi from './pages/ProductDetailPageKidsPagadi';
// import ProductDetailPageKidsKurta from './pages/ProductDetailPageKidsKurta';
// import ProductDetailPageKidsBlazer from './pages/ProductDetailPageKidsBlazer';

import './App.css';
import KidsCollectionPage from './pages/KidsCollectionPage';
import MensEthnicWearPage from './pages/MensEthnicWearPage';
import MensFormalWearPage from './pages/MensFormalWearPage';
import ShopOccasion from './components/ShopOccasion';

// import ShopOccasion from './components/ShopOccasion';
import MensOccasionPage from './pages/MensOccasionPage';
import KidsOccasionPage from './pages/KidsOccasionPage';
import Signup from './components/Signup';


function App() {

 const [showIntro, setShowIntro] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Check if user is already logged in
  useEffect(() => {
    const token = localStorage.getItem('arshart_token');
    const user = localStorage.getItem('arshart_user');
    
    if (token && user) {
      setIsAuthenticated(true);
    }
    
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleIntroFinish = () => {
    console.log("✅ Intro finished, showing ecommerce app");
    setShowIntro(false);
  };

  const handleSignInSuccess = (userData) => {
    setIsAuthenticated(true);
    setShowIntro(false);
    navigate('/');
  };

  const handleLogout = () => {
    localStorage.removeItem('arshart_token');
    localStorage.removeItem('arshart_user');
    setIsAuthenticated(false);
    // Keep showing ecommerce app after logout
  };

  const isAuthPage = ['/signin', '/signup', '/forgot-password', '/reset-password'].includes(location.pathname);
  // Show loading screen
  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  // Show intro screen if needed
  if (showIntro) {
    return <IntroScreen onFinish={handleIntroFinish} />;
  }
    
    return (
        
            <div className="App">
                {!isAuthPage && <Header />}
                <main>
                    <Routes>

                      {/* AUTHENTICATION ROUTES */}
            <Route path="/signin" element={
              <SignIn onSuccess={handleSignInSuccess}
              onSignup={() => navigate('/signup')} // Pass navigation function
              onForgotPassword={() => navigate('/forgot-password')}  />
            } />
            
            <Route path="/signup" element={<Signup 
            onSuccess={() => navigate('/signin')} // Redirect to signin after signup
              onLogin={() => navigate('/signin')}/>} />
            
            <Route path="/forgot-password" element={<ForgotPassword
            onSuccess={() => navigate('/reset-password')} // Redirect to reset password
              onBack={() => navigate('/signin')} />} />
            
            <Route path="/reset-password" element={<ResetPassword 
              onSuccess={() => navigate('/signin')} // Redirect to signin after reset
              onBack={() => navigate('/signin')} />} />

                        {/* Main Pages */}
                        <Route path="/" element={<Home />} />
                        <Route path="/mens-wear" element={<MensWear />} />
                        <Route path="/kids-wear" element={<KidsWear />} />
                        <Route path="/new-arrivals" element={<NewArrivals />} />
                        <Route path="/collections" element={<Collections />} />
                        <Route path="/offers" element={<Offers />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/wishlist" element={<Wishlist />} />
                        
                        {/* MEN'S Category Pages */}
                        <Route path="/sherwanis" element={<SherwaniPage />} />
                        <Route path="/shoes" element={<ShoesPage />} />
                        <Route path="/suits" element={<SuitsPage />} />
                        <Route path="/pagadis" element={<PagadisPage />} />
                        <Route path="/kurtas" element={<KurtasPage />} />
                        <Route path="/blazers" element={<BlazersPage />} />
                        
                        {/* KIDS Category Pages - ONLY SUITS FOR NOW */}
                        <Route path="/kids-suits" element={<KidsSuitsPage />} />
                        {/* TEMPORARILY COMMENT OUT OTHER KIDS ROUTES */}
                        {/* <Route path="/kids-sherwanis" element={<KidsSherwaniPage />} /> */}
                         <Route path="/kids-shoes" element={<KidsShoesPage />} /> 
                        {/* <Route path="/kids-pagadis" element={<KidsPagadisPage />} /> */}
                        {/* <Route path="/kids-kurtas" element={<KidsKurtasPage />} /> */}
                        {/* <Route path="/kids-blazers" element={<KidsBlazersPage />} /> */}
                        
                        {/* MEN'S Product Detail Pages */}
                        <Route path="/product/traditional-shoes/:id" element={<ProductDetailPageShoe />} />
                        <Route path="/product/suits/:id" element={<ProductDetailPageSuit />} />
                        <Route path="/product/pagadis/:id" element={<ProductDetailPagePagadi />} />
                        <Route path="/product/kurtas/:id" element={<ProductDetailPageKurta />} />
                        <Route path="/product/blazers/:id" element={<ProductDetailPageBlazer />} />
                        <Route path="/product/sherwanis/:id" element={<ProductDetail />} />
                        
                        {/* KIDS Product Detail Pages - ONLY SUITS FOR NOW */}
                        <Route path="/product/kids-suits/:id" element={<ProductDetailPageKidsSuit />} />
                        {/* TEMPORARILY COMMENT OUT OTHER KIDS DETAIL ROUTES */}
                        {/* <Route path="/product/kids-sherwanis/:id" element={<ProductDetailPageKidsSherwani />} /> */}
                         <Route path="/product/kids-shoes/:id" element={<ProductDetailPageKidsShoe />} /> 
                        {/* <Route path="/product/kids-pagadis/:id" element={<ProductDetailPageKidsPagadi />} /> */}
                        {/* <Route path="/product/kids-kurtas/:id" element={<ProductDetailPageKidsKurta />} /> */}
                        {/* <Route path="/product/kids-blazers/:id" element={<ProductDetailPageKidsBlazer />} /> */}
                        
                        {/* General Product Routes */}
                        <Route path="/category/:category/:id" element={<ProductDetail />} />
                        <Route path="/product/:id" element={<ProductDetail />} />

                        <Route path="/shop" element={<ShopOccasion />} />
                        


                        <Route path="/collections/mens-ethnic-wear" element={<MensEthnicWearPage />} />
                <Route path="/collections/kids-collection" element={<KidsCollectionPage />} />
                <Route path="/collections/mens-formal-wear" element={<MensFormalWearPage />} />



                <Route path="/mens/haldi" element={<MensOccasionPage occasion="haldi" />} />
          <Route path="/mens/reception" element={<MensOccasionPage occasion="reception" />} />
          <Route path="/mens/wedding" element={<MensOccasionPage occasion="wedding" />} />
          
          {/* Kids' Occasion Pages */}
          <Route path="/kids/birthday" element={<KidsOccasionPage occasion="birthday" />} />
          <Route path="/kids/school-parties" element={<KidsOccasionPage occasion="school-parties" />} />
          <Route path="/kids/festivals" element={<KidsOccasionPage occasion="festivals" />} />
        
                        {/* 404 Page */}
                        <Route path="*" element={
                            <div style={{ 
                                padding: '100px 20px', 
                                textAlign: 'center',
                                minHeight: '60vh',
                                backgroundColor: '#f8f5f0'
                            }}>
                                <h1 style={{ fontSize: '48px', color: '#333', marginBottom: '20px' }}>404</h1>
                                <h2 style={{ fontSize: '24px', color: '#666', marginBottom: '20px' }}>Page Not Found</h2>
                                <p style={{ fontSize: '16px', color: '#888', marginBottom: '30px' }}>
                                    The page you're looking for doesn't exist.
                                </p>
                                <Link 
                                    to="/" 
                                    style={{
                                        display: 'inline-block',
                                        padding: '12px 30px',
                                        backgroundColor: '#2E8B57',
                                        color: 'white',
                                        textDecoration: 'none',
                                        borderRadius: '4px',
                                        fontWeight: '600'
                                    }}
                                >
                                    Go Back Home
                                </Link>
                            </div>
                        } />
                    </Routes>
                </main>
                <Footer />
            </div>
        
    );
}

export default App;