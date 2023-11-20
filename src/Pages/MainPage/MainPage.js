import React from "react";
import Nav from "../../Components/Nav";
import requests from "../../api/request";
const MainPage = () => {
  return (
    <div>
      <button title="" id="" fetchUrl={requests.fetchIncheon}>
        인천
      </button>
      <button title="" id="" fetchUrl={requests.fetchSeoul}>
        서울
      </button>
      <button title="" id="" fetchUrl={requests.fetchGyeongGi}>
        경기
      </button>
      <button title="" id="" fetchUrl={requests.fetchChungbuk}>
        충북
      </button>
      <button title="" id="" fetchUrl={requests.fetchSejong}>
        세종
      </button>
      <button title="" id="" fetchUrl={requests.fetchChungnam}>
        충남
      </button>
      <button title="" id="" fetchUrl={requests.fetchGyeongbuk}>
        경북
      </button>
      <button title="" id="" fetchUrl={requests.fetchDaejeon}>
        대전
      </button>
      <button title="" id="" fetchUrl={requests.fetchJeonbuk}>
        전북
      </button>
      <button title="" id="" fetchUrl={requests.fetchDaegu}>
        대구
      </button>
      <button title="" id="" fetchUrl={requests.fetchUlsan}>
        울산
      </button>
      <button title="" id="" fetchUrl={requests.fetchBusan}>
        부산
      </button>
      <button title="" id="" fetchUrl={requests.fetchGyeongnam}>
        경남
      </button>
      <button title="" id="" fetchUrl={requests.fetchGwangju}>
        광주
      </button>
      <button title="" id="" fetchUrl={requests.fetchJeonnam}>
        전남
      </button>
      <button title="" id="" fetchUrl={requests.fetchJeju}>
        제주
      </button>

      <Nav />
    </div>
  );
};

export default MainPage;
