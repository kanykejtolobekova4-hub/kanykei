import React, { useEffect } from "react";
import { useState } from "react";
import { API_KEY } from "../apikey";
import axios from "axios";
import "./Actors.css";

const Actors = ({ actorsId }) => {
  const [actors, setActors] = useState([]);

  async function getActors(key) {
    let rec = await axios(
      `https://api.themoviedb.org/3/movie/${actorsId}/credits?api_key=${key}&language=en-US`,
    );
    setActors(rec.data.cast);
  }

  useEffect(() => {
    getActors(API_KEY);
  }, []);

  return (
    <div>
      <div id="actors">
        <div className="container">
          <div className="actors">
            {actors.map((el) => (
              <div className="actorsCard">
                <img
                  width="180px"
                  src={`https://image.tmdb.org/t/p/w440_and_h660_face/${
                    el.profile_path
                  }`}
                  alt=""
                />
                <h1>{el.original_name}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Actors;
