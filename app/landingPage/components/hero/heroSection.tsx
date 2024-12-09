"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import Image from "next/image";
import { motion } from "motion/react";
import { Parks } from "@/app/constants/arrays";
import Button from "../buttons/button";

const HeroSection = () => {
  return (
    <div className="w-full ">
      <Swiper
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        loop={true}
        effect="fade"
        pagination={{ clickable: true }}
        speed={500}
        modules={[Pagination, Autoplay, EffectFade]}
        className="mySwiper w-full h-full"
      >
        {Parks.map((item, index) => (
          <SwiperSlide
            key={index}
            className="w-full bg-black h-fit grid place-content-center"
          >
            <div className="relative w-full h-screen 2xl:h-[800px]">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover opacity-50"
              />
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50, overflow: "hidden" }}
                animate={{ opacity: 1, x: 50 }}
                transition={{ duration: 1, ease: "backInOut" }}
                className="max-w-[1750px] mx-auto  absolute top-1/3 right-1/3 px-8 py-4 text-white flex flex-col gap-6 w-3/4 lg:w-[40%]"
              >
                <h1 className="text-4xl font-bold">{item.title}</h1>
                <p className="text-sm italic">
                  &quot; {item.description} &quot;
                </p>
                <Button name="Explore More" />
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSection;
