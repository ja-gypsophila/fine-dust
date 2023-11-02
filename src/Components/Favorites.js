import React, { useState } from "react";
import App from "../App";
import "./Favorites.css";
import Row from "./Row";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { IconContext } from "react-icons";

const Favorites = ({ sido, favorites, toggleFavorite }) => {
  return (
    <div>
      <h3>{sido.stationName}</h3>
      <IconContext.Provider
        value={{
          color: "red",
          className: "heart-outlined",
          size: "2em",
        }}
      >
        <div onClick={() => toggleFavorite(sido)}>
          {favorites.some((item) => item.stationName === sido.stationName) ? (
            <MdFavorite />
          ) : (
            <MdFavoriteBorder />
          )}
        </div>
      </IconContext.Provider>
      <li>미세먼지 농도: {sido.pm10Value}</li>
      <li>초미세먼지 농도: {sido.pm25Value}</li>
      <li>일산화탄소 농도: {sido.coValue}</li>
      <li>아황산가스 농도: {sido.so2Value}</li>
      <li>오존 농도: {sido.o3Value}</li>
    </div>
  );
};

export default Favorites;
