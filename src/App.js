import "./App.css";
import { Routes, Route } from "react-router-dom";
import StationPage from "./Pages/StationPage/index";
import FavoritesPage from "./Pages/Favoritespage/index";
import MainPage from "./Pages/MainPage";
import { getStation } from "./Redux/Slice/stationSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSidoNameSelector } from "./Redux/Selector/memoSelector";

function App() {
  const [errorMg, setErrorMg] = useState("");
  const sidoName = useSelector(selectSidoNameSelector)


  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStation(sidoName))
      .unwrap()
      .then((response) => {
        console.log("###response", response);
      })
      .catch((error) => {
        console.log("###Error", error);
        setErrorMg(error.message);
      });
  }, [dispatch, sidoName]);

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="station" element={<StationPage />} />
        <Route path="favorites" element={<FavoritesPage />} />
      </Routes>
    </div>
  );
}

export default App;
