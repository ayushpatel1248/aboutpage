import Navbar from "../reusable/navbar";
import image1 from "../images /coffee.webp";
import image2 from "../images /about2.webp";
import Image from "next/image";

export default function aboutUs() {
  return (
    <>
      <Navbar />
      <section className="bg-black py-20 md:py-22">
        <div className="px-4 mr-24  sm:px-6 text-white relative">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between lg:gap-0 md:gap-10">
            <div>
              <p className="text-transparent bg-clip-text bg-[linear-gradient(to_right,_#3c3cbf_0%,_#FFFFFF_50%)] font-bold text-[2.2rem] lg:text-7xl md:mr-12 md:mt-0 text-center md:w-full mt-12 md:text-left">
                Everything Talent simplifies hiring with a free ATS and
                AI-driven assessments.
              </p>
            </div>

            <div className="min-w-80 ml-14">
              <div className="relative flex justify-center lg:flex-col mb-8 md:mb-0">
                <Image src={image1} alt="" width={400} height={400}  className="rotate-45 w-48 h-48 border-[3px] border-[#3577f39a] lg:w-80 lg:h-80 object-cover"/>

                <Image
                  alt="Everything Talent simplifies hiring with a free ATS and AI-driven assessments."
                  width={300}
                  height={300}
                  decoding="async"
                  className="hidden md:block -mt-16 rotate-45 border border-[#3577f39a] w-48 h-48 lg:w-80 lg:h-80 object-cover"
                  src={image2}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
}
