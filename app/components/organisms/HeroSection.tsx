import React from "react";
import Image from "next/image";
import heroIllustration from "../../assets/Hero-section.svg";
import heroBackground from "../../assets/hero-bg.svg";
import heroMobile from "../../assets/hero-mobo.svg";
import discussionIcon from "../../assets/discussion.svg";
import communityIcon from "../../assets/community.svg";
import ratingIcon from "../../assets/ratung.svg";

interface HeroSectionProps {
  className?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ className = "" }) => {
  return (
    <section
      className={`relative w-full h-250 overflow-hidden bg-white px-5 pb-8 pt-2 sm:px-8 lg:px-12 ${className}`}
    >
      <div className="pointer-events-none absolute right-0 top-0 hidden h-[85%] w-[38%] lg:block">
        <Image
          src={heroBackground}
          alt=""
          fill
          priority
          className="object-cover object-left"
        />
      </div>

      <div className="relative mx-auto flex w-full max-w-[1320px] flex-col lg:min-h-[600px] lg:justify-between">
        <div className="flex h-14 items-center justify-between lg:h-[68px]">
          <h3 className="text-[22px] font-semibold leading-none text-[#8b82ff] sm:text-[26px] lg:text-[30px]">
            Aspirant Adda
          </h3>

          <button
            type="button"
            className="inline-flex h-9 items-center rounded-full border border-[#d0cbff] bg-white px-4 text-[18px] font-medium leading-none text-[#8b82ff] transition-colors hover:bg-[#f6f4ff] sm:h-10 sm:px-5 sm:text-[20px] lg:h-[42px] lg:px-6 lg:text-[26px]"
          >
            <span>Download App</span>
          </button>
        </div>

        <div className="grid gap-6  lg:grid-cols-[1fr_0.93fr] lg:items-start">
          <div className="pt-30 lg:pt-[300px]">
            <h1 className="max-w-[620px] text-[20px] font-semibold uppercase leading-[0.98] tracking-[-0.02em] text-[#7a71f8] sm:text-[20px] lg:text-[66px]">
              CLARIFY. CONNECT.
              <br />
              SUCCEED.
            </h1>
            <p className="mt-5 max-w-[590px] text-[15px] leading-[1.18] text-[#9f9fa9] sm:text-[17px] lg:text-[17px]">
              India&apos;s Dedicated Platform For Serious Aspirants To Connect
              With Peers, Solve Doubts 1:1, And Master Daily Preparation Goals Together.
            </p>
            <button
              type="button"
              className="mt-7 inline-flex h-6 items-center justify-center rounded-full border border-[#8f84ff] px-6 text-[24px] font-normal leading-none text-[#7a71f8] transition-opacity hover:opacity-90 sm:h-10 sm:text-[28px] lg:h-9 lg:px-7 lg:text-[24px]"
            >
              Join us
            </button>
          </div>

          <div className="relative mx-auto w-full max-w-[560px] lg:mt-0 lg:max-w-[620px]">
            <div className="relative mx-auto h-[280px] w-full sm:h-[360px] lg:h-[470px]">
              <div className="absolute bottom-0 left-1/2 w-full -translate-x-1/2 lg:bottom-[-293px] lg:w-[104%] lg:-translate-x-[60%]">
                <div className="relative h-[280px] w-full sm:h-[360px] lg:h-[448px]">
                  <div className="absolute bottom-[58px] right-[16%] w-[50%] min-w-[300px] max-w-[450px] lg:bottom-[-100px] lg:right-[-8%] lg:w-[84%]">
                    <Image
                      src={heroMobile}
                      alt="App screen mockup"
                      priority
                      className="h-200 w-500"
                    />
                  </div>

                  <div className="absolute bottom-[-6px] left-1/2 w-[102%] -translate-x-1/2 lg:bottom-[-62px] lg:w-[116%]">
                    <Image
                      src={heroIllustration}
                      alt="Students collaborating for exam preparation"
                      priority
                      className="h-auto w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 flex flex-wrap items-start justify-center gap-x-12 gap-y-8 pb-2 lg:mt-26 lg:justify-start lg:pl-4 lg:gap-x-16">
          <div className="flex min-w-[110px] flex-col items-center text-center px-4 py-3">
            <Image src={communityIcon} alt="" width={27} height={22} />
            <p className="mt-5 text-[23px] font-semibold leading-none text-[#1d1d1f] lg:text-[27px]">
              50k+
            </p>
            <p className="mt-3 text-[18px] leading-none text-[#9f9fa9] lg:text-[21px]">
              Active Users
            </p>
          </div>

          <div className="flex min-w-[90px] flex-col items-center text-center px-4 py-3">
            <Image src={ratingIcon} alt="" width={23} height={22} />
            <p className="mt-5 text-[23px] font-semibold leading-none text-[#1d1d1f] lg:text-[27px]">
              4.8
            </p>
            <p className="mt-3 text-[18px] leading-none text-[#9f9fa9] lg:text-[21px]">
              Ratings
            </p>
          </div>

          <div className="flex min-w-[150px] flex-col items-center text-center px-4 py-3">
            <Image src={discussionIcon} alt="" width={22} height={23} />
            <p className="mt-5 text-[23px] font-semibold leading-none text-[#1d1d1f] lg:text-[27px]">
              1000+
            </p>
            <p className="mt-3 text-[18px] leading-none text-[#9f9fa9] lg:text-[21px]">
              Daily Discussions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
