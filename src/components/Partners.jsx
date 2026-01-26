import React from 'react';
import './Partners.css';

const Partners = () => {
    const partners = Array(10).fill(0).map((_, i) => ({
        id: i,
        alt: `Startup Garage Logo ${i + 1}`,
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
                                <img
                                    src="/startup-garage-logo.png"
                                    alt={partner.alt}
                                    className="partner-logo-img"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Partners;
