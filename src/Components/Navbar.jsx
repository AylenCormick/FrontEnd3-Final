import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  useNavigate,
  useParams,
} from "react-router-dom";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  return (
    <Router>
        {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <div className='App'>
        <nav>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/contact">Contacto</Link>
            </li>
            <li>
              <Link to="/favs">Destacados</Link>
            </li>
          </ul>
        </nav>

      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button>Change theme</button>

        <Routes>
          <Route path='/home' element={<h2>Inicio</h2>}/>
          <Route path='/contact' element={<h2>Contacto</h2>}/>
          <Route path='/favs' element={<h2>Destacados</h2>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default Navbar