import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import ApiClient from "../services/api-client";
import Trailor from "../entities/Trailor";

const useTrailors = (gameId: number) => {
  const apiClient = new ApiClient<Trailor>(`/games/${gameId}/movies`);
  return useQuery({
    queryKey: ["trailors", gameId],
    queryFn: apiClient.getAll,
    staleTime: ms("1h"),
  });
};

export default useTrailors;
