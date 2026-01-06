// src/components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { FaSearch, FaUser, FaHeart, FaShoppingBag, FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        if (isMenuOpen) {
            setActiveDropdown(null);
        }
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

            {/* Header */}
            <header>
                <div className="main-header">
                    <div className="container">
                        <div className="header-content">
                            {/* Logo */}
                            <Link to="/" className="logo" onClick={closeAllDropdowns}>
                                Arshart
                            </Link>

                            {/* Navigation */}
                            <nav className={`main-nav ${isMenuOpen ? 'active' : ''}`}>
                                <div className="nav-item">
                                    <Link to="/" className="nav-link" onClick={closeAllDropdowns}>
                                        Home
                                    </Link>
                                </div>

                                {/* MEN'S DROPDOWN */}
                                <div
                                    className="nav-item dropdown"
                                    onMouseEnter={() => window.innerWidth > 992 && setActiveDropdown('men')}
                                    onMouseLeave={() => window.innerWidth > 992 && setActiveDropdown(null)}
                                >
                                    {/* ✅ ONLY CHANGE IS HERE */}
                                    <Link
                                        to="/men"
                                        className="nav-link"
                                        onClick={(e) => {
                                            if (window.innerWidth <= 992) {
                                                e.preventDefault();
                                                handleDropdown('men');
                                            } else {
                                                closeAllDropdowns();
                                            }
                                        }}
                                    >
                                        Men <FaChevronDown className="dropdown-icon" />
                                    </Link>

                                    <ul className={`dropdown-menu ${activeDropdown === 'men' ? 'active' : ''}`}>
                                        <li><Link to="/suits" onClick={closeAllDropdowns}>Suits</Link></li>
                                        <li><Link to="/shoes" onClick={closeAllDropdowns}>Shoes</Link></li>
                                        <li><Link to="/sherwanis" onClick={closeAllDropdowns}>Sherwani</Link></li>
                                        <li><Link to="/pagadis" onClick={closeAllDropdowns}>Pagadis</Link></li>
                                        <li><Link to="/kurtas" onClick={closeAllDropdowns}>Kurtas-pyjamas</Link></li>
                                   
                                    </ul>
                                </div>

                                {/* KIDS DROPDOWN */}
                                <div
                                    className="nav-item dropdown"
                                    onMouseEnter={() => window.innerWidth > 992 && setActiveDropdown('kids')}
                                    onMouseLeave={() => window.innerWidth > 992 && setActiveDropdown(null)}
                                >
                                    <Link
                                        to="/kids-wear"
                                        className="nav-link"
                                        onClick={(e) => {
                                            if (window.innerWidth <= 992) {
                                                e.preventDefault();
                                                handleDropdown('kids');
                                            } else {
                                                closeAllDropdowns();
                                            }
                                        }}
                                    >
                                        Kids <FaChevronDown className="dropdown-icon" />
                                    </Link>

                                    <ul className={`dropdown-menu ${activeDropdown === 'kids' ? 'active' : ''}`}>
                                        <li><Link to="/kids-suits" onClick={closeAllDropdowns}>Kids Suits</Link></li>
                                    </ul>
                                </div>

                                <div className="nav-item">
                                    <Link to="/new-arrivals" className="nav-link" onClick={closeAllDropdowns}>
                                        New Arrivals <span className="nav-badge">New</span>
                                    </Link>
                                </div>

                                <div className="nav-item">
                                    <Link to="/collections" className="nav-link" onClick={closeAllDropdowns}>
                                        Collections
                                    </Link>
                                </div>

                                <div className="nav-item">
                                    <Link to="/offers" className="nav-link" onClick={closeAllDropdowns}>
                                        Special Offers <span className="nav-badge">50% OFF</span>
                                    </Link>
                                </div>
                            </nav>

                            {/* Header Actions */}
                            <div className="header-actions">
                                <div className="action-icon search-icon">
                                    <FaSearch />
                                </div>

                                <Link to="/account" className="action-icon" onClick={closeAllDropdowns}>
                                    <FaUser />
                                </Link>

                                <Link to="/wishlist" className="action-icon" onClick={closeAllDropdowns}>
                                    <FaHeart />
                                    <span className="action-count">3</span>
                                </Link>

                                <Link to="/cart" className="action-icon" onClick={closeAllDropdowns}>
                                    <FaShoppingBag />
                                    <span className="action-count">2</span>
                                </Link>
                            </div>

                            {/* Mobile Menu Button */}
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
