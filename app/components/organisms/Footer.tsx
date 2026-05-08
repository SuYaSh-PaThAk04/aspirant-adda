import React from "react";
import Image from "next/image";
import facebookIcon from "../../assets/facebook.svg";
import twitterIcon from "../../assets/twitter.svg";
import instagramIcon from "../../assets/instagram.svg";
import linkedinIcon from "../../assets/linkedin.svg";

interface FooterProps {
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({ className = "" }) => {
  const socialLinks = [
    { href: "#", alt: "Facebook", icon: facebookIcon },
    { href: "#", alt: "Twitter", icon: twitterIcon },
    { href: "#", alt: "Instagram", icon: instagramIcon },
    { href: "#", alt: "LinkedIn", icon: linkedinIcon },
  ];

  const quickLinks = ["Contact Us", "About", "Privacy Policy", "Terms & Condition"];

  return (
    <footer
      className={`w-full bg-[linear-gradient(180deg,#FFFFFF_0%,#F4F0FF_10%,#D5CCFF_38%,#9D91FA_68%,#776CF2_100%)] text-black ${className}`}
    >
      <div className="mx-auto w-full max-w-[1280px] px-6 pb-4 pt-16 md:px-14 md:pt-20">
        <div className="mb-8 grid grid-cols-1 gap-10 md:grid-cols-2 md:items-start">
          <div>
            <h3 className="text-4xl font-medium leading-[0.95] tracking-[-0.02em] md:text-[56px]">
              Aspirant
              <br />
              Adda
            </h3>
            <div className="mt-5 flex items-center gap-5">
              {socialLinks.map((social) => (
                <a
                  key={social.alt}
                  href={social.href}
                  aria-label={social.alt}
                  className="opacity-95 transition-opacity hover:opacity-75"
                >
                  <Image
                    src={social.icon}
                    alt={social.alt}
                    width={28}
                    height={28}
                    className="h-7 w-7"
                  />
                </a>
              ))}
            </div>
          </div>
          <div className="md:justify-self-end">
            <ul className="space-y-1 text-base font-normal leading-7">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="transition-opacity hover:opacity-75">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="overflow-hidden text-[22vw] font-bold uppercase leading-none tracking-[0.01em] text-white/45 md:text-[248px]">
            Succeed
          </h2>
        </div>

        <div className="mt-1 flex justify-center">
          <p className="text-center text-sm text-white/65 md:text-base">
            © 2026 Aspirant Adda | India
          </p>
        </div>
      </div>
    </footer>
  );
};
