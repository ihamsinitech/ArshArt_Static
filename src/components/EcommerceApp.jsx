// src/components/EcommerceApp.jsx
import React from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

// Pages
import Home from "../pages/Home";
import MensWear from "../pages/MensWear";
import KidsWear from "../pages/KidsWear";
import NewArrivals from "../pages/NewArrivals";
import Collections from "../pages/Collections";
import Offers from "../pages/Offers";
import Cart from "../pages/Cart";
import Wishlist from "../pages/Wishlist";

// Men's Category Pages
import SherwaniPage from "../pages/SherwaniPage";
import ShoesPage from "../pages/ShoesPage";
import SuitsPage from "../pages/SuitsPage";
import PagadisPage from "../pages/PagadisPage";
import KurtasPage from "../pages/KurtasPage";
import BlazersPage from "../pages/BlazersPage";

// Product Detail Pages (Men)
import ProductDetail from "../pages/ProductDetail";
import ProductDetailPageShoe from "../pages/ProductDetailPageShoe";
import ProductDetailPageSuit from "../pages/ProductDetailPageSuit";
import ProductDetailPagePagadi from "../pages/ProductDetailPagePagadi";
import ProductDetailPageKurta from "../pages/ProductDetailPageKurta";
import ProductDetailPageBlazer from "../pages/ProductDetailPageBlazer";

// Kids Pages
import KidsShoesPage from "../pages/KidsShoesPage";
import KidsSuitsPage from "../pages/KidsSuitsPage";
import ProductDetailPageKidsShoe from "../pages/ProductDetailPageKidsShoe";
import ProductDetailPageKidsSuit from "../pages/ProductDetailPageKidsSuit";
import KidsCollectionPage from "../pages/KidsCollectionPage";

// Collections
import MensEthnicWearPage from "../pages/MensEthnicWearPage";
import MensFormalWearPage from "../pages/MensFormalWearPage";

import "../App.css";

/* ---------------- LOGOUT BUTTON ---------------- */
const LogoutButton = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    if (onLogout) onLogout();
    localStorage.removeItem("arshart_user");
    navigate("/signin");
  };

  return (
    <button
      onClick={handleLogout}
      style={{
        padding: "8px 20px",
        backgroundColor: "#ff6b6b",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        marginLeft: "10px",
      }}
    >
      Logout
    </button>
  );
};

/* ---------------- APP HEADER (HEADER UNCHANGED) ---------------- */
const AppHeader = ({ onLogout }) => {
  return (
    <header className="app-header">
      {/* Your existing Header component */}
      <Header onLogout={onLogout} />
    </header>
  );
};

/* ---------------- MAIN APP ---------------- */
const EcommerceApp = ({ onLogout }) => {
  console.log("🛍️ EcommerceApp Loaded");

  return (
    <div className="EcommerceApp">
      <AppHeader onLogout={onLogout} />

      <main>
        <Routes>
          {/* HOME */}
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />

          {/* MAIN PAGES */}
          <Route path="/mens-wear" element={<MensWear />} />
          <Route path="/kids-wear" element={<KidsWear />} />
          <Route path="/new-arrivals" element={<NewArrivals />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />

          {/* MEN CATEGORIES */}
          <Route path="/sherwanis" element={<SherwaniPage />} />
          <Route path="/shoes" element={<ShoesPage />} />
          <Route path="/suits" element={<SuitsPage />} />
          <Route path="/pagadis" element={<PagadisPage />} />
          <Route path="/kurtas" element={<KurtasPage />} />
          <Route path="/blazers" element={<BlazersPage />} />

          {/* KIDS CATEGORIES */}
          <Route path="/kids-suits" element={<KidsSuitsPage />} />
          <Route path="/kids-shoes" element={<KidsShoesPage />} />

          {/* PRODUCT DETAIL (MEN) */}
          <Route path="/product/sherwanis/:id" element={<ProductDetail />} />
          <Route path="/product/traditional-shoes/:id" element={<ProductDetailPageShoe />} />
          <Route path="/product/suits/:id" element={<ProductDetailPageSuit />} />
          <Route path="/product/pagadis/:id" element={<ProductDetailPagePagadi />} />
          <Route path="/product/kurtas/:id" element={<ProductDetailPageKurta />} />
          <Route path="/product/blazers/:id" element={<ProductDetailPageBlazer />} />

          {/* PRODUCT DETAIL (KIDS) */}
          <Route path="/product/kids-suits/:id" element={<ProductDetailPageKidsSuit />} />
          <Route path="/product/kids-shoes/:id" element={<ProductDetailPageKidsShoe />} />

          {/* COLLECTIONS */}
          <Route path="/collections/mens-ethnic-wear" element={<MensEthnicWearPage />} />
          <Route path="/collections/mens-formal-wear" element={<MensFormalWearPage />} />
          <Route path="/collections/kids-collection" element={<KidsCollectionPage />} />

          {/* 404 */}
          <Route
            path="*"
            element={
              <div
                style={{
                  padding: "100px 20px",
                  textAlign: "center",
                  minHeight: "60vh",
                  backgroundColor: "#f8f5f0",
                }}
              >
                <h1 style={{ fontSize: "48px" }}>404</h1>
                <h2>Page Not Found</h2>
                <p>The page you’re looking for doesn’t exist.</p>
                <Link
                  to="/home"
                  style={{
                    display: "inline-block",
                    marginTop: "20px",
                    padding: "12px 30px",
                    backgroundColor: "#2E8B57",
                    color: "#fff",
                    textDecoration: "none",
                    borderRadius: "4px",
                  }}
                >
                  Go Back Home
                </Link>
              </div>
            }
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default EcommerceApp;
