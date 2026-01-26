import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getBlogBySlug } from '../api';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Calendar, User, Share2 } from 'lucide-react';
import AppPromo from '../components/AppPromo';
import './BlogDetails.css';

const BlogDetails = () => {
    const { slug } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);

    const DEFAULT_BLOGS = [
        {
            id: 'd1',
            title: "Ko'chmas mulk bozoridagi yangi tendensiyalar: 2024 yil tahlili",
            description: "2024 yilda O'zbekiston ko'chmas mulk bozorida qanday o'zgarishlar kutilmoqda? Narxlar, talab va taklif bo'yicha ekspertlar fikri va chuqur tahliliy maqola.",
            content: "<p>2024 yilda O'zbekiston ko'chmas mulk bozorida jiddiy o'zgarishlar kutilmoqda. <br/><br/>Asosiy tendensiyalar:<br/>1. <strong>Narxlar barqarorlashuvi:</strong> O'tgan yillardagi keskin o'sishdan so'ng, bozor biroz tinchlanishi kutilmoqda.<br/>2. <strong>Ipoteka bozorining rivojlanishi:</strong> Davlat tomonidan qo'llab-quvvatlash dasturlari davom etadi.<br/>3. <strong>Energiya samaradorligi:</strong> Yangi qurilayotgan uylarda energiya tejovchi texnologiyalarga talab ortmoqda.</p>",
            image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            date: "2024-01-15",
            slug: "kochmas-mulk-2024-tahlil",
            read_time: "5 daqiqa",
            author: "Aziz Rahimov",
            author_image: "https://randomuser.me/api/portraits/men/32.jpg"
        },
        {
            id: 'd2',
            title: "Qanday qilib to'g'ri investitsiya kiritish mumkin?",
            description: "Investitsiya kiritishda nimalarga e'tibor berish kerak? Riskalarni boshqarish va daromadni oshirish bo'yicha maslahatlar.",
            content: "<p>Investitsiya kiritish - bu moliyaviy erkinlikka erishishning eng samarali yo'llaridan biridir. Ammo har qanday investitsiya risk bilan bog'liq.<br/><br/><strong>Muhim qoidalar:</strong><br/>- Diversifikatsiya qiling: Barcha tuxumlarni bitta savatga solmang.<br/>- Uzoq muddatli rejalashtirish: Qisqa muddatli foydaga uchmang.<br/>- O'rganing: Investitsiya kiritmoqchi bo'lgan sohangizni chuqur o'rganing.</p>",
            image: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            date: "2024-01-10",
            slug: "togri-investitsiya-kiritish",
            read_time: "7 daqiqa",
            author: "Malika Karimova",
            author_image: "https://randomuser.me/api/portraits/women/44.jpg"
        },
        {
            id: 'd3',
            title: "mkvadrat.uz orqali uy olishning afzalliklari",
            description: "Nega aynan mkvadrat.uz? Halol, shaffof va qulay shartlar asosida uy-joyli bo'lish imkoniyatlari haqida batafsil.",
            content: "<p>mkvadrat.uz - bu O'zbekistonda ko'chmas mulk sohasidagi inqilobiy platforma.<br/><br/><strong>Bizning afzalliklarimiz:</strong><br/>- <strong>Shaffoflik:</strong> Hech qanday yashirin to'lovlar yo'q.<br/>- <strong>Qulaylik:</strong> Barcha jarayonlar onlayn tarzda amalga oshiriladi.<br/>- <strong>Halollik:</strong> Islom moliyasi tamoyillariga to'liq javob beradi.<br/>- <strong>Tezkorlik:</strong> Hujjatlarni rasmiylashtirish sanoqli daqiqalarni oladi.</p>",
            image: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            date: "2024-01-05",
            slug: "kvadratuz-afzalliklari",
            read_time: "4 daqiqa",
            author: "Javlonbek Sobirov",
            author_image: "https://randomuser.me/api/portraits/men/85.jpg"
        }
    ];

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await getBlogBySlug(slug);
                if (response.data) {
                    setBlog(response.data);
                } else {
                    throw new Error("No data");
                }
            } catch (error) {
                console.error("Error fetching blog details:", error);

                // Fallback to default data
                const defaultBlog = DEFAULT_BLOGS.find(b => b.slug === slug);
                if (defaultBlog) {
                    setBlog(defaultBlog);
                }
            } finally {
                setLoading(false);
            }
        };
        fetchBlog();
        window.scrollTo(0, 0);
    }, [slug]);

    if (loading) {
        return (
            <div className="blog-details-loading">
                <div className="spinner"></div>
                <p>Maqola yuklanmoqda...</p>
            </div>
        );
    }

    if (!blog) {
        return (
            <div className="blog-details-error">
                <h2>Maqola topilmadi</h2>
                <Link to="/blog" className="back-link">
                    <ArrowLeft size={20} /> Blogga qaytish
                </Link>
            </div>
        );
    }

    return (
        <article className="blog-details-page">
            <div className="blog-hero">
                <motion.div
                    className="blog-hero-content"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <Link to="/blog" className="hero-back-link">
                        <ArrowLeft size={16} /> Barcha maqolalar
                    </Link>
                    <h1 className="blog-title">{blog.title}</h1>
                    <div className="blog-meta">
                        <span className="meta-item"><Calendar size={16} /> {blog.date}</span>
                        <span className="meta-item"><Clock size={16} /> {blog.read_time}</span>
                    </div>
                </motion.div>
                <motion.div
                    className="blog-hero-image-wrapper"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <img src={blog.image} alt={blog.title} className="blog-hero-image" />
                </motion.div>
            </div>

            <div className="blog-content-container">
                <div className="blog-main-column">
                    <div className="blog-author-bar">
                        <div className="author-info">
                            {blog.author_image && <img src={blog.author_image} alt={blog.author} className="author-avatar" />}
                            <div>
                                <span className="author-name">{blog.author}</span>
                                <span className="author-role">Muallif</span>
                            </div>
                        </div>
                    </div>

                    <div className="blog-body" dangerouslySetInnerHTML={{ __html: blog.content }} />
                </div>
            </div>

            <AppPromo />
        </article>
    );
};

export default BlogDetails;
