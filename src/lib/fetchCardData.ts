import { hotelsData } from "@/data/cardsData"
import { Hotel } from "@/types/hotel"

export const fetchCardData = async (): Promise<Hotel[]> => hotelsData

export const fetchCardById = async (id: string): Promise<Hotel | undefined> =>{
    const data = await fetchCardData();
    return data.find((hotel)=> hotel.id.toString() === id)
}