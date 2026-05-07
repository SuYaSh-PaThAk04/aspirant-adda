import Image from "next/image";
import Link from "next/link";
import addMentorIllustration from "../assets/AddMentor.svg";

export default function BecomeMentorPage() {
  return (
    <section className="min-h-screen w-full bg-[#ffffff] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-[1180px]">
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <h2 className="text-[42px] font-semibold leading-none text-[#0b0b12]">
              Join Aspirant Adda as mentor
            </h2>
            <p className="mt-2 max-w-[540px] text-[18px] leading-[1.25] text-[#8f93a0]">
              Empower The Next Generation Of Learners On Aspirant Adda By Sharing
              Your Exclusive Strategies And Subject Expertise To Guarantee Their
              Selection
            </p>
          </div>
          <Link
            href="/"
            className="inline-flex h-8 items-center justify-center rounded-full border border-[#958eff] bg-white px-4 text-[20px] leading-none text-[#7a71f8]"
          >
            ← Back
          </Link>
        </div>

        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[1.1fr_0.9fr]">
          <form className="max-w-[620px]">
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              <input
                type="text"
                placeholder="Name"
                className="h-11 rounded-[10px] border border-[#958eff] bg-transparent px-4 text-[28px] text-[#50525e] placeholder:text-[#9a9ca5] focus:outline-none"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="h-11 rounded-[10px] border border-[#958eff] bg-transparent px-4 text-[28px] text-[#50525e] placeholder:text-[#9a9ca5] focus:outline-none"
              />
            </div>
            <textarea
              placeholder="Brief"
              className="mt-2 h-[160px] w-full resize-none rounded-[10px] border border-[#958eff] bg-transparent px-4 py-2 text-[28px] text-[#50525e] placeholder:text-[#9a9ca5] focus:outline-none"
            />
            <input
              type="text"
              placeholder="Social Media Link"
              className="mt-2 h-11 w-full rounded-[10px] border border-[#958eff] bg-transparent px-4 text-[28px] text-[#50525e] placeholder:text-[#9a9ca5] focus:outline-none"
            />
            <button
              type="button"
              className="mt-5 inline-flex h-9 items-center justify-center rounded-full border border-[#958eff] bg-white px-5 text-[24px] leading-none text-[#7a71f8]"
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
    </section>
  );
}
