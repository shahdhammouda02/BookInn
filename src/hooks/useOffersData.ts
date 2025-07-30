import { useQuery } from "@tanstack/react-query";
import { mockOffers } from "@/data/mockOffers";

export const useOffersData = ()=>{
    return useQuery({
        queryKey:["offers"],
        queryFn: async ()=>{
            await new Promise((res)=>setTimeout(res, 1000))
            return mockOffers
        }
    })
}