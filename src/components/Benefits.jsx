import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Benefits.css';

const Benefits = () => {
    return (
        <section className="benefits-section">
            <div className="benefits-container">

                {/* Header */}
                <div className="benefits-header">
                    <h2 className="benefits-title">Moliyangizni kelajagini <br /> kashf eting</h2>
                    <p className="benefits-subtitle">
                        Kelajak moliyasini bugundan boshlang
                    </p>
                </div>

                {/* Grid Content */}
                <div className="benefits-grid">

                    {/* Left Card */}
                    <motion.div
                        className="benefit-card card-blue"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="benefit-text-content">
                            <h3>Foizsiz va shaffof hamkorlik orqali uyingizga ega bo'ling</h3>
                            <p>
                                Kvadrat.uz orqali siz tanlagan uyga boshlang'ich ulush kiritasiz. Qolgan qismi Kvadrat.uz bilan hamkorlik asosida moliyalashtiriladi. Ortiqcha qarz, bank foizi va yashirin shartlarsiz — faqat aniq hisob-kitob.
                            </p>
                        </div>

                        <div className="benefit-image-wrapper">
                            <img src="https://framerusercontent.com/images/yHtQ79SW4V76KJca8gdmIr4YJw.png" alt="Modern House" className="benefit-img" />
                        </div>

                        <Link to="/contact" className="benefit-btn">
                            Biz bilan bog'laning <ArrowUpRight size={18} />
                        </Link>
                    </motion.div>

                    {/* Right Card */}
                    <motion.div
                        className="benefit-card card-beige"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="benefit-text-content">
                            <h3>Ko'chmas mulkka sarmoya — <br /> uysiz, tashvishsiz</h3>
                            <p>
                                Kvadrat.uz orqali siz uy sotib olmaysiz. Siz tayyor va tekshirilgan uyga investitsiya qilasiz. <br /> Qanday ishlaydi?
                            </p>
                            <ul className="benefit-list">
                                <li>Pul real ko'chmas mulkka yo'naltiriladi</li>
                                <li>Uy ijaraga beriladi</li>
                                <li>Ijara daromadi ulushingizga qarab sizga taqsimlanadi</li>
                            </ul>
                        </div>

                        <div className="benefit-image-wrapper">
                            <img src="https://framerusercontent.com/images/7dAlkpxCUaGMb4aoSqNuTY.png" alt="Classic House" className="benefit-img" />
                        </div>

                        <Link to="/contact" className="benefit-btn">
                            Biz bilan bog'laning <ArrowUpRight size={18} />
                        </Link>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Benefits;
