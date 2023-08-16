import { useQuery } from "@tanstack/react-query";
import APIClient from "../Services/api-client";
import { Screenshots } from "../entities/Screenshots";



const useScreenshots = (gamePK : number) =>{
    const apiClient = new APIClient<Screenshots>(`/games/${gamePK}/screenshots`)
    return useQuery  ({
        queryKey:['screenshots' , gamePK],
        queryFn : apiClient.getAll
    }) 
}

export default useScreenshots;