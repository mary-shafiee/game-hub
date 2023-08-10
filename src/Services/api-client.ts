import axios from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
} 

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "2154c7815d9649068375d3284745e4a7",
  },
});
