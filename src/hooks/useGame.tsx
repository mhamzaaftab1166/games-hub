import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import React from "react";
import ApiClient from "../services/api-client";
import { Game } from "./useGames";
const apiClient = new ApiClient<Game>("/games");
const useGame = (slug: string) =>
  useQuery({
    queryKey: ["games", slug],
    queryFn: () => apiClient.getOne(slug),
    staleTime: ms("1h"),
  });

export default useGame;
