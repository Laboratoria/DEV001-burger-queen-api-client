import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Loader from "../../components/Loader/Loader";

import Logout from "../../components/Logout/Logout";
import "./WaiterView.css";

const WaiterView = () => {
  const dateUser = JSON.parse(localStorage.getItem("users"));
  const [arrayTables, setArrayTables] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/tables")
      .then((res) => res.json())
      .then((data) => setArrayTables(data));
  }, []);

  return (
    <>
      <Header />
      <h1 className="title is-1 has-text-centered">Tables</h1>

      <div className="field is-flex  is-flex-wrap-wrap is-justify-content-center  is-align-content-space-evenly">
        {arrayTables.length === 0 ? (
          <Loader />
        ) : (
          arrayTables.map((elem) => (
            <Link
              to="/waiterView/orders"
              className="box m-4  has-background-light is-flex is-flex-direction-column is-justify-content-center"
              key={elem.id_table}
            >
              <span className="field is-flex is-flex-direction-column is-justify-content-center is-align-content-center">
                <figure className="image is-128x128 is-flex is-justify-content-center ">
                  <img src="https://img.icons8.com/ios-filled/250/restaurant-table.png" />
                </figure>

                <span className="title is-4">
                  {" "}
                  Table N° {elem.number_table}
                </span>
              </span>
            </Link>
          ))
        )}
      </div>
    </>
  );
};

export default WaiterView;
