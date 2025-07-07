import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Autoplay, Pagination, Navigation} from 'swiper/modules'
import Image from 'next/image'
import { servicesData } from '@/data/servicesData'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useTranslations } from 'next-intl'

const MostRequestedServices = ({isRTL = false}: {isRTL?: boolean}) => {
    const t = useTranslations('Home.MostRequested');

  return (
    <section className='mt-18 py-12 bg-background border-0' dir={isRTL ? 'rtl' : ''}>
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl font-bold text-center mb-8'>{t('sectionTitle')}</h2>

        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {servicesData.map((service) => (
            <SwiperSlide key={service.id}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
                <div className="relative h-48">
                  <Image
                    src={service.image} 
                    alt={t(`titles.${service.titleKey}`)}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-2 right-2 bg-black bg-opacity-70 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center">
                    <span className="text-yellow-400 mr-1">★</span>
                    <span>{service.rating}</span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                    <h3 className="text-white font-semibold text-lg">
                      {t(`titles.${service.titleKey}`)}
                    </h3>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}   
        </Swiper>
      </div>
    </section>
  )
}

export default MostRequestedServices