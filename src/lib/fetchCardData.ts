import { hotelsData } from "@/data/cardsData"
import { Hotel } from "@/types/hotel"

export const fetchCardData = async (): Promise<Hotel[]> => hotelsData
