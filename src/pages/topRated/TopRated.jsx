import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_KEY } from "../../apikey";
import "./TopRated.css";
import MovieCard from "../movieCard/MovieCard";
const TopRated = () => {
  const [TopRated, setTopRated] = useState([]);

  async function getTopRated(key) {
    let res = await axios(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    );
    // console.log(res.data.resulte);
    setTopRated(res.data.results);
  }

  useEffect(() => {
    getTopRated(API_KEY);
  }, []);

  return (
    <div id="TopRated">
      <div className="conteiner">
        <div className="TopRated">
          {TopRated.map((el) => (
            <MovieCard el={el} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopRated;
