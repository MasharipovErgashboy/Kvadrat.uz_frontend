import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import './FAQ.css';

import { getFaqs } from '../api';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [faqs, setFaqs] = useState([]);

    useEffect(() => {
        const fetchFaqs = async () => {
            try {
                const response = await getFaqs('home');
                setFaqs(response.data);
            } catch (error) {
                console.error("Error fetching FAQs:", error);
            }
        };
        fetchFaqs();
    }, []);
    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="faq-section">
            <div className="faq-container">

                <div className="faq-header">
                    <span className="faq-badge">FAQ</span>
                    <h2 className="faq-title">Ko'p beriladigan savollar</h2>
                    <p className="faq-subtitle">
                        mkvadrat.uz ilovasidan foydalanishga oid eng ko'p beriladigan savollar
                    </p>
                </div>

                <div className="faq-list">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                            onClick={() => toggleAccordion(index)}
                        >
                            <div className="faq-question">
                                <h3>{faq.question}</h3>
                                <div className="faq-icon">
                                    {activeIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                                </div>
                            </div>
                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        className="faq-answer"
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <p>{faq.answer}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default FAQ;
