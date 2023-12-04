import React from "react";
import Nav from "../../Components/Nav/Nav";
import requests from "../../api/request";
import Detail from "../../Components/Detail";
import styled from "styled-components";
import "./MainPage.css";
import BackGroundImage from "../../kr.svg"
const MainPage = () => {
  return (
    <Container className="station_btn">
      <Detail title="인천" className="btn btn_incheon" fetchGetDust={requests.fetchIncheon} />
      <Detail title="서울" className="btn btn_seoul" fetchGetDust={requests.fetchSeoul} />
      <Detail title="경기" className="btn btn_gyeonggi" fetchGetDust={requests.fetchGyeongGi} />
      <Detail title="충북" className="btn btn_chungbuk" fetchGetDust={requests.fetchChungbuk} />
      <Detail title="세종" className="btn btn_sejong" fetchGetDust={requests.fetchSejong} />
      <Detail title="충남" className="btn btn_chungnam" fetchGetDust={requests.fetchChungnam} />
      <Detail title="경북" className="btn btn_gyeongbuk" fetchGetDust={requests.fetchGyeongbuk} />
      <Detail title="대전" className="btn btn_daejeon" fetchGetDust={requests.fetchDaejeon} />
      <Detail title="전북" className="btn btn_jeonbuk" fetchGetDust={requests.fetchJeonbuk} />
      <Detail title="대구" className="btn btn_daegu" fetchGetDust={requests.fetchDaegu} />
      <Detail title="울산" className="btn btn_ulsan" fetchGetDust={requests.fetchUlsan} />
      <Detail title="부산" className="btn btn_busan" fetchGetDust={requests.fetchBusan} />
      <Detail title="경남" className="btn btn_gyeongnam" fetchGetDust={requests.fetchGyeongnam} />
      <Detail title="광주" className="btn btn_gwangju" fetchGetDust={requests.fetchGwangju} />
      <Detail title="전남" className="btn btn_jeonnam" fetchGetDust={requests.fetchJeonnam} />
      <Detail title="제주" className="btn btn_jeju" fetchGetDust={requests.fetchJeju} />
      <Nav />
    </Container>
  );
};

export default MainPage;
const Container = styled.main`
position: relative;
background-color: lightgray;
font-family: Avenir-Roman, sans-serif;
margin: 0;
padding: 0;
background-image: url(${BackGroundImage});
background-repeat: no-repeat;
background-size: cover;
background-position: top;
width: 1200px;
height:1500px;
`
