import React from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "motion/react";
import Link from "next/link";

interface Props {
  id: number;
  year:number;
  car: string;
  name: string;
  category: string;
  price: string;
  period: string;
  transimission: string;
}

const CarCard = ({
  id,
  year,
  car,
  name,
  category,
  period,
  price,
  transimission,
}: Props) => {
  return (
    <Link href={`/service/car-rental/${id}`}>
      <div className="bg-white hover:shadow-xl  duration-300 transition shadow-md w-full flex flex-col rounded-lg cursor-pointer">
        <div className="relative h-[200px] w-full flex items-end rounded-lg justify-center overflow-hidden ">
          {car ? (
            <Image
              src={car}
              alt={"car"}
              fill={true}
              className="object-cover rounded-lg hover:scale-110 hover:duration-300"
            />
          ) : (
            <></>
          )}
        </div>
        <div className="flex flex-col gap-2 p-4">
          <h1 className="font-semibold text-lg text-primaryGreen text-pretty">
            {name}
          </h1>
          <div className="w-full flex font-semibold text-sm justify-between">
            <span className="text-slate-400">
              <strong className="text-slate-700">Type: </strong>
              {category}
            </span>
            <span className="inline-flex">
              <h4 className="text-primaryGreen">
                $ <span className="underline">{price}</span>/{period}
              </h4>
            </span>
          </div>
          <div className="inline-flex gap-1 text-sm text-slate-400">
            Transmission:
            <span className="text-primaryGreen font-semibold">
              {" "}
              {transimission}
            </span>
          </div>
          <div className="inline-flex gap-1 text-sm text-slate-400">
            Year:
            <span className="text-primaryGreen font-semibold">
              {" "}
              {year}
            </span>
          </div>
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="bg-primaryGreen self-center p-2 rounded-md text-white text-sm w-fit"
          >
            More Details
          </motion.button>
        </div>
      </div>
    </Link>
  );
};

export default CarCard;
