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
  const [maxScroll, setMaxScroll] = useState(0);

  const containerRef = useRef(null);

  const updateScrollData = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;

    const nextMaxScroll = Math.max(0, el.scrollWidth - el.clientWidth);
    setMaxScroll(nextMaxScroll);

    if (nextMaxScroll > 0) {
      setSliderValue((el.scrollLeft / nextMaxScroll) * 100);
    } else {
      setSliderValue(0);
    }
  }, []);

  useEffect(() => {
    updateScrollData();
    window.addEventListener("resize", updateScrollData);
    return () => window.removeEventListener("resize", updateScrollData);
  }, [updateScrollData]);

  const handleContainerScroll = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;

    const nextMaxScroll = Math.max(0, el.scrollWidth - el.clientWidth);
    setMaxScroll(nextMaxScroll);

    if (nextMaxScroll > 0) {
      setSliderValue((el.scrollLeft / nextMaxScroll) * 100);
    } else {
      setSliderValue(0);
    }
  }, []);

  const handleSliderChange = useCallback((e) => {
    const next = Number(e.target.value);
    setSliderValue(next);

    const el = containerRef.current;
    if (!el) return;

    const nextScrollLeft = (next / 100) * maxScroll;
    el.scrollLeft = nextScrollLeft;
  }, [maxScroll]);

  return (
    <div className="w-full pt-6" id="team">
      <div
        ref={containerRef}
        onScroll={handleContainerScroll}
        className="w-full overflow-x-auto overflow-y-hidden px-2"
        style={{
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <div className="flex w-max">
          {teamMembers.map((member, index) => (
            <div
              key={`${member.name}-${index}`}
              className="w-40 sm:w-44 md:w-48 lg:w-52 xl:w-56 flex-shrink-0 px-2"
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

      <div className="mt-2 px-4">
        <input
          type="range"
          min={0}
          max={100}
          step={0.5}
          value={sliderValue}
          onChange={handleSliderChange}
          onInput={handleSliderChange}
          className="team-slider w-full"
          style={{ touchAction: "pan-x" }}
        />
      </div>

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