"use client";
import Image from "next/image";
import bg from "@/app/assets/sponsor_bg.svg";

// Platinum
import SAP from "@/app/assets/sponsors/SAP.svg";
// Gold
import Deloitte from "@/app/assets/sponsors/Deloitte.svg";
// Silver
import Amazon from "@/app/assets/sponsors/Amazon.svg";
import HP from "@/app/assets/sponsors/HP.svg";
// Bronze
import Arcteryx from "@/app/assets/sponsors/Arcteryx.svg";
import EY from "@/app/assets/sponsors/EY.svg";
import TelusDigital from "@/app/assets/sponsors/TelusDigital.svg";

// Grants
import StearGrant from "@/app/assets/sponsors/StearGrant.svg";
import WalterGage from "@/app/assets/sponsors/WalterGage.svg";

const sponsors = [
  { tier: "Platinum", companies: [{ name: "SAP", logo: SAP }, { name: "Stear Grant", logo: StearGrant }] },
  { tier: "Gold", companies: [{ name: "Deloitte", logo: Deloitte }] },
  { tier: "Silver", companies: [{ name: "Amazon", logo: Amazon }, { name: "HP", logo: HP }, { name: "Walter Gage", logo: WalterGage }] },
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
  Platinum: { logoHeight: 70,  logoHeightMd: 140 },
  Gold:     { logoHeight: 55,  logoHeightMd: 120 },
  Silver:   { logoHeight: 45,  logoHeightMd: 100 },
  Bronze:   { logoHeight: 35,  logoHeightMd: 85  },
};

const Sponsor = () => {
  return (
    <section id="sponsors" className="relative w-full bg-[#A1D4F2] -mb-2">
      <div className="absolute top-2 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-4 md:gap-10 w-full px-4">
        <h2 className="whitespace-nowrap text-[var(--blue-dark)] font-dm italic text-2xl sm:text-4xl md:text-5xl drop-shadow-[0_4px_10px_rgba(0,0,0,0.1)]">
          Our 2026 Sponsors
        </h2>

        {sponsors.map(({ tier, companies }) => {
          const { logoHeight, logoHeightMd } = tierConfig[tier];
          return (
            <div key={tier} className="flex flex-wrap items-center justify-center gap-6 md:gap-20">
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

      {/* Background image */}
      <Image src={bg} alt="Background" className="w-full h-auto" priority />
    </section>
  );
};

export default Sponsor;