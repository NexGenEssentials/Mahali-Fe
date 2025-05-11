"use client";
import React from "react";
import Button from "../buttons/button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/keyboard"
import { Autoplay, Keyboard, Pagination } from "swiper/modules";

import Image from "next/image";
import Link from "next/link";
import { Testimonial } from "@/app/constants/arrays";
const TestimonialSection = () => {
  return (
    <div className="w-full bg-slate-100 bg-opacity-20">
      <div className="max-w-[1750px] w-full mx-auto p-4 sm:p-8 flex max-lg:flex-wrap items-start justify-between gap-4">
        <div className="w-full lg:w-1/2 p-8 gap-4 flex flex-col items-start justify-center ">
          <div className="text-defaultGreen flex items-center gap-2">
            <span className="h-[2px] w-6 block bg-defaultGreen bg-opacity-20"></span>
            <h2 className=" text-sm leading-8 tracking-normal">Services</h2>
            <span className="h-[2px] w-6 block bg-defaultGreen bg-opacity-20"></span>
          </div>
          <h1 className="text-2xl font-bold text-defaultGreen ">
            Why Choose Us?
          </h1>
          <div className="flex-col flex gap-4">
            <p className="text-sm text-black text-opacity-50">
              Explore Africa with Mahali Africa Adventures, where quality
              service meets unforgettable experiences! 🌍🌟 Discover the wonders
              of this beautiful continent like never before,
              <br />
              as we take you on a journey filled with adventure, culture, and
              natural beauty. Join us for an unforgettable adventure of a
              lifetime. Your African dream vacation starts here!
            </p>
            <div className="text-primaryWhite">
              <Link href={"/about"}>
                <Button name="Read More" />
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 p-2 sm:p-8 gap-4 flex flex-col items-start justify-center ">
          <div className="text-defaultGreen flex items-center gap-2">
            <span className="h-[2px] w-6 block bg-defaultGreen bg-opacity-20"></span>
            <h2 className=" text-sm leading-8 tracking-normal">Testimonies</h2>
            <span className="h-[2px] w-6 block bg-defaultGreen bg-opacity-20"></span>
          </div>
          <h1 className="text-2xl font-bold text-defaultGreen ">
            Our Guests Says
          </h1>
          <div className="w-full mt-4">
          <Swiper
          autoplay={{
            delay: 5000,
            pauseOnMouseEnter:true,
          }}
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            keyboard={{
              enabled: true,
            }}
            pagination={{ clickable: true }}
            speed={500}
            modules={[Pagination, Autoplay, Keyboard]}
            className="mySwiper"
          >
            {Testimonial.map((item, index) => (
              <SwiperSlide key={index} className="bg-gray-100 rounded-lg p-4">
                <div className="max-sm:flex-wrap flex items-start justify-center gap-4 pb-2 sm:p-4 text-sm rounded-md ">
                  <div className=" h-[100px] w-[100px] rounded-full relative overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.comment}
                      layout="fill"
                      className="object-cover"
                      
                    />
                  </div>

                  <div className="w-full sm:w-4/5">
                    <p className=" text-black  text-opacity-50 italic text-wrap">
                     {item.comment}
                    </p>
                    <div className="flex flex-col mt-3">
                      <span className="font-semibold">{item.name}</span>
                      <span className="font-light text-xs">
                        {item.position}
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
