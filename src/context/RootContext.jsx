import React, { useEffect, useState } from "react";
import { MovieContext } from ".";
import { translations } from "../translations";

const RootContext = ({ children }) => {
  const [favorite, setFavorite] = useState([]);
  const [lang, setLang] = useState("ru");

  function getlacolFavorite() {
    let res = JSON.parse(localStorage.getItem("favorite")) || [];
    setFavorite(res);
  }

  useEffect(() => {
    getlacolFavorite();
  }, []);

  return (
    <MovieContext.Provider
      value={{
        favorite,
        setFavorite,
        lang,
        setLang,
        t: translations[lang],
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default RootContext;
