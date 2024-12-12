import React, { useState } from "react";
import { StaticImageData } from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";

interface AccordionItem {
  title: string;
  desc: string;
  inclusion: string;
  accom: string;
  image?: StaticImageData[];
}

interface AccordionProps {
  items?: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items = [] }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  if (!items || items.length === 0) return null;

  return (
    <div className="w-full max-w-3xl mx-auto">
      {items.map((item, index) => (
        <div key={index} className="border drop-shadow-sm my-4 border-gray-200">
          <div
            className="flex justify-between items-center p-4 cursor-pointer"
            onClick={() => toggleAccordion(index)}
          >
            <h2 className="font-semibold text-xl">Day {index + 1}: {item.title}</h2>
            <span className="text-2xl">
              {openIndex === index ? (
                <span>-</span>
              ) : (
                <span>+</span> 
              )}
            </span>
          </div>

          {openIndex === index && (
            <div className="p-4 text-gray-700 flex flex-col gap-4">
              <p className="text-sm">{item.desc}</p>
              {item?.image?.length! > 0  && <div>
                <h3 className="font-semibold">Images:</h3>
                <div className="grid grid-cols-2 gap-2">
                  {item?.image && item.image.map((img, idx) => (
                    <img key={idx} src={img.src} alt={item.title} className="rounded-md" />
                  ))}
                </div>
              </div>}
              <div className="flex items-start justify-between w-full text-xs">
              <p className="font-semibold w-1/2">
                <span className="flex gap-1 pb-2  items-end">
                <Icon icon="lets-icons:check-fill" width="24" height="24" /> <h3 className="text-sm font-semibold">Inclusion</h3> 
                </span>
                {item.inclusion}
             </p>
              <p className="font-semibold w-1/2">
              <span className="flex gap-1 pb-2 items-end">
                <Icon icon="fluent-emoji-high-contrast:hotel" width="24" height="24" /> <h3 className="text-sm font-semibold">Accomodation</h3> 
                </span>
                {item.accom}
              </p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
