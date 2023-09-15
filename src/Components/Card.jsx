import React from "react";
import { Link } from "react-router-dom";

import { useReducer, useEffect } from 'react';

const initialState = {isFavorite: false};

const favoriteReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return { isFavorite: true };
    default:
      return state;
  }
};

const Card = ({ name, username, id }) => {

  const [state, dispatch] = useReducer(favoriteReducer, initialState);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const isAlreadyFavorite = favorites.some((favorite) => favorite.id === id);
    if (isAlreadyFavorite) {
      dispatch({ type: 'ADD_FAVORITE' });
    }
  }, [id]);

  const addFav = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const isAlreadyFavorite = favorites.some((favorite) => favorite.id === id);
    if (!isAlreadyFavorite) {
      const newFavorite = { id, name, username };
      favorites.push(newFavorite);

      localStorage.setItem('favorites', JSON.stringify(favorites));
      dispatch({ type: 'ADD_FAVORITE' });
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
        {state.isFavorite ? 'Destacado' : 'Agregar a destacados'}
      </button>
    </div>
  );
};

export default Card;
