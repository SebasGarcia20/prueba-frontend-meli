import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

import './ListAllProductsInfo.scss'
/* importar el componente de mostrar la información de un producto */
import { ProductInfo } from '../../organisms/ProductInfo'

export const ListAllProductsInfo = ({ valorBusqueda, handleSearch }) => {

  const [breadcrumb, setBreadcrumb] = useState('')
  const [products, setProducts] = useState([])
  const navigate = useNavigate(); 

  /* Petición */
  const getAllProductsBySearch = () => {
    if (valorBusqueda !== '') { /* Se decide implementar el if para evitar la busqeuda de una cadena vacia*/
      let config = {
        url: 'http://localhost:3001/api/items?q=' + valorBusqueda,
        method: 'GET',
      };
      axios(config)
        .then((res) => {
          setProducts(res.data.items)
          setBreadcrumb(res.data.categories)
        })
    }
  }

  useEffect(() => {
    getAllProductsBySearch();
    navigate(`?search=${valorBusqueda}`, { replace: true }) /* Cambiar ruta de acuerdo al valor de busqueda */
  }, [handleSearch]) /* Se maneja la variable handleSearch para cada vez que se accione el botón de busqeuda realice nuevamente el useEffect y realice una nueva búsqueda*/

  return (
    <div className="container overflow">
      <div className="breadcrumb">
        {breadcrumb}
      </div>
      <ul className="normalize-list listProduct">
        {products.map((item) => <ProductInfo
          id={item.id}
          title={item.title}
          price={item.price ? item.price.amount : ''}
          address_name={item.address ? item.address.state_name : ''}
          picture={item.picture} />)}
      </ul>
    </div>
  )
}
