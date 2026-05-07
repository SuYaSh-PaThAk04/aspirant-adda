import React from "react";

interface WhySectionProps {
  className?: string;
}

export const WhySection: React.FC<WhySectionProps> = ({ className = "" }) => {
  const reasons = [
    {
      number: "01.",
      title: "Peer-first",
      description:
        "A Network Of Verified High-Achievers. No Influencers, No Clout-Chasing, Just Collective Growth Through Shared Discipline.",
    },
    {
      number: "02.",
      title: "Ad-free forever",
      description:
        "Your Focus Is Sacred. No Padhai Ads And Commercial Interruptions That Distract From Your Deep Sessions.",
    },
    {
      number: "03.",
      title: "Free at the core",
      description:
        "Access To The Main Community Is Always Open. Premium Features Are Entirely Opt-In For Those Seeking Deeper Analytical Tools.",
    },
  ];

  return (
    <section className={`w-full bg-[#FFFFFF] px-4 pb-10 pt-10 sm:px-6 lg:px-8 ${className}`}>
      <div className="mx-auto w-full max-w-[1220px]">
        <div className="text-center">
          <h2 className="text-3xl font-semibold leading-none tracking-[-0.02em] text-[#111111] md:text-[42px]">
            Why Aspirant Adda?
          </h2>
          <p className="mx-auto mt-3 max-w-[920px] text-sm font-medium leading-snug text-[#a3a3ac] md:text-[16px]">
            Learn the High-Intent Strategies Used By Top Educators To Decode
            Complex Subjects And Guarantee Selection.
          </p>
        </div>

        <div className="mt-7 rounded-[24px] border border-[#e4e4e8] bg-[#FFFFFF] px-4 py-4 md:px-8 md:py-8">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {reasons.map((reason, index) => (
              <article
                key={reason.number}
                className={`px-4 py-3 md:px-5 md:py-4 ${index < reasons.length - 1 ? "md:border-r md:border-[#e2e2e6]" : ""}`}
              >
                <p className="text-[28px] font-medium leading-none text-[#7a71f8] md:text-[46px]">
                  {reason.number}
                </p>
                <h3 className="mt-2 text-[24px] font-semibold italic leading-[1.08] text-[#1c1c22] md:text-[30px]">
                  {reason.title}
                </h3>
                <p className="mt-4 max-w-[320px] text-[17px] leading-[1.35] text-[#8d8f98] md:text-[16px] md:leading-[1.45]">
                  {reason.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
