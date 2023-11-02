import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: `https://dapi.kakao.com`,
  headers: {
    Authorization: `KakaoAK ${process.env.REACT_APP_KEY}`,
  },
});
