import { Icon } from "@iconify/react/dist/iconify.js";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import CarRentalForm from "./carRental/carForm";

type Props = {
  image: StaticImageData;
  title: string;
  desc:string;
  service:string
};
const ServicePageHero = ({ image,service,  title, desc }: Props) => {
  return (
    <div className=" w-full">
      <div className="relative h-[130vh] 2xl:h-[800px] w-full  text-primaryWhite bg-black">
        <Image
          src={image}
          alt={title}
          fill={true}
          className="object-cover opacity-60"
        />
        <div className="absolute max-md:px-4 gap-6 -top-10 w-full h-full flex flex-col items-center justify-center">
          <div className="flex items-center text-sm text-primaryWhite font-semibold">
            <Link href={"/"}>
              <span>Home </span>
            </Link>
            <Icon icon="uim:angle-double-left" width="24" height="24" rotate={90} />
            <span className="opacity-70">{service}</span>
          </div>
          <div className="text-2xl lg:text-6xl text-center italic stroke-black font-bold font-mono">{title}</div>
          <p className="w-full md:w-1/2 text-center uppercase tracking-wider lg:text-lg font-semibold">{desc}</p>
          <div className="absolute top-3/4  flex items-center justify-center w-full p-8">
            <div className="bg-slate-100 w-1/3 rounded-lg ">
            <h1 className="bg-primaryGreen rounded-t-lg p-6 w-full text-center font-bold text-xl uppercase">Make your trip</h1>
            <CarRentalForm/>
            </div>
            <div className="bg-white h-[200px] p-8 block drop-shadow-lg">r</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePageHero;
