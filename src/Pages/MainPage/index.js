import React from "react";
import Nav from "../../Components/Nav";
import requests from "../../api/request";
import Detail from "../../Components/Detail";
import styled from "styled-components";
import "./MainPage.css";
const MainPage = () => {
  return (
    <Container className="main">
      <Detail title="인천" fetchGetDust={requests.fetchIncheon} />
      <Detail title="서울" fetchGetDust={requests.fetchSeoul} />
      <Detail title="경기" fetchGetDust={requests.fetchGyeongGi} />
      <Detail title="충북" fetchGetDust={requests.fetchChungbuk} />
      <Detail title="세종" fetchGetDust={requests.fetchSejong} />
      <Detail title="충남" fetchGetDust={requests.fetchChungnam} />
      <Detail title="경북" fetchGetDust={requests.fetchGyeongbuk} />
      <Detail title="대전" fetchGetDust={requests.fetchDaejeon} />
      <Detail title="전북" fetchGetDust={requests.fetchJeonbuk} />
      <Detail title="대구" fetchGetDust={requests.fetchDaegu} />
      <Detail title="울산" fetchGetDust={requests.fetchUlsan} />
      <Detail title="부산" fetchGetDust={requests.fetchBusan} />
      <Detail title="경남" fetchGetDust={requests.fetchGyeongnam} />
      <Detail title="광주" fetchGetDust={requests.fetchGwangju} />
      <Detail title="전남" fetchGetDust={requests.fetchJeonnam} />
      <Detail title="제주" fetchGetDust={requests.fetchJeju} />
      <Nav />
    </Container>
  );
};

export default MainPage;
const Container = styled.main``;
