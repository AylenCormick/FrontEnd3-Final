import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Card = ({ name, username, id }) => {

  const [isFavorite, setIsFavorite] = useState(false);

    const addFav = () => {

      const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  
      const isAlreadyFavorite = favorites.some((favorite) => favorite.id === id);
  
      if (!isAlreadyFavorite) {
        const newFavorite = { id, name, username };
        favorites.push(newFavorite);
  
        localStorage.setItem('favorites', JSON.stringify(favorites));
        setIsFavorite(true);
      }
    };

    return (
      <div className="card">
        <Link key={id} to={`/detail/${id}`}>
          <img src="../images/doctor.jpg" alt="" />
          <h2>{name}</h2>
          <h3>{username}</h3>
        </Link>
        <button onClick={addFav} className="favButton">
          {isFavorite ? 'Added to Favorites' : 'Add to Favorites'}
        </button>
      </div>
    );
  };

export default Card;
