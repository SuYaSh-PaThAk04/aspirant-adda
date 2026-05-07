"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import homeFeedImage from "../../assets/Home-feed.svg";
import homePointerImage from "../../assets/home-pointer.svg";

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
    },
    {
      id: "02",
      title: "Post",
      description:
        "Don't just study-contribute. Start a thread, spark a debate, or share a shortcut that could help thousands.",
    },
    {
      id: "03",
      title: "Quiz",
      description:
        "Turn your weak spots into strengths. Engage with bite-sized quizzes designed to simulate the heat of the actual exam.",
    },
    {
      id: "04",
      title: "Message | Direct Access",
      description:
        "No noise, just answers. Reach out to top-performers and peers instantly to keep your momentum going.",
    },
    {
      id: "05",
      title: "Buy Trusted Resource",
      description:
        "Stop searching and start studying. Get instant access to the best-vetted resources the community has to offer.",
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
      <section className={`w-full bg-[#FFFFFF] px-4 pb-10 pt-5 sm:px-6 lg:px-8 ${className}`}>
        <div className="mx-auto w-full max-w-[1180px]">
          <div className="rounded-[18px] bg-[#ffffff] px-6 py-8 md:px-10 md:py-10">
            <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 md:gap-8">
              <div className="h-full">
              <h2 className="text-[32px] font-semibold leading-none tracking-[-0.02em] text-[#111111] md:text-[38px]">
                Aspirant Adda
              </h2>
              <p className="mt-2 text-[16px] leading-none text-[#8f95a3] md:text-[24px]">
                Clarify. Connect. Succeed.
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
                        <h3 className="text-[18px] font-semibold leading-none transition-all duration-500 md:text-[38px]">
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
                          <p className="text-[12px] leading-[1.15] text-[#9aa0ad] transition-all duration-500 md:text-[16px]">
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
                <div className="relative h-[430px] w-[260px] md:h-[560px] md:w-[340px]">
                  <Image
                    src={homeFeedImage}
                    alt="Aspirant Adda home feed preview"
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
