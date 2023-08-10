import { useQuery } from "@tanstack/react-query";
import apiClient from "../Services/api-client";
import { Genre } from "../Components/GenreList";
import { FetchResponse } from "../Services/api-client";
import genres from "../datas/genres";

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient.get<FetchResponse<Genre>>("/genres").then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, //24hr
    initialData: { count: genres.length, results: genres },
  });

export default useGenres;
