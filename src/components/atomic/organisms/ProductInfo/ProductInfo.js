import React from 'react'
import { Link } from 'react-router-dom'

import './ProductInfo.scss'
/* Componente para mostrar el detalle simple de los resultados de la búsqueda*/
export const ProductInfo = ({ id, picture, price, title, address_name }) => {
    return (
        <li className="product-item flex" key={id}>
            <Link to={`/items/${id}`} className="flex flex-align-start max-width">
                <div className="product-item-image flex">
                    <img src={picture} />
                </div>
                <span className="product-item-price">{`$ ${price.toLocaleString('de-De')}`}</span>
                <h3 className="product-item-title">{title}</h3>
                <span className="product-item-address">{address_name}</span>
            </Link>
        </li>
    )
}
