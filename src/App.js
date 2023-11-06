import "./App.css";
import styled from "styled-components";
import Nav from "./Components/Nav";
import Station from "./Components/Station";
import { Routes, Route, Outlet } from "react-router-dom";

const Layout = () => {
  <div>
    <Nav />

    <Outlet />
  </div>;
};

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/" element={<Station />} />
        <Route path="/" element={<Nav />} />
      </Routes>
    </div>
  );
}

export default App;

const Container = styled.div``;
