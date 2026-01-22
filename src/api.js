import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8000/api/',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    }
});

export const getFaqs = (type = 'home') => api.get(`faqs/?type=${type}`);
export const getPrivacyPolicy = () => api.get('privacy-policy/');
export const getInvestmentStats = () => api.get('investment-stats/');
export const getTeamMembers = () => api.get('investment-team/');
export const getBlogs = () => api.get('blogs/');
export const getBlogBySlug = (slug) => api.get(`blogs/${slug}/`);
export const submitContact = (data) => api.post('contacts/', data);
export const getContactInfo = () => api.get('contact-info/');
export const getAboutUs = () => api.get('about-us/');
export const getForWhom = () => api.get('for-whom/');
export const getTestimonials = () => api.get('testimonials/');

export default api;
