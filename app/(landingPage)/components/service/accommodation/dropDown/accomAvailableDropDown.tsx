import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AvailableDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const closeDropdown = () => setIsOpen(false);

  const increment = (setter: React.Dispatch<React.SetStateAction<number>>) => {
    setter((prev) => prev + 1);
  };

  const decrement = (
    value: number,
    setter: React.Dispatch<React.SetStateAction<number>>,
    min = 0
  ) => {
    if (value > min) {
      setter((prev) => prev - 1);
    }
  };

  // Close the dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        closeDropdown();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      {/* Dropdown Toggle */}
      <button
        onClick={toggleDropdown}
        className="px-4 py-2  shadow-sm outline-none"
      >
        {`${adults} adults  ·  ${children} children`}
      </button>

      {/* Dropdown Content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute mt-2 bg-white border rounded-md shadow-lg w-64 z-10"
          >
            {/* Adults */}
            <div className="flex items-center justify-between px-4 py-2 border-b">
              <span className="text-sm font-medium">Adults</span>
              <div className="text-xs flex items-center space-x-4">
                <button
                  onClick={() => decrement(adults, setAdults, 1)}
                  className="px-3 py-1 bg-gray-200 rounded-md hover:bg-gray-300"
                >
                  -
                </button>
                <span>{adults}</span>
                <button
                  onClick={() => increment(setAdults)}
                  className="px-3 py-1 bg-gray-200 rounded-md hover:bg-gray-300"
                >
                  +
                </button>
              </div>
            </div>

            {/* Children */}
            <div className="flex items-center justify-between px-4 py-2 border-b">
              <span className="text-sm font-medium">Children</span>
              <div className="text-xs flex items-center space-x-4">
                <button
                  onClick={() => decrement(children, setChildren)}
                  className="px-3 py-1 bg-gray-200 rounded-md hover:bg-gray-300"
                >
                  -
                </button>
                <span>{children}</span>
                <button
                  onClick={() => increment(setChildren)}
                  className="px-3 py-1 bg-gray-200 rounded-md hover:bg-gray-300"
                >
                  +
                </button>
              </div>
            </div>

            {/* Done Button */}
            <div className="px-4 py-2">
              <button
                onClick={closeDropdown}
                className="w-full px-4 py-2 text-white bg-primaryGreen rounded-md"
              >
                Done
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AvailableDropdown;
