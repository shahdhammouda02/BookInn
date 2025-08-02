import { StaticImageData } from "next/image";

export interface Offer{
  id: number,
  titleKey: string;
  descriptionKey: string;
  price: number;
  image: StaticImageData;
  rating: number;
  originalPrice?: number;
  expiresAt?: string
}

export interface offersProp {
  offers: Offer[]
}