import React, { useEffect, useState, useCallback } from "react";
import styled from "styled-components";
import useDebounce from "../Components/hooks/useDebounce";
import Favorite from "../Components/Favorites";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { IconContext } from "react-icons";
import "./Row.css";

const Row = () => {
  //  로딩 창 전환
  const [loading, setLoading] = useState(true);

  // 구 리스팅
  const [stationName, setstationName] = useState([]);

  // 검색창에 value값으로 위치 지정
  const [searchValue, setSearchValue] = useState("인천");

  //  즐겨찾기
  const [favorites, setFavorites] = useState([]);

  const API_KEY = `MC%2B2%2B5MdW%2BBsybf6%2FGq%2BuvRPph6nN%2BBjHzyBH4zTP555b5P6zdHc2nBidBWmb9FS4hipOh1ejgnkIlvYHk1dgA%3D%3D`;
  // useDebounce를 통해 검색창에 딜레이를 만듬.
  const SearchTerm = useDebounce(searchValue, 500);

  //  미세먼지 api 불러오기
  const getDust = useCallback(
    async (search) => {
      try {
        const json = await (
          await fetch(
            `http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?serviceKey=${API_KEY}&returnType=json&numOfRows=10&pageNo=1&sidoName=${search}
          `
          )
        ).json();
        console.log(json.response.body.items);
        setstationName(json.response.body.items);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    },
    [API_KEY]
  );

  const toggleFavorite = (sido) => {
    // 중복을 체크
    if (favorites.some((item) => item.stationName === sido.stationName)) {
      setFavorites(
        favorites.filter((item) => item.stationName !== sido.stationName)
      );
      return;
    }

    // 즐겨찾기에 요소들을 보냄
    setFavorites([...favorites, sido]);
  };

  useEffect(() => {
    if (SearchTerm) getDust(SearchTerm);
  }, [SearchTerm, getDust]);

  return loading ? (
    <div>
      <Input
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="도시를 입력하세요"
      ></Input>
    </div>
  ) : (
    <Wrap>
      <Input
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="도시를 입력하세요"
      ></Input>
      <div>
        {stationName.map((sido) => (
          <Contents key={sido.stationName}>
            <h3>{sido.stationName}</h3>
            <IconContext.Provider
              value={{
                color: "red",
                className: "heart-outlined",
                size: "2em",
              }}
            >
              <div onClick={() => toggleFavorite(sido)}>
                {favorites.some(
                  (item) => item.stationName === sido.stationName
                ) ? (
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
          </Contents>
        ))}
      </div>
      <div>
        <h2>Favorites</h2>
        {favorites.map((sido) => (
          <Favorite
            key={sido.stationName}
            sido={sido}
            favorites={favorites}
            toggleFavorite={toggleFavorite}
          />
        ))}
      </div>
    </Wrap>
  );
};

export default Row;

const Wrap = styled.div``;
const Contents = styled.div``;
const Input = styled.input`
  position: fixed;
  left: 50%;
  transform: translate(-50%, 0);
  background-color: rgba(0, 0, 0, 0.582);
  border-radius: 5px;
  color: white;
  padding: 5px;
  border: 1px solid lightgray;
`;
