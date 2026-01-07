

// src/components/Header.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import { FaSearch, FaUser, FaHeart, FaShoppingCart, FaBars, FaTimes, FaChevronDown, FaSignInAlt } from 'react-icons/fa';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [userDropdownOpen, setUserDropdownOpen] = useState(false);
    const navigate = useNavigate();
    
    // Check if user is logged in
    const token = localStorage.getItem('arshart_token');
    const user = localStorage.getItem('arshart_user') ? 
        JSON.parse(localStorage.getItem('arshart_user')) : null;

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        if (isMenuOpen) {
            setActiveDropdown(null);
            setUserDropdownOpen(false);
        }
    };

    const handleDropdown = (menu) => {
        setActiveDropdown(activeDropdown === menu ? null : menu);
    };

    const toggleUserDropdown = () => {
        setUserDropdownOpen(!userDropdownOpen);
    };

    const closeAllDropdowns = () => {
        setActiveDropdown(null);
        setIsMenuOpen(false);
        setUserDropdownOpen(false);
    };

    // Sign In handler
    const handleSignIn = () => {
        navigate('/signin');
        closeAllDropdowns();
    };

    // Logout handler
    const handleLogout = () => {
        localStorage.removeItem('arshart_token');
        localStorage.removeItem('arshart_user');
        setUserDropdownOpen(false);
        navigate('/');
        closeAllDropdowns();
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
                            <Link to="/" className="logo" onClick={closeAllDropdowns}><img src='arshArt-logo.jpeg' height={50} width={110}/></Link>
                            
                            {/* Navigation */}
                            <nav className={`main-nav ${isMenuOpen ? 'active' : ''}`}>
                                <div className="nav-item">
                                    <Link to="/" className="nav-link" onClick={closeAllDropdowns}>Home</Link>
                                </div>
                                
                                {/* MEN'S DROPDOWN */}
                                <div className="nav-item dropdown" 
                                     onMouseEnter={() => window.innerWidth > 992 && setActiveDropdown('men')}
                                     onMouseLeave={() => window.innerWidth > 992 && setActiveDropdown(null)}>
                                    <Link to="/mens-wear" className="nav-link" onClick={(e) => {
                                        if(window.innerWidth <= 992) {
                                            e.preventDefault();
                                            handleDropdown('men');
                                        } else {
                                            closeAllDropdowns();
                                        }
                                    }}>
                                        Men <FaChevronDown className="dropdown-icon" />
                                    </Link>
                                    <ul className={`dropdown-menu ${activeDropdown === 'men' ? 'active' : ''}`}>
                                        <li><Link to="/suits" onClick={closeAllDropdowns}>Suits</Link></li>
                                        <li><Link to="/shoes" onClick={closeAllDropdowns}>Shoes</Link></li>
                                        <li><Link to="/sherwanis" onClick={closeAllDropdowns}>Sherwani</Link></li>
                                        <li><Link to="/pagadis" onClick={closeAllDropdowns}>Pagadis</Link></li>
                                        <li><Link to="/kurtas" onClick={closeAllDropdowns}>Kurtas</Link></li>
                                        <li><Link to="/blazers" onClick={closeAllDropdowns}>Blazers</Link></li>
                                    </ul>
                                </div>
                                
                                {/* KIDS DROPDOWN - UPDATED WITH PROPER ROUTES */}
                                <div className="nav-item dropdown"
                                     onMouseEnter={() => window.innerWidth > 992 && setActiveDropdown('kids')}
                                     onMouseLeave={() => window.innerWidth > 992 && setActiveDropdown(null)}>
                                    <Link to="/kids-wear" className="nav-link" onClick={(e) => {
                                        if(window.innerWidth <= 992) {
                                            e.preventDefault();
                                            handleDropdown('kids');
                                        } else {
                                            closeAllDropdowns();
                                        }
                                    }}>
                                        Kids <FaChevronDown className="dropdown-icon" />
                                    </Link>
                                    <ul className={`dropdown-menu ${activeDropdown === 'kids' ? 'active' : ''}`}>
                                        {/* ALL KIDS CATEGORY LINKS UPDATED */}
                                        <li><Link to="/kids-suits" onClick={closeAllDropdowns}>Kids Suits</Link></li>
                                        <li><Link to="/kids-shoes" onClick={closeAllDropdowns}>Kids Shoes</Link></li>
                                        <li><Link to="/kids-sherwanis" onClick={closeAllDropdowns}>Kids Sherwani</Link></li>
                                        <li><Link to="/kids-pagadis" onClick={closeAllDropdowns}>Kids Pagadis</Link></li>
                                        <li><Link to="/kids-kurtas" onClick={closeAllDropdowns}>Kids Kurtas</Link></li>
                                        <li><Link to="/kids-blazers" onClick={closeAllDropdowns}>Kids Blazers</Link></li>
                                        <li><Link to="/kids-wear" onClick={closeAllDropdowns} className="view-all">All Kids Wear →</Link></li>
                                    </ul>
                                </div>
                                
                                <div className="nav-item">
                                    <Link to="/new-arrivals" className="nav-link" onClick={closeAllDropdowns}>
                                        New Arrivals <span className="nav-badge">New</span>
                                    </Link>
                                </div>
                                
                                <div className="nav-item">
                                    <Link to="/collections" className="nav-link" onClick={closeAllDropdowns}>Collections</Link>
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
                                
                                {/* Only Sign In Option */}
                                {token && user ? (
                                    <div className="nav-item dropdown user-dropdown"
                                         onMouseEnter={() => window.innerWidth > 992 && setUserDropdownOpen(true)}
                                         onMouseLeave={() => window.innerWidth > 992 && setUserDropdownOpen(false)}>
                                        <div className="nav-link user-profile" onClick={() => {
                                            if (window.innerWidth <= 992) {
                                                toggleUserDropdown();
                                            }
                                        }}>
                                            <FaUser />
                                            <span className="user-name">{user.name?.split(' ')[0] || 'User'}</span>
                                            <FaChevronDown className="dropdown-icon" />
                                        </div>
                                        <ul className={`dropdown-menu ${userDropdownOpen ? 'active' : ''}`}>
                                            <li className="user-info">
                                                <div className="user-details">
                                                    <strong>{user.name}</strong>
                                                    <small>{user.email}</small>
                                                </div>
                                            </li>
                                            <li><Link to="/account" onClick={closeAllDropdowns}><FaUser /> My Account</Link></li>
                                            <li><Link to="/orders" onClick={closeAllDropdowns}><FaShoppingCart /> My Orders</Link></li>
                                            <li><Link to="/wishlist" onClick={closeAllDropdowns}><FaHeart /> Wishlist</Link></li>
                                            <li><button onClick={handleLogout} className="logout-btn"><FaSignInAlt /> Logout</button></li>
                                        </ul>
                                    </div>
                                ) : (
                                    <button className="signin-btn" onClick={handleSignIn}>
                                        <FaSignInAlt /> Sign In
                                    </button>
                                )}
                                
                                <Link to="/wishlist" className="action-icon" onClick={closeAllDropdowns}>
                                    <FaHeart />
                                    <span className="action-count">0</span>
                                </Link>
                                
                                <Link to="/cart" className="action-icon" onClick={closeAllDropdowns}>
                                    <FaShoppingCart />
                                    <span className="action-count">0</span>
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