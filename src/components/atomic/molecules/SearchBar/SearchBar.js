import React from 'react'
import { ButtonImage } from '../../atoms/ButtonImage/'
import { Input } from '../../atoms/Input/'
import lupaICon from '../../../../assets/imgs/ic_Search@2x.png.png.png'

import './SearchBar.scss'

/* Barra de busqueda componente */

export const SearchBar = ({ valorBusqueda, onChange, onClick }) => {
    return (
        <div className="search">
            <div className='flex'>
                <Input value={valorBusqueda} onChange={onChange} />
                <ButtonImage src={lupaICon} onClick={onClick} />
            </div>
        </div>
    )
}
