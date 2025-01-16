"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image, { StaticImageData } from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/keyboard";
import { Keyboard, Navigation, Pagination } from "swiper/modules";
import { Icon } from "@iconify/react";

interface AccomGalleryCardProps {
  Gallery: StaticImageData[];
}

const AccomGalleryCard: React.FC<AccomGalleryCardProps> = ({ Gallery }) => {
  const [like, setLike] = useState(false);
  return (
    <section className="relative rounded-lg w-full overflow-hidden flex items-center justify-center shadow-md">
      {/* Swiper for Image Carousel */}
      <Swiper
        grabCursor={true}
        centeredSlides={true}
        navigation
        slidesPerView={"auto"}
        keyboard={{
          enabled: true,
        }}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination, Keyboard]}
        className="mySwiper w-full"
      >
        {Gallery.map((image, index) => (
          <SwiperSlide key={index} className="flex items-center justify-center">
            <div className="relative w-full h-[250px] border justify-center rounded-lg">
              <Image
                src={image}
                alt={`Accommodation Image ${index + 1}`}
                fill={true}
                className="object-cover rounded-md"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Overlay Badge and Icon */}
      <div className="z-20 absolute top-3 right-4 w-[90%]">
        <div className="flex items-center justify-between">
          {/* Badge */}
          <span className="bg-white text-xs text-primaryBlue px-3 py-1 font-semibold rounded-full shadow-sm transition-all duration-300 hover:shadow-md">
            Guest Favorite
          </span>

          {/* Favorite Icon */}
          {like ? (
            <Icon
              icon="weui:like-filled"
              width="24"
              height="24"
              className="text-white cursor-pointer hover:scale-110 transition-transform"
              role="button"
              aria-label="Favorite this accommodation"
              onClick={() => setLike(false)}
            />
          ) : (
            <Icon
              icon="weui:like-outlined"
              width="24"
              height="24"
              className="text-white cursor-pointer hover:scale-110 transition-transform"
              role="button"
              aria-label="Favorite this accommodation"
              onClick={() => setLike(true)}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default AccomGalleryCard;
