"use client";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import ZoomableImage from "../../images/zoomImage";

import ImagePlaceholder from "@/public/images/imagePlaceholder.jpg";

type ThumbsGalleryProps = {
  images?: StaticImageData[];
};

const ThumbsGallery: React.FC<ThumbsGalleryProps> = ({ images }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <div className="container">
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="h-80 w-full rounded-lg"
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {images?.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="flex h-full w-full items-center justify-center">
              <ZoomableImage
                src={image || ImagePlaceholder}
                alt={`Image ${index + 1}`}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={(swiper) => setThumbsSwiper(swiper)}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="thumbs mt-3 h-28 w-full rounded-lg"
      >
        {images?.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative flex h-full w-full items-center justify-center">
              <Image
                src={image || ImagePlaceholder}
                alt={`Thumbnail ${index + 1}`}
                fill
                className="block h-full w-full object-cover"
              />
              {activeIndex !== index && (
                <div className="absolute inset-0 bg-black opacity-50"></div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ThumbsGallery;
