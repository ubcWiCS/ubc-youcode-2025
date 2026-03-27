"use client";

import { useState } from "react";
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
  const duplicatedImages = [...teamMembers, ...teamMembers];
  const [activeImage, setActiveImage] = useState(null);

  const duration = teamMembers.length * 30; // Adjust duration based on team size
  return (
    <div className="w-full overflow-hidden pt-6" id="team">
      <div
        className="flex w-max animate-carousel hover:[animation-play-state:paused]"
        style={{ animationDuration: `${duration}s` }}
      >
        {duplicatedImages.map((image, index) => (
          <div
            key={`${image.name}-${index}`}
            className="w-40 sm:w-44 md:w-48 lg:w-52 xl:w-56 flex-shrink-0 px-4"
            onClick={() => setActiveImage(image)}
          >
            <img
              src={image.src?.src || image.src || "/placeholder.svg"}
              alt={image.name}
              className="w-full h-36 object-cover rounded-lg cursor-pointer"
            />
          </div>
        ))}
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
                className="w-full h-40 object-cover rounded-lg mb-4"
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
