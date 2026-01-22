import React from 'react';
import { motion } from 'framer-motion';
import { Home, PieChart, Wallet, Key } from 'lucide-react';
import './Features.css';

const Features = () => {
    return (
        <section className="features-section">
            <div className="features-container">

                {/* Header */}
                <div className="features-header">
                    <div className="features-badge">Biz haqimizda</div>
                    <h2 className="features-title">
                        Uyni yolg'iz emas — biz bilan birga sotib olasiz
                    </h2>
                    <p className="features-subtitle">
                        Siz o'z ulushingizni qo'yasiz — biz birga xarid qilamiz. Vaqt o'tib, uy to'liq sizniki bo'ladi.
                    </p>
                </div>

                {/* Content Layout */}
                <div className="features-content-wrapper">

                    {/* Left Column */}
                    <div className="features-col col-left order-2 lg:order-1">
                        <div className="feature-card">
                            <div className="feature-icon-box">
                                <Home size={28} strokeWidth={1.5} />
                            </div>
                            <h3 className="feature-title">Uy tanlaysiz</h3>
                            <p className="feature-desc">
                                O'zingiz olishni xohlagan uyni tanlaysiz va bizga ko'rsatasiz. Kvadrat.uz esa aniq hisob-kitob va shaffof shartlar asosida uyni birga sotib olishga yordam beradi
                            </p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon-box">
                                <Wallet size={28} strokeWidth={1.5} />
                            </div>
                            <h3 className="feature-title">Bosqichma-bosqich to'lov qilasiz</h3>
                            <p className="feature-desc">
                                Kelishilgan jadval asosida oyma-oy yoki choraklik to'lov qilasiz. Har bir to'lov bilan Kvadrat.uz ulushini bosqichma-bosqich sotib olasiz. Ustama yo'q, penya yoki qo'shimcha foizlar ham yo'q.
                            </p>
                        </div>
                    </div>

                    {/* Center Column (Phone) */}
                    <div className="features-col col-center order-1 lg:order-2">
                        {/* Background Image filling container */}
                        <img
                            src="https://framerusercontent.com/images/fp1B0ewfYQSleB0DhLVM7REqfI.png"
                            alt="Background"
                            className="features-bg-full"
                        />

                        {/* Phone Overlay */}
                        <div className="features-overlay-wrapper">
                            <motion.img
                                src="https://framerusercontent.com/images/Pshc1MVHDcvxjjsk8Y9uxlV9ON8.png"
                                alt="App Feature Preview"
                                className="features-phone-app"
                                initial={{ y: 50, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                            />
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="features-col col-right order-3 lg:order-3">
                        <div className="feature-card">
                            <div className="feature-icon-box">
                                <PieChart size={28} strokeWidth={1.5} />
                            </div>
                            <h3 className="feature-title">Ulushingizni qo'ying</h3>
                            <p className="feature-desc">
                                Siz uy qiymatining bir qismini boshlang'ich ulush sifatida kiritasiz. Qolgan qismini Kvadrat.uz qoplaydi, siz esa bosqichma-bosqich Kvadrat.uz ulushini sotib olasiz.
                            </p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon-box">
                                <Key size={28} strokeWidth={1.5} />
                            </div>
                            <h3 className="feature-title">Uy to'liq sizniki bo'ladi</h3>
                            <p className="feature-desc">
                                Barcha ulushlar yopilgach, mulk huquqi to'liq sizga o'tadi. Uy sizniki bo'ladi — rasmiy hujjatlar bilan
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Features;
