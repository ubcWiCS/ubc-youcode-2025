"use client";

import { useState } from "react";
import aikoImg from "@/app/assets/team/aiko.PNG";
import lucyImg from "@/app/assets/team/lucy.jpeg";
import claireImg from "@/app/assets/team/claire.png";
import tiyaImg from "@/app/assets/team/tiya.jpg";

// TODO change image
const teamMembers = [
  {
    src: aikoImg,
    name: "Amara Oriaku",
    team: "WiDS",
    title: "youCode Co-lead",
  },
  { src: lucyImg, name: "Lucy Lu", team: "WiCS", title: "youCode Co-Lead" },
  {
    src: aikoImg,
    name: "Aiko Sumarno",
    team: "WiCS",
    title: "Sponsorship & Outreach Coordinator",
  },
  {
    src: lucyImg,
    name: "Anisa Pirani",
    team: "WiDS",
    title: "Events & Experience",
  },
  {
    src: claireImg,
    name: "Claire",
    team: "WiDS",
    title: "Logistics & Operations",
  },
  {
    src: tiyaImg,
    name: "Tiya Verma",
    team: "WiCS",
    title: "Marketing & Engagement",
  },
];

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

  const handleImageClick = (image) => setActiveImage(image);
  const handleClosePopup = () => setActiveImage(null);

  return (
    <div className="w-full py-8" id="team">
      <div className="grid grid-cols-3 md:grid-cols-6 gap-6 px-4 max-w-7xl mx-auto">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="cursor-pointer flex flex-col group"
            onClick={() => handleImageClick(member)}
          >
            <div className="w-full aspect-square rounded-xl overflow-hidden shadow-sm transition-transform duration-300 group-hover:scale-105">
              <img
                src={member.src.src}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      {activeImage && (
        <div
          className="fixed inset-0 flex items-end justify-center  z-50 bg-black bg-opacity-50"
          onClick={handleClosePopup}
        >
          <Card
            className="w-80 max-w-[90%] mb-40 "
            onClick={(e) => e.stopPropagation()}
          >
            <CardContent>
              <img
                src={activeImage.src.src || "/placeholder.svg"}
                alt={activeImage.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg text-accent-purple font-semibold mb-2">
                {activeImage.name}
              </h3>
              <p className="text-sm mb-1 text-accent-magenta">
                <span className="font-medium  ">Team:</span>{" "}
                {activeImage.team || "N/A"}
              </p>
              <p className="text-sm mb-1 text-accent-magenta">
                <span className="font-medium ">Position:</span>{" "}
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
