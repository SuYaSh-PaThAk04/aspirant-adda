"use client";

import React from "react";
import Image from "next/image";
import executionImage from "../../assets/Execution.svg";
import appleLogo from "../../assets/apple.svg";
import googlePlayLogo from "../../assets/google-play.svg";
import reviewCardImage from "../../assets/review.svg";

interface TestimonialsSectionProps {
  className?: string;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  className = "",
}) => {
  const [count, setCount] = React.useState(0);
  const [activeStartIndex, setActiveStartIndex] = React.useState(0);
  const [showExecutionPhone, setShowExecutionPhone] = React.useState(false);
  const proofSectionRef = React.useRef<HTMLDivElement | null>(null);
  const visibleCards = 3;

  const testimonials = [
    {
      name: "Saumya Singh",
      text: "It's an amazing app for UPSC aspirants. What makes it best is the availability of quality mentors at no cost and highly focused peer support.",
      rating: 5,
    },
    {
      name: "Ritika Sharma",
      text: "I finally moved from random Telegram groups to structured preparation. The daily discussions helped me revise consistently and clear doubts quickly.",
      rating: 5,
    },
    {
      name: "Aman Verma",
      text: "The quiz and direct message flow is extremely useful. I can ask specific doubts and get exam-relevant guidance from serious learners instantly.",
      rating: 4,
    },
    {
      name: "Nikita Yadav",
      text: "Great community quality. No spam, no distractions. Just preparation-focused conversations, peer accountability, and practical study planning.",
      rating: 5,
    },
    {
      name: "Harsh Rajput",
      text: "I bought curated resources from inside the app and saved a lot of time. Everything feels optimized for exam prep, not just social engagement.",
      rating: 4,
    },
    {
      name: "Kritika Jain",
      text: "The mentorship and discussion threads keep me on track every day. This is one of the few platforms where serious aspirants actually stay active.",
      rating: 5,
    },
  ];

  React.useEffect(() => {
    const target = 50000;
    const durationMs = 1500;
    const intervalMs = 16;
    const steps = Math.ceil(durationMs / intervalMs);
    const increment = target / steps;
    let current = 0;

    const timer = window.setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        window.clearInterval(timer);
        return;
      }
      setCount(Math.floor(current));
    }, intervalMs);

    return () => window.clearInterval(timer);
  }, []);

  React.useEffect(() => {
    const node = proofSectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShowExecutionPhone(true);
          }
        });
      },
      { threshold: 0.35 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const handlePrevious = () => {
    setActiveStartIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setActiveStartIndex((prev) =>
      Math.min(testimonials.length - visibleCards, prev + 1),
    );
  };

  return (
    <section className={`w-full bg-[#FFFFFF] px-4 pb-24 pt-10 sm:px-6 lg:px-8 ${className}`}>
      <div className="mx-auto w-full max-w-[1180px]">
        <div>
          <h2 className="text-[30px] font-semibold leading-none tracking-[-0.02em] text-[#141414]">
            Community Validated Success
          </h2>
          <p className="mt-2 max-w-[760px] text-[15px] font-normal leading-[1.2] text-[#9a9ca5]">
            Join 50,000 + serious aspirants who have transitioned from fragmented<br></br>
            study groups to a structured, high-intent preparation journey.
          </p>
          <div className="mt-5 flex items-center gap-1">
            <button
              aria-label="Previous testimonials"
              onClick={handlePrevious}
              disabled={activeStartIndex === 0}
              className="inline-flex h-11 w-11 items-center justify-center border border-[#a8a8a8] text-[20px] text-[#7f7f7f]"
            >
              ←
            </button>
            <button
              aria-label="Next testimonials"
              onClick={handleNext}
              disabled={activeStartIndex >= testimonials.length - visibleCards}
              className="inline-flex h-11 w-11 items-center justify-center border border-[#a8a8a8] text-[20px] text-[#7f7f7f]"
            >
              →
            </button>
          </div>
          <div className="mt-5 overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${(activeStartIndex * 100) / visibleCards}%)` }}
            >
              {testimonials.map((item, index) => (
                <div key={`${item.name}-${index}`} className="w-full shrink-0 px-2 md:w-1/3">
                  <article className="h-[265px] border border-[#8f8f8f] bg-transparent px-6 py-5 text-left">
                    <p className="text-right text-[26px] font-medium italic leading-none text-[#2d2d32]">
                      {item.name}
                    </p>
                    <div className="mt-3 flex justify-end">
                      <div className="flex items-center gap-1">
                        {Array.from({ length: item.rating }).map((_, starIndex) => (
                          <Image
                            key={`${index}-star-${starIndex}`}
                            src={reviewCardImage}
                            alt="Rating star"
                            width={12}
                            height={12}
                            className="h-[12px] w-[12px] object-contain"
                          />
                        ))}
                      </div>
                    </div>
                    <p className="mt-6 max-w-[310px] text-[17px] font-normal leading-[1.22] text-[#8f93a0]">
                      {item.text}
                    </p>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          ref={proofSectionRef}
          className="mx-auto mt-16 flex w-full max-w-[760px] flex-col items-center text-center"
        >
          <p className="text-[44px] font-medium leading-none text-[#1d1d1f]">
            Proof Of Execution
          </p>
          <h2 className="mt-1 text-[72px] font-semibold leading-none tracking-[0.01em] text-[#7A71F8]">
            {count.toLocaleString("en-IN")} +
          </h2>

          <div
            className={`relative mt-5 h-[380px] w-[360px] overflow-hidden transition-all duration-700 ease-out ${
              showExecutionPhone
                ? "translate-y-0 scale-100 opacity-100"
                : "translate-y-24 scale-95 opacity-0"
            }`}
          >
            <Image
              src={executionImage}
              alt="Aspirant Adda app execution preview"
              fill
              className="scale-[1.1] object-cover object-top"
              priority
            />
            <div className="pointer-events-none absolute -bottom-16 left-0 z-10 h-[280px] w-1/2 bg-gradient-to-t from-[#FFFFFF] via-[#FFFFFF]/98 to-transparent" />
            <div className="pointer-events-none absolute -bottom-20 right-0 z-30 h-[180px] w-[58%] bg-gradient-to-t from-[#FFFFFF] via-[#FFFFFF]/98 to-transparent" />
          </div>

          <div className="mt-8">
            <h3 className="whitespace-nowrap text-[46px] leading-[0.95] tracking-[-0.01em] text-[#121212]">
              Transform Your Prep Journey
            </h3>
            <p className="mx-auto mt-3 max-w-[560px] text-[18px] font-normal leading-[1.22] text-[#9d9da8]">
              Join Thousands Of Serious Aspirants Who Use Aspirant Adda To Solve
              Doubts, Track Progress, And Move Closer To Selection Every Single Day.
            </p>

            <div className="mt-5 flex items-center justify-center gap-3">
              <a
                href="#"
                className="inline-flex h-11 min-w-[200px] items-center justify-center rounded-full border border-[#111111] px-5 text-[18px] font-medium leading-none text-[#121212]"
              >
                <Image
                  src={appleLogo}
                  alt="Apple logo"
                  width={12}
                  height={14}
                  className="mr-2 h-[14px] w-[12px]"
                />
                Download On Apple
              </a>
              <a
                href="#"
                className="inline-flex h-11 min-w-[200px] items-center justify-center rounded-full bg-[#7A71F8] px-5 text-[18px] font-medium leading-none text-white"
              >
                <Image
                  src={googlePlayLogo}
                  alt="Google Play logo"
                  width={12}
                  height={12}
                  className="mr-2 h-[12px] w-[12px]"
                />
                Download On Apple
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
