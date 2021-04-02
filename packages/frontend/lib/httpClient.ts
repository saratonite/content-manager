import axios from "axios";
import useSWR from "swr";

const API_BASE_URL: string = "/api";

export const client = axios.create({
  baseURL: API_BASE_URL,
});

export const fetcher = (url) => client.get(url).then((res) => res.data);

export const appendURL = (url: string): string => {
  return `${API_BASE_URL}${url}`;
};

export interface RequestInfo {
  error: any;
  data: any;
  loading: boolean;
}
export const useRequest = (url: string): RequestInfo => {
  const { data, error } = useSWR(url, fetcher);

  return {
    data,
    error,
    loading: !data ? true : false,
  };
};
