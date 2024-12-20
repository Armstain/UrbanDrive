import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay } from "swiper/modules";

import Hyundai from "../assets/Hyundai.png";
import Nissan from "../assets/nissan.png";
// import Nissan2 from '../assets/nissan2.png';
import Suzuki from "../assets/suzuki.jpg";
import Toyota from "../assets/toyota.jpg";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { MdArrowForward, MdDirectionsCar } from "react-icons/md";

interface Car {
  name: string;
  image: string;
}

const BrowseByCar: React.FC = () => {
  const { t } = useTranslation();
  const cars: Car[] = [
    { name: t("Toyota"), image: Toyota },
    { name: t("Honda"), image: Hyundai },
    { name: t("Nissan"), image: Nissan },
    { name: t("BMW"), image: Suzuki },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-text mb-3 font-serif relative inline-block">
          {t("browseByCar")}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1/2 h-1 bg-secondary rounded-full"></div>
        </h2>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          },
        }}
        modules={[Autoplay]}
        className="pb-14"
      >
        {cars.map((car, index) => (
          <SwiperSlide key={index}>
            <Link 
              to={`/model/${car?.name}`} 
              className="block group"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div 
                  className="h-64 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${car.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                    <div className="absolute bottom-0 p-5 w-full">
                      <div className="flex items-center gap-2 mb-3">
                        <MdDirectionsCar className="text-secondary text-xl" />
                        <h3 className="text-xl font-bold text-background">
                          {car.name}
                        </h3>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-background/80 text-sm">
                          {t("Explore cars")}
                        </span>
                        <div className="bg-secondary p-2 rounded-full transform translate-x-2 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                          <MdArrowForward className="text-background text-lg" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* <style>{`
        .swiper-wrapper {
          margin: 20px 0;
        }
      `}</style> */}
    </div>
  );
};

export default BrowseByCar;
