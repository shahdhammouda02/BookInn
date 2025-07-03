"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Star, Heart, MapPin } from "lucide-react";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { useTranslations } from "next-intl";

interface HotelCardProps {
  hotel: {
    id: number;
    image: string;
    title: string;
    location: string;
    rating: number;
    isFavorite: boolean;
    price: string;
  };
  isRTL?: boolean;
}

export const HotelCard = ({ hotel, isRTL = false }: HotelCardProps) => {
  const t = useTranslations("Home.HotelCard");
  const [isFavorite, setIsFavorite] = useState(hotel.isFavorite);
  const [imageError, setImageError] = useState(false);

  const toggleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  return (
    <Card
      className={`transition-all duration-300 hover:scale-[1.02] hover:shadow-lg focus:scale-[1.02] focus:shadow-lg outline-none border-border h-full flex flex-col group overflow-hidden ${
        isRTL ? "rtl" : ""
      }`}
    >
      <CardContent className="p-0 flex-1 relative -mt-[25px]">
        <div className="relative h-48 w-full">
          <Image
            src={imageError ? "" : hotel.image}
            alt={hotel.title}
            fill
            className="object-cover rounded-t-lg"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            onError={() => setImageError(true)}
          />
        </div>
      </CardContent>

      <CardHeader
        className={`flex flex-col gap-4 py-4 ${isRTL ? "text-right" : ""}`}
      >
        <div
          className={`flex justify-between items-center w-full ${
            isRTL ? "flex-row-reverse" : ""
          }`}
        >
          <CardTitle className="text-lg font-semibold flex-1">
            {hotel.title}
          </CardTitle>
          <button
            onClick={toggleFavorite}
            className={`p-2 bg-white/80 rounded-full hover:bg-white transition-colors ${
              isRTL ? "mr-4" : "ml-4"
            }`}
            aria-label={isFavorite ? t("removeFavorite") : t("addFavorite")}
          >
            <Heart
              className={`w-5 h-5 ${
                isFavorite ? "fill-red-500 text-red-500" : "text-gray-600"
              }`}
            />
          </button>
        </div>

        <div
          className={`flex justify-between items-center w-full ${
            isRTL ? "flex-row-reverse" : ""
          }`}
        >
          <div
            className={`flex items-center gap-1 text-sm text-muted-foreground flex-1 ${
              isRTL ? "flex-row-reverse" : ""
            }`}
          >
            <MapPin className="w-4 h-4" />
            <span>{hotel.location}</span>
          </div>
          <div className={`flex items-center gap-1 ${isRTL ? "mr-0" : "ml-0"}`}>
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">{hotel.rating}</span>
          </div>
        </div>
      </CardHeader>

      <CardFooter className={`pt-0 ${isRTL ? "text-right" : ""}`}>
        <p className="text-lg font-semibold text-primary">{hotel.price}</p>
      </CardFooter>
    </Card>
  );
};
