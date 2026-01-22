import React, { useState, useEffect } from 'react';
import { submitContact, getContactInfo } from '../api';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, CheckCircle } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        first_name: '',
        user_type: '',
        phone: ''
    });
    const [status, setStatus] = useState({ loading: false, success: false, error: null });
    const [showNotification, setShowNotification] = useState(false);
    const [contactInfo, setContactInfo] = useState({
        email: "emlakuzinfo@gmail.com",
        phone: "+998 (20) 017-57-53",
        address: "123 Fintech Avenue, Suite 400\nSan Francisco, CA 94105, USA"
    });

    useEffect(() => {
        window.scrollTo(0, 0);
        const fetchContactInfo = async () => {
            try {
                const response = await getContactInfo();
                if (response.data && response.data.length > 0) {
                    setContactInfo(response.data[0]); // Taking the first object
                }
            } catch (error) {
                console.error("Error fetching contact info:", error);
            }
        };
        fetchContactInfo();
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ loading: true, success: false, error: null });
        try {
            await submitContact(formData);
            setStatus({ loading: false, success: true, error: null });
            setFormData({ first_name: '', user_type: '', phone: '' });

            // Show custom notification
            setShowNotification(true);
            setTimeout(() => {
                setShowNotification(false);
            }, 3000);

        } catch (error) {
            setStatus({ loading: false, success: false, error: "Xatolik yuz berdi. Qaytadan urinib ko'ring." });
            alert("Xatolik yuz berdi.");
        }
    };

    return (
        <div className="contact-section">
            <motion.div
                className="contact-header"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h1 className="contact-title">Biz bilan bog'laning</h1>
                <p className="contact-subtitle">
                    Uy sotib olmoqchimisiz yoki investitsiya qilmoqchimisiz? Biz bilan bog'laning
                </p>
            </motion.div>

            <div className="contact-container">
                {/* Left Side: Contact Info */}
                <motion.div
                    className="contact-info"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <h2 className="info-title">Ariza qoldirish</h2>
                    <p className="info-desc">
                        Quyidagi shaklni to'ldiring, biz siz bilan iloji boricha tezroq bog'lanamiz.
                    </p>

                    <div className="info-item">
                        <span className="info-label">Email:</span>
                        <a href={`mailto:${contactInfo.email}`} className="info-value">{contactInfo.email}</a>
                    </div>
                    <div className="info-item">
                        <span className="info-label">Telefon:</span>
                        <a href={`tel:${contactInfo.phone}`} className="info-value">{contactInfo.phone}</a>
                    </div>
                    <div className="info-item">
                        <span className="info-label">Manzil:</span>
                        <span className="info-value info-address">
                            {contactInfo.address}
                        </span>
                    </div>
                </motion.div>

                {/* Right Side: Form */}
                <motion.div
                    className="contact-form-wrapper"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <form onSubmit={handleSubmit}>
                        <div className="form-grid">
                            <div className="form-group">
                                <label className="form-label">Ism</label>
                                <input
                                    type="text"
                                    name="first_name"
                                    value={formData.first_name}
                                    onChange={handleChange}
                                    className="form-input"
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="form-label">Ariza qoldiruvchi</label>
                            <input
                                type="text"
                                name="user_type"
                                value={formData.user_type}
                                onChange={handleChange}
                                className="form-input"
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label">Telefon raqam</label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="form-input"
                                required
                            />
                        </div>

                        {/* Habar (message) field removed as requested */}

                        <button type="submit" className="submit-btn" disabled={status.loading}>
                            {status.loading ? 'Yuborilmoqda...' : 'Habar jonatish'}
                            <ArrowUpRight size={18} />
                        </button>
                    </form>
                </motion.div>
            </div>

            {/* Custom Notification Modal */}
            <AnimatePresence>
                {showNotification && (
                    <motion.div
                        className="notification-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="notification-card"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                            <div className="notification-icon">
                                <CheckCircle size={48} color="#10B981" />
                            </div>
                            <h3>Habaringiz yuborildi!</h3>
                            <p>Tez orada siz bilan bog'lanamiz.</p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Contact;
