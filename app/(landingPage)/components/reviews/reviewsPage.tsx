"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/keyboard";
import { Autoplay, Keyboard, Pagination } from "swiper/modules";
import { StaticImageData } from "next/image";
import Image from "next/image";

const ReviewsPage = ({
  Testimonial,
}: {
  Testimonial: {
    name: string;
    comment: string;
    country: string;
    image?: StaticImageData;
  }[];
}) => {
  return (
    <div className="w-full mt-4">
      <Swiper
        autoplay={{
          delay: 5000,
        }}
        slidesPerView={1}
        spaceBetween={5}
        loop={true}
        keyboard={{
          enabled: true,
        }}
        pagination={{ clickable: true }}
        speed={500}
        breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
        modules={[Pagination, Autoplay, Keyboard]}
        className="mySwiper"
      >
        {Testimonial.map((item, index) => (
          <SwiperSlide key={index}  className="bg-white rounded-lg p-4 border mb-8">
            <div className="flex items-start justify-center gap-4 p-4 text-sm rounded-md h-48">
              {item.image ? (
                <div className="h-[100px] w-[100px] rounded-full relative overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.comment}
                    layout="fill"
                    className="object-cover"
                  />
                </div>
              ) : (
                <span className="uppercase text-4xl text-white bg-primaryGreen h-[60px] w-[60px] rounded-full flex items-center justify-center p-4 font-bold">
                  {item.name.charAt(0)}
                </span>
              )}

              <div className="w-4/5">
                <p className=" text-black  text-opacity-50 italic text-wrap">
                  {item.comment}
                </p>
                <div className="flex flex-col mt-3">
                  <span className="font-semibold">{item.name}</span>
                  <span className="font-light text-xs">{item.country}</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ReviewsPage;
