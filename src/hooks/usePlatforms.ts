import { useQuery } from "@tanstack/react-query";
import platforms from "../datas/platforms";
import APIClient from "../Services/api-client";

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
        staleTime: 24 * 60 * 60 * 1000, //24hr
        initialData: platforms  ,    
  });

export default usePlatforms;
