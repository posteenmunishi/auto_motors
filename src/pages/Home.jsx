import React from 'react';
import Hero from '../components/Hero';
import BrandNewSection from '../components/BrandNewSection';
import Featured from '../components/Featured';
import SellSection from '../components/SellSection.jsx';
import Reviews from '../components/Reviews';

const Home = () => {
  return (
    <div>
        <Hero />
        <div className="mx-10">
          <BrandNewSection />
          <Featured />
        </div>
        <SellSection />
        <Reviews />
    </div>
  )
}

export default Home