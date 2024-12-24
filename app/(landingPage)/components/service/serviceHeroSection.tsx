import { Icon } from "@iconify/react/dist/iconify.js";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
type Props = {
  image: StaticImageData;
  title: string;
  desc:string;
  service:string
};
const ServicePageHero = ({ image,service,  title, desc }: Props) => {
  return (
    <div className="w-full">
      <div className="relative h-[500px] w-full  text-primaryWhite bg-black">
        <Image
          src={image}
          alt={title}
          fill={true}
          className="object-cover opacity-60"
        />
        <div className="absolute max-md:px-4 gap-6 top-0  w-full h-full flex flex-col items-center justify-center">
          <div className="flex items-center text-sm text-primaryWhite font-semibold">
            <Link href={"/"}>
              <span>Home </span>
            </Link>
            <Icon icon="uim:angle-double-left" width="24" height="24" rotate={90} />
            <span className="opacity-70">{service}</span>
          </div>
          <div className="text-2xl lg:text-4xl text-center italic stroke-black font-bold font-mono">{title}</div>
          <p className="w-full md:w-1/2 text-center uppercase tracking-wider lg:text-base font-semibold">{desc}</p>
          
        </div>
      </div>
    </div>
  );
};

export default ServicePageHero;
