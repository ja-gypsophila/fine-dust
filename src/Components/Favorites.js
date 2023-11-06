import React, { useState } from "react";
import "./Favorites.css";
import Row from "./Station";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { IconContext } from "react-icons";

const Favorites = ({ sido, favorites, toggleFavorite, gradeEmoticon }) => {
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
      <li>미세먼지 지수: {gradeEmoticon(sido.pm10Grade)}</li>
      <li>초미세먼지 지수: {gradeEmoticon(sido.pm25Grade)}</li>
      <li>일산화탄소 지수: {gradeEmoticon(sido.coGrade)}</li>
      <li>이산화질소 지수: {gradeEmoticon(sido.no2Grade)}</li>
      <li>오존 지수: {gradeEmoticon(sido.o3Grade)}</li>
      <li>통합 대기환경 지수: {gradeEmoticon(sido.khaiGrade)}</li>
    </div>
  );
};

export default Favorites;
