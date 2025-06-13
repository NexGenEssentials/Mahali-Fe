"use client";
import { useState, useRef } from "react";

const ZoomableImage = ({ src, alt }: { src: string; alt: string }) => {
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
    const clampedX = Math.min(Math.max(e.clientX - left, 0), width - 200);
    const clampedY = Math.min(Math.max(e.clientY - top, 0), height - 200);

    setZoomPosition({ x: clampedX, y: clampedY });
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
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      </div>

      {showZoom && (
        <div
          className="absolute z-10 border-2 border-gray-300 rounded shadow-lg bg-white"
          style={{
            width: "200px",
            height: "200px",
            left: `${zoomPosition.x}px`,
            top: `${zoomPosition.y}px`,
            backgroundImage: `url(${typeof src === "string" ? src : ""})`,
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
