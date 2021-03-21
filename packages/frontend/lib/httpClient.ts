import axios from "axios";

const API_BASE_URL: string = "http://localhost:1337";

export const client = axios.create({
  baseURL: API_BASE_URL,
});

export const fetcher = (url) => client.get(url).then((res) => res.data);

export const appendURL = (url: string): string => {
  return `${API_BASE_URL}${url}`;
};
