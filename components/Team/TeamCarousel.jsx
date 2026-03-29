"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { teamMembers } from "./teamData";

const Card = ({ className, children, onClick }) => (
  <div
    className={`bg-white rounded-lg shadow-lg ${className}`}
    onClick={onClick}
  >
    {children}
  </div>
);

const CardContent = ({ className, children }) => (
  <div className={`p-4 ${className}`}>{children}</div>
);

const TeamCarousel = () => {
  const [activeImage, setActiveImage] = useState(null);
  const [sliderValue, setSliderValue] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [maxScroll, setMaxScroll] = useState(0);

  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const sliderValueRef = useRef(0);

  useEffect(() => {
    const update = () => {
      if (containerRef.current && trackRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const trackWidth = trackRef.current.scrollWidth;
        setMaxScroll(Math.max(0, trackWidth - containerWidth));
      }
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Trackpad scrolling
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onWheel = (e) => {
      const delta =
        Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      if (Math.abs(delta) < 2) return;

      e.preventDefault();

      const sensitivity = 0.03; // increase for faster scrolling
      const next = Math.min(
        100,
        Math.max(0, sliderValueRef.current + delta * sensitivity),
      );
      sliderValueRef.current = next;
      setSliderValue(next);
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  useEffect(() => {
    sliderValueRef.current = sliderValue;
  }, [sliderValue]);

  const scrollX = (sliderValue / 100) * maxScroll;

  const handleSliderChange = useCallback((e) => {
    setSliderValue(Number(e.target.value));
  }, []);

  return (
    <div className="w-full overflow-hidden pt-6" id="team">
      <div className="w-full overflow-hidden" ref={containerRef}>
        <div
          ref={trackRef}
          className="flex w-max"
          style={{
            transform: `translateX(-${scrollX}px)`,
            transition: isDragging ? "none" : "transform 0.15s ease-out",
          }}
        >
          {teamMembers.map((member, index) => (
            <div
              key={`${member.name}-${index}`}
              className="w-40 sm:w-44 md:w-48 lg:w-52 xl:w-56 flex-shrink-0 px-4"
              onClick={() => setActiveImage(member)}
            >
              <img
                src={member.src?.src || member.src || "/placeholder.svg"}
                alt={member.name}
                className="w-full h-36 object-cover rounded-lg cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Slider */}
      <div className="mt-2 px-4">
        <input
          type="range"
          min={0}
          max={100}
          step={0.5}
          value={sliderValue}
          onChange={handleSliderChange}
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onTouchStart={() => setIsDragging(true)}
          onTouchEnd={() => setIsDragging(false)}
          className="team-slider w-full"
        />
      </div>

      {/* Modal */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          onClick={() => setActiveImage(null)}
        >
          <Card
            className="w-80 max-w-[90%]"
            onClick={(e) => e.stopPropagation()}
          >
            <CardContent className="text-black pt-6">
              <img
                src={
                  activeImage.src?.src || activeImage.src || "/placeholder.svg"
                }
                alt={activeImage.name}
                className="w-full aspect-square object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">{activeImage.name}</h3>
              <p className="text-sm mb-1">
                <span className="font-medium">Team:</span>{" "}
                {activeImage.team || "N/A"}
              </p>
              <p className="text-sm mb-1">
                <span className="font-medium">Position:</span>{" "}
                {activeImage.title || "N/A"}
              </p>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default TeamCarousel;
