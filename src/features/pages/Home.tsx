"use client";

import React, { useState } from "react";
import { HotelCard } from "@/components/hotel-card";
import { CardPaginationNumbers } from "@/components/pagination";
import { useLocale, useTranslations } from "next-intl";
import Offers from "@/components/offers";

export const Home = ({ hotels }: any) => {
  const t = useTranslations("Home.HotelCard");
  const locale = useLocale();
  const isRTL = locale === "ar";

  //Paginations
  const ITEMS_PER_PAGE = 8;
  const [page, setPage] = useState(1);

  const paginatedHotels = hotels.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  const totalPages = Math.ceil(hotels.length / ITEMS_PER_PAGE);

  return (
    <div className="container mx-auto px-4 py-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
        {paginatedHotels.map((hotel: any) => (
          <HotelCard
            key={hotel.id}
            hotel={{
              ...hotel,
              title: t(`titles.${hotel.titleKey}`),
              location: t(`locations.${hotel.locationKey}`),
            }}
            isRTL={isRTL}
          />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="mt-8">
          <CardPaginationNumbers
            currentPage={page}
            totalPages={totalPages}
            onPageChange={setPage}
          />
        </div>
      )}

      <Offers />
    </div>
  );
};
