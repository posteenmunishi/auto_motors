import React from 'react';
import Hero from '../components/Hero';
import BrandNewSection from '../components/BrandNewSection';
import Featured from '../components/Featured';

const Home = () => {
  return (
    <div>
        <Hero />
        <div className="mx-10">
          <BrandNewSection />
          <Featured />
        </div>
    </div>
  )
}

export default Home