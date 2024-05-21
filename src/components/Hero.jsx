import React from 'react';
import Button from './Button';
import Grid from './Grid';
import Heading from './Heading';
import Section, { SectionBody, SectionTitle } from './Section';
import buyImage from '../assets/images/buyImage.jpg';

const Hero = () => {
  return (
    <div className="bg-gray-600">
      <div className="ml-6">
      <div class="md:flex">
          <div class="py-12 ">
            <Section>
              <SectionTitle>
                <Heading
                  fontSize="text-3xl"
                  textTransformation=" uppercase"
                  textColor="text-white"
                >
                  Thinking of buying a vehicle?
                </Heading>
              </SectionTitle>
              <SectionBody>
                <div className="py-5 w-3/4">
                  <p className="text-">
                    Lorem ipsum, or lipsum as it is sometimes known,
                    is dummy text used in laying out print, graphic
                    or web designs. The passage is attributed to an
                    unknown typesetter in the 15th century who is
                    thought to have scrambled parts of Cicero's De
                    Finibus Bonorum et Malorum for use in a type
                    specimen book.
                  </p>
                </div>
                <Button
                  backgroundColor="bg-orange-500"
                  textColor="text-black"
                >
                  Start your search
                </Button>
              </SectionBody>
            </Section>
          </div>
        
          <div class="py-14">
            <img
              class="  px-3"
              src={buyImage}
              alt="Man looking at item at a store"
            />
          </div>
    
        </div>
      </div>

    </div>
  )
}

export default Hero