import {
  image1, image2, image3, image4, image5,
  image6, image7, image8, image9, image10
} from '../../public/images/page';

export interface ServiceCard {
  id: number;
  image: any;
  titleKey: string;
  rating: number;
}

export const servicesData: ServiceCard[] = [
  {
    id: 1,
    image: image1,
    titleKey: "premiumTitle",
    rating: 4.8,
  },
  {
    id: 2,
    image: image2,
    titleKey: "deluxeTitle",
    rating: 4.5,
  },
  {
    id: 3,
    image: image3,
    titleKey: "standardTitle",
    rating: 4.7,
  },
  {
    id: 4,
    image: image4,
    titleKey: "luxuryTitle",
    rating: 4.6,
  },
  {
    id: 5,
    image: image5,
    titleKey: "boutiqueTitle",
    rating: 4.3,
  },
  {
    id: 6,
    image: image6,
    titleKey: "resortTitle",
    rating: 4.9,
  },
  {
    id: 7,
    image: image7,
    titleKey: "seasideTitle",
    rating: 4.2,
  },
  {
    id: 8,
    image: image8,
    titleKey: "urbanTitle",
    rating: 4.7,
  },
  {
    id: 9,
    image: image9,
    titleKey: "gardenViewTitle",
    rating: 4.4,
  },
  {
    id: 10,
    image: image10,
    titleKey: "villaTitle",
    rating: 4.5,
  },
  {
    id: 11,
    image: image3,
    titleKey: "classicTitle",
    rating: 4.2,
  },
  {
    id: 12,
    image: image4,
    titleKey: "grandTitle",
    rating: 4.9,
  },
  {
    id: 13,
    image: image8,
    titleKey: "oasisTitle",
    rating: 4.4,
  }
];