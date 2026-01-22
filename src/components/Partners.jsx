import React from 'react';
import './Partners.css';

const Partners = () => {
    // Placeholder images based on the provided HTML structure. 
    // In a real scenario, we'd use local assets or the actual URLs.
    // Using simple placeholders for now to verify layout.
    const partners = Array(10).fill(0).map((_, i) => ({
        id: i,
        alt: `Partner ${i + 1}`,
        // Using a placeholder service or SVG if local images aren't ready
        // For now, mirroring the "Startup Garage" text style from previous step as placeholders
        text: "STARTUP GARAGE"
    }));

    return (
        <section className="partners-section">
            <div className="container">
                <h2 className="partners-title">
                    O'zbekistondagi jamoalar va kompaniyalar ishonib tanlagan platforma
                </h2>

                <div className="marquee-container">
                    <div className="marquee-content">
                        {/* Double the list for seamless loop */}
                        {[...partners, ...partners].map((partner, index) => (
                            <div key={index} className="partner-item">
                                <span className="partner-logo-text">
                                    <span className="logo-icon">S</span>
                                    STARTUP<br /><strong>GARAGE</strong>
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Partners;
