import { Icon } from "@iconify/react/dist/iconify.js";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  image: StaticImageData;
  title: string;
};
const PageHero = ({ image, title }: Props) => {
  return (
    <div className=" w-full">
      <div className="relative max-md:h-[250px] h-[400px] w-full  text-primaryWhite bg-black">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover opacity-60"
        />
        <div className="absolute top-10 w-full h-full flex flex-col items-center justify-center">
          <div className="flex items-center text-sm text-primaryWhite font-semibold">
            <Link href={"/"}>
              <span>Home </span>
            </Link>
            <Icon icon="uim:angle-double-left" width="24" height="24" rotate={90} />
            <span className="opacity-70">{title}</span>
          </div>
          <div className="text-lg md:text-6xl italic font-bold font-mono">{title}</div>
        </div>
      </div>
    </div>
  );
};

export default PageHero;
