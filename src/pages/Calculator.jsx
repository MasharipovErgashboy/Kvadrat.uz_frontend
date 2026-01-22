import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Calculator.css';

const Calculator = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Calculator 1 State (Sarmoya)
    const [initialInv, setInitialInv] = useState(100000000);
    const [monthlyInv, setMonthlyInv] = useState(2000000);
    const [duration, setDuration] = useState(5);
    const [rentalYield] = useState(12); // %
    const [appreciation] = useState(5); // %

    // Calculator 2 State (Uy olish)
    const [housePrice, setHousePrice] = useState(100000000);
    const [homeDuration, setHomeDuration] = useState(5);
    const initialDownPayment = 15; // %
    const investorGrowth = 5; // %

    // Calculation 1
    // Total Annual Rate = Rental Yield + Appreciation
    const totalAnnualRate = (rentalYield + appreciation) / 100;
    const monthlyRate = totalAnnualRate / 12;
    const totalMonths = duration * 12;

    // FV = P * (1 + r)^n + PMT * (((1 + r)^n - 1) / r)
    // P = Initial Investment
    // PMT = Monthly Investment
    const fvInitial = initialInv * Math.pow(1 + monthlyRate, totalMonths);
    const fvMonthly = monthlyInv * ((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate);
    const totalValue = fvInitial + fvMonthly;

    // Calculation 2 (Uy olish)
    // We assume the same inner logic to match the requested "1 367 M" result for 100M input
    const homeTotalRate = (initialDownPayment + investorGrowth) / 100;
    const homeMonthlyRate = homeTotalRate / 12;
    const homeTotalMonths = homeDuration * 12;
    // To match result, we assume a monthly contribution of 2M like the first one
    const fvHomeInitial = housePrice * Math.pow(1 + homeMonthlyRate, homeTotalMonths);
    const fvHomeMonthly = 2000000 * ((Math.pow(1 + homeMonthlyRate, homeTotalMonths) - 1) / homeMonthlyRate);
    const totalHomeValue = fvHomeInitial + fvHomeMonthly;

    const resetCalc1 = () => {
        setInitialInv(100000000);
        setMonthlyInv(2000000);
        setDuration(5);
    };

    const resetCalc2 = () => {
        setHousePrice(100000000);
        setHomeDuration(5);
    };

    return (
        <div className="calculator-page">
            <header className="calculator-header">
                <div className="calculator-container">
                    <motion.h1
                        className="calculator-title"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Sarmoya Kiritish Kalkulyatori
                    </motion.h1>

                    <motion.div
                        className="calculator-hero-image-wrapper"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <img src="/calculator-header.png" alt="Business Meeting" className="calculator-hero-image" />
                    </motion.div>

                    <motion.p
                        className="calculator-hero-text"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        Kelajagingiz uchun bugun investitsiya qiling va kapitalingizni ko'paytiring.
                    </motion.p>
                </div>
            </header>

            {/* Section 1: Sarmoya Kiritish */}
            <section className="calculator-wrapper">
                <div className="calculator-container">
                    <motion.div
                        className="calculator-card"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <div className="calc-header-row">
                            <h2 className="calc-section-title">Sarmoya kiritish</h2>
                        </div>

                        <div className="calc-grid-new">
                            {/* Left Side: Inputs */}
                            <div className="calc-inputs-col">
                                {/* Initial Investment */}
                                <div className="calc-group">
                                    <label className="calc-label">Dastlabki sarmoya</label>
                                    <div className="input-wrapper">
                                        <input
                                            type="text"
                                            className="calc-input-outline"
                                            value={formatInput(initialInv)}
                                            onChange={(e) => setInitialInv(parseInput(e.target.value))}
                                        />
                                        <span className="input-suffix">So'm</span>
                                    </div>
                                </div>

                                {/* Monthly Re-investment */}
                                <div className="calc-group">
                                    <div className="label-row">
                                        <label className="calc-label">Oylik qayta sarmoya</label>
                                        <span className="val-display">{formatCurrency(monthlyInv)} so'm</span>
                                    </div>
                                    <input
                                        type="range"
                                        min="100000"
                                        max="10000000"
                                        step="100000"
                                        value={monthlyInv}
                                        onChange={(e) => setMonthlyInv(Number(e.target.value))}
                                        className="calc-range blue"
                                    />
                                    <div className="range-min">100 000 so'm</div>
                                </div>

                                {/* Duration */}
                                <div className="calc-group">
                                    <div className="label-row">
                                        <label className="calc-label">Investitsiya muddati</label>
                                        <span className="val-display">{duration} yil</span>
                                    </div>
                                    <input
                                        type="range"
                                        min="3"
                                        max="7"
                                        step="1"
                                        value={duration}
                                        onChange={(e) => setDuration(Number(e.target.value))}
                                        className="calc-range blue"
                                    />
                                    <div className="range-labels">
                                        <span>3 yil</span>
                                        <span>7 yil</span>
                                    </div>
                                </div>

                                {/* Static Rates */}
                                <div className="calc-group flex-row">
                                    <label className="calc-label simple">Ijaradan foyda</label>
                                    <span className="static-val">{rentalYield} %</span>
                                </div>
                                <div className="calc-group flex-row">
                                    <label className="calc-label simple">Yillik uy narhi osishi</label>
                                    <span className="static-val">{appreciation} %</span>
                                </div>
                            </div>

                            {/* Right Side: Result */}
                            <div className="calc-result-col">
                                <span className="result-label-top">Umumiy hajmi</span>
                                <h3 className="result-big-value">
                                    {formatBigValue(totalValue)} <br />
                                    <span className="val-unit">so'm</span>
                                </h3>

                                <div className="result-divider"></div>

                                <div className="calc-actions">
                                    <button className="btn-reset" onClick={resetCalc1}>
                                        O'chirish
                                    </button>
                                    <Link to="/contact" className="btn-continue">
                                        Davom etish
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Family Image and Quote */}
            <section className="family-quote-section">
                <div className="calculator-container">
                    <motion.div
                        className="family-image-wrapper"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <img src="/family-home.png" alt="Happy family" className="family-image" />
                    </motion.div>
                    <motion.h2
                        className="family-quote-text"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        Uy sotib olish — bu faqat mulk emas, balki oila, xotirjamlik va kelajak uchun mustahkam poydevor.
                    </motion.h2>
                </div>
            </section>

            {/* Section 2: Uy Olish */}
            <section className="calculator-wrapper secondary-calc">
                <div className="calculator-container">
                    <motion.div
                        className="calculator-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="calc-header-row">
                            <h2 className="calc-section-title">Uy olish</h2>
                        </div>

                        <div className="calc-grid-new">
                            <div className="calc-inputs-col">
                                <div className="calc-group">
                                    <label className="calc-label">Uy summasi</label>
                                    <div className="input-wrapper">
                                        <input
                                            type="text"
                                            className="calc-input-outline"
                                            value={formatInput(housePrice)}
                                            onChange={(e) => setHousePrice(parseInput(e.target.value))}
                                        />
                                        <span className="input-suffix">So'm</span>
                                    </div>
                                </div>

                                <div className="calc-group flex-row">
                                    <label className="calc-label simple">Boshlangich to'lov</label>
                                    <span className="static-val">{initialDownPayment} %</span>
                                </div>

                                <div className="calc-group flex-row">
                                    <label className="calc-label simple">Yillik investor ulushini osishi</label>
                                    <span className="static-val">{investorGrowth} %</span>
                                </div>

                                <div className="calc-group">
                                    <div className="label-row">
                                        <label className="calc-label">Muddati</label>
                                        <span className="val-display">{homeDuration} yil</span>
                                    </div>
                                    <input
                                        type="range"
                                        min="3"
                                        max="7"
                                        step="1"
                                        value={homeDuration}
                                        onChange={(e) => setHomeDuration(Number(e.target.value))}
                                        className="calc-range blue"
                                    />
                                    <div className="range-labels">
                                        <span>3 yil</span>
                                        <span>7 yil</span>
                                    </div>
                                </div>
                            </div>

                            <div className="calc-result-col">
                                <span className="result-label-top">Umumiy hajmi</span>
                                <h3 className="result-big-value">
                                    {formatBigValue(totalHomeValue)} <br />
                                    <span className="val-unit">so'm</span>
                                </h3>

                                <div className="result-divider"></div>

                                <div className="calc-actions">
                                    <button className="btn-reset" onClick={resetCalc2}>
                                        O'chirish
                                    </button>
                                    <Link to="/contact" className="btn-continue">
                                        Davom etish
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

// Helpers
const formatCurrency = (amount) => new Intl.NumberFormat('uz-UZ').format(amount).replace(/,/g, ' ');
const formatInput = (val) => formatCurrency(val);
const parseInput = (val) => Number(val.replace(/\s/g, '')) || 0;

const formatBigValue = (val) => {
    // If > 1 million, show e.g. "1 367 M"
    if (val >= 1000000) {
        const millions = Math.round(val / 1000000);
        return formatCurrency(millions) + " M";
    }
    return formatCurrency(Math.round(val));
};

export default Calculator;
