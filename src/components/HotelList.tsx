"use client";

import React, { useState } from "react";
import { HotelCard } from "@/components/hotel-card";
import { useCardData } from "@/hooks/useCardData";
import { useTranslations } from "next-intl";
import { CardPaginationNumbers } from "@/components/pagination";
import { hotelsData } from "@/data/cardsData";

export const HotelList = ({ isRTL = false }: { isRTL?: boolean }) => {
  const t = useTranslations("Home.HotelCard");
  const { data, isLoading, isError } = useCardData();

  const ITEMS_PER_PAGE = 12;
  const [page, setPage] = useState(1);

  if (isLoading) {
    return (
      <div className="text-center py-12">
        <p>{t("loading")}</p>
      </div>
    );
  }
  if (isError || !hotelsData) {
    return (
      <div className="text-center py-12 text-red-500">
        <p>{t("error")}</p>
      </div>
    );
  }

  const paginatedHotels =
    data?.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE) || [];
  const totalPages = Math.ceil((data?.length || 0) / ITEMS_PER_PAGE);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
        {paginatedHotels.map((hotel) => (
          <HotelCard
            key={hotel.id}
            hotel={{
              id: hotel.id,
              image: hotel.image ?? "",
              title: t(`titles.${hotel.titleKey}`),
              location: t(`locations.${hotel.locationKey}`),
              rating: hotel.rating ?? 0,
              isFavorite: hotel.isFavorite ?? false,
              price: hotel.price ?? "N/A",
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
            isRTL={isRTL}
          />
        </div>
      )}
    </>
  );
};
