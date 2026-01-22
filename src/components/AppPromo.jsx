import React from 'react';
import { ArrowUpRight, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './AppPromo.css';

const AppPromo = () => {
    return (
        <section className="app-promo-section">
            <div className="promo-grid-bg"></div>
            <div className="app-promo-container">

                {/* Left Content */}
                <div className="app-promo-content">
                    <motion.h2
                        className="app-promo-title"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        Moliyangizni kelajagini <br /> kashf eting
                    </motion.h2>

                    <motion.p
                        className="app-promo-text"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Minglab foydalanuvchilar allaqachon Kvadrat.uz bilan uy egasi bo'lishmoqda — qarzsiz, foizsiz va shaffof yo'l bilan. Barcha moliyaviy jarayonlar bir joyda: ulush qo'yish, bosqichma-bosqich to'lov va mulk huquqini olish oson!
                    </motion.p>

                    <motion.div
                        className="app-promo-actions"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <Link to="/contact" className="promo-btn primary">
                            Ariza qoldirish <ArrowUpRight className="btn-icon" size={20} />
                        </Link>
                        <button className="promo-btn secondary">
                            Yuklab olish <ArrowUpRight className="btn-icon" size={20} />
                        </button>
                    </motion.div>

                    <motion.div
                        className="app-promo-features"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <div className="promo-feature-item">
                            <Check size={16} strokeWidth={3} /> <span>Bank darajasidagi xavfsizlik</span>
                        </div>
                        <div className="promo-feature-item">
                            <Check size={16} strokeWidth={3} /> <span>Yashirin to'lovlarsiz</span>
                        </div>
                        <div className="promo-feature-item">
                            <Check size={16} strokeWidth={3} /> <span>Istalgan vaqtda bekor qilish</span>
                        </div>
                    </motion.div>
                </div>

                {/* Right Image */}
                <motion.div
                    className="app-promo-image-wrapper"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="glow-effect"></div>
                    <img src="/app-promo-phone.png" alt="Kvadrat.uz App Interface" className="app-promo-img" />
                </motion.div>

            </div>
        </section>
    );
};

export default AppPromo;
