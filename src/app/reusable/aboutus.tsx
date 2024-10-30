"use client";

import Image from "next/image";
import story1 from "../images /story_1.webp";
import story2 from "../images /story_2.webp";
import story3 from "../images /story_3.webp";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { cn } from "@/lib/utils";

const Aboutus = () => {
  return (
    <div className="relative flex h-[fit] w-full flex-col items-center justify-center overflow-hidden rounded-lg  bg-background">
        <AnimatedGridPattern
        numSquares={40}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
        )}
      />
      <div>
        <div className="z-10 whitespace-pre-wrap text-center font-medium tracking-tighter text-black dark:text-white text-xl">
          {/* <BlurIn
            word="Our Story"
            className="text-xs font-bold text-black dark:text-white"
          />{" "}
           <BlurIn
            word="We not only make the worlds most comfortable hammocks, but through training and sustainable job creation, we empower our weavers and their families to break the cycle of poverty and build a brighter future."
            className="font-bold text-black dark:text-white"
          />{" "} */}
          <div className="grid grid-cols-12 justify-center text-center mb-12"></div>
        </div>

        <div className="flex flex-col items-center space-y-8">
          <div className="max-w-3xl space-y-1.5 text-center pb-14">
            <h2 className="text-3xl font-semibold md:text-4xl "> Our Story</h2>
            <p className="text-foreground/50 text-lg font-medium md:text-xl">
              We not only make the worlds most comfortable hammocks, but through
              training and sustainable job creation, we empower our weavers and
              their families to break the cycle of poverty and build a brighter
              future.
            </p>
          </div>
          <section className="flex flex-col gap-4 lg:flex-row">
            <div className="flex aspect-[5/4] w-full flex-col space-y-2 rounded-2xl  p-4 sm:p-10 ">
              <div className="relative flex max-w-lg flex-col gap-2 overflow-hidden rounded-lg border p-4 backdrop-blur-md shadow-2xl">
                <div className="break-words leading-normal tracking-tighter">
                  {/* <span className="text-sm font-normal">
              Companies spend $30,000+ and several weeks to build beautiful
              landing pages like{" "}
            </span> */}
                  <h4 className="text-xl font-bold mb-4">
                    The Journey to Transform Recruitment
                  </h4>
                  <p className="text-base leading-relaxed text-justify opacity-70 mb-0 md:pr-6">
                    Everything Talent was founded with a vision to transform the
                    way organizations approach hiring. Frustrated by
                    traditional, cumbersome methods of recruiting and
                    recognizing the potential for bias in evaluating candidates,
                    our founder set out to create a solution that simplifies the
                    hiring journey while leveraging the latest advancements in
                    technology.
                  </p>

                  {/* <span className="text-sm font-normal">
              {" "}
              components for you to do the same in hours, starting at just $29.
              Pre-order link + demo below 👇
            </span> */}
                </div>
                <div className="flex flex-1 items-center justify-center">
                  <Image src={story2} alt="nothing" />
                </div>
              </div>
            </div>
            <div className="flex aspect-[5/4] w-full flex-col space-y-2 rounded-2xl  p-4 sm:p-10 ">
              {" "}
              <div className="relative flex max-w-lg flex-col gap-2 overflow-hidden rounded-lg border p-4 backdrop-blur-md shadow-2xl">
                <div className="break-words leading-normal tracking-tighter">
                  {/* <span className="text-sm font-normal">
              Companies spend $30,000+ and several weeks to build beautiful
              landing pages like{" "}
            </span> */}
                  <h4 className="text-xl font-bold mb-4">
                    Combining Innovation with Efficiency
                  </h4>
                  <p className="text-base leading-relaxed text-justify opacity-70 mb-0 md:pr-6">
                    Our platform combines a free Applicant Tracking System (ATS)
                    with AI-driven tech assessments. This allows you to evaluate
                    candidates quickly and accurately, regardless of their
                    background or the complexity of the role. We are committed
                    to leveraging the latest technology to streamline the
                    recruitment process and reduce bias.
                  </p>

                  {/* <span className="text-sm font-normal">
              {" "}
              components for you to do the same in hours, starting at just $29.
              Pre-order link + demo below 👇
            </span> */}
                </div>
                <div className="flex flex-1 items-center justify-center">
                  <Image src={story1} alt="nothing" />
                </div>
              </div>
            </div>
            <div className="flex aspect-[5/4] w-full flex-col space-y-2 rounded-2xl  p-4 sm:p-10 ">
              {" "}
              <div className="relative flex max-w-lg flex-col gap-2 overflow-hidden rounded-lg border p-4 backdrop-blur-md shadow-2xl">
                <div className="break-words leading-normal tracking-tighter">
                  {/* <span className="text-sm font-normal">
              Companies spend $30,000+ and several weeks to build beautiful
              landing pages like{" "}
            </span> */}
                  <h4 className="text-xl font-bold mb-4">
                    The Journey to Transform Recruitment
                  </h4>
                  <p className="text-base leading-relaxed text-justify opacity-70 mb-0 md:pr-6">
                    We believe in democratizing access to powerful recruitment
                    tools, making them available to both startups and
                    established companies alike. Our goal is to level the
                    playing field, ensuring that every organization, regardless
                    of size, can compete for and secure the best talent
                    available.
                    <br />
                    <br />
                    <br />
                  </p>

                  {/* <span className="text-sm font-normal">
              {" "}
              components for you to do the same in hours, starting at just $29.
              Pre-order link + demo below 👇
            </span> */}
                </div>
                <div className="flex flex-1 items-center justify-center">
                  <Image src={story3} alt="nothing" />
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* <DotPattern
          className={cn(
            "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
          )}
        /> */}
      </div>
    </div>
  );
};

export default Aboutus;
