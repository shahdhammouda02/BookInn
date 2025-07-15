import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useTranslations } from "next-intl";
import { useServiceData } from "@/hooks/useServiceData";
import type { Service } from "@/types/page";
import {ServiceCard} from './ServiceCard'

const MostRequestedServices: React.FC<{ isRTL?: boolean }> = ({ isRTL = false }) => {
  const t = useTranslations("Home.MostRequested");
  const { data: servicesData, isLoading, isError } = useServiceData();

  if (isLoading) {
    return (
      <div className="text-center py-12">
        <p>{t("loading")}</p>
      </div>
    );
  }

  if (isError || !servicesData) {
    return (
      <div className="text-center py-12 text-red-500">
        <p>{t("error")}</p>
      </div>
    );
  }

  return (
    <section className="mt-18 py-12 bg-background border-0" dir={isRTL ? "rtl" : "ltr"}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">{t("sectionTitle")}</h2>

        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          autoplay={{ delay: 1500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {servicesData.map((service: Service) => (
            <SwiperSlide key={service.id}>
              <ServiceCard service={service} isRTL={isRTL} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default MostRequestedServices;