// components/JourneySection.js
import Image from 'next/image';
// import { LucideIcon } from '@/components/icons'; 

export default function JourneySection() {
  return (
    <section className="w-full bg-white border-white dark:bg-neutral-950 pt-8 md:py-16">
      <div className="flex justify-center md:container px-4 sm:px-6 mb-6 md:mb-40 text-center">
        <div className="md:w-[80vw]">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Journey</h2>
          <p className="text-xl opacity-80 mb-4">
            Since our founding in 2021, Arctic Wolf has risen to the rank of market leader in security operations, adding thousands of employees and customers, as well as a trophy case of awards along the way.
          </p>
        </div>
      </div> 

      <div className="w-full bg-white dark:bg-neutral-950 md:container px-4 sm:px-6">
        <div className="relative flex flex-col gap-10">
          <TimelineEvent
            date="Aug 2021"
            title="IDC Names Arctic Wolf a Leader"
            imgSrc="/assets/home/ai1.jpg"
            icon=""
          />
          <TimelineEvent
            date="Feb 2022"
            title="Arctic Wolf Incident Launch"
            imgSrc="/assets/home/tools.jpg"
            icon=""
          />
          <TimelineEvent
            date="Oct 2022"
            title="Arctic Wolf Expands to ANZ"
            imgSrc="/assets/home/ai2.jpg"
            icon=""
          />
        </div>
      </div>
    </section>
  );
}

function TimelineEvent({ date, title, imgSrc, icon }) {
  return (
    <div className="relative flex flex-col items-end w-full md:flex-row">
      <div className="sticky top-60 flex items-center gap-4 mb-8 md:mb-0 md:flex-col">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-sky-500 dark:bg-sky-500">
          <div className="w-10 h-10 rounded-full bg-black border border-blue-500 flex items-center justify-center dark:border-neutral-700">
            <span className="text-white">{icon}</span>
          </div>
        </div>
        <h3 className="text-lg font-bold text-white dark:text-gray-300">{title}</h3>
      </div>

      <div className="relative flex flex-col w-full max-w-md p-6 border rounded-lg shadow-lg bg-gradient-to-br from-black via-violet-900 to-violet-500 dark:from-[#000] dark:to-[#120a1d] dark:hover:bg-gradient-to-b dark:hover:from-[#120a1d] dark:hover:to-[#181023] transition-all duration-500">
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400 dark:bg-[linear-gradient(to_right,_#3c3cbf_0%,_#FFFFFF_50%)] font-bold text-xl">
          {date}
        </p>
        <div className="mt-4">
          <Image src={imgSrc} alt={title} width={317} height={212} className="rounded-lg border max-h-52 w-full" />
        </div>
        <h3 className="mt-2 text-white dark:text-gray-300">{title}</h3>
      </div>
    </div>
  );
}
