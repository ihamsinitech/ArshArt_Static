import React from 'react';
import Hero from '../components/Hero';
import SectionDivider from '../components/SectionDivider';
import Categories from '../components/Categories';
import FeaturedProducts from '../components/FeaturedProducts';
import KidsCollection from '../components/KidsCollection';

const Home = () => {
    return (
        <>
            <Hero />
            <SectionDivider />
            <Categories />
            <SectionDivider />
            <FeaturedProducts />
            <KidsCollection />
        </>
    );
};

export default Home;