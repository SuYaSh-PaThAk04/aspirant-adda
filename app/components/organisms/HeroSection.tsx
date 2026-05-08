import React from "react";
import Image from "next/image";
import heroIllustration from "../../assets/Hero-section.svg";
import heroBackground from "../../assets/hero-bg.svg";
import heroMobileBg from "../../assets/hero_mobile_bg.svg";
import heroMobile from "../../assets/hero-mobo.svg";
import discussionIcon from "../../assets/discussion.svg";
import communityIcon from "../../assets/community.svg";
import ratingIcon from "../../assets/ratung.svg";
import backedByLogo from "../../assets/backed-by.svg";

interface HeroSectionProps {
  className?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ className = "" }) => {
  return (
    <section className={`relative w-full overflow-hidden bg-white ${className}`}>
      <div className="lg:hidden">
        <div className="relative overflow-hidden px-4 pb-8 pt-4">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[410px]">
            <Image src={heroMobileBg} alt="" fill priority className="object-cover" />
          </div>

          <div className="relative z-10 mx-auto max-w-[360px]">
            <div className="flex items-center justify-between">
              <h3 className="text-[40px] font-semibold leading-none text-[#8b82ff]">
                Aspirant Adda
              </h3>
              <button
                type="button"
                className="inline-flex h-9 items-center rounded-full border border-[#958eff] bg-white px-3.5 text-[16px] font-medium leading-none text-[#7a71f8]"
              >
                Download App
              </button>
            </div>

            <h1 className="mt-36 text-center text-[22px] font-semibold uppercase leading-[1] tracking-[-0.01em] text-white">
              CLARIFY. CONNECT. SUCCEED.
            </h1>

            <div className="mx-auto mt-8 w-full max-w-[290px]">
              <Image
                src={heroIllustration}
                alt="Students collaborating for exam preparation"
                priority
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-[360px] px-4 pb-8">
          <p className="text-center text-[13px] leading-[1.2] text-[#9f9fa9]">
            India&apos;s Dedicated Platform For Serious Aspirants To Connect With
            Peers, Solve Doubts 1:1, And Master Daily Preparation Goals
            Together.
          </p>

          <div className="mt-6 flex justify-center">
            <button
              type="button"
              className="inline-flex h-10 items-center justify-center rounded-full border border-[#8f84ff] px-6 text-[31px] font-normal leading-none text-[#7a71f8]"
            >
              Join Us
            </button>
          </div>

          <div className="mt-8 flex items-start justify-between gap-x-2">
            <div className="flex w-[100px] flex-col items-center text-center">
              <Image src={communityIcon} alt="" width={16} height={14} />
              <p className="mt-3 text-[35px] font-semibold leading-none text-[#111111]">
                50k+
              </p>
              <p className="mt-2 text-[9px] leading-none text-[#9f9fa9]">
                Active Users
              </p>
            </div>

            <div className="flex w-[100px] flex-col items-center text-center">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Image
                    key={`mobile-rating-star-${index}`}
                    src={ratingIcon}
                    alt=""
                    width={12}
                    height={12}
                  />
                ))}
              </div>
              <p className="mt-3 text-[35px] font-semibold leading-none text-[#111111]">
                4.8
              </p>
              <p className="mt-2 text-[9px] leading-none text-[#9f9fa9]">
                Ratings
              </p>
            </div>

            <div className="flex w-[110px] flex-col items-center text-center">
              <Image src={discussionIcon} alt="" width={16} height={14} />
              <p className="mt-3 text-[35px] font-semibold leading-none text-[#111111]">
                1000+
              </p>
              <p className="mt-2 text-[9px] leading-none text-[#9f9fa9]">
                Daily Discussions
              </p>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <Image
              src={backedByLogo}
              alt="Backed by partners"
              className="h-auto w-full max-w-[260px]"
            />
          </div>
        </div>
      </div>

      <div className="relative hidden w-full overflow-hidden bg-white px-4 pb-30 pt-3 sm:px-6 lg:block lg:px-10 lg:pb-14">
        <div className="pointer-events-none absolute right-0 top-0 hidden h-[69%] w-[38%] lg:block">
          <Image
            src={heroBackground}
            alt=""
            fill
            priority
            className="object-cover object-left"
          />
        </div>

        <div className="relative mx-auto flex w-full max-w-[1240px] flex-col lg:min-h-[470px] lg:justify-between">
        <div className="flex h-12 items-center justify-between lg:h-[62px]">
          <h3 className="text-[19px] font-semibold leading-none text-[#8b82ff] sm:text-[23px] lg:text-[26px]">
            Aspirant Adda
          </h3>

          <button
            type="button"
            className="inline-flex h-8 items-center rounded-full border border-[#d0cbff] bg-white px-4 text-[15px] font-medium leading-none text-[#8b82ff] transition-colors hover:bg-[#f6f4ff] sm:h-9 sm:px-4 sm:text-[17px] lg:h-[36px] lg:px-5 lg:text-[19px]"
          >
            <span>Download App</span>
          </button>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <div className="pt-54 lg:pt-58">
            <h1 className="max-w-[540px] text-[18px] font-semibold uppercase leading-[0.98] tracking-[-0.02em] text-[#7a71f8] sm:text-[20px] lg:text-[52px]">
              CLARIFY. CONNECT.
              <br />
              SUCCEED.
            </h1>
            <p className="mt-6 max-w-[520px] text-[14px] leading-[1.2] text-[#9f9fa9] sm:text-[15px] lg:text-[15px]">
            India &apos;s First Social App For Competitive Exam Aspirants To Connect 1:1 With Peers, Mentors, and Find Trusted Resources To Make Smarter Preparation & Financial Decisions
            </p>
            <button
              type="button"
              className="mt-5 inline-flex h-7 items-center justify-center rounded-full border border-[#8f84ff] px-5 text-[17px] font-normal leading-none text-[#7a71f8] transition-opacity hover:opacity-90 sm:h-8 sm:text-[19px] lg:h-9 lg:px-6 lg:text-[19px]"
            >
              Join today!
            </button>
          </div>

          <div className="relative mx-auto w-full max-w-[500px] lg:mt-0 lg:max-w-[540px]">
            <div className="relative mx-auto h-[250px] w-full sm:h-[310px] lg:h-[370px]">
              <div className="absolute bottom-0 left-1/2 w-full -translate-x-1/2 lg:bottom-[-195px] lg:w-[102%] lg:-translate-x-[57%]">
                <div className="relative h-[250px] w-full sm:h-[310px] lg:h-[360px]">
                  <div className="absolute bottom-[36px] right-[14%] w-[44%] min-w-[200px] max-w-[300px] lg:bottom-[-52px] lg:right-[0%] lg:w-[72%]">
                    <Image
                      src={heroMobile}
                      alt="App screen mockup"
                      priority
                      className="h-auto w-full"
                    />
                  </div>

                  <div className="absolute bottom-[-4px] left-1/2 w-[98%] -translate-x-1/2 lg:bottom-[-42px] lg:w-[106%]">
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

        <div className="mt-10 flex flex-wrap items-start justify-center gap-x-10 gap-y-5 pb-2 lg:mt-8 lg:justify-start lg:pl-2 lg:gap-x-12">
          <div className="flex w-[150px] flex-col items-center text-center px-2 py-1">
            <div className="flex h-[18px] items-center justify-center">
              <Image src={communityIcon} alt="" width={22} height={18} />
            </div>
            <p className="mt-4 text-[18px] font-semibold leading-none text-[#1d1d1f] lg:text-[22px]">
              30k+
            </p>
            <p className="mt-3 min-h-[30px] text-[14px] leading-none text-[#9f9fa9] lg:text-[15px]">
              Engaging Users
            </p>
          </div>

          <div className="flex w-[150px] flex-col items-center text-center px-2 py-1">
            <div className="flex h-[18px] items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, index) => (
                <Image
                  key={`rating-star-${index}`}
                  src={ratingIcon}
                  alt=""
                  width={18}
                  height={18}
                />
              ))}
            </div>
            <p className="mt-4 text-[18px] font-semibold leading-none text-[#1d1d1f] lg:text-[22px]">
              4.8
            </p>
            <p className="mt-3 min-h-[30px] text-[14px] leading-none text-[#9f9fa9] lg:text-[15px]">
              Ratings
            </p>
          </div>

          <div className="flex w-[150px] flex-col items-center text-center px-2 py-1">
            <div className="flex h-[18px] items-center justify-center">
              <Image src={discussionIcon} alt="" width={18} height={18} />
            </div>
            <p className="mt-4 text-[18px] font-semibold leading-none text-[#1d1d1f] lg:text-[22px]">
              3000+
            </p>
            <p className="mt-3 min-h-[30px] text-[14px] leading-none text-[#9f9fa9] lg:text-[15px]">
              Daily Active Contributions
            </p>
          </div>
        </div>

        <div className="mt-18 flex justify-center">
          <Image
            src={backedByLogo}
            alt="Backed by partners"
            className="h-full w-full max-w-[0px] sm:max-w-[320px] md:max-w-[380px]"
          />
        </div>
      </div>
      </div>
    </section>
  );
};
