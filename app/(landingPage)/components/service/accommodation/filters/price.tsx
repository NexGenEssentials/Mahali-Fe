"use client";
import { useState } from "react";
import { Slider } from "antd";
import "antd/dist/reset.css"; // Import Ant Design styles
import { Icon } from "@iconify/react/dist/iconify.js";

const PriceFilter = ({
  min,
  max,
}: {
  min: (price: number) => void;
  max: (price: number) => void;
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [priceRange, setPriceRange] = useState<number[]>([100, 1800]);

  const onRangeChange = (value: number[]) => {
    setPriceRange(value);
    min(value[0]);
    max(value[1]);
  };

  return (
    <div className="w-full h-fit max-w-sm mx-auto bg-white shadow-md rounded-lg p-4 border">
      <div
        className="flex justify-between gap-8 items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-base text-nowrap font-semibold text-primaryGreen">
          Price
        </h3>
        <button className={`px-2 py-1 text-white text-sm rounded `}>
          {isOpen ? (
            <Icon
              icon="uis:angle-up"
              width="24"
              height="24"
              className="text-primaryGreen"
            />
          ) : (
            <Icon
              icon="uis:angle-up"
              width="24"
              height="24"
              className="text-primaryGreen"
              rotate={90}
            />
          )}
        </button>
      </div>

      {isOpen && (
        <div className="mt-4">
          {/* Price Range Slider */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">$10</span>
              <span className="text-gray-500">$2000</span>
            </div>
            <Slider
              range
              min={10}
              max={2000}
              step={50}
              defaultValue={[100, 1800]}
              value={priceRange}
              onChange={onRangeChange}
              className="text-primaryGreen"
            />
            <div className="flex justify-between text-sm text-primaryGreen font-semibold">
              <span>Min: ${priceRange[0].toLocaleString()}</span>
              <span>Max: ${priceRange[1].toLocaleString()}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PriceFilter;
