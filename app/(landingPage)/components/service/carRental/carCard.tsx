import React from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "motion/react";
interface Props {
  car: StaticImageData;
  name: string;
  category: string;
  price: string;
  period: string;
  transimission: string;
}

const CarCard = ({
  car,
  name,
  category,
  period,
  price,
  transimission,
}: Props) => {
  return (
    <div className="bg-white drop-shadow-lg w-full flex flex-col rounded-lg cursor-pointer">
      <div className="relative h-[200px] w-full flex items-end rounded-lg justify-center overflow-hidden ">
        <Image
          src={car}
          alt={"car"}
          fill={true}
          className="object-cover rounded-lg hover:scale-110 hover:duration-300"
        />
      </div>
      <div className="flex flex-col gap-2 p-4">
        <h1 className="font-semibold text-lg text-primaryGreen text-pretty">
          {name}
        </h1>
        <div className="w-full flex font-semibold text-sm justify-between">
          <span className="text-slate-400">{category}</span>
          <span className="inline-flex">
            <h4 className="text-primaryGreen">{price}</h4>/{period}
          </span>
        </div>
        <div className="inline-flex gap-1 text-sm text-slate-400">
          Transmission:
          <span className="text-primaryGreen font-semibold">
            {" "}
            {transimission}
          </span>
        </div>
        <motion.button whileTap={{scale:0.9}} className="bg-primaryGreen self-center p-2 rounded-md text-white text-sm w-fit">
          More Details
        </motion.button>
      </div>
    </div>
  );
};

export default CarCard;
