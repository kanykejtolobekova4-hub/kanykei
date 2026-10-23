import React, { useState } from "react";
import header from "../assets/img/header.svg";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaSearch, FaSun } from "react-icons/fa";
import "./Header.css";
import Home from "../home/Home";
import Search from "../search/Search";
import { useContext } from "react";
import { MovieContext } from "../context";

const Header = () => {
  const nav = useNavigate();
  const [movieName, setMovieName] = useState("");
  const { t, setLang } = useContext(MovieContext);

  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <div className="left">
            <Link to="/">
              <img width="230px" src={header} alt="" />
            </Link>

            <NavLink to="/popular" className="link">
              {t.popular}
            </NavLink>
            <NavLink to="/topRated" className="link">
              {t.series}
            </NavLink>
            <NavLink to="/favorite" className="link">
              {t.favorite}
            </NavLink>
          </div>
          <div className="rigth">
            <a href="">
              <FaSun />
            </a>
            <select onChange={(e) => setLang(e.target.value)}>
              <option value="en">EN</option>
              <option value="ru">RU</option>
            </select>
            <input
              type="text"
              placeholder={t.searchPlaceholder}
              onChange={(e) => setMovieName(e.target.value)}
            />
            <a className="bt" onClick={() => nav(`/search/${movieName}`)}>
              <FaSearch />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
