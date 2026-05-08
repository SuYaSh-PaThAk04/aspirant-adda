"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import homePointerImage from "../../assets/home-pointer.svg";
import homeFeedScreenImage from "../../assets/mobile-screen/home-feed.jpeg";
import postScreenImage from "../../assets/mobile-screen/Post.jpeg";
import quizScreenImage from "../../assets/mobile-screen/quiz.jpeg";
import messageScreenImage from "../../assets/mobile-screen/message.jpeg";
import buyScreenImage from "../../assets/mobile-screen/Buy.jpeg";

interface MasterclassesSectionProps {
  className?: string;
}

export const MasterclassesSection: React.FC<MasterclassesSectionProps> = ({
  className = "",
}) => {
  const [activeItem, setActiveItem] = React.useState(0);

  const navItems = [
    {
      id: "01",
      title: "Home Feed",
      description:
        "Get your doubts solved through high-intent peer discussions and shared preparation strategies. Connect with thousands of aspirants who are on the same journey as you.",
      image: homeFeedScreenImage,
    },
    {
      id: "02",
      title: "Post",
      description:
        "Don't just study-contribute. Start a thread, spark a debate, or share a shortcut that could help thousands.",
      image: postScreenImage,
    },
    {
      id: "03",
      title: "Quiz",
      description:
        "Turn your weak spots into strengths. Engage with bite-sized quizzes designed to simulate the heat of the actual exam.",
      image: quizScreenImage,
    },
    {
      id: "04",
      title: "Message | Direct Access",
      description:
        "No noise, just answers. Reach out to top-performers and peers instantly to keep your momentum going.",
      image: messageScreenImage,
    },
    {
      id: "05",
      title: "Buy Trusted Resource",
      description:
        "Stop searching and start studying. Get instant access to the best-vetted resources the community has to offer.",
      image: buyScreenImage,
    },
  ];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveItem((prev) => (prev + 1) % navItems.length);
    }, 2500);

    return () => window.clearInterval(timer);
  }, [navItems.length]);

  return (
    <>
      <section className={`w-full bg-[#FFFFFF] ${className}`}>
        <div className="mx-auto w-full max-w-[1180px] px-4 pb-8 pt-6 sm:px-6 lg:hidden">
          <div className="rounded-[12px] bg-[#ffffff] px-3 py-3">
            <h2 className="text-center text-[22px] font-semibold leading-none text-[#111111]">
              Aspirant Adda
            </h2>
            <p className="mt-2 text-center text-[16px] leading-none text-[#111111]">
              Clarify. Connect. Succeed.
            </p>

            <div className="mt-4 border-b border-[#d8dbe2] pb-2">
              <div className="grid grid-cols-5 items-center gap-2">
                {navItems.map((item, index) => {
                  const isActive = activeItem === index;

                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setActiveItem(index)}
                      className={`flex items-center justify-center gap-2 whitespace-nowrap text-[13px] font-semibold leading-none transition-colors ${
                        isActive ? "text-[#111111]" : "text-[#8f95a3]"
                      }`}
                    >
                      <span>{item.id}</span>
                      {isActive ? <span>{item.title}</span> : null}
                    </button>
                  );
                })}
              </div>

              <div className="relative mt-2 h-[2px] w-full bg-transparent">
                <div
                  className="absolute left-0 top-0 h-full w-1/5 bg-[#7a71f8] transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(${activeItem * 100}%)` }}
                />
              </div>
            </div>

            <p className="mt-3 text-[11px] leading-[1.25] text-[#9aa0ad]">
              {navItems[activeItem]?.description}
            </p>

            <div className="mt-5 flex justify-center">
              <div className="relative h-[300px] w-[122px] overflow-hidden rounded-[24px] border-[4px] border-[#1f2026] shadow-[0_8px_20px_rgba(20,20,35,0.12)]">
                <Image
                  src={navItems[activeItem]?.image ?? homeFeedScreenImage}
                  alt={`${navItems[activeItem]?.title} screen`}
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        <div className="hidden px-4 pb-10 pt-5 sm:px-6 lg:block lg:px-8">
          <div className="mx-auto w-full max-w-[1180px]">
            <div className="rounded-[18px] bg-[#ffffff] px-6 py-8 md:px-10 md:py-10">
              <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 md:gap-8">
                <div className="h-full">
                <h2 className="text-[32px] font-semibold leading-none tracking-[-0.02em] text-[#111111] md:text-[40px]">
                  Aspirant Adda
                  <br></br>
                </h2>
                <p className="mt-2 text-[18px] leading-none text-[#8f95a3] md:text-[22px]">
                  Clarify. Connect. Succeed.
                  <br></br>
                  <br></br>
                </p>

                <div className="relative mt-4">
                  {navItems.map((item, index) => {
                    const isActive = activeItem === index;

                    return (
                      <div key={item.id} className="border-b border-[#cfd2d8] py-1.5">
                        <div
                          className={`w-full text-left transition-colors duration-500 ${
                            isActive ? "text-[#111111]" : "text-[#98a0ad]"
                          }`}
                        >
                          <h3 className="text-[12px] font-semibold leading-none transition-all duration-500 md:text-[30px]">
                            {item.id} {item.title}
                          </h3>
                        </div>

                        {isActive && (
                          <div className="mt-1 flex max-w-[620px] items-start gap-2 overflow-hidden pl-1">
                            <div
                              key={`pointer-${activeItem}`}
                              className="mt-0.5 h-[48px] w-[7px] shrink-0 overflow-hidden md:h-[56px] md:w-[8px]"
                            >
                              <div
                                className="h-full w-full origin-top animate-[pointerReveal_2.5s_linear_forwards]"
                                style={{ transform: "scaleY(0)" }}
                              >
                                <Image
                                  src={homePointerImage}
                                  alt={`${item.title} pointer`}
                                  width={9}
                                  height={86}
                                  className="h-full w-full object-contain"
                                />
                              </div>
                            </div>
                            <p className="text-[13px] leading-[1.15] text-[#9aa0ad] transition-all duration-500 md:text-[17px]">
                              {item.description}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
                </div>

                <div className="flex h-full items-stretch justify-center md:justify-end">
                  <div className="relative h-[300px] w-[212px] overflow-hidden rounded-[28px] border-[6px] border-[#1f2026] shadow-[0_10px_24px_rgba(20,20,35,0.12)] md:h-[500px] md:w-[282px] md:rounded-[34px] md:border-[8px]">
                    <Image
                      src={navItems[activeItem]?.image ?? homeFeedScreenImage}
                      alt={`${navItems[activeItem]?.title} screen`}
                      fill
                      className="object-cover object-center"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        @keyframes pointerReveal {
          from {
            transform: scaleY(0);
          }
          to {
            transform: scaleY(1);
          }
        }
      `}</style>
    </>
  );
};
