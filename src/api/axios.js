import axios from "axios";

// const getDust = useCallback(
//   async (search) => {
//     try {
//       const response = await fetch(
//         `http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?serviceKey=${API_KEY}&returnType=json&numOfRows=50&pageNo=1&sidoName=${search}`
//       );
//       if (!response.ok) {
//         throw new Error(
//           `서버에서 오류 응답을 받았습니다. 상태 코드: ${response.status}`
//         );
//       }

//       // JSON 형식 확인
//       const contentType = response.headers.get("content-type");
//       if (!contentType || !contentType.includes("application/json")) {
//         throw new Error("올바른 JSON 응답이 아닙니다.");
//       }
//       const json = await response.json();
//       console.log(json.response.body.items);
//       setstationName(json.response.body.items);
//       setLoading(false);
//     } catch (error) {
//       console.log(error);
//     }
//   },
//   [API_KEY]
// );

export const instance = axios.create({
  baseURL: `http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?serviceKey="MC%2B2%2B5MdW%2BBsybf6%2FGq%2BuvRPph6nN%2BBjHzyBH4zTP555b5P6zdHc2nBidBWmb9FS4hipOh1ejgnkIlvYHk1dgA%3D%3D"&returnType=json&numOfRows=50&pageNo=1&sidoName=`,
  params: {
    language: "ko-KR",
  },
});

export default instance;
