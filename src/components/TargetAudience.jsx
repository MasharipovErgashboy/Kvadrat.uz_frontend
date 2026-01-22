import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './TargetAudience.css';

const TargetAudience = () => {
    return (
        <section className="target-section">
            <div className="target-container">

                {/* Header */}
                <div className="target-header">
                    <span className="target-badge">Kimlar uchun?</span>
                    <h2 className="target-title">Kvadrat.uz kimlar uchun?</h2>
                </div>

                {/* Vertical Card Stack */}
                <div className="target-stack">

                    {/* Card 1 - Left Text, Right Image (Light Blue) */}
                    <motion.div
                        className="target-card card-blue"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="target-content">
                            <h3>Moliyaviy bosimdan qochishni istaganlar uchun</h3>
                            <p>Oylik katta to'lovlar va stresssiz. To'lovlar sizning imkoniyatingizga moslab tuziladi.</p>
                            <Link to="/contact" className="target-btn">
                                Ariza qoldirish <ArrowUpRight size={18} />
                            </Link>
                        </div>
                        <div className="target-image-wrapper">
                            <img src="https://framerusercontent.com/images/BkOGKAbN5HhpzxbbXH5dalUMa4.jpg" alt="Financial Freedom" className="target-img" />
                        </div>
                    </motion.div>

                    {/* Card 2 - Right Text, Left Image (Light Beige) */}
                    <motion.div
                        className="target-card card-beige reverse-layout"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <div className="target-content">
                            <h3>Qarz va foizsiz uy egaligini xohlovchilar uchun</h3>
                            <p>Foizlar, yashirin to'lovlar va qarz majburiyatisiz — shaffof va halol model.</p>
                            <Link to="/contact" className="target-btn">
                                Ariza qoldirish <ArrowUpRight size={18} />
                            </Link>
                        </div>
                        <div className="target-image-wrapper">
                            <img src="https://framerusercontent.com/images/jTIeVmn34FQDWImyVyHibFPq0lI.jpg" alt="Debt Free Home" className="target-img" />
                        </div>
                    </motion.div>

                    {/* Card 3 - Left Text, Right Image (Light Blue) */}
                    <motion.div
                        className="target-card card-blue"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="target-content">
                            <h3>Oson va ishonchli yo'l bilan jamg'armoqchi bo'lganlar uchun</h3>
                            <p>Pulni shunchaki yig'ish emas, uni real uyga aylantirish imkoniyati.</p>
                            <Link to="/contact" className="target-btn">
                                Ariza qoldirish <ArrowUpRight size={18} />
                            </Link>
                        </div>
                        <div className="target-image-wrapper">
                            <img src="https://framerusercontent.com/images/BkOGKAbN5HhpzxbbXH5dalUMa4.jpg" alt="Safe Savings" className="target-img" />
                        </div>
                    </motion.div>

                    {/* Card 4 - Right Text, Left Image (Light Beige) */}
                    <motion.div
                        className="target-card card-beige reverse-layout"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <div className="target-content">
                            <h3>Birinchi uyini xarid qilmoqchi bo'lganlar uchun</h3>
                            <p>Uy olishni orzu qilasiz, lekin to'liq summa yo'qmi? Kvadrat.uz bilan siz oz-ozdan, reja asosida o'z uyingizga yaqinlashasiz.</p>
                            <Link to="/contact" className="target-btn">
                                Ariza qoldirish <ArrowUpRight size={18} />
                            </Link>
                        </div>
                        <div className="target-image-wrapper">
                            <img src="https://framerusercontent.com/images/jTIeVmn34FQDWImyVyHibFPq0lI.jpg" alt="First Home" className="target-img" />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default TargetAudience;
