import React, { useState, useRef, useEffect } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

interface AccordionItem {
  title: string;
  desc: string;
  inclusion: string;
  accom: string;
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
    <div className="w-full">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={index}
            className="drop-shadow-sm my-4 bg-slate-100 overflow-hidden rounded-md"
          >
            <div
              className="flex justify-between items-center p-4 cursor-pointer text-primaryGreen"
              onClick={() => toggleAccordion(index)}
            >
              <h2 className="font-semibold text-lg">
                Day {index + 1}: {item.title}
              </h2>
              <span className="text-2xl">
                {isOpen ? <span>-</span> : <span>+</span>}
              </span>
            </div>
            <div
              className={`transition-all duration-500 ease-in-out ${
                isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="p-4 text-gray-700 flex flex-col gap-4">
                <p className="text-sm">{item.desc}</p>

                <div className="flex items-start justify-between w-full text-xs">
                  <div className="font-semibold w-1/2">
                    <span className="flex gap-1 pb-2 items-end">
                      <Icon
                        icon="lets-icons:check-fill"
                        width="24"
                        height="24"
                      />{" "}
                      <h3 className="text-sm font-semibold">Inclusion</h3>
                    </span>
                    {item.inclusion}
                  </div>
                  <div className="font-semibold w-1/2">
                    <span className="flex gap-1 pb-2 items-end">
                      <Icon
                        icon="fluent-emoji-high-contrast:hotel"
                        width="24"
                        height="24"
                      />{" "}
                      <h3 className="text-sm font-semibold">Accomodation</h3>
                    </span>
                    {item.accom}
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
