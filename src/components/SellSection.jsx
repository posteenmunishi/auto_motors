import React from 'react';
import Grid from './Grid';
import Section, {SectionTitle, SectionBody} from './Section';
import Heading from './Heading';
import Button from './Button';
import sellImage from '../assets/images/saleImage.jpg';

const SellSection = () => {
  return (
    <div className="my-36">
        <div className="ml-6">
        <Grid
          col="grid-cols-2"
        >
          <div className="py-12">
            <Section>
              <SectionTitle>
                <Heading
                  fontSize="text-3xl"
                  textTransformation=" uppercase"
                  textColor="text-black"
                >
                 Thinking of selling a vehicle?
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
                  Sell with us now
                </Button>
              </SectionBody>
            </Section>
          </div>

          <div>
            <img src={sellImage} alt="buyCar" />
          </div>
        </Grid>
      </div>
 
    </div>
  )
}

export default SellSection