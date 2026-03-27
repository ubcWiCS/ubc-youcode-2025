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

  const handleImageClick = (image) => {
    setActiveImage(image);
  };

  const handleClosePopup = () => {
    setActiveImage(null);
  };

  return (
    <div className="w-full overflow-hidden" id="team">
      <div className="animate-carousel hover:pause-animation flex pt-6">
        {duplicatedImages.map((image, index) => (
          <div
            key={`${image.name}-${index}`}
            className="flex-shrink-0 w-full sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/5 px-4"
            onClick={() => handleImageClick(image)}
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
          className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
          onClick={handleClosePopup}
        >
          <Card
            className="w-80 max-w-[90%]"
            onClick={(e) => e.stopPropagation()}
          >
            <CardContent className="text-black">
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
