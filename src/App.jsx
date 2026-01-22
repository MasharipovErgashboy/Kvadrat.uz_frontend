import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Investment from './pages/Investment';
import Calculator from './pages/Calculator';
import Blog from './pages/Blog';
import BlogDetails from './pages/BlogDetails';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/investitsiya" element={<Investment />} />
          <Route path="/kalkulyator" element={<Calculator />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetails />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
