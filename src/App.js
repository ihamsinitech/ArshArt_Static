// src/App.js
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

/* MAIN PAGES */
import Home from "./pages/Home";
import MensWear from "./pages/MensWear";
import KidsWear from "./pages/KidsWear";
import NewArrivals from "./pages/NewArrivals";
import Collections from "./pages/Collections";
import Offers from "./pages/Offers";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";

/* MEN LANDING */
import MenLandingPage from "./pages/MenLandingPage";

/* MEN CATEGORIES */
import SherwaniPage from "./pages/SherwaniPage";
import ShoesPage from "./pages/ShoesPage";
import SuitsPage from "./pages/SuitsPage";
import PagadisPage from "./pages/PagadisPage";
import KurtasPage from "./pages/KurtasPage";
import BlazersPage from "./pages/BlazersPage";

/* PRODUCT DETAIL */
import ProductDetail from "./pages/ProductDetail";

/* KIDS */
import KidsShoesPage from "./pages/KidsShoesPage";
import KidsSuitsPage from "./pages/KidsSuitsPage";
import KidsSherwaniPage from "./pages/KidsSherwaniPage";
import KidsPagadisPage from "./pages/KidsPagadisPage";

/* CHECKOUT FLOW */
import Checkout from "./pages/Checkout";
import Payment from "./pages/Payment";
import OrderSuccess from "./pages/OrderSuccess";

import "./App.css";

/* ================= SCROLL FIX ================= */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
/* ============================================ */

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Router>
      <ScrollToTop />

      <div className="App">
        <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

        <main>
          <Routes>
            {/* MAIN */}
            <Route path="/" element={<Home />} />
            <Route path="/men" element={<MenLandingPage />} />

            {/* NAV */}
            <Route path="/mens-wear" element={<MensWear />} />
            <Route path="/kids-wear" element={<KidsWear />} />
            <Route path="/new-arrivals" element={<NewArrivals />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<Wishlist />} />

            {/* CHECKOUT */}
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/order-success" element={<OrderSuccess />} />

            {/* MEN CATEGORIES */}
            <Route path="/sherwanis" element={<SherwaniPage />} />
            <Route path="/shoes" element={<ShoesPage />} />
            <Route path="/suits" element={<SuitsPage />} />
            <Route path="/pagadis" element={<PagadisPage />} />
            <Route
              path="/kurtas"
              element={<KurtasPage searchQuery={searchQuery} />}
            />
            <Route path="/blazers" element={<BlazersPage />} />

            {/* PRODUCT ROUTES (VERY IMPORTANT) */}
            <Route path="/product/sherwanis/:id" element={<SherwaniPage />} />
            <Route path="/product/suits/:id" element={<SuitsPage />} />
            <Route path="/product/shoes/:id" element={<ShoesPage />} />
            <Route path="/product/pagadi/:id" element={<PagadisPage />} />

            {/* KIDS */}
            <Route path="/kids-suits" element={<KidsSuitsPage />} />
            <Route path="/kids-sherwanis" element={<KidsSherwaniPage />} />
            <Route path="/kids-shoes" element={<KidsShoesPage />} />
            <Route path="/kids-pagadi" element={<KidsPagadisPage />} />

            {/* GENERIC */}
            <Route path="/category/:category/:id" element={<ProductDetail />} />
            <Route path="/product/:id" element={<ProductDetail />} />

            {/* 404 */}
            <Route
              path="*"
              element={
                <div style={{ padding: "100px", textAlign: "center" }}>
                  <h1>404</h1>
                  <p>Page Not Found</p>
                  <Link to="/">Go Home</Link>
                </div>
              }
            />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
