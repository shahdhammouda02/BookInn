"use client";

import React from "react";
import { useLocale } from "next-intl";
import Offers from "./components/Offers";
import MostRequestedServices from "./components/MostRequestedServices";
import { HotelList } from "@/features/home/components/HotelList";

const Home = () => {
  const locale = useLocale();
  const isRTL = locale === "ar";

  return (
    <div className="container mx-auto px-4 py-5">
      <HotelList isRTL={isRTL} />
      <Offers />
      <MostRequestedServices />
    </div>
  );
}

export default Home