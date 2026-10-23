import React from "react";
import Home from "./home/Home";
import Header from "./header/Header";
import TopRated from "./pages/topRated/TopRated";
import Favorite from "./pages/favorite/Favorite";
import { Route, Routes } from "react-router-dom";
import Papular from "./pages/popular/Papular";
import MovieDatails from "./pages/movieDetails/MovieDatails";
import Search from "./search/Search";
import Footer from "./footer/Footer";
import Trend from "./pages/Trend/trend";


const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/popular" element={<Papular />} />
        <Route path="/trend" element={<Trend />} />
        <Route path="/topRated" element={<TopRated />} />
        <Route path="/moviDeatils/:movieId" element={<MovieDatails />} />
        <Route path="/search/:kinoName" element={<Search />} />
        <Route path="/favorite" element={<Favorite />} />{" "}
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
