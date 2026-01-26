import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ShieldCheck, Calendar, TrendingUp, Wallet, BarChart3, Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getInvestmentStats, getTeamMembers, getFaqs } from '../api';
import CountUp from 'react-countup';

import AppPromo from '../components/AppPromo';
import './Investment.css';

const DEFAULT_STATS = [
    {
        icon_name: "Calendar",
        value: "36",
        suffix: "oy",
        label: "Minimal investitsiya muddati",
        bg_color: "bg-purple-50",
        text_color: "text-purple-600"
    },
    {
        icon_name: "BarChart3",
        value: "5",
        suffix: "mln UZS",
        label: "Minimal investitsiya miqdori",
        bg_color: "bg-blue-50",
        text_color: "text-blue-600"
    },
    {
        icon_name: "TrendingUp",
        value: "5",
        suffix: "%",
        label: "Uy qiymatining yillik o'sishi",
        bg_color: "bg-orange-50",
        text_color: "text-orange-600"
    },
    {
        icon_name: "Wallet",
        value: "22",
        suffix: "%",
        label: "O'rtacha yillik daromad",
        bg_color: "bg-yellow-50",
        text_color: "text-yellow-600"
    }
];

const DEFAULT_INVESTORS = [
    {
        name: "Azizbek Rahimov",
        role: "Angel Investor",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
    },
    {
        name: "Nodira Saidova",
        role: "Real Estate Partner",
        image: "https://images.unsplash.com/photo-1573496359-136d4755f32a?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
    },
    {
        name: "Jasur Aliyev",
        role: "Financial Advisor",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
    }
];

