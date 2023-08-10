import { useQuery } from "@tanstack/react-query";
import APIClient from "../Services/api-client";
import { Genre } from "../Components/GenreList";
import { FetchResponse } from "../Services/api-client";
import genres from "../datas/genres";

const apiClient = new APIClient<Genre>('/genres');
const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24hr
    initialData: { count: genres.length, results: genres },
  });

export default useGenres;
