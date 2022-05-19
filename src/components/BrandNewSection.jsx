import React from 'react';
import Button from './Button';
import Heading from './Heading';
import Grid from './Grid';
import brands from '../assets/images/majorbrandlogo.png'

const BrandNewSection = () => {
    return (
        <div className="my-10">
            <div className="w-1/2">
                <Heading
                    fontSize="text-2xl"
                    textTransformation=" uppercase"
                    textColor="text-black"
                >
                    Search a brand new vehicle according to a specific brand
                </Heading>
            </div>
            <div className="my-4">
                <Grid
                    col="grid-cols-2"
                >
                <div className="w-3/4">
                    <p className="mb-3">
                        Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
                        Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500,
                        cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una
                        galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.
                        No sólo sobrevivió 500 años, sino que.
                    </p>
                    <Button
                        backgroundColor="bg-orange-500"
                        textColor="text-black"
                    >
                        Search
                    </Button>
                </div>
                <div>
                    <img src={brands} alt="brands" />
                </div>
                </Grid>
                
            </div>

        </div>
    )
}

export default BrandNewSection