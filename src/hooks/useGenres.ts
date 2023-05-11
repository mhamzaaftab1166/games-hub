import { useQuery } from "@tanstack/react-query";
import useData, { FetchResponse } from "./useData";
import apiClient from "../services/api-client";
import genres from "../data/genres";
export interface Genre {
  id: number;
  name: string;
  image_background: string;
}
const useGenre = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient.get<FetchResponse<Genre>>("/genres").then((res) => res.data),
    staleTime: 1 * 60 * 1000, //1m
    initialData: genres,
  });
export default useGenre;
