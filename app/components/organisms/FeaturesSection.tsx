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
    <section className={`w-full bg-[#FFFFFF] ${className}`}>
      <div className="mx-auto w-full max-w-[1120px] px-4 py-8 sm:px-6 lg:hidden">
        <div className="grid grid-cols-2 gap-3">
          <article className="relative overflow-hidden rounded-[12px] bg-[#f3f3f3] px-3 py-3">
            <h3 className="max-w-[130px] text-[12px] font-semibold leading-[1.1] text-[#1d1d1f]">
              High Value Curated Feed
            </h3>
            <p className="mt-2 text-[8px] font-medium uppercase leading-none text-[#7a71f8]">
              10X FASTER CLARITY
            </p>
            <p className="mt-3 max-w-[125px] text-[8px] leading-[1.2] text-[#9f9fa9]">
              Your Personalized Feed For Exam Updates, Peer Discussions, Mentor
              Guidance, And Daily Preparation Support.
            </p>
            <div className="pointer-events-none mt-4 ml-auto">
              <Image
                src={communityDrivenIcon}
                alt=""
                width={56}
                height={36}
                className="h-auto w-[56px] object-contain"
              />
            </div>
          </article>

          <article className="relative overflow-hidden rounded-[12px] bg-[#f3f3f3] px-3 py-3">
            <h3 className="max-w-[130px] text-[12px] font-semibold leading-[1.1] text-[#1d1d1f]">
              1:1 Peer Support
            </h3>
            <p className="mt-2 text-[8px] font-medium uppercase leading-none text-[#7a71f8]">
              100% FOCUSED SUPPORT
            </p>
            <p className="mt-3 max-w-[125px] text-[8px] leading-[1.2] text-[#9f9fa9]">
              Connect With Aspirants & Mentors For Faster Doubt Solving, Personal
              Guidance, And Peer Support.
            </p>
            <div className="pointer-events-none mt-4 ml-auto">
              <Image
                src={peerDoubtSolvingIcon}
                alt=""
                width={82}
                height={64}
                className="h-auto w-[160px] object-contain"
              />
            </div>
          </article>
        </div>

        <article className="mt-3 overflow-hidden rounded-[12px] bg-[#f3f3f3] px-3 py-3">
          <span className="text-[12px] font-semibold leading-[1.1] text-[#1d1d1f]">
            1-v-1 Live Quiz Battles
          </span>
          <p className="mt-2 text-[8px] font-medium uppercase leading-none text-[#7a71f8]">
            4x DAILY REVISION
          </p>
          <div className="mt-2 flex items-start justify-between gap-3">
            <p className="max-w-[150px] text-[8px] leading-[1.2] text-[#9f9fa9]">
              Get Matched Instantly With Fellow Aspirants <br />
              To Play Real-Time 1v1<br />
              Quiz Challenges.
            </p>
            <div className="-mt-2 shrink-0">
              <div className="relative h-[70px] w-[70px]">
                <Image
                  src={engagementIcon}
                  alt=""
                  fill
                  className="scale-[1.6] object-contain"
                />
              </div>
              <div className="relative mt-1 h-[12px] w-[70px]">
                <Image
                  src={quizStartedWithPeer}
                  alt=""
                  fill
                  className="scale-[1.15] object-contain"
                />
              </div>
            </div>
          </div>
        </article>

        <article className="mt-3 grid grid-cols-[1.05fr_1fr] overflow-hidden rounded-[12px] bg-[#f3f3f3]">
          <div className="relative min-h-[110px]">
            <Image
              src={featureTwoIllustration}
              alt="Peer network visualization"
              fill
              className="object-contain object-center scale-[1.08] rotate-90"
            />
          </div>
          <div className="px-3 py-3">
            <h3 className="text-[12px] font-semibold leading-[1.1] text-[#1d1d1f]">
              Pan India Aspirant Network
            </h3>
            <p className="mt-3 text-[8px] leading-[1.2] text-[#9f9fa9]">
              From Fellow Aspirants To Seniors And Mentors; Find The Right People
              For Every Stage Of Your Preparation
            </p>
          </div>
        </article>

        <article className="mt-3 grid grid-cols-[1fr_0.95fr] overflow-hidden rounded-[12px] bg-[#f3f3f3]">
          <div className="px-3 py-3">
            <p className="text-[8px] font-medium uppercase leading-none text-[#7a71f8]">
              EXAM-CRACKING TOOLS
            </p>
            <h3 className="mt-1 text-[12px] font-semibold leading-[1.08] text-[#1d1d1f]">
              Verified Exam Sources & Resources
              <br />
              COURSES ADDA
            </h3>
            <p className="mt-1 text-[8px] font-medium leading-none text-[#2e2e2e]">
              SMARTER COURSE DECISIONS
            </p>
            <p className="mt-4 max-w-[155px] text-[8px] leading-[1.2] text-[#9f9fa9]">
              Compare Courses, Read Trusted Reviews, And Ask Questions Before
              Investing Your Time And Money.
            </p>
          </div>
          <div className="relative min-h-[96px]">
            <Image
              src={featureThreeIllustration}
              alt="Trusted study resources illustration"
              fill
              className="object-contain object-center scale-[0.64]"
            />
          </div>
        </article>
      </div>

      <div className="hidden px-4 py-10 sm:px-6 lg:block lg:px-8">
        <div className="mx-auto w-full max-w-[1120px]">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-3 md:grid-rows-2">
            <article className="relative overflow-hidden rounded-[20px] bg-[#ececec] px-5 py-5">
              <h3 className="max-w-[260px] text-[20px] font-semibold leading-[1.15] text-[#7a71f8]">
              High Value Curated Feed
              </h3>
              <p className="mt-2 text-[18px] font-medium uppercase leading-none text-[#7a71f8]">
                10X FASTER CLARITY
              </p>
              <p className="mt-6 max-w-[320px] text-[16px] leading-[1.2] text-[#a1a1ab]">
              Your Personalized Feed For Exam Updates, Peer Discussions, Mentor Guidance, And Daily Preparation Support. 
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
              1:1 Peer Support
              </h3>
              <p className="mt-2 text-[18px] font-medium uppercase leading-none text-[#7a71f8]">
                100% FOCUSED SUPPORT
              </p>
              <p className="mt-6 max-w-[320px] text-[16px] leading-[1.2] text-[#a1a1ab]">
              Connect With Aspirants & Mentors For Faster Doubt Solving, Personal Guidance, And Peer Support. 
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
              Pan India Aspirant Network
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
              From Fellow Aspirants To Seniors And Mentors; Find The Right People For Every Stage Of Your Preparation
              </p>
            </article>

            <article className="relative overflow-hidden rounded-[20px] bg-[#ececec] px-5 py-5 md:col-span-2">
              <span className="text-[20px] font-semibold leading-[1.08] text-[#7a71f8]">
              1-v-1 Live Quiz Battles
              </span>
              <p className="mt-2 text-[18px] font-medium uppercase leading-none text-[#7a71f8]">
              4x DAILY REVISION
              </p>
              <p className="mt-10 max-w-[520px] text-[16px] leading-[1.2] text-[#a1a1ab] md:mt-31">
              Get Matched Instantly With Fellow Aspirants <br>
              </br> To Play Real-Time 1v1<br>
              </br> Quiz Challenges. 
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
              Verified Exam Sources & Resources
  COURSES ADDA
              </h3>
              <p className="mt-1 text-[22px] font-medium leading-none text-[#2e2e2e]">
              SMARTER COURSE DECISIONS 
              </p>
              <p className="mt-20 max-w-[300px] text-[16px] leading-[1.2] text-[#a1a1ab]">
              Compare Courses, Read Trusted Reviews, And Ask Questions Before Investing Your Time And Money. 
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
      </div>
    </section>
  );
};
