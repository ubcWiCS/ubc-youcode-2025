"use client";

import { useEffect, useState } from "react";

// Sample team data
const teamMembers = [
  {
    src: "/assets/team/sabrina.png",
    name: "Sabrina Lou",
    team: "WiDS",
    title: "youCode Co-Lead",
    favoriteTech: "my Apple Pencil",
  },
  {
    src: "/assets/team/kaitlin.png",
    name: "Kaitlin Khu",
    team: "WiDS",
    title: "Co-VP Marketing",
    favoriteTech: "Airpods pro",
  },
  {
    src: "/assets/team/megan.png",
    name: "Megan Ong",
    team: "WiDS",
    title: "Internal Outreach Director",
    favoriteTech: "Headphones",
  },
  {
    src: "/assets/team/eleny.png",
    name: "Eleny Xia",
    team: "WiDS",
    title: "First Year Rep",
    favoriteTech: "Airpods",
  },
  {
    src: "/assets/team/tara.png",
    name: "Tara Ubovic",
    team: "WiDS",
    title: "President",
    favoriteTech: "my mac",
  },
  {
    src: "/assets/team/kelly.png",
    name: "Kelly Zhu",
    team: "WiDS",
    title: "VP Events",
    favoriteTech: "sun alarm",
  },
  {
    src: "/assets/team/elin.png",
    name: "Elin Lee",
    team: "WiDS",
    title: "Mentorship Coordinator",
    favoriteTech: "iPad",
  },
  {
    src: "/assets/team/anusha.png",
    name: "Anusha Thukral",
    team: "WiDS",
    title: "Mentorship Program Events Director",
    favoriteTech: "Airpods",
  },
  {
    src: "/assets/team/salma.png",
    name: "Salma Yazki",
    team: "WiDS",
    title: "VP Internal",
    favoriteTech: "Airpods",
  },
  {
    src: "/assets/team/amy.png",
    name: "Amy Cao",
    team: "WiDS",
    title: "Website Manager",
    favoriteTech: "AirDrop",
  },
 
  {
    src: "/assets/team/karan.png",
    name: "Karan Chick",
    team: "WiCS",
    title: "UI/UX Designer",
    favoriteTech: "Kindle",
  },
  {
    src: "/assets/team/kim.png",
    name: "Kim Tran",
    team: "WiCS",
    title: "Community Events Director",
    favoriteTech: "iPhone",
  },
  {
    src: "/assets/team/ramona.png",
    name: "Ramona Karimi",
    team: "WiCS",
    title: "First Year Rep",
    favoriteTech: "Headphones",
  },
  {
    src: "/assets/team/ananya.png",
    name: "Ananya Chopra",
    team: "WiCS",
    title: "Community Events Director",
    favoriteTech: "Headphones",
  },
  {
    src: "/assets/team/katja.png",
    name: "Katja Radovic-Jonsson",
    team: "WiCS",
    title: "First Year Rep",
    favoriteTech: "Fridge",
  },
  {
    src: "/assets/team/sandra.png",
    name: "Sandra Radic",
    team: "WiCS",
    title: "youCode Founder, WiCS Co-Pres ",
    favoriteTech: "French press",
  },
  {
    src: "/assets/team/grace.png",
    name: "Grace Gao",
    team: "WiCS",
    title: "Webmaster",
    favoriteTech: "Airpods",
  },
  {
    src: "/assets/team/irmak.png",
    name: "Irmak Bayir",
    team: "WiCS",
    title: "VP Finance",
    favoriteTech: "Sony WH-1000XM5",
  },
];
// Card component
const Card = ({ className, children, onClick }) => (
  <div className={`bg-white rounded-lg shadow-lg ${className}`} onClick={onClick}>
    {children}
  </div>
);

// CardContent component
const CardContent = ({ className, children }) => <div className={`p-4 ${className}`}>{children}</div>;

const TeamCarousel = () => {
  const duplicatedImages = [...teamMembers, ...teamMembers]; // Directly duplicated

  const [activeImage, setActiveImage] = useState(null);

 

  const handleImageClick = (image) => {
    setActiveImage(image);
  };

  const handleClosePopup = () => {
    setActiveImage(null);
  };

  return (
    <div className="w-full overflow-hidden">
      <div className="animate-carousel hover:pause-animation flex">
        {duplicatedImages.map((image, index) => (
          <div
            key={index} // Ensure unique keys
            className="flex-shrink-0 w-full sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/5 px-4" // Adjust spacing
            onClick={() => handleImageClick(image)}
          >
            <img
              src={image.src || "/placeholder.svg"}
              alt={image.name} // Use name for better accessibility
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
          <Card className="w-80 max-w-[90%]" onClick={(e) => e.stopPropagation()}>
            <CardContent>
              <img
                src={activeImage.src || "/placeholder.svg"}
                alt={activeImage.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">{activeImage.name}</h3>
              <p className="text-sm mb-1">
                <span className="font-medium">Team:</span> {activeImage.team || "N/A"}
              </p>
              <p className="text-sm mb-1">
                <span className="font-medium">Position:</span> {activeImage.title || "N/A"}
              </p>
              <p className="text-sm">
                <span className="font-medium">Favorite Tech:</span> {activeImage.favoriteTech || "N/A"}
              </p>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default TeamCarousel;
