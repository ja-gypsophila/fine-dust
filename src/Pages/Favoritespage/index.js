import "./Favorites.css";
import styled from "styled-components";
import { MdFavorite } from "react-icons/md";
import { IconContext } from "react-icons";
import Emoticon from "../../Components/hooks/useGradeEmoticon";
import Nav from "../../Components/Nav";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../../Redux/Slice/favoriteSlice";
import { selectFavoritesSelector } from "../../Redux/Selector/memoSelector";

const FavoritesPage = () => {
  const dispatch = useDispatch();
  const favoritesStation = useSelector(selectFavoritesSelector);

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

  console.log(favoritesStation);
  return (
    <Wrap>
      <div className="contents_box">
        {favoritesStation.map((sido) => (
          <Contents key={sido.stationName}>
            <h3 className="contents_title">{sido.stationName}</h3>
            <IconContext.Provider
              value={{
                color: "red",
                className: "heart-outlined",
                size: "2em",
                // icon의 style 수정
              }}
            >
              <div
                onClick={() => {
                  toggleFavorites(sido);
                }}
              >
                <MdFavorite />
              </div>
            </IconContext.Provider>
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
              통합 대기환경 지수: {<Emoticon grade={sido.khaiGrade} />}
            </li>
          </Contents>
        ))}
        <Nav />
      </div>
    </Wrap>
  );
};

export default FavoritesPage;

const Wrap = styled.div``;
const Contents = styled.div`
  display: flex;
  width: auto;
  height: 250px;
  flex-direction: column;
  margin: 0px 30px 10px 15px;
`;
