"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { EffectCards, Pagination } from "swiper/modules";
import { Gallery } from "@/app/constants/arrays";
import { motion } from "motion/react";

export default function GalerrySection() {
  return (
    <section
      
      className="flex items-center justify-center"
    >
      <Swiper
        effect={"cards"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        pagination={{ clickable: true }}
        modules={[EffectCards, Pagination]}
        className="mySwiper w-3/5 overflow-hidden"
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
