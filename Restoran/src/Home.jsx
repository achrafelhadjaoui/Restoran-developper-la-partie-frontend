import React from 'react';
import Navbar from './Header';
import SubscribeSection from './Subscribe';
import CardSection from './AllCards';
import RestaurantSection from './RetoranSection';
import Footer from './Footer';
import LatestRecipies from './LatestRecipies';
import Category from './Categorie';

const Home = () => {
    return (
        <>
            <Navbar/>
            <SubscribeSection/>
            <LatestRecipies/>
            <RestaurantSection />
            <Category/>
            <CardSection />
            <Footer />
        </>
    );
};

export default Home;
