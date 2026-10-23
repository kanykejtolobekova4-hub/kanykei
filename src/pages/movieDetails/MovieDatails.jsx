import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { API_KEY } from "../../apikey";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { IoMedal, IoMenu } from "react-icons/io5";
import { useParams } from "react-router-dom";
import "./MovieDatails.css";
import Actors from "../../actorc/Actors";
import Videos from "../../video/Videos";
import Search from "../../search/Search";
import { MovieContext } from "../../context";

const MovieDatails = () => {
  const [movieDeatils, setMovieDetails] = useState({});
  const { movieId } = useParams();
  const { setFavorite } = useContext(MovieContext);

  function addToFavorite(item) {
    let res = JSON.parse(localStorage.getItem("favorite")) || [];
    let result = [...res, item];
    localStorage.setItem("favorite", JSON.stringify(result));
    setFavorite(result);
  }

  async function getMovieDetails(key) {
    let str = await axios(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${key}&language=en-US`,
    );
    setMovieDetails(str.data);
  }
  useEffect(() => {
    getMovieDetails(API_KEY);
  }, []);

  return (
    <>
      <div
        id="movieDetails"
        style={{
          background: `url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${
            movieDeatils.backdrop_path
          }) center center / cover`,
        }}
      >
        <div className="conteier">
          <div className="movieDetails">
            <img
              src={`https://image.tmdb.org/t/p/w440_and_h660_face/${movieDeatils.poster_path}`}
              alt=""
              width={"400px"}
              height={"600px"}
            />
            <div className="movieDetailsText">
              <h1>
                {movieDeatils.original_title} (
                {movieDeatils.release_date?.slice(0, 4)})
              </h1>
              <p>
                {movieDeatils.release_date}
                <span>{movieDeatils.genres?.map((el) => el.name)}</span>
                {movieDeatils.runtime}
              </p>

              <div className="movieDeailsIcon">
                <MdFavoriteBorder onClick={() => addToFavorite(movieDeatils)} />
                <IoMenu />
              </div>
              <h2>{movieDeatils.tagline}</h2>
              <h1>Обзор</h1>
              <p>{movieDeatils.overview}</p>
            </div>
          </div>
        </div>
      </div>
      <Actors actorsId={movieId} />
      <Videos videosId={movieId} />
      {/* <Search searchId={movieId} /> */}
    </>
  );
};

export default MovieDatails;
