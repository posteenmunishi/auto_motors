import React from 'react'
import PropTypes from 'prop-types'

const Heading = props => {

    const size = props.fontSize ? props.fontSize : 'text-base'

    const tranformation = props.textTransformation ? props.textTransformation : ''

    const text = props.textColor ? props.textColor : 'text-white'



    return (
        <h1
            className={`${text} ${tranformation} ${size} font-bold`}
        >
            {props.children}
        </h1>
    )
}

Heading.propTypes = {
    fontSize: PropTypes.string,
    textTransformation: PropTypes.string,
    textColor: PropTypes.string,
}

export default Heading