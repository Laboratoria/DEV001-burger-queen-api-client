import React from "react";
import { Link } from "react-router-dom";
import { LOGIN } from "../../config/routes/paths.js";
import style from "./Header.module.css";

const Header = () => {
  const readLocalStorage = JSON.parse(localStorage.getItem("users"));

  return (
    <nav className="navbar has-background-danger is-flex is-align-content-center is-justify-content-space-between ">
      <div className="icon-text is-flex is-align-content-center is-justify-content-center px-6  ">
        <span className="icon fa fas-2px  has-text-light">
          <i className="fa-solid fa-burger fas fa-4x"></i>
        </span>
        <span className="icon mx-6">
          <strong className="has-text-light is-size-4">burger queen</strong>
        </span>
      </div>

      <div className=" is-flex p-4 is-align-items-end is-4">
        {readLocalStorage ? (
          <div className="is-flex is-flex-direction-column is-align-items-center is-justify-content-center  ">
            <img
              className={style.avatar}
              src="https://avatars.githubusercontent.com/u/105249248?v=4"
            />
            <span>
              <strong className="is-size-6">
                {/* {readLocalStorage.users.name} */}
              </strong>
            </span>
            <span className="tag is-warning ">
              {/* {readLocalStorage.users.role} */}
            </span>
          </div>
        ) : null}
        <div className="dropdown is-right is-active">
          <div className="dropdown-trigger">
            <button
              className="button is-large is-danger"
              aria-haspopup="true"
              aria-controls="dropdown-menu2"
            >
              <span className="icon is-large">
                <i className="fas fa-angle-down"></i>
              </span>
            </button>
          </div>
          <div className="dropdown-menu" id="dropdown-menu2" role="menu">
            <div className="dropdown-content">
              <div className="dropdown-item">
                <Link to={LOGIN} role="button">Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Header;
