import { ThumbsUp, Rocket, Layers, Eye, Users, Shield } from "lucide-react";
import ourvalues from "../images /ourvaluesimage.webp"
import Image from "next/image";

export default function OurValues() {
  return (
    <div className="py-14 md:py-24 px-4 mx-auto text-white">
      <div className="flex max-w-5xl justify-center text-center mx-auto md:mb-6">
        <div>
          <h2 className="text-3xl font-bold leading-tight md:text-[45px] mb-4">Our Values</h2>
          <h4 className="text-2xl font-medium mb-4 mt-2">At Everything Talent, our core values drive everything we do</h4>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">

        <div className="col-span-12 lg:col-span-4 lg:order-2">
          <Image
            alt="At Everything Talent, our core values drive everything we do"
            width="400"
            height= "400"
            className="bg-center bg-no-repeat object-cover w-full rounded-2xl h-full min-h-[200px]"
            src={ourvalues}
          />
        </div>

        <div className="col-span-12 lg:col-span-4 lg:col-start-1 lg:col-end-[-1] lg:row-start-2 lg:row-end-[-1] flex items-center justify-center">
          <div className="p-4 mt-4 lg:mt-0 max-w-[460px] w-full">
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-xl text-2xl inline-flex items-center justify-center bg-blue-600 text-white mb-6">
                <ThumbsUp className="w-6 h-6" />
              </div>
              <h4 className="text-2xl font-medium mb-4 text-white">Customer Success</h4>
              <p className="opacity-80">Your success is our success. We are devoted to providing exceptional support and resources to help you achieve your hiring goals.</p>
            </div>
          </div>
        </div>

        <div className="col-span-12 md:col-span-6 lg:col-span-4 lg:order-1">
          <div className="p-4 mt-4 lg:mt-0 max-w-[460px] w-full">
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-xl text-2xl inline-flex items-center justify-center bg-blue-600 text-white mb-6">
                <Rocket className="w-6 h-6" />
              </div>
              <h4 className="text-2xl font-medium mb-4">Innovation</h4>
              <p className="opacity-80">We are committed to continuously improving our technology to meet the evolving needs of our users and stay ahead of industry trends.</p>
            </div>
          </div>

          <div className="p-4 mt-4 lg:mt-0 max-w-[460px] w-full">
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-xl text-2xl inline-flex items-center justify-center bg-blue-600 text-white mb-6">
                <Layers className="w-6 h-6" />
              </div>
              <h4 className="text-2xl font-medium mb-4">Simplicity</h4>
              <p className="opacity-80">We believe that great technology should be intuitive and easy to use. Our solutions are designed to streamline your hiring process without unnecessary complexity.</p>
            </div>
          </div>
        </div>

        <div className="col-span-12 md:col-span-6 lg:col-span-4 lg:order-3">
          <div className="p-4 mt-4 lg:mt-0 max-w-[460px] w-full">
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-xl text-2xl inline-flex items-center justify-center bg-blue-600 text-white mb-6">
                <Eye className="w-6 h-6" />
              </div>
              <h4 className="text-2xl font-medium mb-4">Transparency</h4>
              <p className="opacity-80">We value open and honest communication, both within our team and with our users. We’re dedicated to building trust through clarity and integrity.</p>
            </div>
          </div>

          <div className="p-4 mt-4 lg:mt-0 max-w-[460px] w-full">
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-xl text-2xl inline-flex items-center justify-center bg-blue-600 text-white mb-6">
                <Users className="w-6 h-6" />
              </div>
              <h4 className="text-2xl font-medium mb-4">Inclusivity</h4>
              <p className="opacity-80">We are committed to fostering a diverse and inclusive hiring environment. By eliminating biases and ensuring fairness, we empower every candidate to present their unique strengths and capabilities.</p>
            </div>
          </div>
        </div>
      </div>


        <div className="col-span-12 lg:col-span-4 lg:col-start-1 lg:col-end-[-1] lg:row-start-2 lg:row-end-[-1] flex items-end justify-center">
          <div className="p-4 mt-4 lg:mt-0 max-w-[460px] w-full">
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-xl text-2xl inline-flex items-center justify-center bg-blue-600 text-white mb-6">
                <Shield className="w-6 h-6" />
              </div>
              <h4 className="text-2xl font-medium mb-4">Security</h4>
              <p className="opacity-80">We prioritize the protection of your data with robust security measures. Our systems are designed to safeguard your information and ensure privacy, giving you peace of mind.</p>
            </div>
          </div>
        </div>
    </div>
  );
}
