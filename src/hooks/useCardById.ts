import { useQuery } from "@tanstack/react-query";
import { fetchCardById } from "@/lib/fetchCardData";

export const useCardById = (id:string) =>{
    return useQuery({
        queryKey: ['hotel', id],
        queryFn: () => fetchCardById(id),
        enabled: !!id
    })
}