import "./Favorites.css";
import styled from "styled-components";
import { MdFavorite } from "react-icons/md";
import { IconContext } from "react-icons";
import Emoticon from "../../Components/hooks/useGradeEmoticon";
import Nav from "../../Components/Nav";
import { connect } from "react-redux";
import { removeFavorite } from "../../Redux/Slice/favoriteSlice";

const FavoritesPage = ({ favorites, removeFavorites }) => {
  const toggleFavorites = (stationName) => {
    const isFavorite = favorites.some(
      (favorite) => favorite.stationName === stationName.stationName
    );
    console.log(isFavorite);
    if (isFavorite) {
      removeFavorites(stationName);
    }
  };
  return (
    <Container>
      {favorites.map((sido) => (
        <Contents key={sido.stationName}>
          <h3>{sido.stationName}</h3>
          <IconContext.Provider
            value={{
              color: "red",
              className: "heart-outlined",
              size: "2em",
              // icon의 style 수정
            }}
          >
            <div onClick={() => toggleFavorites(sido)}>
              <MdFavorite />
            </div>
          </IconContext.Provider>
          <li>미세먼지 지수: {<Emoticon grade={sido.pm10Grade} />}</li>
          <li>초미세먼지 지수: {<Emoticon grade={sido.pm25Grade} />}</li>
          <li>일산화탄소 지수: {<Emoticon grade={sido.coGrade} />}</li>
          <li>이산화질소 지수: {<Emoticon grade={sido.no2Grade} />}</li>
          <li>오존 지수: {<Emoticon grade={sido.o3Grade} />}</li>
          <li>통합 대기환경 지수: {<Emoticon grade={sido.khaiGrade} />}</li>
        </Contents>
      ))}
      <Nav />
    </Container>
  );
};
const mapStateToProps = (state) => {
  return { favorites: state.favorites };
};
const mapDispatchToProps = (dispatch) => {
  return {
    removeFavorites: (location) => dispatch(removeFavorite(location)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesPage);

const Contents = styled.div``;
const Container = styled.div``;
