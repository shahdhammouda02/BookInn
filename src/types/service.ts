import type { StaticImageData } from "next/image";

export interface Service {
  id: number;
  image: StaticImageData;
  titleKey: string;
  rating: number;
}

export interface ServiceCardProps {
  service: Service;
  isRTL?: boolean;
}
