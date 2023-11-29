import React, { useEffect, useState } from "react";
import styled from "styled-components";
import useDebounce from "../../Components/hooks/useDebounce";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { IconContext } from "react-icons";
import "./Station.css";
import Emoticon from "../../Components/hooks/useGradeEmoticon";
import Nav from "../../Components/Nav";
import { useDispatch, useSelector } from "react-redux";
import { removeFavorite, addFavorite } from "../../Redux/Slice/favoriteSlice";
import { setSearchSidoName } from "../../Redux/Slice/searchSidoSlice";
import {
  selectFavoritesSelector,
  selectSearchSelector,
} from "../../Redux/Selector/memoSelector";

const StationPage = () => {
  const dispatch = useDispatch();

  // 검색창에 value값으로 위치 지정
  const [searchValue, setSearchValue] = useState("");

  // useDebounce를 통해 검색창에 딜레이를 만듬.
  const searchTerm = useDebounce(searchValue, 500);

  const searchStation = useSelector(selectSearchSelector);
  const favoritesStation = useSelector(selectFavoritesSelector);

  const heartEmo = (emo) => {
    return (
      <IconContext.Provider
        value={{
          color: "red",
          className: "heart-outlined",
          size: "2em",
          // icon의 style수정
        }}
      >
        {emo}
      </IconContext.Provider>
    );
  };

  const toggleFavorites = (selectedStation) => {
    const isFavorite = favoritesStation.some(
      (favorite) => favorite.stationName === selectedStation.stationName
    );
    if (isFavorite) {
      dispatch(removeFavorite(selectedStation));
    } else {
      dispatch(addFavorite(selectedStation));
    }
  };
  useEffect(() => {
    dispatch(setSearchSidoName(searchTerm));
  }, [dispatch, searchTerm]);

  return (
    <Wrap className="station">
      <Input
        className="input_btn"
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="도시를 입력하세요"
      ></Input>
      경기, 서울, 충북, 인천, 강원, 세종, 충남, 경북, 대전, 전북, 대구, 울산,
      부산, 경남, 광주, 전남, 제주
      <div className="contents_box">
        {searchStation.map((sido) => (
          <Contents key={sido.stationName}>
            <h3 className="contents_title">{sido.stationName}</h3>

            <div
              className="contents_like"
              onClick={() => {
                toggleFavorites(sido);
              }}
            >
              {favoritesStation.some(
                (favorite) => favorite.stationName === sido.stationName
              )
                ? heartEmo(<MdFavorite />)
                : heartEmo(<MdFavoriteBorder />)}
            </div>

            <li className="contents_list">
              미세먼지 지수: {<Emoticon grade={sido.pm10Grade} />}
            </li>
            <li className="contents_list">
              초미세먼지 지수: {<Emoticon grade={sido.pm25Grade} />}
            </li>
            <li className="contents_list">
              일산화탄소 지수: {<Emoticon grade={sido.coGrade} />}
            </li>
            <li className="contents_list">
              이산화질소 지수: {<Emoticon grade={sido.no2Grade} />}
            </li>
            <li className="contents_list">
              오존 지수: {<Emoticon grade={sido.o3Grade} />}
            </li>
            <li className="contents_list">
              통합 대기환경 지수 : {<Emoticon grade={sido.khaiGrade} />}
            </li>
          </Contents>
        ))}
        <Nav />
      </div>
    </Wrap>
  );
};

export default StationPage;
const Wrap = styled.div``;
const Contents = styled.div`
  display: flex;
  width: auto;
  height: 250px;
  flex-direction: column;
  margin: 0px 30px 10px 15px;
`;
const Input = styled.input`
  position: fixed;
  right: 20%;
  background-color: rgba(0, 0, 0, 0.582);
  border-radius: 50px;
  text-align: right;
  color: white;
  padding: 5px;
  height: 20px;
  width: 25px;
`;
