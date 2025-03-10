"use client";

import { useEffect, useState } from "react";

const teamMembers = [
  {
    src: "/assets/team/sabrina.png",
    name: "Sabrina Lou",
    team: "WiDS",
    title: "youCode Co-Lead",
    favoriteTech: "my Apple Pencil",
  },
  {
    src: "/assets/team/sandra.png",
    name: "Sandra Radic",
    team: "WiCS",
    title: "youCode Founder, WiCS Co-Pres ",
    favoriteTech: "French press",
  },
  {
    src: "/assets/team/tara.png",
    name: "Tara Ubovic",
    team: "WiDS",
    title: "President",
    favoriteTech: "my mac",
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
    src: "/assets/team/grace.png",
    name: "Grace Gao",
    team: "WiCS",
    title: "Webmaster",
    favoriteTech: "Airpods",
  },
  {
    src: "/assets/team/tanya.jpg",
    name: "Tanya",
    team: "WiCS",
    title: "Webmaster",
    favoriteTech: "RaspberryPi",
  },
  {
    src: "/assets/team/irmak.png",
    name: "Irmak Bayir",
    team: "WiCS",
    title: "VP Finance",
    favoriteTech: "Sony WH-1000XM5",
  },
  {
    src: "/assets/team/oli.png",
    name: "Olivia Lam",
    team: "WiDS",
    title: "Co-VP Marketing",
    favoriteTech: "Monitor",
  },
  {
    src: "/assets/team/oli.png",
    name: "Tetiksha Jain",
    team: "WiDS",
    title: "Hackathon Logistics",
    favoriteTech: "Airpods",
  },
  {
    src: "/assets/team/tumi.png",
    name: "Tumi Fabiyi",
    team: "WiDS",
    title: "Outreach and Swag",
    favoriteTech: "Gaming PC",
  },
  {
    src: "/assets/team/moira.png",
    name: "Moira Renata",
    team: "WiDS",
    title: "Hackathon and Workshop Logistics",
    favoriteTech: "Mac",
  },
  {
    src: "/assets/team/rachel.png",
    name: "Rachel Weng",
    team: "WiDS",
    title: "Hackathon Logistics",
    favoriteTech: "Apple Watch",
  },
  {
    src: "/assets/team/fatima.png",
    name: "Fatima Tahya",
    team: "WiDS",
    title: "Finance",
    favoriteTech: "Airpods ",
  },
  {
    src: "/assets/team/hannah.png",
    name: "Hannah Meaney",
    team: "WiCS",
    title: "Conference Lead",
    favoriteTech: "Kobo",
  },
  {
    src: "/assets/team/maraym.png",
    name: "Maryum Chaudhry",
    team: "WiCS",
    title: "Graphic Design & Swag",
    favoriteTech: "Instax Mini Camera",
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
    <div className="w-screen overflow-hidden pt-16 pb-32" id="team">
      <div className="animate-carousel hover:pause-animation flex">
        {duplicatedImages.map((image, index) => (
          <div
            key={index} // Ensure unique keys
            className="flex-shrink-0 w-1/3 sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/5 px-4" // Adjust spacing
            onClick={() => handleImageClick(image)}
          >
            <img
              src={image.src || "/placeholder.svg"}
              alt={image.name} // Use name for better accessibility
              className="w-full h-20 md:h-36 object-cover rounded-lg cursor-pointer"
            />
          </div>
        ))}
      </div>

      {activeImage && (
        <div
          className="fixed inset-0 flex items-end justify-center  z-50 bg-black bg-opacity-50"
          onClick={handleClosePopup}
        >
          <Card className="w-80 max-w-[90%] mb-40 " onClick={(e) => e.stopPropagation()}>
            <CardContent>
              <img
                src={activeImage.src || "/placeholder.svg"}
                alt={activeImage.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg text-accent-purple font-semibold mb-2">{activeImage.name}</h3>
              <p className="text-sm mb-1 text-accent-magenta">
                <span className="font-medium  ">Team:</span> {activeImage.team || "N/A"}
              </p>
              <p className="text-sm mb-1 text-accent-magenta">
                <span className="font-medium ">Position:</span> {activeImage.title || "N/A"}
              </p>
              <p className="text-sm text-accent-magenta">
                <span className="font-medium text-balck">Favorite Tech:</span> {activeImage.favoriteTech || "N/A"}
              </p>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default TeamCarousel;
