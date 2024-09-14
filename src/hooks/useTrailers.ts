import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Trailers } from "../entities/Trailers";

const useTarilers = (gameId: number) => {
  const apiClient = new APIClient<Trailers>(`/games/${gameId}/movies`);
  return useQuery({
    queryKey: ["trailers", gameId],
    queryFn: apiClient.getAll,
  });
};

export default useTarilers;
