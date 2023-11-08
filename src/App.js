import "./App.css";
import { Routes, Route } from "react-router-dom";
import StationPage from "./Pages/StationPage/index";
import FavoritesPage from "./Pages/Favoritespage/index";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<StationPage />} />
        <Route path="favorites" element={<FavoritesPage />} />
      </Routes>
    </div>
  );
}

export default App;
