import axios from "axios";

export const instance = axios.create({
  baseURL: `http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?`,
});
export default instance;
