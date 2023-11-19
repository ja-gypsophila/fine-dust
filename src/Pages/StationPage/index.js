import React, { useEffect, useState, useCallback } from "react";
import styled from "styled-components";
import useDebounce from "../../Components/hooks/useDebounce";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { IconContext } from "react-icons";
import "./Row.css";
import Emoticon from "../../Components/hooks/useGradeEmoticon";
import Nav from "../../Components/Nav";
import { connect } from "react-redux";
import { removeFavorite, addfavorite } from "../../Redux/Slice/favoriteSlice";

const StationPage = ({ favorites, addFavorites, removeFavorites }) => {
  //  로딩 창 전환
  const [loading, setLoading] = useState(true);

  // 구 리스팅
  const [stationName, setstationName] = useState([]);

  // 검색창에 value값으로 위치 지정
  const [searchValue, setSearchValue] = useState("인천");

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
  const checkHandler = () => {
    console.log(favorites);
  };

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

  const toggleFavorites = (selectedStationName) => {
    const isFavorite = favorites.some(
      (favorite) => favorite === selectedStationName
    );

    console.log(isFavorite);
    if (isFavorite) {
      removeFavorites(selectedStationName);
    } else {
      addFavorites(selectedStationName);
    }
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

      <button onClick={checkHandler}>checkHandler</button>
      <div>
        {stationName.map((sido) => (
          <Contents key={sido.stationName}>
            <h3>{sido.stationName}</h3>

            <div onClick={() => toggleFavorites(sido)}>
              {favorites.some(
                (favorite) => favorite.stationName === sido.stationName
              )
                ? heartEmo(<MdFavorite />)
                : heartEmo(<MdFavoriteBorder />)}
            </div>
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
    </Wrap>
  );
};
const mapStateToProps = (state) => {
  return { favorites: state.favorites };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFavorites: (location) => dispatch(addfavorite(location)),
    removeFavorites: (location) => dispatch(removeFavorite(location)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StationPage);
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
