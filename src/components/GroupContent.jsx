import React from 'react';

const GroupContent = () =>  {
return (
<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
<div className="max-w-2xl mx-auto text-center mb-12">
<p className="text-sm font-medium tracking-wide uppercase text-sky-600 dark:text-sky-400 mb-2">
Featured Highlights
</p>
<h2 className="text-3xl font-extrabold sm:text-4xl mb-4 text-gray-900 dark:text-white">
Explore What HobbyHub Offers
</h2>
<p className="text-gray-600 dark:text-gray-300">
Discover how our platform helps people connect, create, and grow through shared hobbies and interests.
</p>
</div>
  <div className="grid gap-10 lg:grid-cols-3">
    {/* Card 1 */}
    <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md transition transform hover:scale-105">
      <img
        className="object-cover w-full h-56"
        src="https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-sky-600 dark:text-sky-400">
          A Slice of Heaven
        </h3>
        <p className="text-gray-700 dark:text-gray-300">
          Connect with nature, community, and creativity through enriching outdoor hobby experiences.
        </p>
      </div>
    </div>

    {/* Card 2 */}
    <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md transition transform hover:scale-105">
      <img
        className="object-cover w-full h-56"
        src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        alt=""
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-sky-600 dark:text-sky-400">
          Disrupt & Inspire
        </h3>
        <p className="text-gray-700 dark:text-gray-300">
          Be part of innovative groups that inspire creativity and personal growth in your favorite hobbies.
        </p>
      </div>
    </div>

    {/* Card 3 */}
    <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md transition transform hover:scale-105">
      <img
        className="object-cover w-full h-56"
        src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        alt=""
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-sky-600 dark:text-sky-400">
          Organized Spaces
        </h3>
        <p className="text-gray-700 dark:text-gray-300">
          Join local clubs that offer resources, storage, and safe spaces for hobbyists to thrive.
        </p>
      </div>
    </div>
  </div>
</div>
);
};

export default GroupContent;