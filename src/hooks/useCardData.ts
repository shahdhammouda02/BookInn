import { useQuery } from "@tanstack/react-query";
import { fetchCardData } from "@/lib/fetchCardData";

export const useCardData = ()=>{
    return useQuery({
        queryKey: ['hotelsData'],
        queryFn: fetchCardData,
    });
};