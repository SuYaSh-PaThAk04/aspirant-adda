import React from "react";

interface WhySectionProps {
  className?: string;
}

export const WhySection: React.FC<WhySectionProps> = ({ className = "" }) => {
  const reasons = [
    {
      number: "01.",
      title: "Peer-First By Design",
      description:
        "Built Around Aspirants, Seniors, And Mentors - Not Influencer Vanity Metrics.",
    },
    {
      number: "02.",
      title: "No Distracting Noise",
      description:
        "No Random Virality. No Endless Scrolling. Just Conversations That Actually Help You Prepare Better.",
    },
    {
      number: "03.",
      title: "Free At The Core",
      description:
        "The Main Community Will Always Stay Open And Accessible To Every Serious Aspirant.",
    },
  ];
  const mobileReasons = reasons;

  return (
    <section className={`w-full bg-[#FFFFFF] ${className}`}>
      <div className="mx-auto w-full max-w-[1220px] px-4 pb-10 pt-8 sm:px-6 lg:hidden">
        <div className="text-center">
          <h2 className="text-[24px] font-semibold leading-none tracking-[-0.01em] text-[#111111]">
            Why Aspirant Adda?
          </h2>
          <p className="mx-auto mt-2 max-w-[360px] text-[12px] font-medium leading-[1.2] text-[#a3a3ac]">
            Learn the High-Intent Strategies Used By Top Educators To Decode
            Complex Subjects And Guarantee Selection.
          </p>
        </div>

        <div className="mt-5 rounded-[14px] border border-[#ebebef] bg-[#FFFFFF] px-3 py-2">
          {mobileReasons.map((reason, index) => (
            <article
              key={reason.number}
              className={`py-3 ${index < mobileReasons.length - 1 ? "border-b border-[#ededf2]" : ""}`}
            >
              <p className="text-[32px] font-medium leading-none text-[#7a71f8]">{reason.number}</p>
              <h3 className="mt-2 text-[17px] font-medium italic leading-[1.05] text-[#1c1c22]">
                {reason.title}
              </h3>
              <p className="mt-3 text-[11px] leading-[1.2] text-[#8d8f98]">{reason.description}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="hidden px-4 pb-10 pt-10 sm:px-6 lg:block lg:px-8">
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
      </div>
    </section>
  );
};
