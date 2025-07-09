import { hotelsData } from "@/data/cardsData";

export const fetchCardData = async()=>{
    return new Promise<typeof hotelsData>((resolve)=>{
        setTimeout(() => {
            resolve(hotelsData)
        }, 500);
    })
}