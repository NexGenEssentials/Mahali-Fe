"use client";
import { useState, useRef } from "react";
import { ZoomIn } from "lucide-react";
import Image, { StaticImageData } from "next/image";

const ZoomableImage = ({ src, alt }: { src: StaticImageData; alt: string }) => {
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
      x: Math.max(0, Math.min(e.clientX - left - 100, width - 200)),
      y: Math.max(0, Math.min(e.clientY - top - 100, height - 200)),
    });
  };

  return (
    <div className="relative" style={{ width: "200px", height: "100px" }}>
      <div
        ref={containerRef}
        className="relative w-full h-full overflow-hidden cursor-zoom-in"
        onMouseEnter={() => setShowZoom(true)}
        onMouseLeave={() => setShowZoom(false)}
        onMouseMove={handleMouseMove}
      >
        <Image src={src} alt={alt} fill className="object-cover w-full h-full" />
        <div className="absolute top-2 right-2 bg-white/70 rounded-full p-1">
          <ZoomIn size={16} />
        </div>
      </div>

      {showZoom && (
        <div
          className="absolute z-10 border-2 border-gray-300 rounded shadow-lg bg-white"
          style={{
            width: "200px",
            height: "200px",
            left: "210px",
            top: "-50px",
            backgroundImage: `url(${src})`,
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
