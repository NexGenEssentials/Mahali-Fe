"use client";
import React from "react";
import Button from "../buttons/button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

import Image from "next/image";
import Link from "next/link";
const Parks = [1];
const TestimonialSection = () => {
  return (
    <div className="w-full bg-slate-100 bg-opacity-20">
      <div className="max-w-[1750px] w-full mx-auto p-8 flex max-lg:flex-wrap items-center justify-between gap-4">
        <div className="w-full lg:w-1/2 p-8 grow gap-4 flex flex-col items-start justify-center ">
          <div className="text-defaultGreen flex items-center gap-2">
            <span className="h-[2px] w-6 block bg-defaultGreen bg-opacity-20"></span>
            <h2 className=" text-sm leading-8 tracking-normal">Service</h2>
            <span className="h-[2px] w-6 block bg-defaultGreen bg-opacity-20"></span>
          </div>
          <h1 className="text-3xl font-bold text-defaultGreen ">
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

        <div className="w-full max-h-full lg:w-1/2 p-8 grow gap-4 flex flex-col items-start justify-center ">
          <div className="text-defaultGreen flex items-center gap-2">
            <span className="h-[2px] w-6 block bg-defaultGreen bg-opacity-20"></span>
            <h2 className=" text-sm leading-8 tracking-normal">Testimony</h2>
            <span className="h-[2px] w-6 block bg-defaultGreen bg-opacity-20"></span>
          </div>
          <h1 className="text-3xl font-bold text-defaultGreen ">
            Our Guests Says
          </h1>
          <Swiper
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            effect="fade"
            pagination={{ clickable: true }}
            speed={500}
            modules={[Pagination, Autoplay, EffectFade]}
            className="mySwiper"
          >
            {Parks.map((item, index) => (
              <SwiperSlide key={index} className="bg-white p-8">
                <div className=" flex items-start justify-center gap-4  text-sm rounded-md drop-shadow-lg">
                  <div className="h-[100px] w-[100px] rounded-full relative overflow-hidden">
                    <Image
                      src="/images/rwanda.jpeg"
                      alt="hello"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>

                  <div className="w-3/4">
                    <p className=" text-black text-opacity-50 italic text-wrap">
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts. Separated they live in Bookmarksgrove right at the
                      coast of the Semantics, a large language ocean.
                    </p>
                    <div className="flex flex-col mt-3">
                      <span className="font-semibold">William Gram{item}</span>
                      <span className="font-light text-xs">
                        Guest From Kenya
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
  );
};

export default TestimonialSection;
