import React, { useContext, useState } from "react";
import { MovieContext } from "../../context";

const Favorite = () => {
  const { favorite, setFavorite } = useContext(MovieContext);

    let list = favorite.filter((el) => el)

  function deleteFavorite(Proid) {
    let filterMovie = list.filter((el) => el.id !== Proid)
    setFavorite(filterMovie);
    localStorage.setItem("favorite", JSON.stringify(filterMovie))
  }
  return (
    <div id="favorite">
      <div className="papular">
        {favorite.map((el) => (
          <div className="popularCard">
            <img
              width="200px"
              src={`https://image.tmdb.org/t/p/w440_and_h660_face/${el.poster_path}`}
              alt=""
            />
            <span>{el.title}</span>
            <button onClick={( ) => deleteFavorite(el.id)}>g</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorite;
