'use client'
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import Image, { StaticImageData } from "next/image";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/keyboard"
import { Keyboard, Navigation, Pagination } from "swiper/modules";
import { Icon } from '@iconify/react/dist/iconify.js';

const AccomGalleryCard = ({Gallery}:{Gallery:StaticImageData[]}) => {
    return (
        <section
          className="relative rounded-lg w-full overflow-hidden flex items-center justify-center"
        >
          <Swiper
            
            grabCursor={true}
            centeredSlides={true}
            navigation
            slidesPerView={'auto'}
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
                    alt="nyungwe park"
                    fill={true}
                    className="object-cover rounded-md"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        <div className='z-20 absolute top-3 right-4 w-[90%]'>
        <div className="w-full flex items-center justify-between">
         <span className='bg-white text-xs text-primaryBlue px-2 py-1 font-semibold rounded-full drop-shadow-sm'>Guest favorite</span>
          <Icon icon="iconamoon:heart-duotone" width="30" height="30" className='text-white cursor-pointer' />
          </div>
          </div>
        </section>
      );
}

export default AccomGalleryCard