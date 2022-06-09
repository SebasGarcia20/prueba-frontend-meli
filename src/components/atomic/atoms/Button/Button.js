import React, { Children } from 'react'
import PropTypes from 'prop-types'
import './Button.scss'

/* Boton usado para Comprar en vista de detalles de un producto */

export const handleClick = ({ onClick }) => (event) => {
    onClick(event)
}

export const Button = ({
    children,
    onClick,
}) => (
    <button
        className='button'
        onClick={onClick && handleClick({ onClick })}
    >
        {children}
    </button>
)

Button.propTypes = {
    onClick: PropTypes.func,
}

Button.defaultProps = {
    onClick: () => { },
}

