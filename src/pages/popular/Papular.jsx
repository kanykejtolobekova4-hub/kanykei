import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_KEY }  from "../../apikey";
import "./Papular.css"
import MovieCard from "../movieCard/MovieCard";

const Papular = () => {
  const [popular, setPopular] = useState([]);

  async function getPopular(key) {
    let res = await axios(
      `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    );
    // console.log(res.data.resulte);
    setPopular(res.data.results);
  }

  useEffect(() => {
    getPopular(API_KEY);
  }, []);

  return (
    <div id="papular">
      <div className="conteiner">
        <div className="papular">
          {popular.map((el) => (     
           <MovieCard el={el} />      
          ))}
        </div>
      </div>
    </div>


  );
};

export default Papular;
