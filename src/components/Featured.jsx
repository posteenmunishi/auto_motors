import React from 'react';
import Grid from './Grid';
import Heading from './Heading';
import ProductCard from './ProductCard';
import Section, { SectionTitle, SectionBody } from './Section';
import productData from '../assets/data/products';

const Featured = () => {
    return (
        <div>
            <Section>
                <SectionTitle>
                    <Heading
                        fontSize="text-2xl"
                        textTransformation="capitalize"
                        textColor="text-black"
                    >
                        Featured list
                    </Heading>
                </SectionTitle>
                <SectionBody>
                        <Grid
                            col="grid-cols-4"
                        >
                            {
                                productData.getProducts(8).map((item, index) => (
                                
                                    <ProductCard
                                        key={index}
                                        img01={item.image01}
                                        img02={item.image02}
                                        name={item.name}
                                        millage={item.millage} 
                                        price={Number(item.price)}
                                        slug={item.slug}
                                    />
                                ))
                            }
                        </Grid>
                    </SectionBody>
            </Section>




        </div>
    )
}

export default Featured
