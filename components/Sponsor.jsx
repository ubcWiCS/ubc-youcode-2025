"use client";
import Image from "next/image";
import bg from "@/app/assets/sponsor_bg.svg";
import mobileBG from "@/app/assets/sponsor_bg_mobile.svg";
import SAP from "@/app/assets/sponsors/SAP.svg";
import Deloitte from "@/app/assets/sponsors/Deloitte.svg";
import Amazon from "@/app/assets/sponsors/Amazon.svg";
import HP from "@/app/assets/sponsors/HP.svg";
import Arcteryx from "@/app/assets/sponsors/Arcteryx.svg";
import EY from "@/app/assets/sponsors/EY.svg";
import TelusDigital from "@/app/assets/sponsors/TelusDigital.svg";
import StearGrant from "@/app/assets/sponsors/StearGrant.png";
import WalterGage from "@/app/assets/sponsors/WalterGage.png";

const sponsors = [
  {
    tier: "Platinum",
    companies: [
      { name: "SAP", logo: SAP },
      { name: "Stear Grant", logo: StearGrant },
    ],
  },
  { tier: "Gold", companies: [{ name: "Deloitte", logo: Deloitte }] },
  {
    tier: "Silver",
    companies: [
      { name: "Amazon", logo: Amazon },
      { name: "HP", logo: HP },
      { name: "Walter Gage", logo: WalterGage },
    ],
  },
  {
    tier: "Bronze",
    companies: [
      { name: "Arc'teryx", logo: Arcteryx },
      { name: "EY", logo: EY },
      { name: "Telus Digital", logo: TelusDigital },
    ],
  },
];

const tierConfig = {
  Platinum: { logoHeight: 50, logoHeightMd: 140 },
  Gold: { logoHeight: 45, logoHeightMd: 120 },
  Silver: { logoHeight: 40, logoHeightMd: 100 },
  Bronze: { logoHeight: 33, logoHeightMd: 85 },
};

const Sponsor = () => {
  return (
    <section id="sponsors" className="relative w-full bg-[#A1D4F2] -mb-2">
      {/* Mobile background */}
      <Image
        src={mobileBG}
        alt="Background"
        className="w-full h-auto md:hidden"
        priority
      />
      {/* Desktop background */}
      <Image
        src={bg}
        alt="Background"
        className="w-full h-auto hidden md:block"
        priority
      />

      <div className="absolute top-2 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-4 md:gap-10 w-full px-4">
        <h2 className="whitespace-nowrap text-[var(--blue-dark)] font-dm italic text-2xl sm:text-4xl md:text-5xl drop-shadow-[0_4px_10px_rgba(0,0,0,0.1)]">
          Our 2026 Sponsors
        </h2>

        {sponsors.map(({ tier, companies }) => {
          const { logoHeight, logoHeightMd } = tierConfig[tier];
          return (
            <div
              key={tier}
              className="flex flex-wrap items-center justify-center gap-6 md:gap-20"
            >
              {companies.map(({ name, logo }) => (
                <div key={name}>
                  <Image
                    src={logo}
                    alt={`${name} logo`}
                    height={logoHeight}
                    style={{ width: "auto", height: logoHeight }}
                    className="md:hidden"
                  />
                  <Image
                    src={logo}
                    alt={`${name} logo`}
                    height={logoHeightMd}
                    style={{ width: "auto", height: logoHeightMd }}
                    className="hidden md:block"
                  />
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Sponsor;
