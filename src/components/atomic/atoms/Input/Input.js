import React from 'react'
import PropTypes from 'prop-types'
import './Input.scss'


export const Input = ({
    value,
    onChange,
}) => (
    <input
        type="text"
        value={value}
        placeholder="Nunca dejes de buscar"
        onChange={onChange} />
)

Input.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
}

Input.defaultProps = {
    value: '',
    onChange: () => { },
}