import Navbar from "../reusable/navbar";
import image1 from "../images /coffee.webp";
import image2 from "../images /about2.webp";
import Image from "next/image";
import story1 from "../images /story_1.webp"
import story2 from "../images /story_2.webp"
import story3 from "../images /story_3.webp"
import Footer from "../reusable/footer";
import { Button } from "@/components/ui/button";
import OurValues from "../reusable/ourvalues";
import Link from "next/link";
import Timeline from "../reusable/timeline"


export default function aboutUs() {
  return (
    <div className="dark:bg-black">
      <Navbar />
      <section className="dark:bg-black py-20 md:py-22">
        <div className="px-4 mr-24  sm:px-6 text-white relative">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between lg:gap-0 md:gap-10">
            <div>
              <p className="text-transparent bg-clip-text bg-[linear-gradient(to_right,_#000_0%,_#3c3cbf_50%)] dark:bg-[linear-gradient(to_right,_#3c3cbf_0%,_#FFFFFF_50%)] font-bold text-[2.2rem] lg:text-7xl md:mr-12 md:mt-0 text-center md:w-full mt-12 md:text-left">
                Everything Talent simplifies hiring with a free ATS and
                AI-driven assessments.
              </p>
            </div>

            <div className="min-w-80 ml-14">
              <div className="relative flex justify-center lg:flex-col mb-8 md:mb-0">
                <Image
                  src={image1}
                  alt=""
                  width={400}
                  height={400}
                  className="rotate-45 w-48 h-48 border-[3px] dar:border-[#3577f39a] lg:w-80 lg:h-80 object-cover"
                />

                <Image
                  alt="Everything Talent simplifies hiring with a free ATS and AI-driven assessments."
                  width={300}
                  height={300}
                  decoding="async"
                  className="hidden md:block -mt-16 rotate-45 border dark:border-[#3577f39a] w-48 h-48 lg:w-80 lg:h-80 object-cover"
                  src={image2}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* our story section start */}
      <section
      className="py-14 md:py-24bg-transparent dark:text-white dark:bg-[#020817]"
      id="our-story"
    >
      <div className="mx-auto px-4">
        <div className="grid grid-cols-12 justify-center text-center mb-12">
          <div className="col-span-12 md:col-span-8 md:col-start-3">
            <h2 className="text-4xl leading-snug md:text-5xl md:leading-snug font-bold mb-6">
              Our Story
            </h2>
            <p className="text-xl opacity-80 mb-4">
              We not only make the world’s most comfortable hammocks, but through
              training and sustainable job creation, we empower our weavers and their
              families to break the cycle of poverty and build a brighter future.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 justify-center items-center mt-12">
          <div className="col-span-12 md:col-span-5 order-2 md:order-1 md:col-start-2">
            <div className="flex flex-col justify-center lg:pr-14">
              <h4 className="text-2xl font-bold mb-4">
                The Journey to Transform Recruitment
              </h4>
              <p className="text-base leading-relaxed text-justify opacity-70 mb-0 md:pr-6">
                Everything Talent was founded with a vision to transform the way
                organizations approach hiring. Frustrated by traditional, cumbersome
                methods of recruiting and recognizing the potential for bias in
                evaluating candidates, our founder set out to create a solution that
                simplifies the hiring journey while leveraging the latest advancements
                in technology.
              </p>
            </div>
          </div>

          <div className="order-1 md:order-2 md:col-start-7 col-span-12 md:col-span-5 mb-6 md:mb-0 mt-6 md:mt-0">
            <div>
              <Image
                alt="The Journey to Transform Recruitment"
                loading="lazy"
                width="400"
                height="400"
                className="w-full h-full rounded-2xl"
                src={story1}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 justify-center items-center mt-12">
          <div className="col-span-12 md:col-span-5 order-2 md:order-2 md:col-start-7">
            <div className="flex flex-col justify-center lg:pl-14">
              <h4 className="text-2xl font-bold mb-4">
                Combining Innovation with Efficiency
              </h4>
              <p className="text-base leading-relaxed text-justify opacity-70 mb-0 md:pr-6">
                Our platform combines a free Applicant Tracking System (ATS) with
                AI-driven tech assessments. This allows you to evaluate candidates
                quickly and accurately, regardless of their background or the
                complexity of the role. We are committed to leveraging the latest
                technology to streamline the recruitment process and reduce bias.
              </p>
            </div>
          </div>

          <div className="order-1 md:col-start-2 col-span-12 md:col-span-5 mb-6 md:mb-0 mt-6 md:mt-0">
            <div>
              <Image
                alt="Combining Innovation with Efficiency"
                loading="lazy"
                width="400"
                height="400"
                className="w-full h-full rounded-2xl"
                src={story2}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 justify-center items-center mt-12">
          <div className="col-span-12 md:col-span-5 order-2 md:order-1 md:col-start-2">
            <div className="flex flex-col justify-center lg:pr-14">
              <h4 className="text-2xl font-bold mb-4">Democratizing Recruitment Tools</h4>
              <p className="text-base leading-relaxed text-justify opacity-70 mb-0 md:pr-6">
                We believe in democratizing access to powerful recruitment tools,
                making them available to both startups and established companies
                alike. Our goal is to level the playing field, ensuring that every
                organization, regardless of size, can compete for and secure the best
                talent available.
              </p>
            </div>
          </div>

          <div className="order-1 md:order-2 md:col-start-7 col-span-12 md:col-span-5 mb-6 md:mb-0 mt-6 md:mt-0">
            <div>
              <Image
                alt="Democratizing Recruitment Tools"
                loading="lazy"
                width="400"
                height="400"
                className="w-full h-full rounded-2xl"
                src={story3}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* our story section end here */}

    {/* our values start */}
    <OurValues/>
    {/* our values end */}

    {/* our expert team */}
    <div className="flex justify-center mb-6 md:mb-12 dark:text-white">
      <div className="text-center w-[80vw]">
        <h2 className={"text-3xl font-bold md:text-[45px] mb-4"}>
          Our Experts Team
        </h2>
        <p className="text-xl font-normal mt-2">
          At Everything Talent, our innovative team develops AI-driven assessments and an advanced ATS to modernize hiring. We focus on reducing bias, making recruitment efficient, and providing accessible tools for companies of all sizes to attract top talent.
        </p>
      </div>
    </div>
    <Timeline/>
    

      <section className="py-12 relative z-20 dark:bg-black">
        <div className="border bg-card shadow-sm max-w-[850px] w-full m-auto rounded-xl">
          <div className="flex flex-col p-6">
            <h3 className="text-2xl font-semibold">
              Our Culture
            </h3>
            <p className="text-sm">
              We foster a collaborative and inclusive environment where
              innovation thrives, professional growth is supported, and every
              team member is valued.
            </p>
          </div>

          <div className="p-6 pt-0">
            Everything Talent is built on the principles of collaboration,
            respect, and continuous growth. We are a team of dedicated
            professionals passionate about improving the hiring experience for
            both employers and candidates. Our culture fosters creativity,
            encourages learning, and supports each individual’s development.
          </div>

          <div className="p-6 pt-0">
            We are driven by a shared commitment to making a positive impact on
            the world of recruitment. As we grow, we remain focused on
            delivering solutions that are not only effective but also aligned
            with our core values. We invite you to join us on this journey and
            experience the difference our platform can make in your hiring
            process.
          </div>

          <div className="items-center p-6 pt-0 flex justify-between">
            <Link href="/support">
              <Button
                asChild
                size={"loginS"}
                variant={"login"}
                className="bg-blue-500"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      
      <Footer />
    </div>
  );
}
