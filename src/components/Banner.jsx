import React from "react";

const Banner = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col max-w-screen-lg overflow-hidden bg-white dark:bg-gray-800 border rounded shadow-sm lg:flex-row sm:mx-auto">
        {/* Image Section */}
        <div className="relative lg:w-1/2">
          <img
            src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="Community"
            className="object-cover w-full lg:absolute h-80 lg:h-full"
          />
          <svg
            className="absolute top-0 right-0 hidden h-full text-white lg:inline-block"
            viewBox="0 0 20 104"
            fill="currentColor"
          >
            <polygon points="17.3 0 20 0 20 104 0.82 104" />
          </svg>
        </div>
        php-template Copy Edit
        {/* Text Content */}
        <div className="flex flex-col justify-center p-8 lg:p-16 lg:pl-10 lg:w-1/2 bg-white dark:bg-gray-800">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider uppercase rounded-full bg-sky-100 text-sky-900 dark:bg-sky-900 dark:text-sky-100">
              HobbyHub
            </p>
          </div>
          <h2 className="mb-3 text-3xl font-extrabold leading-none sm:text-4xl text-gray-900 dark:text-white">
            Connect through shared passions
          </h2>
          <p className="mb-5 text-gray-700 dark:text-gray-300">
            Discover and join hobby groups in your area, or start your own! Meet
            new people, learn new things, and grow your passion with HobbyHub.
          </p>
          <div className="flex items-center">
            <button
              type="button"
              className="inline-flex items-center justify-center h-12 px-6 mr-4 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-sky-500 hover:bg-sky-700 focus:outline-none focus:shadow-outline"
            >
              Get Started
            </button>
            <a
              href="/groups"
              className="inline-flex items-center font-semibold text-sky-600 dark:text-sky-400 hover:underline"
            >
              Browse Groups
              <svg
                className="inline-block w-4 h-4 ml-2"
                fill="currentColor"
                viewBox="0 0 12 12"
              >
                <path d="M9.707 5.293l-5-5A1 1 0 0 0 3.293 1.707L7.586 6 3.293 10.293a1 1 0 1 0 1.414 1.414l5-5a1 1 0 0 0 0-1.414z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
