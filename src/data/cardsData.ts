import {
image1,
image2, image3, image4, image5, image6, image7, image8
} from '../../public/images/page'
export interface HotelCard {
  id: number;
  image: any;
  title: string;
  location: string;
  rating: number;
  isFavorite: boolean;
  price: string;
}

export const hotelsData: HotelCard[] = [
  {
    id: 1,
    image: image1,
    title: "BookInn Premium",
    location: "Downtown, City",
    rating: 4.5,
    isFavorite: false,
    price: "$120/night"
  },
  {
    id: 2,
    image: image2,
    title: "BookInn Deluxe",
    location: "Beachfront, Coastal",
    rating: 4.7,
    isFavorite: true,
    price: "$180/night"
  },
  // Add more hotels as needed (8-12 total is good for demo)
  {
    id: 3,
    image: image3,
    title: "BookInn Standard",
    location: "Suburbs, City",
    rating: 4.2,
    isFavorite: false,
    price: "$90/night"
  },
  {
    id: 4,
    image: image4,
    title: "BookInn Luxury",
    location: "Mountain View",
    rating: 4.8,
    isFavorite: true,
    price: "$220/night"
  },
  {
    id: 5,
    image: image5,
    title: "BookInn Boutique",
    location: "Historic District",
    rating: 4.3,
    isFavorite: false,
    price: "$110/night"
  },
  {
    id: 6,
    image: image6,
    title: "BookInn Resort",
    location: "Lakeside",
    rating: 4.6,
    isFavorite: true,
    price: "$150/night"
  },
  {
    id: 7,
    image: image7,
    title: "BookInn Resort",
    location: "Lakeside",
    rating: 4.6,
    isFavorite: true,
    price: "$150/night"
  },
  {
    id: 8,
    image: image8,
    title: "BookInn Resort",
    location: "Lakeside",
    rating: 4.6,
    isFavorite: true,
    price: "$150/night"
  },
];