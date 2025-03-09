"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/keyboard"

import { EffectCards, Keyboard, Pagination } from "swiper/modules";
import { Gallery } from "@/app/constants/arrays";

export default function GalerrySection() {
  return (
    <section
      
      className="w-full flex items-center justify-center"
    >
      <Swiper
        effect={"cards"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        keyboard={{
          enabled: true,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCards, Pagination, Keyboard]}
        className="mySwiper w-[90%] md:w-3/5 overflow-hidden"
      >
        {Gallery.map((image, index) => (
          <SwiperSlide key={index} className="flex items-center justify-center">
            <div className="relative w-full h-[320px] border p-4 rounded-lg">
              <Image
                src={image}
                alt="nyungwe park"
                fill={true}
                className="object-cover rounded-md"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
