"use client";

import React from "react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useTranslations } from "next-intl";
import type { ServiceCardProps } from "@/types/page";
import { Star } from "lucide-react";

export const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  isRTL = false,
}) => {
  const t = useTranslations("Home.MostRequested");

  return (
    <div
      className={`bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 ${
        isRTL ? "rtl" : ""
      }`}
    >
      <div className="relative h-48">
        <Image
          src={service.image}
          alt={t(`titles.${service.titleKey}`)}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-2 right-2 bg-black bg-opacity-70 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center">
          <Star
            className="w-3.5 h-3.5 text-yellow-400 mr-1"
            fill="currentColor"
          />
          <span>{service.rating}</span>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
          <h3 className="text-white font-semibold text-lg">
            {t(`titles.${service.titleKey}`)}
          </h3>
        </div>
      </div>
    </div>
  );
};
