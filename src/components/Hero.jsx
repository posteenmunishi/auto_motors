import React from 'react';
import Button from './Button';
import Heading from './Heading';

const Hero = () => {
  return (
    <div className="hero__section relative">
      <div>
        <div>
          <span className="text-black font-bold text-xl top-4 left-5 absolute">AutoMotors</span>
        </div>
        <div>
          <div className="absolute top-36 left-5">
            <Heading
              fontSize="text-3xl"
              textTransformation=" uppercase"
              textColor="text-white"
            >
              Thinking of selling a vehicle?
            </Heading>
          </div>
          <div className="absolute bottom-24 left-5">
            <Button
              backgroundColor="bg-orange-300"
              textColor="text-black font-bold"
            >
              Sell with us now
            </Button>
          </div>
        </div>
        <div>
          <div className="absolute top-24 right-10">
            <Heading
              fontSize="text-3xl"
              textTransformation=" uppercase"
              textColor="text-white"
            >
              Thinking of buying a vehicle?
            </Heading>
          </div>
          <div className="absolute bottom-20 right-10">
            <Button
              backgroundColor="bg-orange-500"
              textColor="text-black font-bold"
            >
              Start your search
            </Button>
          </div>
        </div>
      </div>

    </div >
  )
}

export default Hero