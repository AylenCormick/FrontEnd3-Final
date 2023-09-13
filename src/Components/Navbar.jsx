import React from 'react'
import Contact from '../Routes/Contact';
import Favs from '../Routes/Favs';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  useNavigate,
  useParams,
} from "react-router-dom";
import Home from '../Routes/Home';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  return (
    <Router>
        {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <div className='App'>
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
        </nav>

      {/* Deberan implementar ademas la logica para cambiar de Theme con el button*/}
      <button>Change theme</button>

        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/favs' element={<Favs/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default Navbar