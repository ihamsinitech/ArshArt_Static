// src/components/Header.js
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import {
  FaSearch,
  FaUser,
  FaHeart,
  FaShoppingBag,
  FaBars,
  FaTimes,
  FaChevronDown,
} from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  /* =======================
     CART COUNT (ADDED)
  ======================= */
  const [cartCount, setCartCount] = useState(0);

  const location = useLocation();

  /* =======================
     DYNAMIC SEARCH TEXT
  ======================= */
  const getSearchPlaceholder = () => {
    if (location.pathname.includes("sherwani")) return "Search Sherwanis...";
    if (location.pathname.includes("suits")) return "Search Suits...";
    if (location.pathname.includes("shoes")) return "Search Shoes...";
    if (location.pathname.includes("pagadi")) return "Search Pagadis...";
    if (location.pathname.includes("kurta")) return "Search Kurta Pyjamas...";
    return "Search products...";
  };

  /* =======================
     LOAD CART COUNT (ADDED)
  ======================= */
  useEffect(() => {
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      setCartCount(cart.length);
    };

    updateCartCount();

    window.addEventListener("storage", updateCartCount);
    return () => window.removeEventListener("storage", updateCartCount);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) setActiveDropdown(null);
  };

  const handleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const closeAllDropdowns = () => {
    setActiveDropdown(null);
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Top Notice Bar */}
      <div className="top-notice-bar">
        <div className="container">
          <p>Free shipping on every order – delivered across India</p>
        </div>
      </div>

      <header>
        <div className="main-header">
          <div className="container">
            <div className="header-content">

              {/* LOGO */}
              <Link to="/" className="logo" onClick={closeAllDropdowns}>
                <img
                  src="/images/logo/arshart-logo.png"
                  alt="ArshArt Logo"
                  className="logo-img"
                />
              </Link>

              {/* NAVIGATION */}
              <nav className={`main-nav ${isMenuOpen ? "active" : ""}`}>

                <Link to="/" className="nav-link" onClick={closeAllDropdowns}>
                  Home
                </Link>

                {/* MEN */}
                <div
                  className="nav-item dropdown"
                  onMouseEnter={() =>
                    window.innerWidth > 992 && setActiveDropdown("men")
                  }
                  onMouseLeave={() =>
                    window.innerWidth > 992 && setActiveDropdown(null)
                  }
                >
                  <Link
                    to="/men"
                    className="nav-link"
                    onClick={(e) => {
                      if (window.innerWidth <= 992) {
                        e.preventDefault();
                        handleDropdown("men");
                      } else {
                        closeAllDropdowns();
                      }
                    }}
                  >
                    Men <FaChevronDown className="dropdown-icon" />
                  </Link>

                  <ul
                    className={`dropdown-menu ${
                      activeDropdown === "men" ? "active" : ""
                    }`}
                  >
                    <li>
                      <Link to="/suits" onClick={closeAllDropdowns}>
                        Suits
                      </Link>
                    </li>
                    <li>
                      <Link to="/shoes" onClick={closeAllDropdowns}>
                        Shoes
                      </Link>
                    </li>
                    <li>
                      <Link to="/sherwanis" onClick={closeAllDropdowns}>
                        Sherwani
                      </Link>
                    </li>
                    <li>
                      <Link to="/pagadis" onClick={closeAllDropdowns}>
                        Pagadis
                      </Link>
                    </li>
                    <li>
                      <Link to="/kurtas" onClick={closeAllDropdowns}>
                        Kurta Pyjamas
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* KIDS */}
                <div
                  className="nav-item dropdown"
                  onMouseEnter={() =>
                    window.innerWidth > 992 && setActiveDropdown("kids")
                  }
                  onMouseLeave={() =>
                    window.innerWidth > 992 && setActiveDropdown(null)
                  }
                >
                  <span
                    className="nav-link"
                    onClick={() => handleDropdown("kids")}
                  >
                    Kids <FaChevronDown className="dropdown-icon" />
                  </span>

                  <ul
                    className={`dropdown-menu ${
                      activeDropdown === "kids" ? "active" : ""
                    }`}
                  >
                    <li>
                      <Link to="/kids-suits" onClick={closeAllDropdowns}>
                        Kids Suits
                      </Link>
                    </li>
                  </ul>
                </div>

                <Link to="/new-arrivals" className="nav-link" onClick={closeAllDropdowns}>
                  New Arrivals <span className="nav-badge">NEW</span>
                </Link>

                <Link to="/collections" className="nav-link" onClick={closeAllDropdowns}>
                  Collections
                </Link>

                <Link to="/offers" className="nav-link" onClick={closeAllDropdowns}>
                  Special Offers <span className="nav-badge">50% OFF</span>
                </Link>
              </nav>

              {/* RIGHT SIDE ACTIONS */}
              <div className="header-actions">
                {/* SEARCH BAR */}
                <div className="header-search">
                  <FaSearch />
                  <input type="text" placeholder={getSearchPlaceholder()} />
                </div>

                <Link to="/account" className="action-icon" onClick={closeAllDropdowns}>
                  <FaUser />
                </Link>

                <Link to="/wishlist" className="action-icon" onClick={closeAllDropdowns}>
                  <FaHeart />
                  <span className="action-count">3</span>
                </Link>

                {/* CART (DYNAMIC COUNT) */}
                <Link to="/cart" className="action-icon" onClick={closeAllDropdowns}>
                  <FaShoppingBag />
                  {cartCount > 0 && (
                    <span className="action-count">{cartCount}</span>
                  )}
                </Link>
              </div>

              {/* MOBILE MENU BUTTON */}
              <button className="mobile-menu-btn" onClick={toggleMenu}>
                {isMenuOpen ? <FaTimes /> : <FaBars />}
              </button>

            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
