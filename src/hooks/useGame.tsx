import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import ApiClient from "../services/api-client";
import { Game } from "../entities/Game";
const apiClient = new ApiClient<Game>("/games");
const useGame = (slug: string) =>
  useQuery({
    queryKey: ["games", slug],
    queryFn: () => apiClient.getOne(slug),
    staleTime: ms("1h"),
  });

export default useGame;
