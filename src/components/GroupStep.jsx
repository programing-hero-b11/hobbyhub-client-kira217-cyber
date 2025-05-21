import React from 'react';

const GroupStep = () => {
return (
<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
<div className="max-w-2xl mx-auto text-center mb-12">
<p className="text-sm font-medium tracking-wide uppercase text-sky-600 dark:text-sky-400 mb-2">
How It Works
</p>
<h2 className="text-3xl font-extrabold sm:text-4xl text-gray-900 dark:text-white">
Get Started in Four Simple Steps
</h2>
</div>

php-template
Copy
Edit
  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
    {/* Steps Grid */}
    <div className="grid gap-6 md:grid-cols-2 md:col-span-2 lg:col-span-3">
      {/* Step 1 */}
      <div className="rounded-2xl p-5 transition duration-300 hover:bg-sky-100 dark:hover:bg-sky-800 bg-white dark:bg-gray-800 shadow">
        <div className="flex items-center mb-2">
          <span className="w-6 h-6 mr-3 flex items-center justify-center text-xs font-bold text-white bg-sky-500 rounded-full">
            1
          </span>
          <h4 className="text-lg font-semibold">Read the Group Info</h4>
        </div>
        <p className="text-sm text-gray-700 dark:text-gray-300">
          Understand what the group is about. Make sure it matches your interests before joining.
        </p>
      </div>

      {/* Step 2 */}
      <div className="rounded-2xl p-5 transition duration-300 hover:bg-sky-100 dark:hover:bg-sky-800 bg-white dark:bg-gray-800 shadow">
        <div className="flex items-center mb-2">
          <span className="w-6 h-6 mr-3 flex items-center justify-center text-xs font-bold text-white bg-sky-500 rounded-full">
            2
          </span>
          <h4 className="text-lg font-semibold">Check Group Rules</h4>
        </div>
        <p className="text-sm text-gray-700 dark:text-gray-300">
          Every group has expectations. Review them to know how you’ll participate respectfully and actively.
        </p>
      </div>

      {/* Step 3 */}
      <div className="rounded-2xl p-5 transition duration-300 hover:bg-sky-100 dark:hover:bg-sky-800 bg-white dark:bg-gray-800 shadow">
        <div className="flex items-center mb-2">
          <span className="w-6 h-6 mr-3 flex items-center justify-center text-xs font-bold text-white bg-sky-500 rounded-full">
            3
          </span>
          <h4 className="text-lg font-semibold">Join or Apply</h4>
        </div>
        <p className="text-sm text-gray-700 dark:text-gray-300">
          Click "Join Group" or send a request depending on the group settings. Some may auto-approve!
        </p>
      </div>

      {/* Step 4 */}
      <div className="rounded-2xl p-5 transition duration-300 hover:bg-sky-100 dark:hover:bg-sky-800 bg-white dark:bg-gray-800 shadow">
        <div className="flex items-center mb-2">
          <span className="w-6 h-6 mr-3 flex items-center justify-center text-xs font-bold text-white bg-sky-500 rounded-full">
            4
          </span>
          <h4 className="text-lg font-semibold">Start Connecting</h4>
        </div>
        <p className="text-sm text-gray-700 dark:text-gray-300">
          Post, chat, or meet! Take part in the group's activities and enjoy sharing your passion.
        </p>
      </div>
    </div>

    {/* Image Section */}
    <div className="relative md:col-span-2 lg:col-span-2">
      <img
        className="inset-0 object-cover object-bottom w-full h-56 rounded-2xl shadow-lg lg:absolute lg:h-full"
        src="https://images.pexels.com/photos/3182759/pexels-photo-3182759.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        alt="Group steps illustration"
      />
    </div>
  </div>
</div>
);
}

export default GroupStep;