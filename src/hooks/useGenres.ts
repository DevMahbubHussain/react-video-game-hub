import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import ms from "ms";
import { Genre } from "../entities/Genre";

const apiClient = new APIClient<Genre>("/genres");
// const useGenres = () => useData<Genre>("/genres");

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    // staleTime: 24 * 60 * 60 * 1000, //24h
    staleTime: ms("24h"),
  });

export default useGenres;
