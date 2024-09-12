import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import APIClient, { FetchResponse } from "../services/api-client";
import useGameQueryStore from "../store";
import { Platform } from "./usePlatforms";

const apiClient = new APIClient<Game>("/games");
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);
  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: async ({ pageParam = 1 }) => {
      const response = await apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      });
      return response;
    },
    getNextPageParam: (lastPage) => {
      return lastPage.next ? lastPage.results.length + 1 : undefined;
    },
    staleTime: ms("24h"),
  });
};

export default useGames;

// genres: selectedGenre?.id:
// genres: This is the name of the query parameter key that will be sent to the server.

// selectedGenre?.id:
// This uses optional chaining (?.) to safely access the id property of the selectedGenre object.

// If selectedGenre is null or undefined, the optional chaining operator (?.) will short-circuit and return undefined instead of throwing an error. This prevents potential runtime errors if selectedGenre is not defined or null.

// if selectedGenre is defined and has an id property, the value of selectedGenre.id will be used as the value of the genres query parameter.

// Resulting Query String:
// If selectedGenre is { id: 5 }, this line would result in the query string ?genres=5.

// If selectedGenre is null or undefined, the genres parameter will not be included in the query string (depending on how the library handles undefined values).
