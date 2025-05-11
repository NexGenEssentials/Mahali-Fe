"use client";
import React from "react";
import { ServiceList } from "@/app/constants/arrays";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/keyboard";
import { Keyboard, Navigation } from "swiper/modules";
import { HeaderSection } from "../headers/header";
import Link from "next/link";

const ServiceSection = () => {
  return (
    <div
      id="service"
      className="max-w-[1750px] mx-auto p-2 sm:p-8 w-full bg-slate-100 bg-opacity-20"
    >
      <HeaderSection title="Services" subtitle="Tours & Travel Services" />
      <div className="sm:pt-8 ">
        <Swiper
          pagination={{
            type: "fraction",
          }}
          slidesPerView={1}
          spaceBetween={10}
          keyboard={{
            enabled: true,
          }}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1320: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            1621: {
              slidesPerView: 5,
              spaceBetween: 10,
            },
          }}
          
          modules={[Navigation,Keyboard]}
          className="mySwiper  "
        >
          <div className="flex gap-4 items-stretch justify-center mx-4 ">
            {ServiceList.map((service, index) => (
              <SwiperSlide key={index} className="py-4 mb-4">
                <Link href={service.link}>
                <div className="bg-white hover:scale-95 hover:duration-500 drop-shadow-md group cursor-pointer p-6 border rounded-md flex flex-col items-center justify-center gap-2">
                  <div className="p-2 group-hover:bg-primaryGreen group-hover:duration-500 border-2 border-primaryGreen">
                    <Icon
                      icon={service.icon}
                      width="30"
                      height="30"
                      className="group-hover:text-primaryWhite group-hover:duration-500 text-primaryGreen"
                    />
                  </div>
                  <span className="mt-2 text-sm font-semibold">
                    {service.title}
                  </span>
                  <span className="text-xs text-center text-slate-600">
                    {service.description}
                  </span>
                </div>
                </Link>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default ServiceSection;
