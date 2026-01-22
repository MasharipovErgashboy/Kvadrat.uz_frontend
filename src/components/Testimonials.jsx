import React from 'react';
import { motion } from 'framer-motion';
import { Star, BarChart3, User, Quote } from 'lucide-react';
import './Testimonials.css';

// Import the generated image (assuming it will be in assets or linked directly)
// For now using the relative path from where it will be saved or a placeholder if strictly needed before move
// I'll assume I can use the artifact path or copy it. 
// Since generate_image creates an artifact, I will update the src after I see where it puts it.
// For the initial write, I'll use a placeholder variable.

const Testimonials = () => {
    return (
        <section className="testimonials-section">
            <div className="testimonials-container">

                <div className="testimonials-header">
                    <span className="testimonials-badge">Testimonials</span>
                    <h2 className="testimonials-title">Foydalanuvchilarimiz nima deydi?</h2>
                    <p className="testimonials-subtitle">
                        Explore Intelligent tools designed to help you save smarter, spend wiser, and stay in full control.
                    </p>
                </div>

                <div className="testimonials-grid">

                    {/* Item 1: Large Vertical Card (William M) */}
                    <div className="testi-card large-vertical span-row-2">
                        <div className="testi-profile">
                            <div className="testi-avatar">
                                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100" alt="William M" />
                            </div>
                            <div className="testi-info">
                                <h4>William M</h4>
                                <span>CEO of NowTech</span>
                            </div>
                            <Quote size={40} className="testi-quote-icon" />
                        </div>
                        <h3 className="testi-headline">"Endi uy egasi bo'lish oson: Kvadrat.uz bilan qarzsiz va foizsiz!"</h3>
                        <p className="testi-text">
                            Kvadrat.uz orqali uyni <b>kreditsiz va qo'shimcha foizlarsiz</b> egasi bo'ldim. Moliyaviy bosim yo'q, shaffof to'lov, va uy <b>to'liq meniki!</b>
                        </p>
                        <div className="testi-stars">
                            {[1, 2, 3, 4].map(i => <Star key={i} size={18} fill="#F59E0B" stroke="none" />)}
                            <Star size={18} fill="#E5E7EB" stroke="none" />
                        </div>
                    </div>

                    {/* Item 2: Stat Card (40%) */}
                    <div className="testi-card stat-card">
                        <div className="stat-icon">
                            <BarChart3 size={24} />
                        </div>
                        <div className="stat-info">
                            <h3>40%</h3>
                            <p>Tasdiqlangan arizalar</p>
                        </div>
                    </div>

                    {/* Item 3: Stat Card (10K+) */}
                    <div className="testi-card stat-card">
                        <div className="stat-icon">
                            <User size={24} />
                        </div>
                        <div className="stat-info">
                            <h3>10K+</h3>
                            <p>Hozirda odam o'z navbatini kutyapti</p>
                        </div>
                    </div>

                    {/* Item 4: Stat Card (10%) */}
                    <div className="testi-card stat-card">
                        <div className="stat-info">
                            <h3>10%</h3>
                            <p>Kvadrat.uz bilan uy egasi bo'ld</p>
                        </div>
                        <div className="testi-stars small-stars">
                            {[1, 2, 3, 4].map(i => <Star key={i} size={14} fill="#F59E0B" stroke="none" />)}
                            <Star size={14} fill="#E5E7EB" stroke="none" />
                        </div>
                    </div>

                    {/* Item 5: Photo Card (Placeholder Woman) */}
                    <div className="testi-card photo-card">
                        <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80" alt="Priya K" className="photo-bg" />
                        <div className="photo-overlay">
                            <div className="testi-profile small-profile">
                                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=50&h=50" alt="Priya K" />
                                <div className="testi-info light">
                                    <h4>Priya K</h4>
                                    <span>Marketing Manager</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Item 6: Dark Quote Card */}
                    <div className="testi-card dark-card span-col-2">
                        <p className="dark-quote">
                            “Boshlanishda boshlang‘ich ulush bilan boshladim va tez orada Kvadrat.uz bilan uy egasi bo‘lishni davom ettirdim. Platforma shaffof, tushunarli va haqiqatan ham qarzsiz uy olishni osonlashtirdi.”
                        </p>
                        <div className="dark-footer">
                            <div className="testi-profile">
                                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=50&h=50" alt="James R" />
                                <div className="testi-info light">
                                    <h4>James R</h4>
                                    <span>Business Owner</span>
                                </div>
                            </div>
                            <Quote size={48} className="dark-quote-icon" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Testimonials;
