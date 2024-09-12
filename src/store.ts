import { create } from "zustand";

// GameQuery: This interface defines the shape of the query object with optional properties like genreId, platformId, sortOrder, and searchText.
interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
  searchText?: string;
}

// GameQueryStore: This interface defines the shape of your Zustand store.
/**
 * It has:
 * gameQuery: The current state of the game query, which follows the GameQuery interface.
 * Methods like setSearchText, setGenreId, etc., to update specific parts of the gameQuery.
 */
interface GameQueryStore {
  gameQuery: GameQuery;
  setSearchText: (searchText: string) => void;
  setGenreId: (genreId: number) => void;
  setPlatformId: (platformId: number) => void;
  setsortOrder: (sortOrder: string) => void;
}

/**
 * create<GameQueryStore>: This creates the Zustand store based on the GameQueryStore interface.
 *
 * (set): set is the function used to update the store.
 * gameQuery: {}: Initializes the gameQuery object as an empty object.
 *
 * setSearchText: Updates only the searchText in the gameQuery object:
 *
 * It calls set with a new gameQuery object containing only searchText. All other fields in gameQuery are reset.
 *
 * setGenreId, setPlatformId, setsortOrder: These methods update their respective fields (genreId, platformId, or sortOrder) while keeping the existing values in gameQuery:
 *
 * The ...store.gameQuery spreads the current gameQuery values, ensuring only the targeted property is updated while preserving others.
 */
const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},
  setSearchText: (searchText) => set(() => ({ gameQuery: { searchText } })),
  setGenreId: (genreId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genreId } })),
  setPlatformId: (platformId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, platformId } })),
  setsortOrder: (sortOrder) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, sortOrder } })),
}));

export default useGameQueryStore;
