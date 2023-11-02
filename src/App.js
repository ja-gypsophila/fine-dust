import { useCallback, useEffect, useState } from "react";
import "./App.css";
import DetailPage from "./Components/Detail";
import styled from "styled-components";
import Nav from "./Components/Nav";
import Row from "./Components/Row";

function App() {
  return (
    <Container>
      <Row />
      <Nav />
    </Container>
  );
}

export default App;

const Container = styled.div``;
