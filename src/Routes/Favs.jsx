import React from "react";
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];


  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {favorites.map((fav) => (
          <Card key={fav.id} id={fav.id} name={fav.name} username={fav.username}/>
        ))}
      </div>
    </>
  );
};

export default Favs;