const parseValue = (val) => {
    // Extract number and suffix from string like "36 oy" -> { number: 36, suffix: "oy" }
    // or just return plain if complex
    const match = val.match(/^(\d+(?:\.\d+)?)\s*(.*)$/);
    if (match) {
        return { number: parseFloat(match[1]), suffix: match[2] };
    }
    return { number: 0, suffix: val }; // Fallback
};
const Investment = () => {
    const [activeFaq, setActiveFaq] = useState(null);
    const [statsItems, setStatsItems] = useState([]);
    const [investors, setInvestors] = useState([]);
    const [faqItems, setFaqItems] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);
        const fetchData = async () => {
            try {
                const [statsRes, teamRes, faqsRes] = await Promise.all([
                    getInvestmentStats(),
                    getTeamMembers(),
                    getFaqs('investment')
                ]);

                if (statsRes.data && statsRes.data.length > 0) {
                    setStatsItems(statsRes.data);
                } else {
                    setStatsItems(DEFAULT_STATS);
                }

                if (teamRes.data && teamRes.data.length > 0) {
                    setInvestors(teamRes.data);
                } else {
                    setInvestors(DEFAULT_INVESTORS);
                }

                setFaqItems(faqsRes.data);
            } catch (error) {
                console.error("Error fetching investment data:", error);
                setStatsItems(DEFAULT_STATS);
                setInvestors(DEFAULT_INVESTORS);
            }
        };
        fetchData();
    }, []);

    const toggleFaq = (index) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    const getIcon = (name) => {
        const icons = {
            Calendar: <Calendar size={24} />,
            BarChart3: <BarChart3 size={24} />,
            TrendingUp: <TrendingUp size={24} />,
            Wallet: <Wallet size={24} />,
            Users: <ShieldCheck size={24} />,
        };
        return icons[name] || <TrendingUp size={24} />;
    };

    const securityItems = [
        {
            id: 1,
            title: "Uy uchun pul hali to'liq yig'ilmagan",
            text: "Investorlar mablag'i maxsus escrow hisobida xavfsiz saqlanadi va faqat uy to'liq moliyalashtirilgach ishlatiladi. Daromad esa uy tayyor bo'lib, ijaraga berilgandan keyin boshlanadi."
        },
        {
            id: 2,
            title: "Ijara puli kechiksa",
            text: "Ijara to'lovi kechiksa, investor daromadi vaqtincha kechikishi mumkin, ammo asosiy mablag' xavfsiz qoladi. mkvadrat.uz jarayonni nazorat qiladi, ijarachi bilan ishlaydi va zarur choralarni ko'radi. Barcha jarayonlar shaffof."
        },
        {
            id: 3,
            title: "Uy oluvchi pulini to'lay olmay qolsa",
            text: "Agar uy oluvchi to'lovni kechiktirsa, jarayon vaqtincha kechikishi mumkin, ammo investor mablag'i xavfsiz qoladi. mkvadrat.uz shartnoma va qonuniy mexanizmlar orqali masalani hal qiladi yoki boshqa xaridor bilan davom etadi. Investor manfaatlari doimiy himoyalangan."
        }
    ];

    return (
        <div className="investment-page">
            <header className="investment-header">
                <div className="inv-container">
                    <h1 className="inv-title">mkvadrat.uz orqali <br /> <span className="inv-title-highlight">investitsiya</span></h1>
                    <p className="inv-subtitle">“Siz investitsiya qilasiz, mablag‘ingiz mkvadrat.uz orqali ishlaydi”</p>

                    <div className="inv-hero-image-wrapper">
                        <img src="https://framerusercontent.com/images/USz4Ub9knpKihCjIEBTN0tqqUqs.png" alt="Investment Team" className="inv-hero-image" />
                    </div>

                    <div className="inv-intro-grid">
                        <div className="inv-intro-left">
                            <h2>Sizning investitsiyangiz real ko‘chmas mulkka yo‘naltiriladi.</h2>
                        </div>
                        <div className="inv-intro-right">
                            <p>Investor mablag‘lari aniq tanlangan real uylarni moliyalashtirishga sarflanadi. Bu uyda real yashovchi bo‘ladi va sizning pulingiz real aktiv bilan ta’minlanadi.</p>
                        </div>
                    </div>
                </div>
            </header>

            {/* Alternating Features Section */}
            <section className="inv-features-section">
                <div className="inv-container">

                    {/* Feature 1 */}
                    <motion.div
                        className="inv-feature-row"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="inv-feature-content">
                            <h3>Siz foydani uy oluvchining oylik to'lovlari orqali olasiz.</h3>
                            <p>Uy oluvchi siz egasi bo'lgan uyni ijaraga oladi va oyma-oy to'lovlarni amalga oshiradi. Uning qilgan ijara to'lovlari orasidan sizning foydangiz sizga to'g'ridan to'g'ri taqsimlanadi.</p>
                            <Link to="/contact" className="inv-btn-secondary">
                                Ariza qoldirish <ArrowUpRight size={16} />
                            </Link>
                        </div>
                        <div className="inv-feature-image">
                            <img src="/invest_1.png" alt="Signing contract" />
                        </div>
                    </motion.div>

                    {/* Feature 2 (Reverse) */}
                    <motion.div
                        className="inv-feature-row reverse"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <div className="inv-feature-content">
                            <h3>Muddat oxirida pulingiz qaytariladi</h3>
                            <p>Uy shartnomasi yakunlangach, siz kiritgan sarmoya sizga to'liq hajmda qaytariladi. Bu degani siz foyda olasiz va oxirida asosiy summangiz ham o'zingizda qoladi.</p>
                            <Link to="/contact" className="inv-btn-secondary">
                                Ariza qoldirish <ArrowUpRight size={16} />
                            </Link>
                        </div>
                        <div className="inv-feature-image">
                            <img src="/invest_2.png" alt="Money return" />
                        </div>
                    </motion.div>

                    {/* Feature 3 */}
                    <motion.div
                        className="inv-feature-row"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="inv-feature-content">
                            <h3>Har oy olgan foydasini qayta investitsiya qilishi mumkin</h3>
                            <p>Oyma-oy olgan foydangizni yechib olmasdan qayta tikishingiz va murakkab foiz hisobida daromadingizni oshirib borishingiz mumkin. Bu kapitalni tezroq o'stirishga xizmat qiladi.</p>
                            <Link to="/contact" className="inv-btn-secondary">
                                Ariza qoldirish <ArrowUpRight size={16} />
                            </Link>
                        </div>
                        <div className="inv-feature-image">
                            <img src="/invest_3.png" alt="Reinvestment" />
                        </div>
                    </motion.div>

                </div>
            </section>
            {/* Security Section */}
            <section className="inv-security-section">
                <div className="inv-container">
                    <div className="inv-section-header">
                        <span className="inv-badge">Xavfsizlik</span>
                        <h2 className="inv-section-title">mkvadrat.uz'da xavfsizlik va yechimlar</h2>
                    </div>

                    <div className="inv-security-grid">
                        {securityItems.map((item) => (
                            <div key={item.id} className="inv-security-card">
                                <span className="inv-security-number">{item.id}</span>
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="inv-stats-section">
                <div className="inv-container">
                    <div className="inv-section-header">
                        <span className="inv-badge">Raqamlar</span>
                        <h2 className="inv-section-title">Investorlar uchun asosiy raqamlar</h2>
                        <p className="inv-section-subtitle">Biz bilan odamlar aqlli tejash, oqilona sarflash va moliyaviy o'sish yo'lida katta natijalarga erishyapti.</p>
                    </div>

                    <div className="inv-stats-grid">
                        {statsItems.map((item, index) => {
                            // Determine parsing strategy: 
                            // If item comes from API, it might have 'value'="36 oy". 
                            // If from DEFAULT_STATS, we split it manually in decl or use same parsing.
                            // Let's use the parseValue helper on item.value.
                            const { number, suffix } = item.suffix ? { number: item.value, suffix: item.suffix } : parseValue(item.value);

                            return (
                                <div key={index} className={`inv-stats-card ${item.bg_color || item.bg}`}>
                                    <div className={`inv-stats-icon ${item.text_color || item.color}`}>
                                        {getIcon(item.icon_name)}
                                    </div>
                                    <div className="inv-stats-value">
                                        <CountUp
                                            end={number}
                                            duration={2.5}
                                            separator=","
                                            enableScrollSpy={true}
                                            scrollSpyOnce={true}
                                        />
                                        <span className="inv-stats-suffix">{suffix}</span>
                                    </div>
                                    <div className="inv-stats-label">{item.label}</div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
            {/* Investors Section */}
            <section className="inv-investors-section">
                <div className="inv-container">
                    <div className="inv-section-header">
                        <span className="inv-badge">Team</span>
                        <h2 className="inv-section-title">Bizning Investorlar</h2>
                    </div>

                    <div className="inv-investors-grid">
                        {investors.map((person, index) => (
                            <div key={index} className="inv-investor-card">
                                <div className="inv-investor-img-wrapper">
                                    <img src={person.image} alt={person.name} />
                                </div>
                                <h3 className="inv-investor-name">{person.name}</h3>
                                <p className="inv-investor-role">{person.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Investment FAQ Section */}
            <section className="inv-faq-section">
                <div className="inv-container">
                    <div className="inv-section-header">
                        <span className="inv-badge">FAQ</span>
                        <h2 className="inv-section-title">mkvadrat.uz bo'yicha savollar</h2>
                        <p className="inv-section-subtitle">Eng ko'p beriladigan investitsion savollarga javoblar</p>
                    </div>

                    <div className="inv-faq-list">
                        {faqItems.map((item, index) => (
                            <div
                                key={index}
                                className={`inv-faq-item ${activeFaq === index ? 'active' : ''}`}
                                onClick={() => toggleFaq(index)}
                            >
                                <div className="inv-faq-question">
                                    <h3>{item.question}</h3>
                                    <div className="inv-faq-icon">
                                        {activeFaq === index ? <Minus size={18} /> : <Plus size={18} />}
                                    </div>
                                </div>
                                <AnimatePresence>
                                    {activeFaq === index && (
                                        <motion.div
                                            className="inv-faq-answer"
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <p>{item.answer}</p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* App Promo Section */}
            <AppPromo />
        </div>
    );
};

export default Investment;
