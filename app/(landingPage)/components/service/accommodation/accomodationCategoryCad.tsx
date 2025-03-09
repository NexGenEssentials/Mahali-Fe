import Link from 'next/link';
import React from 'react'
import Image from 'next/image';
import Button from '../../buttons/button';

// Component for rendering accommodation details
const AccommodationCard = ({accomod,category,}: {accomod: any;category: string;}) => (
  <Link href={`${category}/${accomod.name}`}>
    <div className="group flex max-md:flex-wrap gap-4 border p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow bg-white cursor-pointer">
      {/* Image Section */}
      <div className="flex-shrink-0 max-md:w-full w-72 h-52 overflow-hidden rounded-lg">
        <Image
          src={accomod.gallery[0]}
          alt={accomod.name}
          className="object-cover w-full h-full group-hover:scale-110 group-hover:duration-700"
        />
      </div>

      {/* Details Section */}
      <div className="flex flex-col max-md:w-full w-3/5 space-y-4">
        <div className="flex space-x-4 items-center">
          <span className="text-lg font-semibold text-primaryGreen">
            {accomod.name}
          </span>
          <span className="text-sm text-slate-500 font-medium">
            ★ {accomod.rating} ({accomod.reviews} reviews)
          </span>
        </div>
        <span className="text-sm text-gray-600">{accomod.description}</span>
        <span className="text-sm text-gray-500 flex items-center">
          <span className="mr-2 text-primaryGreen font-semibold">
            Location:
          </span>
          {accomod.location}
        </span>
        <ul className="place-content-end lg:w-3/5 grid grid-cols-2 gap-x-4 gap-y-2 text-xs text-slate-500 mt-8">
          {accomod.amenality.slice(0, 5).map((amty:string, index:number) => (
            <li key={index} className="flex items-center">
              <span className="mr-2">✔</span>
              {amty}
            </li>
          ))}
        </ul>
      </div>

      {/* Button Section */}
      <div className="p-4 self-center text-nowrap text-white">
        <Button name="View More" />
      </div>
    </div>
  </Link>
);

export default AccommodationCard;