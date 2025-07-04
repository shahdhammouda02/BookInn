import React from "react";
import { Home } from "@/features/page";
import { hotelsData } from "@/data/cardsData";

const page = () => {
  return (
    <>
      <Home hotels={hotelsData} />
    </>
  );
};

export default page;
