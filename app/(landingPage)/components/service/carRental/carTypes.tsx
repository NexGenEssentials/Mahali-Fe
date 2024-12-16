import { CarDetails } from "@/app/constants/arrays";
import Link from "next/link";
import React from "react";
import { Autoplay, Keyboard, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import CarCard from "./carCard";
import "swiper/css";
import "swiper/css/keyboard";
import "swiper/css/pagination";
const CarTypes = () => {
  return (
    <div className="">
      <Swiper
        autoplay={{
          delay: 5000,
        }}
        pagination={{
          type: "fraction",
        }}
        slidesPerView={1}
        spaceBetween={10}
        speed={500}
        loop={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1320: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1621: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
        modules={[Keyboard, Pagination, Autoplay]}
        className="mySwiper "
      >
        <div className="flex gap-4 items-stretch justify-center mx-4 ">
          {CarDetails.map((car, index) => (
            <SwiperSlide key={index} className="py-4 mb-6 px-2">
              <Link href={"#"}>
                <CarCard
                  car={car.car}
                  name={car.name}
                  category={car.category}
                  price={car.price}
                  period={car.period}
                  transimission={car.transmission}
                />
              </Link>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default CarTypes;
