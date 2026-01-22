import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavClick = () => {
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { title: 'Bosh sahifa', path: '/' },
    { title: 'Investitsiya', path: '/investitsiya' },
    { title: 'Kalkulator', path: '/kalkulyator' },
    { title: 'Blog', path: '/blog' },
  ];

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        {/* Logo */}
        <Link to="/" className="logo">
          Kvadrat.uz
        </Link>

        {/* Desktop Navigation */}
        <div className="desktop-menu">
          <ul className="nav-links">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link to={link.path} className="nav-link" onClick={handleNavClick}>
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Button (Desktop) */}
        <div className="desktop-action">
          <Link to="/contact" className="btn-primary" onClick={handleNavClick}>
            Ariza qoldirish
            <ArrowUpRight size={18} />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="mobile-toggle" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="mobile-menu"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <ul className="mobile-nav-links">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path} className="mobile-nav-link" onClick={handleNavClick}>
                      {link.title}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link to="/contact" className="btn-primary mobile-btn" onClick={handleNavClick}>
                    Ariza qoldirish
                    <ArrowUpRight size={18} />
                  </Link>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;

