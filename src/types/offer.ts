import { StaticImageData } from "next/image";

export interface Offer{
  id: number,
  title: string;
  description: string;
  price: number;
  image: StaticImageData;
  rating: number;
  originalPrice?: number;
  expiresAt?: string
}

export interface offersProp {
  offers: Offer[]
}