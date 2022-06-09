import './App.scss';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import { useState } from 'react'
/* header */
import { Header } from './components/atomic/organisms/Header'
/* Pages */
import { NotFoundPage } from './components/atomic/pages/NotFoundPage/NotFoundPage';
import { ListAllProductsInfo } from './components/atomic/pages/ListAllProductsInfo/ListAllProductsInfo';
import { DetailOneProduct } from './components/atomic/pages/DetailOneProduct/DetailOneProduct';
import { Home } from './components/atomic/pages/Home/Home'

function App() {

  /* Variable global para la barra de busqueda (Header) */
  const [valorBusqueda, setValorBusqueda] = useState('')
  const onChange = () => (event) => {
    setValorBusqueda(event.target.value)
  }
  /* Función cambiar de ruta al oprimir botón de busqueda */
  const history = useNavigate();
  const [handleSearch, setHandleSearch] = useState(false);
   /* Se crea la variable para enviar por props al componente de ListAllProductsInfo, así cuando se haga onClick en el botón del header,*/
   /* este redireccione la ruta al componente además de recargar el useEffect y efectuar nuevamente la petición a la back, asi logrando */
   /* tener control de realizar busqueda mediante el botón ubicado en el header */
  const onClick = () => { 
    history(`/items`)
    setHandleSearch(!handleSearch) /* Activar useEffect en componente ListAllProductsInfo */
  }

  return (
    <div className="App">
      <Header valorBusqueda={valorBusqueda} onChange={onChange()} onClick={onClick} />
      <div className="app-content">
        <Routes>
          <Route exact path='/items/:idItem' element={<DetailOneProduct />} ></Route>
          <Route exact path={`/items`} element={<ListAllProductsInfo valorBusqueda={valorBusqueda} handleSearch={handleSearch} />} ></Route>
          <Route exact path='/' element={<Home />}></Route>
          <Route path="*" element={<NotFoundPage />} ></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
