import React, { useEffect, useState } from "react";
import "./trend.css";
import axios from "axios";
import { API_KEY } from "../../apikey";
import { Link } from "react-router-dom";

const Trend = () => {
  const [trend, setTrend] = useState([]);
  async function getTrend(key) {
    let res = await axios(
      `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    );
    setTrend(res.data.results);
  }

  useEffect(() => {
    getTrend(API_KEY);
  }, []);

  return (
    <>
      <div id="trend">
        <h1>В тренде</h1>
        <div className="trend">
          {trend.map((el) => (
            <>
              <div className="trendCard" key={el.id}>
                <div className="trend-poster">
                  <Link to={`/movieDatails/${el.id}`}>
                    <img
                      width=" 1500px"
                      src={`https://image.tmdb.org/t/p/w440_and_h660_face/${el.poster_path}`}
                      alt={el.title}
                    />
                  </Link>

                  {/* <div className="rating">{Math.round(el.vote_average * 10)}%</div> */}
                </div>

                <h1>{el.title}</h1>
                <h2>{el.release_date}</h2>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Trend;
