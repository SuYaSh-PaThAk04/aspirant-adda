"use client";

import React from "react";
import Image from "next/image";
import addMentorIllustration from "../../assets/AddMentor.svg";
import atishMathurImage from "../../assets/masterclass/Atish-mathur.jpg";
import parveenKaswanImage from "../../assets/masterclass/Parveen_Kaswan.jpg";
import shAshokKumarImage from "../../assets/masterclass/sh_ashok_kumR.jpg";
import shekharDattImage from "../../assets/masterclass/shekhar_datt.jpg";
import shubhraMamImage from "../../assets/masterclass/Shubhra-mam.jpg";
import tanyaSinghImage from "../../assets/masterclass/Tanya_Singh.jpg";

interface ExpertMasterclassesSectionProps {
  className?: string;
}

export const ExpertMasterclassesSection: React.FC<ExpertMasterclassesSectionProps> = ({
  className = "",
}) => {
  const [showMentorScreen, setShowMentorScreen] = React.useState(false);
  const [activeSlide, setActiveSlide] = React.useState(0);
  const mentors = [
    { name: "Atish Mathur", image: atishMathurImage },
    { name: "Parveen Kaswan", image: parveenKaswanImage },
    { name: "Sh Ashok Kumar", image: shAshokKumarImage },
    { name: "Shekhar Datt", image: shekharDattImage },
    { name: "Shubhra Mam", image: shubhraMamImage },
    { name: "Tanya Singh", image: tanyaSinghImage },
  ];

  React.useEffect(() => {
    if (showMentorScreen) return;
    const timer = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % mentors.length);
    }, 2500);
    return () => window.clearInterval(timer);
  }, [showMentorScreen, mentors.length]);

  return (
    <section
      className={`w-full px-4 py-10 sm:px-6 lg:px-8 ${
        showMentorScreen ? "bg-[#ffffff]" : "bg-[#b7b0f2]"
      } ${className}`}
    >
      <div className="mx-auto w-full max-w-[1180px]">
        <div className="relative">
          {/* Mobile: main masterclasses view */}
          {!showMentorScreen && (
            <div className="lg:hidden">
              <div className="px-2 py-2">
                <h2 className="text-[26px] font-semibold leading-[1.05] text-[#0b0b12]">
                  Expert Masterclasses
                </h2>
                <p className="mt-2 max-w-[520px] text-[14px] leading-[1.25] text-[#141523]">
                  Live Masterclasses from Top Mentors To Bring More Clarity, Direction, And Confidence To Your Preparation Journey. 
                </p>

                <button
                  type="button"
                  onClick={() => setShowMentorScreen(true)}
                  className="mt-4 inline-flex h-9 items-center justify-center rounded-full border border-[#958eff] bg-white px-5 text-[18px] leading-none text-[#7a71f8]"
                >
                  Become a Mentor
                </button>

                <div className="mt-6 overflow-hidden">
                  <div
                    className="flex gap-4 transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(calc(${activeSlide} * -76%))` }}
                  >
                    {mentors.map((mentor, index) => (
                      <article key={`mobile-${mentor.name}-${index}`} className="w-[72%] shrink-0">
                        <div className="relative h-[150px] w-full overflow-hidden rounded-[2px] bg-[#030b3b]">
                          <Image
                            src={mentor.image}
                            alt={mentor.name}
                            fill
                            className="object-cover"
                            priority={index === 0}
                          />
                        </div>
                        <p className="mt-3 text-[16px] leading-[1.05] text-[#141523]">
                          {mentor.name}
                        </p>
                      </article>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          <div
            className={`hidden px-6 py-8 transition-opacity duration-300 md:px-8 lg:block ${
              showMentorScreen ? "opacity-0" : "opacity-100"
            }`}
          >
            <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
              <div>
                <h2 className="text-4xl font-semibold leading-none text-[#0b0b12] sm:text-[50px]">
                  Expert Masterclasses
                </h2>
                <p className="mt-3 max-w-[740px] text-[20px] leading-[1.12] text-[#141523]">
                Live Masterclasses from Top Mentors To Bring More Clarity, Direction, And Confidence To Your Preparation Journey. 
                </p>
              </div>

              <button
                type="button"
                onClick={() => setShowMentorScreen(true)}
                className="inline-flex h-8 items-center justify-center rounded-full border border-[#958eff] bg-white px-3 text-[20px] leading-none text-[#7a71f8]"
              >
                Become a Mentor
              </button>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {Array.from({ length: 3 }).map((_, index) => {
                const mentor = mentors[(activeSlide + index) % mentors.length];
                return (
                <article key={`${mentor.name}-${index}`}>
                  <div className="relative h-[290px] w-full overflow-hidden bg-[#030b3b]">
                    <Image
                      src={mentor.image}
                      alt={mentor.name}
                      fill
                      className="object-cover transition-opacity duration-500"
                    />
                  </div>
                  <p className="mt-4 text-[20px] leading-none text-[#141523]">{mentor.name}</p>
                </article>
                );
              })}
            </div>
          </div>

          <div
            className={`absolute inset-0 bg-[#ffffff] px-6 py-8 transition-all duration-500 md:px-8 ${
              showMentorScreen
                ? "translate-y-0 opacity-100"
                : "pointer-events-none translate-y-6 opacity-0"
            }`}
          >
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <h2 className="text-[42px] font-semibold leading-none text-[#0b0b12]">
                  Join Aspirant Adda as mentor
                </h2>
                <p className="mt-2 max-w-[840px] text-[14px] leading-[1.25] text-[#8f93a0]">
                  Empower The Next Generation Of Learners On Aspirant Adda By Sharing
                  Your Exclusive Strategies And Subject Expertise To Guarantee Their
                  Selection
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowMentorScreen(false)}
                className="inline-flex h-8 items-center justify-center rounded-full border border-[#958eff] bg-white px-4 text-[20px] leading-none text-[#7a71f8]"
              >
                ← Back
              </button>
            </div>

            <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[1.1fr_0.9fr]">
              <form className="max-w-[620px]">
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  <input
                    type="text"
                    placeholder="Name"
                    className="h-11 rounded-[10px] border border-[#958eff] bg-transparent px-4 text-[22px] text-[#50525e] placeholder:text-[#9a9ca5] focus:outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="h-11 rounded-[10px] border border-[#958eff] bg-transparent px-4 text-[22px] text-[#50525e] placeholder:text-[#9a9ca5] focus:outline-none"
                  />
                </div>
                <textarea
                  placeholder="Brief"
                  className="mt-2 h-[160px] w-full resize-none rounded-[10px] border border-[#958eff] bg-transparent px-4 py-2 text-[22px] text-[#50525e] placeholder:text-[#9a9ca5] focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Social Media Link"
                  className="mt-2 h-11 w-full rounded-[10px] border border-[#958eff] bg-transparent px-4 text-[22px] text-[#50525e] placeholder:text-[#9a9ca5] focus:outline-none"
                />
                <button
                  type="button"
                  className="mt-5 inline-flex h-9 items-center justify-center rounded-full border border-[#958eff] bg-white px-5 text-[22px] leading-none text-[#7a71f8]"
                >
                  Submit
                </button>
              </form>

              <div className="relative mx-auto h-[260px] w-full max-w-[460px] md:h-[300px]">
                <Image
                  src={addMentorIllustration}
                  alt="Mentor joining illustration"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
