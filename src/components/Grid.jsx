import React from 'react'
import PropTypes from 'prop-types'

const Grid = props => {

    const col = props.col ? `grid-cols-${props.col}` : ''
    //const lgCol = props.lgCol ? `md:grid-cols-${props.lgCol}`: ''
    const mdCol = props.mdCol ? `md:grid-cols-${props.mdCol}` : ''
    const smCol = props.smCol ? `sm:grid-cols-${props.smCol}` : ''
    const gap = props.gap ? `gap-${props.gap}`: '0'


    return (
        <div className={`grid ${col} ${mdCol} ${smCol} ${gap}`}>
            {props.children}
        </div>
    )
}

Grid.propTypes = {
    col: PropTypes.number.isRequired,
    mdCol: PropTypes.number,
    smCol: PropTypes.number,
    gap: PropTypes.number
}

export default Grid