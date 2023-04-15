import axios, { AxiosError, CanceledError } from "axios";
export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "55ac309cdae64a0083c70483fd9703e5",
  },
});
