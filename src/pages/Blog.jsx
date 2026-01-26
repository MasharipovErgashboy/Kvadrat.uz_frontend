import React, { useState, useEffect } from 'react';
import { getBlogs } from '../api';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Calendar, User } from 'lucide-react';
import AppPromo from '../components/AppPromo';
import './Blog.css';

const Blog = () => {
    const [featuredBlog, setFeaturedBlog] = useState(null);
    const [blogs, setBlogs] = useState([]);

    // Animation variants
    const pageVariants = {
        hidden: { opacity: 0, y: 16 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: 'easeOut',
                when: 'beforeChildren'
            }
        }
    };

    const headerVariants = {
        hidden: { opacity: 0, y: -12 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
    };

    const featuredVariants = {
        hidden: { opacity: 0, y: 24 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
    };

    const gridVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12,
                ease: 'easeOut'
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 18 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
    };

    const getImageUrl = (image) => {
        if (!image) {
            return "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
        }
        // If image is a relative URL, prepend the API base URL
        if (image.startsWith('/')) {
            return `http://localhost:8000${image}`;
        }
        return image;
    };

    const DEFAULT_BLOGS = [
        {
            id: 'd1',
            title: "Ko'chmas mulk bozoridagi yangi tendensiyalar: 2024 yil tahlili",
            description: "2024 yilda O'zbekiston ko'chmas mulk bozorida qanday o'zgarishlar kutilmoqda? Narxlar, talab va taklif bo'yicha ekspertlar fikri va chuqur tahliliy maqola.",
            image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            date: "2024-01-15",
            author: "Admin",
            slug: "kochmas-mulk-2024-tahlil",
            is_featured: true
        },
        {
            id: 'd2',
            title: "Qanday qilib to'g'ri investitsiya kiritish mumkin?",
            description: "Investitsiya kiritishda nimalarga e'tibor berish kerak? Riskalarni boshqarish va daromadni oshirish bo'yicha maslahatlar.",
            image: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            date: "2024-01-10",
            author: "Admin",
            slug: "togri-investitsiya-kiritish",
            is_featured: false
        },
        {
            id: 'd3',
            title: "mkvadrat.uz orqali uy olishning afzalliklari",
            description: "Nega aynal mkvadrat.uz? Halol, shaffof va qulay shartlar asosida uy-joyli bo'lish imkoniyatlari haqida batafsil.",
            image: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            date: "2024-01-05",
            author: "Admin",
            slug: "kvadratuz-afzalliklari",
            is_featured: false
        }
    ];

    useEffect(() => {
        window.scrollTo(0, 0);
        const fetchBlogs = async () => {
            try {
                const response = await getBlogs();
                let allBlogs = response.data && response.data.length > 0 ? response.data : DEFAULT_BLOGS;

                // Process image URLs
                allBlogs = allBlogs.map(blog => ({
                    ...blog,
                    image: getImageUrl(blog.image)
                }));

                const featured = allBlogs.find(b => b.is_featured) || allBlogs[0];
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
        <motion.div className="blog-page" variants={pageVariants} initial="hidden" animate="show">
            <header className="blog-header">
                <div className="blog-container">
                    <motion.div
                        className="blog-title-wrapper"
                        variants={headerVariants}
                        initial="hidden"
                        animate="show"
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
                            variants={featuredVariants}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            <div className="blog-featured-image">
                                <img 
                                    src={featuredBlog.image} 
                                    alt={featuredBlog.title}
                                    onError={(e) => {e.target.src = 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80';}}
                                />
                            </div>
                            <div className="blog-featured-content">
                                <span className="blog-tag">TAVSIYA ETILGAN <span className="text-orange">BLOG</span></span>
                                <h2 className="blog-featured-title">{featuredBlog.title}</h2>
                                <p className="blog-featured-desc">
                                    {featuredBlog.description}
                                </p>
                                <div className="blog-featured-meta">
                                    <div className="blog-meta-item">
                                        <Calendar size={16} />
                                        <span>{new Date(featuredBlog.date).toLocaleDateString('uz-UZ', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                                    </div>
                                    <div className="blog-meta-item">
                                        <User size={16} />
                                        <span>{featuredBlog.author || 'Admin'}</span>
                                    </div>
                                </div>
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
                        variants={headerVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                    >
                        <span className="blog-section-badge">Yangiliklar</span>
                        <h2 className="blog-grid-title">So'nggi Bloglar va Maqolalar</h2>
                        <p className="blog-grid-subtitle">Bizning vositalarimiz orqali moliyangizni oson, tez va aqlli boshqarishni kashf eting.</p>
                    </motion.div>

                    <motion.div
                        className="blog-grid"
                        variants={gridVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                    >
                        {blogs.map((blog, index) => (
                            <motion.div
                                key={blog.id}
                                className="blog-card"
                                variants={cardVariants}
                            >
                                <Link to={`/blog/${blog.slug}`} className="blog-card-image-link">
                                    <div className="blog-card-image">
                                        <img src={blog.image} alt={blog.title} onError={(e) => {e.target.src = 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80';}} />
                                        <div className="blog-card-overlay"></div>
                                    </div>
                                </Link>
                                <div className="blog-card-content">
                                    <div className="blog-card-meta">
                                        <span className="blog-date">
                                            <Calendar size={14} />
                                            {new Date(blog.date).toLocaleDateString('uz-UZ', { year: 'numeric', month: 'short', day: 'numeric' })}
                                        </span>
                                        <span className="blog-author">
                                            <User size={14} />
                                            {blog.author || 'Admin'}
                                        </span>
                                    </div>
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
                    </motion.div>
                </div>
            </section>

            {/* App Promo Section */}
            <AppPromo />
        </motion.div>
    );
};

export default Blog;
