import React, { useEffect, useState, useCallback } from "react";
import styled from "styled-components";
import useDebounce from "../../Components/hooks/useDebounce";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { IconContext } from "react-icons";
import "./Row.css";
import Emoticon from "../../Components/hooks/useGradeEmoticon";
import FavoritesPage from "../Favoritespage";
import Nav from "../../Components/Nav";

const StationPage = (favorites) => {
  //  로딩 창 전환
  const [loading, setLoading] = useState(true);

  const [show, setShow] = useState(false);

  // 구 리스팅
  const [stationName, setstationName] = useState([]);

  // 검색창에 value값으로 위치 지정
  const [searchValue, setSearchValue] = useState("인천");

  // //  즐겨찾기
  const [favorites, setFavorites] = useState([]);

  const API_KEY = `MC%2B2%2B5MdW%2BBsybf6%2FGq%2BuvRPph6nN%2BBjHzyBH4zTP555b5P6zdHc2nBidBWmb9FS4hipOh1ejgnkIlvYHk1dgA%3D%3D`;
  // useDebounce를 통해 검색창에 딜레이를 만듬.
  const SearchTerm = useDebounce(searchValue, 500);

  //  미세먼지 api 불러오기
  const getDust = useCallback(
    async (search) => {
      try {
        const response = await fetch(
          `http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?serviceKey=${API_KEY}&returnType=json&numOfRows=10&pageNo=1&sidoName=${search}`
        );
        if (!response.ok) {
          throw new Error(
            `서버에서 오류 응답을 받았습니다. 상태 코드: ${response.status}`
          );
        }

        // JSON 형식 확인
        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          throw new Error("올바른 JSON 응답이 아닙니다.");
        }
        const json = await response.json();
        console.log(json.response.body.items);
        setstationName(json.response.body.items);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    },
    [API_KEY]
  );

  // 하트를 눌렀을때 중복을 체크한 후 만약 중복이라면 return 중복이 아닐시 setFavorites로 보냄
  const toggleFavorite = (sido) => {
    // 중복을 체크
    if (favorites.some((item) => item.stationName === sido.stationName)) {
      setFavorites(
        favorites.filter((item) => item.stationName !== sido.stationName)
      );

      return;
    }
    setShow(true);

    setFavorites([...favorites, sido]);
  };
  const checkHandler = () => {
    console.log(favorites);
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
        <button onClick={checkHandler}>checkHandler</button>
        {stationName.map((sido) => (
          <Contents key={sido.stationName}>
            <h3>{sido.stationName}</h3>
            <IconContext.Provider
              value={{
                color: "red",
                className: "heart-outlined",
                size: "2em",
                // icon의 style수정
              }}
            >
              <div onClick={() => toggleFavorite(sido)}>
                {favorites.some(
                  (item) => item.stationName === sido.stationName
                  // favorites에 있는 item을 비교하여 true일땐 <MdFavorite />  false일땐 <MdFavoriteBorder />
                ) ? (
                  <MdFavorite />
                ) : (
                  // 꽉찬 하트
                  <MdFavoriteBorder />
                  // 비어있는 하트
                )}
              </div>
            </IconContext.Provider>
            <li>미세먼지 지수: {<Emoticon grade={sido.pm10Grade} />}</li>
            <li>초미세먼지 지수: {<Emoticon grade={sido.pm25Grade} />}</li>
            <li>일산화탄소 지수: {<Emoticon grade={sido.coGrade} />}</li>
            <li>이산화질소 지수: {<Emoticon grade={sido.no2Grade} />}</li>
            <li>오존 지수: {<Emoticon grade={sido.o3Grade} />}</li>
            <li>통합 대기환경 지수 : {<Emoticon grade={sido.khaiGrade} />}</li>
          </Contents>
        ))}
        <Nav />
      </div>
      {show ? null : (
        <FavoritesPage favorites={favorites} toggleFavorite={toggleFavorite} />
      )}
    </Wrap>
  );
};

const mapStateToProps = (state) => {
  return { favorites: state };
};

export default StationPage;

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
