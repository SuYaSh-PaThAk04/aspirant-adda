import React from "react";
import Image from "next/image";
import featureTwoIllustration from "../../assets/feature2.svg";
import featureThreeIllustration from "../../assets/feature3.svg";
import communityDrivenIcon from "../../assets/community-driven.png";
import peerDoubtSolvingIcon from "../../assets/peer-doubt-solving.svg";
import engagementIcon from "../../assets/engagement.png";
import quizStartedWithPeer from "../../assets/Quiz-started-with-peer.svg";

interface FeaturesSectionProps {
  className?: string;
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({
  className = "",
}) => {
  return (
    <section className={`w-full bg-[#FFFFFF] px-4 py-10 sm:px-6 lg:px-8 ${className}`}>
      <div className="mx-auto w-full max-w-[1120px]">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3 md:grid-rows-2">
          <article className="relative overflow-hidden rounded-[20px] bg-[#ececec] px-5 py-5">
            <h3 className="max-w-[260px] text-[20px] font-semibold leading-[1.15] text-[#7a71f8]">
              Community Driven Interaction
            </h3>
            <p className="mt-2 text-[18px] font-medium uppercase leading-none text-[#7a71f8]">
              3X FASTER CLARITY
            </p>
            <p className="mt-6 max-w-[320px] text-[16px] leading-[1.2] text-[#a1a1ab]">
              Get Your Doubts Solved Through High-Intent Peer Discussions And
              Shared Preparation Strategies.
            </p>
            <div className="pointer-events-none absolute bottom-4 right-4 h-[92px] w-[180px]">
              <Image
                src={communityDrivenIcon}
                alt=""
                fill
                className="object-contain"
              />
            </div>
          </article>

          <article className="relative overflow-hidden rounded-[20px] bg-[#ececec] px-5 py-5">
            <h3 className="max-w-[260px] text-[20px] font-semibold leading-[1.15] text-[#7a71f8]">
              1:1 Peer Doubt <br></br>Solving
            </h3>
            <p className="mt-2 text-[18px] font-medium uppercase leading-none text-[#7a71f8]">
              100% FOCUSED SUPPORT
            </p>
            <p className="mt-6 max-w-[320px] text-[16px] leading-[1.2] text-[#a1a1ab]">
              Connect Directly With Fellow Aspirants For Real-Time 1:1 Problem
              Solving And Personal Guidance.
            </p>

            <div className="pointer-events-none absolute bottom-4 right-4 h-[92px] w-[180px]">
              <Image
                src={peerDoubtSolvingIcon}
                alt=""
                fill
                className="object-contain"
              />
            </div>
          </article>

          <article className="row-span-2 flex flex-col rounded-[20px] bg-[#ececec] px-5 py-5">
            <h3 className="text-[30px] font-semibold leading-[1.08] text-[#7a71f8]">
              Peer Network Community
            </h3>
            <div className="relative mt-3 h-[460px] w-full">
              <Image
                src={featureTwoIllustration}
                alt="Peer network visualization"
                fill
                className="object-cover"
              />
            </div>
            <p className="mt-auto text-[16px] leading-[1.2] text-[#a1a1ab]">
              Connect With The Most Ambitious Students And Level Up Your
              Preparation Together.
            </p>
          </article>

          <article className="relative overflow-hidden rounded-[20px] bg-[#ececec] px-5 py-5 md:col-span-2">
            <span className="text-[20px] font-semibold leading-[1.08] text-[#7a71f8]">
              Engagement-Focused <br></br>Growth
            </span>
            <p className="mt-2 text-[18px] font-medium uppercase leading-none text-[#7a71f8]">
              2X DAILY PRODUCTIVITY
            </p>
            <p className="mt-10 max-w-[520px] text-[16px] leading-[1.2] text-[#a1a1ab] md:mt-31">
              Build A Daily Routine With 1v1 Quizzes<br></br> And Weekly Masterclasses
              That Move<br></br> You Closer To Selection.
            </p>

            <div className="pointer-events-none absolute right-16 top-8 hidden md:flex md:flex-col md:items-center md:gap-6">
              <div className="relative h-[200px] w-[200px]">
                <Image src={engagementIcon} alt="" fill className="object-contain" />
              </div>

              <div className="relative h-8 w-[220px]">
                <Image src={quizStartedWithPeer} alt="" fill className="object-contain" />
              </div>
            </div>
          </article>
        </div>

        <article className="mt-3 grid grid-cols-1 overflow-hidden rounded-[22px] bg-[#ececec] md:grid-cols-2">
          <div className="px-5 py-10 md:py-12">
            <p className="text-[16px] font-medium uppercase leading-none text-[#7a71f8]">
              EXAM-CRACKING TOOLS
            </p>
            <h3 className="mt-2 text-[32px] font-semibold leading-[1.06] text-[#7a71f8]">
              Shop Trusted Resources
            </h3>
            <p className="mt-1 text-[22px] font-medium leading-none text-[#2e2e2e]">
              By Aspirant's Adda
            </p>
            <p className="mt-20 max-w-[300px] text-[16px] leading-[1.2] text-[#a1a1ab]">
              Explore Curated Book Recommendations And Expert-Vetted Materials
              Handpicked To Optimize Your Prep And Guarantee Selection.
            </p>
          </div>
          <div className="relative min-h-[200px] md:min-h-[260px]">
            <Image
              src={featureThreeIllustration}
              alt="Trusted study resources illustration"
              fill
              className="object-contain object-center scale-[0.88] md:scale-[0.84]"
            />
          </div>
        </article>
      </div>
    </section>
  );
};
