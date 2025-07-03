'use client';

import React, { useState } from 'react';
import { HotelCard } from '@/components/hotel-card';
import { CardPaginationNumbers } from "@/components/pagination";

export const Home = ({ hotels }: any) => {
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
          <HotelCard key={hotel.id} hotel={hotel} />
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
    </div>
  );
};