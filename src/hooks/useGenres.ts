import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";
import genres from "../data/genres";
import ms from "ms";
const apiClient = new ApiClient<Genre>("/genres");
export interface Genre {
  id: number;
  name: string;
  image_background: string;
}
const useGenre = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms("1h"),
    initialData: genres,
  });
export default useGenre;
