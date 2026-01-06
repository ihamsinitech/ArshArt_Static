// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

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

/* 🔥 MEN LANDING PAGE */
import MenLandingPage from './pages/MenLandingPage';

/* MEN CATEGORY PAGES */
import SherwaniPage from './pages/SherwaniPage';
import ShoesPage from './pages/ShoesPage';
import SuitsPage from './pages/SuitsPage';
import PagadisPage from './pages/PagadisPage';
import KurtasPage from './pages/KurtasPage';
import BlazersPage from './pages/BlazersPage';

/* PRODUCT DETAIL PAGES */
import ProductDetail from './pages/ProductDetail';
import ProductDetailPageShoe from './pages/ProductDetailPageShoe';
import ProductDetailPageSuit from './pages/ProductDetailPageSuit';
import ProductDetailPagePagadi from './pages/ProductDetailPagePagadi';
import ProductDetailPageKurta from './pages/ProductDetailPageKurta';
import ProductDetailPageBlazer from './pages/ProductDetailPageBlazer';

/* KIDS PAGES */
import KidsShoesPage from './pages/KidsShoesPage';
import KidsSuitsPage from './pages/KidsSuitsPage';
import KidsSherwaniPage from './pages/KidsSherwaniPage';
import KidsPagadisPage from './pages/KidsPagadisPage';

/* KIDS PRODUCT DETAILS */
import ProductDetailPageKidsShoe from './pages/ProductDetailPageKidsShoe';
import ProductDetailPageKidsSuit from './pages/ProductDetailPageKidsSuit';
import ProductDetailPageKidsSherwani from './pages/ProductDetailPageKidsSherwani';
import ProductDetailPageKidsPagadi from './pages/ProductDetailPageKidsPagadi';

import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />

                <main>
                    <Routes>

                        {/* ================= MAIN ================= */}
                        <Route path="/" element={<Home />} />
                        <Route path="/men" element={<MenLandingPage />} />

                        {/* EXISTING PAGES */}
                        <Route path="/mens-wear" element={<MensWear />} />
                        <Route path="/kids-wear" element={<KidsWear />} />
                        <Route path="/new-arrivals" element={<NewArrivals />} />
                        <Route path="/collections" element={<Collections />} />
                        <Route path="/offers" element={<Offers />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/wishlist" element={<Wishlist />} />

                        {/* ================= MEN CATEGORIES ================= */}
                        <Route path="/sherwanis" element={<SherwaniPage />} />
                        <Route path="/shoes" element={<ShoesPage />} />
                        <Route path="/suits" element={<SuitsPage />} />
                        <Route path="/pagadis" element={<PagadisPage />} />
                        <Route path="/kurtas" element={<KurtasPage />} />
                        <Route path="/blazers" element={<BlazersPage />} />

                        {/* 🔥 ALIAS ROUTES (FIX FOR 404) */}
                        <Route path="/sherwani" element={<SherwaniPage />} />
                        <Route path="/pagadi" element={<PagadisPage />} />
                        <Route path="/kurtas-pyjamas" element={<KurtasPage />} />

                        {/* ================= KIDS CATEGORIES ================= */}
                        <Route path="/kids-suits" element={<KidsSuitsPage />} />
                        <Route path="/kids-sherwanis" element={<KidsSherwaniPage />} />
                        <Route path="/kids-shoes" element={<KidsShoesPage />} />
                        <Route path="/kids-pagadi" element={<KidsPagadisPage />} />

                        {/* ================= MEN PRODUCT DETAILS ================= */}
                        <Route path="/product/traditional-shoes/:id" element={<ProductDetailPageShoe />} />
                        <Route path="/product/suits/:id" element={<ProductDetailPageSuit />} />
                        <Route path="/product/pagadi/:id" element={<ProductDetailPagePagadi />} />
                        <Route path="/product/kurtas/:id" element={<ProductDetailPageKurta />} />
                        <Route path="/product/blazers/:id" element={<ProductDetailPageBlazer />} />
                        <Route path="/product/sherwanis/:id" element={<ProductDetail />} />

                        {/* ================= KIDS PRODUCT DETAILS ================= */}
                        <Route path="/product/kids-suits/:id" element={<ProductDetailPageKidsSuit />} />
                        <Route path="/product/kids-sherwanis/:id" element={<ProductDetailPageKidsSherwani />} />
                        <Route path="/product/kids-shoes/:id" element={<ProductDetailPageKidsShoe />} />
                        <Route path="/product/kids-pagadi/:id" element={<ProductDetailPageKidsPagadi />} />

                        {/* ================= GENERIC ================= */}
                        <Route path="/category/:category/:id" element={<ProductDetail />} />
                        <Route path="/product/:id" element={<ProductDetail />} />

                        {/* ================= 404 ================= */}
                        <Route path="*" element={
                            <div style={{
                                padding: '100px 20px',
                                textAlign: 'center',
                                minHeight: '60vh',
                                backgroundColor: '#f8f5f0'
                            }}>
                                <h1 style={{ fontSize: '48px' }}>404</h1>
                                <h2>Page Not Found</h2>
                                <Link to="/">Go Back Home</Link>
                            </div>
                        } />

                    </Routes>
                </main>

                <Footer />
            </div>
        </Router>
    );
}

export default App;
