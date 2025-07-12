import type { StaticImageData } from "next/image";

export interface Hotel {
  id: number;
  image: StaticImageData;
  titleKey: string;
  locationKey: string;
  rating: number;
  isFavorite: boolean;
  price: string;
}

export interface HotelCardProps {
  hotel: Hotel;
  isRTL?: boolean;
}
