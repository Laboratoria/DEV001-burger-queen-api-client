import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="control">
      <img
        src="https://github.com/aniapalominoq/DEV001-burger-queen-api-client/blob/main/src/assets/loading.gif?raw=true"
        alt="loading"
      />
      <h1 className="title has-text-centered ">Loading...</h1>
    </div>
  );
};
export default Loader;
