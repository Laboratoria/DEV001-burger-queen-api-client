import React from "react";
import { Link } from "react-router-dom";
import { LOGIN } from "../../config/routes/paths.js";
import "./Header.css";

const Header = () => {
  return (
    <header className="bienvenida" title="header">
      <span> Burger Queen</span>

      <Link to={LOGIN} role="button">
        <i className="fa-solid fa-right-to-bracket "></i>
      </Link>
    </header>
  );
};
export default Header;
