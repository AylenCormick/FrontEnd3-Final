import React from "react";
import { useState } from "react";


const Card = ({ name, username, id }) => {

  const [favoritos, setFavoritos] = useState([]);

  localStorage.setItem("favoritos", favoritos.toString())
  console.log(localStorage.getItem("favoritos"));

  const addFav = (id)=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    setFavoritos(id);
  }

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        {/* <img src="../images/doctor.jpg" alt="" /> */}
        <h2>{name}</h2>
        <h3>{username}</h3>
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
