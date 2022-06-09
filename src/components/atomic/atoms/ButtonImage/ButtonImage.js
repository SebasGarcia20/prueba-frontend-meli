import React from 'react'
import PropTypes from 'prop-types'
import './ButtonImage.scss'

/* Boton con imagen usado para el botón de busqueda en el header */

export const handleClick = ({ onClick }) => (event) => {
    onClick(event)
}

export const ButtonImage = ({
    onClick,
    src
}) => (
    <button
        className='flex'
        onClick={onClick && handleClick({ onClick })}
    >
        <img src={src} alt='logo buscador' />
    </button>
)

ButtonImage.propTypes = {
    onClick: PropTypes.func,
    src: PropTypes.string
}

ButtonImage.defaultProps = {
    onClick: () => { },
    src: ''
}

