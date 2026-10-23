import React from "react";
import logo from "../assets/img/Без названия.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="footer">
          <div className="log">
            <img width={"200px"} src={logo} alt="" />
          </div>
          <div className="footer-column">
            <h3>Главное</h3>
            <p>О TMDB</p>
            <p>Документация API</p>
            <p>API для Бизнеса</p>
            <p>Статус системы</p>
          </div>

          <div className="footer-column">
            <h3>Участвуйте</h3>
            <p>Библия редакторов</p>
            <p>Добавить новый фильм</p>
            <p>Добавить новый сериал</p>
          </div>

          <div className="footer-column">
            <h3>Сообщество</h3>
            <p>Руководства</p>
            <p>Доска почёта</p>
            <p>Форумы поддержки</p>
          </div>

          <div className="footer-column">
            <h3>О праве</h3>
            <p>Условия использования</p>
            <p>API Правила использования</p>
            <p>Политика конфиденциальности</p>
            <p>Политика CDMCA</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
