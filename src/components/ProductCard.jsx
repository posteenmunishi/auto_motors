import React from 'react'
import PropTypes from 'prop-types'
import numberWithCommas from '../utils/numberWithCommas';
import Grid from './Grid';
import { Link } from 'react-router-dom';
import Button from './Button';

const ProductCard = props => {

    return (
        <div className="md:grid-cols-4">
            <Link to={`product/${props.slug}`}>
                <div className="image mb-3">
                    <img src={props.img01} alt="" />
                    <img src={props.img02} alt="" />
                </div>
                <div className="text-center">
                    <span className="text-black font-bold text-xl">{props.name}</span>
                </div>
                <div className="mb-3">
                    <Grid
                        col="grid-cols-2"
                    >
                        <span>{props.millage} millage</span>
                        <span className="font-bold text-lg text-black">kes. {numberWithCommas(props.price)}</span>
                    </Grid>
                </div>
            </Link>
            <div className="text-center">
                <Button
                    backgroundColor="bg-orange-500"
                    textColor="text-black"
                >
                    More details
                </Button>
            </div>


        </div>
    )
}

ProductCard.propTypes = {
    img01: PropTypes.string.isRequired,
    img02: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    millage: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    slug: PropTypes.string.isRequired,
}

export default ProductCard
