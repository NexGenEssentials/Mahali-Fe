import React from "react";

const Title = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col gap-2 items-start justify-between">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="text-sm font-semibold text-gray-400">
       {description}
      </p>
    </div>
  );
};

export default Title;
