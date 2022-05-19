import React from 'react'
import PropTypes from 'prop-types'

const Grid = props => {

    const col = props.col ? props.col : ''
    //const lgCol = props.lgCol ? `md:grid-cols-${props.lgCol}`: ''
    const mdCol = props.mdCol ? props.mdCol : ''
    const smCol = props.smCol ? props.smCol : ''
    const gap = props.gap ? props.gap : '0'


    return (
        <div className={`grid ${col} ${mdCol} ${smCol} ${gap}`}>
            {props.children}
        </div>
    )
}

Grid.propTypes = {
    col: PropTypes.string.isRequired,
    mdCol: PropTypes.string,
    smCol: PropTypes.string,
    gap: PropTypes.string
}

export default Grid