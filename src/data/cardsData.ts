import {
  image1, image2, image3, image4, image5, 
  image6, image7, image8, image9, image10
} from '../../public/images/page'

export interface HotelCard {
  id: number;
  image: any;
  titleKey: string;
  locationKey: string;
  rating: number;
  isFavorite: boolean;
  price: string;
}

export const hotelsData: HotelCard[] = [
  {
    id: 1,
    image: image1,
    titleKey: "premiumTitle",
    locationKey: "downtownLocation",
    rating: 4.5,
    isFavorite: false,
    price: "$120/night"
  },
  {
    id: 2,
    image: image2,
    titleKey: "deluxeTitle",
    locationKey: "beachfrontLocation",
    rating: 4.7,
    isFavorite: true,
    price: "$90/night"
  },
  {
    id: 3,
    image: image3,
    titleKey: "standardTitle",
    locationKey: "suburbsLocation",
    rating: 4.2,
    isFavorite: false,
    price: "$170/night"
  },
  {
    id: 4,
    image: image4,
    titleKey: "luxuryTitle",
    locationKey: "mountainViewLocation",
    rating: 4.8,
    isFavorite: false,
    price: "$220/night"
  },
  {
    id: 5,
    image: image5,
    titleKey: "boutiqueTitle",
    locationKey: "historicDistrictLocation",
    rating: 4.3,
    isFavorite: false,
    price: "$110/night"
  },
  {
    id: 6,
    image: image6,
    titleKey: "resortTitle",
    locationKey: "lakesideLocation",
    rating: 4.6,
    isFavorite: false,
    price: "$150/night"
  },
  {
    id: 7,
    image: image7,
    titleKey: "seasideTitle",
    locationKey: "oceanfrontLocation",
    rating: 4.4,
    isFavorite: false,
    price: "$185/night"
  },
  {
    id: 8,
    image: image8,
    titleKey: "urbanTitle",
    locationKey: "cityCenterLocation",
    rating: 4.1,
    isFavorite: false,
    price: "$95/night"
  },
  {
    id: 9,
    image: image9,
    titleKey: "gardenViewTitle",
    locationKey: "botanicalGardensLocation",
    rating: 4.3,
    isFavorite: false,
    price: "$290/night"
  },
  {
    id: 10,
    image: image3,
    titleKey: "classicTitle",
    locationKey: "oldTownLocation",
    rating: 4.2,
    isFavorite: false,
    price: "$100/night"
  },
  {
    id: 11,
    image: image5,
    titleKey: "boutiqueTitle",
    locationKey: "historicDistrictLocation",
    rating: 4.3,
    isFavorite: false,
    price: "$110/night"
  },
  {
    id: 12,
    image: image10,
    titleKey: "villaTitle",
    locationKey: "modernLuxuryLocation",
    rating: 4.6,
    isFavorite: false,
    price: "$450/night"
  },
  {
    id: 13,
    image: image4,
    titleKey: "grandTitle",
    locationKey: "mainSquareLocation",
    rating: 4.9,
    isFavorite: false,
    price: "$250/night"
  },
  {
    id: 14,
    image: image8,
    titleKey: "oasisTitle",
    locationKey: "desertRetreatLocation",
    rating: 4.4,
    isFavorite: false,
    price: "$140/night"
  },
  {
    id: 15,
    image: image9,
    titleKey: "gardenViewTitle",
    locationKey: "botanicalGardensLocation",
    rating: 4.3,
    isFavorite: false,
    price: "$290/night"
  },
  {
    id: 16,
    image: image6,
    titleKey: "resortTitle",
    locationKey: "lakesideLocation",
    rating: 4.6,
    isFavorite: false,
    price: "$150/night"
  },
  {
    id: 17,
    image: image10,
    titleKey: "villaTitle",
    locationKey: "modernLuxuryLocation",
    rating: 4.6,
    isFavorite: false,
    price: "$450/night"
  },
  {
    id: 18,
    image: image1,
    titleKey: "premiumTitle",
    locationKey: "downtownLocation",
    rating: 4.5,
    isFavorite: false,
    price: "$120/night"
  },
];