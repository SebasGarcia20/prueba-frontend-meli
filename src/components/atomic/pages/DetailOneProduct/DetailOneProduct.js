import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
/* Botón comprar */
import { Button } from '../../atoms/Button'

import './DetailOneProduct.scss'

export const DetailOneProduct = ({ id }) => {

  const [breadcrumb, setBreadcrumb] = useState('')
  const [item, setItem] = useState({})
  const { idItem } = useParams()

  /* Petición */
  const getProductDetail = () => {
    /* Se crea la variable idReal para conocer de donde proviene la id, si por medio de props al presionar el botón
     de busqueda o ingresando el valor por medio de la URL del navegador */
    let idReal = id ? id : idItem;
    let config = {
      url: 'http://localhost:3001/api/items/' + idReal,
      method: 'GET',
    };
    axios(config)
      .then((res) => {
        setItem(res.data.item);
        setBreadcrumb(res.data.categories);
      })
  }

  useEffect(() => {
    getProductDetail();
  }, [])

  /* Se deja el valor "-----" como método si acaso el id no existe se muestre ese valor dando a entender que efectivamente no existe un item con el id recibido*/
  return (
    <div className="container">
      <div className="breadcrumb">
        {breadcrumb}
      </div>
      <div className="container-product">
        <div className="detail-product">
          <div className="detail-product-info">
            <img className="detailProduct-image" src={item ? item.picture : ''} width="100%" alt=' No se encontro imagen del producto' />
          </div>
          <div className="detail-product-content flex-detailOne">
            <span className="detail-product-sold">{item ? item.condition === 'new' ? 'Nuevo' : 'Usado' : '--------'} - {item ? item.sold_quantity : '--------'} vendidos</span>
            <h2 className="detail-product-title">{item ? item.title : '----------------------'}</h2>
            <span className="detail-product-price">$ {item ? item.price ? item.price.amount.toLocaleString('de-De') : '' : '--------'}</span>
            <Button> Comprar </Button>
          </div>
        </div>
        <div className="description-product">
          <h2>Descripción del producto</h2>
          <div className="description-text"> {item ? item.description : 'No se encontro el producto con el id proporcionada'}</div>
        </div>
      </div>
    </div>
  )
}
