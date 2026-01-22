import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Partners from '../components/Partners';
import Features from '../components/Features';
import Benefits from '../components/Benefits';
import TargetAudience from '../components/TargetAudience';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import AppPromo from '../components/AppPromo';

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Hero />
            <Partners />
            <Features />
            <Benefits />
            <TargetAudience />
            <Testimonials />
            <FAQ />
            <AppPromo />
        </>
    );
};

export default Home;
