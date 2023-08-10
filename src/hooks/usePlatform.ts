import { useQuery } from "@tanstack/react-query";
import apiClient from "../Services/api-client";
import { FetchResponse } from "../Services/api-client";
import Game from '../datas/platforms'
import platforms from "../datas/platforms";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatform = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Platform>>("/platforms/lists/parents")
        .then((res) => res.data),
        staleTime: 24 * 60 * 60 * 1000, //24hr
        // initialData: { count: platforms.length, results: platforms },    
  });

export default usePlatform;
