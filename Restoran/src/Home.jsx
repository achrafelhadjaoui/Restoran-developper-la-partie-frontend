import React from 'react';
import Navbar from './Header';
import SubscribeSection from './Subscribe';
import CardSection from './AllCards';
import RestaurantSection from './RetoranSection';
import Footer from './Footer';

const Home = () => {
    return (
        <>
            <Navbar/>
            <SubscribeSection/>
            <CardSection />
            <RestaurantSection />
            <Footer />
        </>
    );
};

export default Home;
