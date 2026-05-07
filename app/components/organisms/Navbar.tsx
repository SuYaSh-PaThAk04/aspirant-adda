import React from "react";
import Image from "next/image";
import appleIcon from "../../assets/apple.svg";

interface NavbarProps {
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ className = "" }) => {
  return (
    <nav className={`relative z-40 w-full bg-white ${className}`}>
      <div className="mx-auto flex h-16 w-full max-w-[1320px] items-center justify-between px-5 sm:px-8 lg:h-[74px] lg:px-12">
        <h3 className="text-[24px] font-semibold leading-none text-[#8b82ff] sm:text-[30px] lg:text-[40px]">
          Aspirant Adda
        </h3>

        <button
          type="button"
          className="inline-flex h-10 items-center gap-2 rounded-full border border-[#d0cbff] bg-white px-4 text-[22px] font-medium leading-none text-[#8b82ff] transition-colors hover:bg-[#f6f4ff] sm:h-11 sm:px-5 sm:text-[24px] lg:h-[50px] lg:px-7 lg:text-[42px]"
        >
          <span className="inline-flex items-center">
            <Image src={appleIcon} alt="" width={11} height={13} />
          </span>
          <span>Download App</span>
        </button>
      </div>
    </nav>
  );
};
