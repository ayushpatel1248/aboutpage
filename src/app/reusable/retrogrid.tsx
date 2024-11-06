"use client";
import RetroGrid from "@/components/ui/retro-grid";
import Link from "next/link";

export default function RetroGridDemo() {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-background pb-24">
      {/* starting start  */}
      <div className="about-hero py-10">
        <div className="about-hero__content text-center max-w-2xl mx-auto">
          <h5 className="hero__chip hero__chip--about text-lg text-blue-600 font-semibold uppercase mb-2">
            About Us
          </h5>
          <h1 className="about-hero__title text-5xl font-bold text-gray-900 mb-4 dark:text-white">
          Simplifing Hiring
          </h1>
          <h3 className="about-hero__subtitle text-xl text-gray-70 mb-6 dark:text-white">
          Everything Talent simplifies hiring with a free ATS and AI-driven assessments.
          </h3>
          <Link
            href=""
            target="_blank"
            className="button-cta--primary bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            rel="noopener noreferrer"
          >
            Get started
          </Link>
        </div>
      </div>

      {/* section start */}
      <section className="about-features py-5">
        <div className="about-features__items grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {/* Meetings Feature */}
          <div className="about-feature__item bg-gray-100 dark:bg-slate-800 p-6 rounded-lg shadow-md text-center">
            <div className="about-features__logos flex justify-center gap-4 mb-4">
              <div className="about-features__logo-wrapper">
                <img
                  src="https://everythingtalent.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Facme-logo-light.d4da7bf2.png&w=96&q=75"
                  alt="Teams Logo"
                  className="about-features__logo w-12 h-12"
                />
              </div>
             
            </div>
            <h5 className="about-features__chip text-indigo-600 font-semibold mb-2">
            Free ATS
            </h5>
            <p className="about-features__text text-gray-700 dark:text-white">
            Manage your entire recruitment pipeline at no cost, perfect for businesses of all sizes.
            </p>
          </div>

          {/* Email Feature */}
          <div className="about-feature__item  bg-gray-100 dark:bg-slate-800 p-6 rounded-lg shadow-md text-center">
            <div className="about-features__logos flex justify-center gap-4 mb-4">
              <div className="about-features__logo-wrapper">
                <img
                  src="https://imgs.search.brave.com/5TMkzo2XuEWCL5gD7DUKmcpSmt8WRpIE5q_5uH4a0C4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcm9j/dG9ydHJhY2suY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIx/LzA4L2Rlc2t0b3At/bGV2ZWwtcHJvY3Rv/cmluZy5wbmc"
                  alt="Gmail Logo"
                  className="about-features__logo w-12 h-12"
                />
              </div>
            </div>
            <h5 className="about-features__chip text-red-500 font-semibold mb-2">
            Advanced Proctoring
            </h5>
            <p className="about-features__text text-gray-700 dark:text-white">
            Monitor webcam, audio, and browser tabs in real time with AI-backed proctoring features.
            </p>
          </div>

          {/* Messaging Feature */}
          <div className="about-feature__item  bg-gray-100 dark:bg-slate-800 p-6 rounded-lg shadow-md text-center">
            <div className="about-features__logos flex justify-center gap-4 mb-4">
              <div className="about-features__logo-wrapper">
                <img
                  src="https://imgs.search.brave.com/p2x-tjVCU1cXbz1AAeLHQKBEMj3O3m8y6rL549coZVU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9haS1sb2dvXzEx/NjkwMTItMzUyLmpw/Zz9zaXplPTYyNiZl/eHQ9anBn"
                  alt="Slack Logo"
                  className="about-features__logo w-12 h-12"
                />
              </div>
            </div>
            <h5 className="about-features__chip text-green-500 font-semibold mb-2">
            AI-Integrated Assessments
            </h5>
            <p className="about-features__text text-gray-700 dark:text-white">
            Leverage AI to conduct smarter evaluations, reducing time and effort in candidate selection.
            </p>
          </div>
          {/* Scheduling & More Feature */}
          <div className="about-feature__item bg-gray-100 dark:bg-slate-800 p-6 rounded-lg shadow-md text-center">
            <div className="about-features__logos flex justify-center gap-4 mb-4">
              <div className="about-features__logo-wrapper">
                <img
                  src="https://imgs.search.brave.com/MOUJVmyM0u9wmOCmW5Q6XVJkDCrSA0mZjjxJUBLwa14/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9kY3N0/YXRpYy5jb20vaW1h/Z2VzL2ljb25zL3Bl/cnNvbmFzL3BlcnNv/bmFzLWRlc2lnbmVy/cy05NDcyYTI3ZWRh/LnN2Zw"
                  alt="Google Calendar Logo"
                  className="about-features__logo w-12 h-12"
                />
              </div>
            </div>
            <h5 className="about-features__chip text-indigo-600 font-semibold mb-2">
            Identify Top Talent
            </h5>
            <p className="about-features__text text-gray-700 dark:text-white">
            Our AI platform quickly identifies top candidates, so you can spend more time interviewing promising talent and make informed hiring decisions.            </p>
          </div>
        </div>
      </section>
      <RetroGrid />
    </div>
  );
}
