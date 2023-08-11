import { useQuery } from "@tanstack/react-query";
import platforms from "../datas/platforms";
import APIClient from "../Services/api-client";
import ms from 'ms'

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const apiClient = new APIClient<Platform>('/platforms/lists/parents');

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
        staleTime: ms('24h'), //24hr
        initialData: platforms  ,    
  });

export default usePlatforms;
