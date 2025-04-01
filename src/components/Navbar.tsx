import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.scss';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // 處理滾動事件
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // 當側邊欄打開時，防止背景滾動
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <img src="/images/logo.png" alt="公司標誌" />
          <span>浩盛科技</span>
        </Link>
        
        <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        
        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <button className="close-button" onClick={closeMenu} aria-label="關閉選單">
            ×
          </button>
          <div className="menu-header">
            <Link to="/" className="menu-logo" onClick={closeMenu}>
              <span>浩盛科技</span>
            </Link>
            
          </div>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={closeMenu}>
              <span className="menu-icon">🏠</span>
              首頁
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/news" className="nav-link" onClick={closeMenu}>
              <i className="menu-icon">📰</i>
              <span>實績</span>
            </Link>
          </li>
          {/* <li className="nav-item">
            <Link to="/history" className="nav-link" onClick={closeMenu}>
              <i className="menu-icon">📜</i>
              <span>歷史</span>
            </Link>
          </li> */}
          <li className="nav-item">
            <Link to="/products" className="nav-link" onClick={closeMenu}>
              <i className="menu-icon">🛒</i>
              <span>產品</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link" onClick={closeMenu}>
              <i className="menu-icon">📞</i>
              <span>聯絡我們</span>
            </Link>
          </li>
        </ul>
      </div>
      {/* 背景遮罩 */}
      <div className={`menu-overlay ${menuOpen ? 'active' : ''}`} onClick={closeMenu}></div>
    </nav>
  );
};

export default Navbar;
