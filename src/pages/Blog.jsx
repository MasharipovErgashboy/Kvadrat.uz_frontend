import React, { useState, useEffect } from 'react';
import { getBlogs } from '../api';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import AppPromo from '../components/AppPromo';
import './Blog.css';

const Blog = () => {
    const [featuredBlog, setFeaturedBlog] = useState(null);
    const [blogs, setBlogs] = useState([]);

    const DEFAULT_BLOGS = [
        {
            id: 'd1',
            title: "Ko'chmas mulk bozoridagi yangi tendensiyalar: 2024 yil tahlili",
            description: "2024 yilda O'zbekiston ko'chmas mulk bozorida qanday o'zgarishlar kutilmoqda? Narxlar, talab va taklif bo'yicha ekspertlar fikri va chuqur tahliliy maqola.",
            image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            date: "2024-01-15",
            slug: "kochmas-mulk-2024-tahlil",
            is_featured: true
        },
        {
            id: 'd2',
            title: "Qanday qilib to'g'ri investitsiya kiritish mumkin?",
            description: "Investitsiya kiritishda nimalarga e'tibor berish kerak? Riskalarni boshqarish va daromadni oshirish bo'yicha maslahatlar.",
            image: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            date: "2024-01-10",
            slug: "togri-investitsiya-kiritish",
            is_featured: false
        },
        {
            id: 'd3',
            title: "Kvadrat.uz orqali uy olishning afzalliklari",
            description: "Nega aynan Kvadrat.uz? Halol, shaffof va qulay shartlar asosida uy-joyli bo'lish imkoniyatlari haqida batafsil.",
            image: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            date: "2024-01-05",
            slug: "kvadratuz-afzalliklari",
            is_featured: false
        }
    ];

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await getBlogs();
                const allBlogs = response.data && response.data.length > 0 ? response.data : DEFAULT_BLOGS;

                const featured = allBlogs.find(b => b.is_featured) || allBlogs[0]; // Fallback to first if no featured
                const others = allBlogs.filter(b => b.id !== featured?.id);

                setFeaturedBlog(featured);
                setBlogs(others);
            } catch (error) {
                console.error("Error fetching blogs:", error);

                // Fallback to default data on error
                const featured = DEFAULT_BLOGS.find(b => b.is_featured) || DEFAULT_BLOGS[0];
                const others = DEFAULT_BLOGS.filter(b => b.id !== featured?.id);
                setFeaturedBlog(featured);
                setBlogs(others);
            }
        };
        fetchBlogs();
    }, []);

    return (
        <div className="blog-page">
            <header className="blog-header">
                <div className="blog-container">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="blog-title-wrapper"
                    >
                        <h1 className="blog-title">Bloglar va Maqolalar</h1>
                        <p className="blog-subtitle">
                            Moliyaviy sayohatingizda oldinda bo'lish uchun ekspert maqolalari, maslahatlar va yangiliklarni o'rganing.
                        </p>
                    </motion.div>
                </div>
            </header>

            <section className="blog-featured-section">
                <div className="blog-container">
                    {featuredBlog && (
                        <motion.div
                            className="blog-featured-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="blog-featured-image">
                                <img src={featuredBlog.image} alt={featuredBlog.title} />
                            </div>
                            <div className="blog-featured-content">
                                <span className="blog-tag">TAVSIYA ETILGAN <span className="text-orange">BLOG</span></span>
                                <h2 className="blog-featured-title">{featuredBlog.title}</h2>
                                <p className="blog-featured-desc">
                                    {featuredBlog.description}
                                </p>
                                <Link to={`/blog/${featuredBlog.slug}`} className="blog-btn-gradient">
                                    To'liq o'qish <ArrowUpRight size={18} />
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </div>
            </section>

            {/* Latest Blogs Grid */}
            <section className="blog-grid-section">
                <div className="blog-container">
                    <motion.div
                        className="blog-grid-header"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="blog-section-badge">Yangiliklar</span>
                        <h2 className="blog-grid-title">So'nggi Bloglar va Maqolalar</h2>
                        <p className="blog-grid-subtitle">Bizning vositalarimiz orqali moliyangizni oson, tez va aqlli boshqarishni kashf eting.</p>
                    </motion.div>

                    <div className="blog-grid">
                        {blogs.map((blog, index) => (
                            <motion.div
                                key={blog.id}
                                className="blog-card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="blog-card-image">
                                    <img src={blog.image} alt={blog.title} />
                                </div>
                                <div className="blog-card-content">
                                    <span className="blog-date">{blog.date}</span>
                                    <h3>
                                        <Link to={`/blog/${blog.slug}`} className="blog-card-title-link">
                                            {blog.title}
                                        </Link>
                                    </h3>
                                    <p>{blog.description}</p>
                                    <Link to={`/blog/${blog.slug}`} className="blog-read-more">
                                        Batafsil <ArrowUpRight size={16} />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* App Promo Section */}
            <AppPromo />
        </div>
    );
};

export default Blog;
