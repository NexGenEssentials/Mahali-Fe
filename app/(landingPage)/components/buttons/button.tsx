"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "motion/react";
import React from "react";

const Button = ({ name }: { name: string }) => {
  return (
    <motion.button
      whileTap={{ scale: 0.8 }}
      className="bg-primaryGreen px-4 py-2 gap-2 rounded-md text-sm w-fit flex items-center group"
    >
      <span>{name}</span>

      <Icon
        icon="wi:direction-left"
        width="30"
        height="30"
        rotate={90}
        className="group-hover:translate-x-2 group-hover:duration-200 group-hover:ease-linear"
      />
    </motion.button>
  );
};

export default Button;
