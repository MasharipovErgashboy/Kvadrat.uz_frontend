import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getForWhom } from '../api';
import './TargetAudience.css';

const TargetAudience = () => {
    const [forWhomItems, setForWhomItems] = useState([]);

    const DEFAULT_FOR_WHOM = [
        {
            id: 1,
            title: "Moliyaviy bosimdan qochishni istaganlar uchun",
            description: "Oylik katta to'lovlar va stresssiz. To'lovlar sizning imkoniyatingizga moslab tuziladi.",
            image: "https://framerusercontent.com/images/BkOGKAbN5HhpzxbbXH5dalUMa4.jpg",
            order: 1
        },
        {
            id: 2,
            title: "Qarz va foizsiz uy egaligini xohlovchilar uchun",
            description: "Foizlar, yashirin to'lovlar va qarz majburiyatisiz — shaffof va halol model.",
            image: "https://framerusercontent.com/images/jTIeVmn34FQDWImyVyHibFPq0lI.jpg",
            order: 2
        },
        {
            id: 3,
            title: "Oson va ishonchli yo'l bilan jamg'armoqchi bo'lganlar uchun",
            description: "Pulni shunchaki yig'ish emas, uni real uyga aylantirish imkoniyati.",
            image: "https://framerusercontent.com/images/BkOGKAbN5HhpzxbbXH5dalUMa4.jpg",
            order: 3
        },
        {
            id: 4,
            title: "Birinchi uyini xarid qilmoqchi bo'lganlar uchun",
            description: "Uy olishni orzu qilasiz, lekin to'liq summa yo'qmi? Kvadrat.uz bilan siz oz-ozdan, reja asosida o'z uyingizga yaqinlashasiz.",
            image: "https://framerusercontent.com/images/jTIeVmn34FQDWImyVyHibFPq0lI.jpg",
            order: 4
        }
    ];

    useEffect(() => {
        const fetchForWhom = async () => {
            try {
                const response = await getForWhom();
                if (response.data && response.data.length > 0) {
                    setForWhomItems(response.data);
                } else {
                    setForWhomItems(DEFAULT_FOR_WHOM);
                }
            } catch (error) {
                console.error("Error fetching for-whom data:", error);
                setForWhomItems(DEFAULT_FOR_WHOM);
            }
        };
        fetchForWhom();
    }, []);

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

                    {forWhomItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            className={`target-card ${index % 2 === 0 ? 'card-blue' : 'card-beige'} ${index % 2 === 1 ? 'reverse-layout' : ''}`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="target-content">
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                                <Link to="/contact" className="target-btn">
                                    Ariza qoldirish <ArrowUpRight size={18} />
                                </Link>
                            </div>
                            <div className="target-image-wrapper">
                                <img src={item.image} alt={item.title} className="target-img" onError={(e) => {e.target.src = 'https://framerusercontent.com/images/BkOGKAbN5HhpzxbbXH5dalUMa4.jpg';}} />
                            </div>
                        </motion.div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default TargetAudience;
