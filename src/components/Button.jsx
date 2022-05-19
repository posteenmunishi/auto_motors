import React from 'react'
import PropTypes from 'prop-types'

const Button = props => {

    const bg = props.backgroundColor ? props.backgroundColor : 'bg-neutral-900'

    const bgHover = props.backgroundColorHover ? 'hover:' + props.backgroundColorHover : ''

    const text = props.textColor ? props.textColor : ''

    const textHover = props.textColorHover ? 'hover:' + props.textColorHover : 'text-white'


    return (
        <button
            className={`${bg} ${bgHover} rounded-md p-3`}
            onClick={props.onClick ? () => props.onClick() : null}
        >
            <span className={`${text}  ${textHover}`}>{props.children}</span>
        </button>
    )
}

Button.propTypes = {
    backgroundColor: PropTypes.string,
    backgroundColorHover: PropTypes.string,
    textColor: PropTypes.string,
    textColorHover: PropTypes.string,
    onclick: PropTypes.func
}

export default Button