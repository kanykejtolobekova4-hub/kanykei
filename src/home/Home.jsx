import React from "react";
import "./Home.css";
import Trend from "../pages/Trend/trend";

const Home = () => {
  return (
    <>
      <div
        id="home"
        style={{
          backgroundImage:
            "url('https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/hpBGCnzOvdtQoMyE48gvwp2y5yx.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          height: "500px",
        }}
      >
        <div className="homeTex">
          <h1>Добро пожаловать.</h1>
          <h2>Миллионы фильмов, сериалов и людей. Исследуйте сейчас.</h2>

          <div className="search-box">
            <input placeholder="Найти фильм, сериал..." type="text" />
            <button>поиск</button>
          </div>
        </div>
      </div>

      <Trend />
    </>
  );
};

export default Home;
