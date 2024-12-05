"use client";
import React from "react";
import { ServiceList } from "@/app/constants/arrays";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const ServiceSection = () => {
  return (
    <div className="max-w-[1750px] mx-auto p-8 w-full bg-slate-100 bg-opacity-20">
      <div className="w-full flex flex-col gap-4 justify-center items-center">
        <div className="text-defaultGreen flex items-center gap-2">
          <span className="h-[2px] w-12 block bg-defaultGreen"></span>
          <h2 className="font-semibold text-lg leading-8 tracking-normal">
            Service
          </h2>
          <span className="h-[2px] w-12 block bg-defaultGreen"></span>
        </div>
        <h1 className="text-4xl font-bold ">Tours & Travel Services</h1>
      </div>
      <div className="py-8 ">
        <Swiper
          pagination={{
            type: "fraction",
          }}
          slidesPerView={4}
          spaceBetween={10}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper  "
        >
          <div className="flex gap-4 items-center justify-center mx-4 ">
            {ServiceList.map((service, index) => (
              <SwiperSlide key={index} className="py-4 mb-4">
                <div className="bg-white hover:scale-95 hover:duration-500 drop-shadow-md group w-[300px] h-[200px] cursor-pointer p-6 border rounded-md flex flex-col items-center justify-center gap-2">
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
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default ServiceSection;
