import "./App.css";
import { Routes, Route } from "react-router-dom";
import StationPage from "./Pages/StationPage/index";
import FavoritesPage from "./Pages/Favoritespage/index";
import MainPage from "./Pages/MainPage";
import { getStation } from "./Redux/Slice/stationSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const [errorMg, setErrorMg] = useState("");
  const search = useSelector((state) => state.persistedReducer.search.data);
  console.log(search);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStation(search))
      .unwrap()
      .then((response) => {
        console.log("###response", response);
      })
      .catch((error) => {
        console.log("###Error", error);
        setErrorMg(error.message);
      });
  }, [dispatch, search]);

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
