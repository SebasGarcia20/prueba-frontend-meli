import React from 'react'
import logo from '../../../../assets/imgs/Logo_ML@2x.png.png.png'
import { Link } from 'react-router-dom'
import { SearchBar } from '../../molecules/SearchBar/SearchBar';

import './Header.scss';

export const Header = ({ valorBusqueda, onChange, onClick }) => {
    return (
        <header className="header-app">
            <div className="container">
                <div className="header-logo">
                    <Link to="/">
                        <img src={logo} alt="Logo Mercado Libre" />
                    </Link>
                </div>
                {/* Se agrega el componente de la barra de busqueda y se envía por props al información necesaria */}
                <SearchBar valorBusqueda={valorBusqueda} onChange={onChange} onClick={onClick} />
            </div>
        </header>
    )
}

