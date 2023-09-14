import React, { useContext } from 'react'
import Contact from '../Routes/Contact';
import Favs from '../Routes/Favs';
import {
  Route,
  Link,
  Routes
} from "react-router-dom";
import Home from '../Routes/Home';
import { ContextGlobal } from './utils/global.context';
import Detail from '../Routes/Detail';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  
  const {state, dispatch} = useContext(ContextGlobal);

  const handleTheme = () => {
    if (state.background === "white") {dispatch({type: "DARK"})}
    if (state.background === "black") {dispatch({type: "LIGHT"})}
  } 

  return (

    <div className='App'>
        {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
        <nav>
          <ul>
            <li>
              <Link to="/home">Inicio</Link>
            </li>
            <li>
              <Link to="/contact">Contacto</Link>
            </li>
            <li>
              <Link to="/favs">Destacados</Link>
            </li>
          </ul>
        <button onClick={handleTheme} className='themeButton'>Change theme</button>
        </nav>

      {/* Deberan implementar ademas la logica para cambiar de Theme con el button*/}

        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/favs' element={<Favs/>}/>
          <Route path='/detail/:id' element={<Detail/>}/>
        </Routes>
      </div>

  )
}

export default Navbar