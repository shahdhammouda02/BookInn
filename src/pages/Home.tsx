"use client";

import React from "react";
import { useLocale } from "next-intl";
import Offers from "@/components/offers";
import MostRequestedServices from "@/components/service/MostRequestedServices";
import { HotelList } from "@/components/hotel/HotelList";

export const Home = () => {
  const locale = useLocale();
  const isRTL = locale === "ar";

  return (
    <div className="container mx-auto px-4 py-5">
      <HotelList isRTL={isRTL} />
      <Offers />
      <MostRequestedServices />
    </div>
  );
};
