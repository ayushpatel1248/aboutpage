import Image from "next/image";
import footerimage from "../images /footerimage.webp"
import logoimg from "../images /acme-logo-dark.png"
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-4 sm:py-6 bg-black border-t">
      <section className="mx-auto">
        <div className="md:flex md:justify-between md:container px-4 sm:px-6 md:pt-16 p-0 flex-row md:flex-col md:gap-[15px] gap-[10px]">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="items-center">
              <div>
              <Image
                alt="Everything Talent Logo"
                loading="lazy"
                width="160"
                height="160"
                decoding="async"
                className="-ml-1 h-40 w-40"
                src={logoimg}
              />
              </div>
              <div className="self-center text-3xl font-semibold whitespace-nowrap text-white">
                Everything Talent
              </div>
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                Resources
              </h2>
              <ul className="text-gray-400">
                <li className="mb-4">
                  <Link href="/blog" className="hover:underline">
                    Blogs
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/about/#our-story" className="hover:underline">
                    Success Stories
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#" className="hover:underline">
                    Case Studies
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#" className="hover:underline">
                    Whitepapers
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/faqs" className="hover:underline">
                    FAQs
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#" className="hover:underline">
                    Hiring Guides
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/support" className="hover:underline">
                    Support
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                Get Started
              </h2>
              <ul className="text-gray-400">
                <li className="mb-4">
                  <Link href="/pricing" className="hover:underline">
                    Pricing
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/use-cases/hiring-solutions" className="hover:underline">
                    Hiring Solutions
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/use-cases/funded-startups" className="hover:underline">
                    Funded Startups
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/login" className="hover:underline">
                    Free Trial
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/support" className="hover:underline">
                    Contact Support
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#" className="hover:underline">
                    Request Demo
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#" className="hover:underline">
                    Trust
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                Legal
              </h2>
              <ul className="text-gray-400">
                <li className="mb-4">
                  <Link href="/privacy-policy" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/terms" className="hover:underline">
                    Terms of Service
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/terms" className="hover:underline">
                    Cookie Policy
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/terms" className="hover:underline">
                    CCPA Compliance
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <section className="">
          <Image
            alt="san fransisco skyline top hiring"
            loading="lazy"
            width="5503"
            height="1907"
            decoding="async"
            className="max-h-[26rem] h-full w-full mt-0"
            src={footerimage}
          />
        </section>
      </section>

      <section className="mx-auto md:container px-4 sm:px-6">
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm sm:text-center text-gray-400">
            © 2024{" "}
            <Link href="https://usenextbase.com" className="hover:underline">
              Everything Talent Labs, LLC
            </Link>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
            <Link href="https://twitter.com/EVRYTNGTALENT" className="text-gray-500 hover:text-white">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
            <Link href="https://www.linkedin.com/company/everything-talent-ai/" className="text-gray-500 hover:text-white">
              <svg className="w-7 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M2 1C1.44772 1 1 1.44772 1 2V13C1 13.5523 1.44772 14 2 14H13C13.5523 14 14 13.5523 14 13V2C14 1.44772 13.5523 1 13 1H2ZM3.05 6H4.95V12H3.05V6ZM5.075 4.005C5.075 4.59871 4.59371 5.08 4 5.08C3.4063 5.08 2.925 4.59871 2.925 4.005C2.925 3.41129 3.4063 2.93 4 2.93C4.59371 2.93 5.075 3.41129 5.075 4.005ZM6 6H8V6.896C8.3114 6.32784 9.11043 5.68 10.321 5.68C12.219 5.68 13 6.575 13 8.5V12H11.1V8.75C11.1 7.76 10.7407 7.2 10.017 7.2C9.16674 7.2 8.8 7.716 8.8 8.51V12H6.9V6H6Z"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </footer>
  );
}
