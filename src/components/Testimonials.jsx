import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, BarChart3, User, Quote } from 'lucide-react';
import { getTestimonials } from '../api';
import './Testimonials.css';

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);

    const DEFAULT_TESTIMONIALS = [
        {
            id: 1,
            name: "William M",
            role: "CEO of NowTech",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100",
            headline: "Endi uy egasi bo'lish oson: Kvadrat.uz bilan qarzsiz va foizsiz!",
            text: "Kvadrat.uz orqali uyni kreditsiz va qo'shimcha foizlarsiz egasi bo'ldim. Moliyaviy bosim yo'q, shaffof to'lov, va uy to'liq meniki!",
            rating: 4,
            type: "large"
        },
        {
            id: 2,
            name: "Priya K",
            role: "Marketing Manager",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=50&h=50",
            bg_image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
            type: "photo"
        },
        {
            id: 3,
            name: "James R",
            role: "Business Owner",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=50&h=50",
            text: "Boshlanishda boshlang'ich ulush bilan boshladim va tez orada Kvadrat.uz bilan uy egasi bo'lishni davom ettirdim. Platforma shaffof, tushunarli va haqiqatan ham qarzsiz uy olishni osonlashtirdi.",
            rating: 5,
            type: "dark"
        }
    ];

    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                const response = await getTestimonials();
                if (response.data && response.data.length > 0) {
                    setTestimonials(response.data);
                } else {
                    setTestimonials(DEFAULT_TESTIMONIALS);
                }
            } catch (error) {
                console.error("Error fetching testimonials:", error);
                setTestimonials(DEFAULT_TESTIMONIALS);
            }
        };
        fetchTestimonials();
    }, []);

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

                    {testimonials.map((item) => {
                        if (item.type === 'large') {
                            return (
                                <motion.div
                                    key={item.id}
                                    className="testi-card large-vertical span-row-2"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <div className="testi-profile">
                                        <div className="testi-avatar">
                                            <img src={item.image} alt={item.name} onError={(e) => {e.target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100';}} />
                                        </div>
                                        <div className="testi-info">
                                            <h4>{item.name}</h4>
                                            <span>{item.role}</span>
                                        </div>
                                        <Quote size={40} className="testi-quote-icon" />
                                    </div>
                                    <h3 className="testi-headline">"{item.headline}"</h3>
                                    <p className="testi-text">{item.text}</p>
                                    <div className="testi-stars">
                                        {[1, 2, 3, 4, 5].map(i => (
                                            <Star key={i} size={18} fill={i <= item.rating ? "#F59E0B" : "#E5E7EB"} stroke="none" />
                                        ))}
                                    </div>
                                </motion.div>
                            );
                        } else if (item.type === 'photo') {
                            return (
                                <motion.div
                                    key={item.id}
                                    className="testi-card photo-card"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.1 }}
                                >
                                    <img src={item.bg_image} alt={item.name} className="photo-bg" onError={(e) => {e.target.src = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80';}} />
                                    <div className="photo-overlay">
                                        <div className="testi-profile small-profile">
                                            <img src={item.image} alt={item.name} onError={(e) => {e.target.src = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=50&h=50';}} />
                                            <div className="testi-info light">
                                                <h4>{item.name}</h4>
                                                <span>{item.role}</span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        } else if (item.type === 'dark') {
                            return (
                                <motion.div
                                    key={item.id}
                                    className="testi-card dark-card span-col-2"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                >
                                    <p className="dark-quote">"{item.text}"</p>
                                    <div className="dark-footer">
                                        <div className="testi-profile">
                                            <img src={item.image} alt={item.name} onError={(e) => {e.target.src = 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=50&h=50';}} />
                                            <div className="testi-info light">
                                                <h4>{item.name}</h4>
                                                <span>{item.role}</span>
                                            </div>
                                        </div>
                                        <Quote size={48} className="dark-quote-icon" />
                                    </div>
                                </motion.div>
                            );
                        }
                        return null;
                    })}

                    {/* Static Stat Cards */}
                    <motion.div
                        className="testi-card stat-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <div className="stat-icon">
                            <BarChart3 size={24} />
                        </div>
                        <div className="stat-info">
                            <h3>40%</h3>
                            <p>Tasdiqlangan arizalar</p>
                        </div>
                    </motion.div>

                    <motion.div
                        className="testi-card stat-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <div className="stat-icon">
                            <User size={24} />
                        </div>
                        <div className="stat-info">
                            <h3>10K+</h3>
                            <p>Hozirda odam o'z navbatini kutyapti</p>
                        </div>
                    </motion.div>

                    <motion.div
                        className="testi-card stat-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        <div className="stat-info">
                            <h3>10%</h3>
                            <p>Kvadrat.uz bilan uy egasi bo'ld</p>
                        </div>
                        <div className="testi-stars small-stars">
                            {[1, 2, 3, 4].map(i => <Star key={i} size={14} fill="#F59E0B" stroke="none" />)}
                            <Star size={14} fill="#E5E7EB" stroke="none" />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Testimonials;
