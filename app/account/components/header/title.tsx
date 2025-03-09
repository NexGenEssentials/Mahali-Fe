import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

function Title({ name, icon }: { name: string, icon:string }) {
  return (
    <div className="flex gap-2 items-center p-2">
      <Icon icon={icon} width="24" height="24" />
      <h1 className="text-2xl font-bold capitalize m-0">{name}</h1>
    </div>
  );
}

export default Title;
