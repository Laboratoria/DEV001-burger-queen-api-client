import React from "react";
import { Link } from "react-router-dom";
import Logout from "../../components/Logout/Logout";
import Menu from "../../components/menu/menu";
import "./WaiterView.css";

const WaiterView = () => {
  const dateUser = JSON.parse(localStorage.getItem("users"));

  return (
    <>
      <header className="header-waiterView">
        <span className="icon-text">
          <span className="icon  fa fas-2px is-large">
            <i className="fa-solid fa-burger fas fa-2x"></i>
          </span>
          <span className="title">{dateUser.user.role}</span>
        </span>

        <span className="fiel">
          <span className="title">{`${dateUser.user.firstname} ${dateUser.user.lastname}`}</span>
        </span>
        <span>
          <i className="fa-duotone fa-user-tie-hair"> </i>
          <Logout />
        </span>
      </header>
      <div className="is-justify-content-center ">
      <h1 className="title is-1 has-text-white m-4 p-4">Tables</h1>
      </div>
      <div className="container-tables">
        <Link to="" className="item-tables" onClick={}>
          <p className="title-tables"><div>
          <img src="https://img.icons8.com/ios-filled/50/000000/restaurant-table.png"/>
          </div> Mesa N°1</p>
        </Link>
        <Link to="" className="item-tables">
          <p className="title-tables"><div>
          <img src="https://img.icons8.com/ios-filled/50/000000/restaurant-table.png"/>
          </div> Mesa N°2</p>
        </Link>
        <Link to="" className="item-tables">
          <p className="title-tables"><div>
          <img src="https://img.icons8.com/ios-filled/50/000000/restaurant-table.png"/>
          </div> Mesa N°3</p>
        </Link>
        <Link to="" className="item-tables">
          <p className="title-tables"><div>
          <img src="https://img.icons8.com/ios-filled/50/000000/restaurant-table.png"/>
          </div> Mesa N°4</p>
        </Link>
        <Link to="" className="item-tables">
          <p className="title-tables"><div>
          <img src="https://img.icons8.com/ios-filled/50/000000/restaurant-table.png"/>
          </div> Mesa N°5</p>
        </Link>
        <Link to="" className="item-tables">
          <p className="title-tables"><div>
          <img src="https://img.icons8.com/ios-filled/50/000000/restaurant-table.png"/>
          </div> Mesa N°6</p>
        </Link>
        <Link to="" className="item-tables">
          <p className="title-tables"><div>
          <img src="https://img.icons8.com/ios-filled/50/000000/restaurant-table.png"/>
          </div> Mesa N°7</p>
        </Link>
        <Link to="" className="item-tables">
          <p className="title-tables"><div>
          <img src="https://img.icons8.com/ios-filled/50/000000/restaurant-table.png"/>
          </div> Mesa N°8</p>
        </Link>
        <Link to="" className="item-tables">
          <p className="title-tables"><div>
          <img src="https://img.icons8.com/ios-filled/50/000000/restaurant-table.png"/>
          </div> Mesa N°9</p>
        </Link>
        <Link to="" className="item-tables">
          <p className="title-tables"><div>
          <img src="https://img.icons8.com/ios-filled/50/000000/restaurant-table.png"/>
          </div> Mesa N°10</p>
        </Link>
        <Link to="" className="item-tables">
          <p className="title-tables"><div>
          <img src="https://img.icons8.com/ios-filled/50/000000/restaurant-table.png"/>
          </div> Mesa N°11</p>
        </Link>
        <Link to="" className="item-tables">
          <p className="title-tables"><div>
          <img src="https://img.icons8.com/ios-filled/50/000000/restaurant-table.png"/>
          </div> Mesa N°12</p>
        </Link>
      </div>
    </>
  );
};

export default WaiterView;
