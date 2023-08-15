import { useQuery } from "@tanstack/react-query";
import APIClient from "../Services/api-client";
import { Genre } from "../entities/Genre";
import genres from "../datas/genres";
import ms from "ms";

const apiClient = new APIClient<Genre>("/genres");
const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"), //24hr
    initialData: genres,
  });

export default useGenres;
