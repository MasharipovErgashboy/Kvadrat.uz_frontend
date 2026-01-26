import React from 'react';
import { motion } from 'framer-motion';
import { Star, User, Building, CreditCard, Bell } from 'lucide-react';
import HeroPhone from '../assets/hero-phone.png';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container hero-container">

                {/* Top Badge: Users & Ratings */}
                <motion.div
                    className="hero-badge"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="avatar-stack">
                        {/* Placeholder avatars using simple colored circles or random images if available, 
                            using colored divs for now to strictly follow "no external requests" unless necessary */}
                        <div className="avatar" style={{ background: '#D97706' }}></div>
                        <div className="avatar" style={{ background: '#EA580C' }}></div>
                        <div className="avatar" style={{ background: '#DC2626' }}></div>
                        <div className="avatar-counter">80+</div>
                    </div>
                    <div className="rating-text">
                        <div className="stars">
                            {[1, 2, 3, 4, 5].map(i => <Star key={i} size={12} fill="#F59E0B" stroke="none" />)}
                            <span className="rating-score">4.5/5</span>
                        </div>
                        <span className="rating-label">1000+ foydalanuvchi</span>
                    </div>
                </motion.div>

                {/* Main Headline */}
                <motion.h1
                    className="hero-title"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <span className="text-primary">mkvadrat.uz</span> bilan — qarzsiz<br />
                    va foizsiz uy egasi bo'ling!
                </motion.h1>

                <motion.p
                    className="hero-subtitle"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    Hamkorlik asosida uyli bo'lish imkoniyati — bank kreditisiz, shaffof va halol yo'l bilan.
                </motion.p>

                {/* Main Visual: Phone & Floating Cards */}
                <div className="hero-visual">
                    <motion.div
                        className="phone-container"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <img src={HeroPhone} alt="mkvadrat.uz App Interface" className="hero-phone-img" />
                    </motion.div>

                    {/* Floating Card: Investor (Left) */}
                    <motion.div
                        className="float-card card-left"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0, y: [0, -10, 0] }}
                        transition={{
                            opacity: { duration: 0.5, delay: 0.5 },
                            x: { duration: 0.5, delay: 0.5 },
                            y: { repeat: Infinity, duration: 4, ease: "easeInOut" }
                        }}
                    >
                        <div className="card-icon blue-icon">
                            <User size={20} color="white" />
                        </div>
                        <div className="card-content">
                            <div className="card-header">
                                <span className="card-name">Mansur Karimov</span>
                                <span className="card-value up">+12%</span>
                            </div>
                            <div className="card-footer">
                                <span className="card-role">Investor</span>
                                <span className="card-date">22 Jur 2025</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Floating Card: Home Owner (Right) */}
                    <motion.div
                        className="float-card card-right"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0, y: [0, 10, 0] }}
                        transition={{
                            opacity: { duration: 0.5, delay: 0.6 },
                            x: { duration: 0.5, delay: 0.6 },
                            y: { repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }
                        }}
                    >
                        <div className="card-icon green-icon">
                            <User size={20} color="white" />
                        </div>
                        <div className="card-content">
                            <div className="card-header">
                                <span className="card-name">Sardor Berdiyev</span>
                                <span className="card-value">8.99 UZS</span>
                            </div>
                            <div className="card-footer">
                                <span className="card-role">Uy oluvchi</span>
                                <span className="card-date">21 Jan 2025</span>
                            </div>
                        </div>
                    </motion.div>
                </div>



            </div>
        </section>
    );
};

export default Hero;
