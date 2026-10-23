import React from "react";
import "./MovieCard.css";
import { Link } from "react-router-dom";

const MovieCard = ({ el }) => {
  return (
    <div>
      <div className="popularCard">
        <Link to={`/moviDeatils/${el.id}`}>
          <img
            width="220px"
            src={`https://image.tmdb.org/t/p/w440_and_h660_face/${el.poster_path}`}
            alt=""
          />
        </Link>
        <h1>{el.title || el.name}</h1>
      </div>
    </div>
  );
};

export default MovieCard;
