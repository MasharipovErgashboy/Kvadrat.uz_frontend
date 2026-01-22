import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, Instagram, Globe, Twitter, Github, ChevronRight } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="footer-container">

                {/* Top Row: Support Email & Socials */}
                <div className="footer-top">
                    <a href="mailto:support@kvadrat.uz" className="support-button">
                        <Mail size={20} className="icon-blue" />
                        <span>support@kvadrat.uz</span>
                        <ChevronRight size={16} className="chevron" />
                    </a>

                    <div className="social-media">
                        <span className="social-label">Social media:</span>
                        <div className="social-icons">
                            <a href="#" className="social-icon"><Instagram size={20} /></a>
                            <a href="#" className="social-icon"><Globe size={20} /></a>
                            <a href="#" className="social-icon"><Twitter size={20} /></a>
                            <a href="#" className="social-icon"><Github size={20} /></a>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="footer-main">

                    {/* Left Side: Links & Info */}
                    <div className="footer-info-col">
                        <h3 className="footer-brand-text">Kvadrat.uz</h3>
                        <p className="footer-desc">
                            Send me the Kvadrat.uz newsletter. I expressly agree to receive the newsletter and know that I can easily unsubscribe at any time.
                        </p>

                        <div className="footer-links-grid">
                            <div className="footer-col">
                                <h4>Pages</h4>
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/blog">Blog</Link></li>
                                    <li><Link to="/investitsiya">Investitsiya</Link></li>
                                    <li><Link to="/kalkulator">Kalkulator</Link></li>
                                    <li><Link to="/contact">Contact</Link></li>
                                    <li><Link to="/privacy-policy">Privacy policy</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Large Logo */}
                    <div className="footer-logo-col">
                        <div className="large-logo">
                            <span className="big-m">m</span>
                            <span className="big-sq">2</span>
                        </div>
                        <span className="large-brand-name">Kvadrat.uz</span>
                    </div>

                </div>

            </div>
        </footer>
    );
};

export default Footer;
