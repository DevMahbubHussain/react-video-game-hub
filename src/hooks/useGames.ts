import { GameQuery } from "../App";
import useData from "./useData";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = (
  // selectedGenre: Genre | null,
  // selectedPlatform: Platform | null
  gameQuery: GameQuery
) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.order,
        search: gameQuery.searchText,
      },
    },
    [gameQuery]
  );

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
