"use client";
import { useState, useRef } from "react";
import Image, { StaticImageData } from "next/image";

const ZoomableImage = ({
  src,
  alt,
}: {
  src: string | StaticImageData;
  alt: string;
}) => {
  const [showZoom, setShowZoom] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const [backgroundPosition, setBackgroundPosition] = useState("0% 0%");
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const { left, top, width, height } =
      containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    setBackgroundPosition(`${x}% ${y}%`);
    setZoomPosition({
      x: Math.min(e.clientX - left, width - 200),
      y: Math.min(e.clientY - top, height - 200),
    });
  };

  return (
    <div className="relative w-full h-full">
      <div
        ref={containerRef}
        className="relative w-full h-full overflow-hidden cursor-zoom-in"
        onMouseEnter={() => setShowZoom(true)}
        onMouseLeave={() => setShowZoom(false)}
        onMouseMove={handleMouseMove}
      >
        <Image src={src} alt={alt} fill className="object-cover" />
      </div>

      {showZoom && (
        <div
          className="absolute z-10 border-2 border-gray-300 rounded shadow-lg bg-white"
          style={{
            width: "200px",
            height: "200px",
            left: `${zoomPosition.x}px`,
            top: `${zoomPosition.y}px`,
            backgroundImage: `url(${typeof src === "string" ? src : src.src})`,
            backgroundPosition,
            backgroundRepeat: "no-repeat",
            backgroundSize: "400% 400%",
          }}
        />
      )}
    </div>
  );
};

export default ZoomableImage;
