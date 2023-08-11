import { useQuery } from "@tanstack/react-query";
import APIClient from "../Services/api-client";
import { Genre } from "../Components/GenreList";
import genres from "../datas/genres";

const apiClient = new APIClient<Genre>('/genres');
const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24hr
    initialData: genres,
  });

export default useGenres;
