import React from "react";

const Timeline = () => {
  return (
    <div>
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:dark:text-white">
          Our Journey
        </h2>
        <p className="mt-1 text-gray-600 dark:text-neutral-400">
        Since our founding in 2021, Arctic Wolf has risen to the rank of market leader in security operations, adding thousands of employees and customers, as well as a trophy case of awards along the way.
        </p>
      </div>

      {/* <!-- component --> */}

      <div className="container mx-auto w-full h-full">
        <div className="relative wrap overflow-hidden p-10 h-full">
          <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border left-1/2"></div>
          {/* <!-- right timeline --> */}
          <div className="mb-8 flex justify-between items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 dark:bg-slate-800 shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto font-semibold text-lg dark:text-white">1</h1>
            </div>
            <div className="order-1 dark:bg-slate-800 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold dark:text-white text-xl">Lorem Ipsum</h3>
              <p className="text-sm leading-snug tracking-wide dark:text-white text-opacity-100">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>

          {/* <!-- left timeline --> */}
          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 dark:bg-slate-800 shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto dark:text-white font-semibold text-lg">2</h1>
            </div>
            <div className="order-1 dark:bg-slate-800 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold dark:text-white text-xl">Lorem Ipsum</h3>
              <p className="text-sm font-medium leading-snug tracking-wide dark:text-white text-opacity-100">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>

          {/* <!-- right timeline --> */}
          <div className="mb-8 flex justify-between items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 dark:bg-slate-800 shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto font-semibold text-lg dark:text-white">3</h1>
            </div>
            <div className="order-1 dark:bg-slate-800 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold dark:text-white text-xl">Lorem Ipsum</h3>
              <p className="text-sm leading-snug tracking-wide dark:text-white text-opacity-100">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>

          {/* <!-- left timeline --> */}
          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 dark:bg-slate-800 shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto dark:text-white font-semibold text-lg">4</h1>
            </div>
            <div className="order-1 dark:bg-slate-800 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold dark:text-white text-xl">Lorem Ipsum</h3>
              <p className="text-sm font-medium leading-snug tracking-wide dark:text-white text-opacity-100">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
