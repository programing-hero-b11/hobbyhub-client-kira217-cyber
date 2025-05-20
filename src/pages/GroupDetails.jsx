import React from 'react';
import { useLoaderData } from 'react-router';

const GroupDetails = () => {
  const group = useLoaderData();

  const {
    groupName,
    category,
    description,
    location,
    maxMembers,
    startDate,
    imageUrl,
    name,
    email,
  } = group;

  return (
    <div className="min-h-screen px-4 py-10 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <img
          src={imageUrl}
          alt={groupName}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h2 className="text-3xl font-bold text-sky-500 mb-4">{groupName}</h2>

          <div className="mb-4 space-y-2">
            <p><span className="font-semibold">Category:</span> {category}</p>
            <p><span className="font-semibold">Location:</span> {location}</p>
            <p><span className="font-semibold">Start Date:</span> {startDate}</p>
            <p><span className="font-semibold">Max Members:</span> {maxMembers}</p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-1">Description</h3>
            <p className="text-gray-700 dark:text-gray-300">{description}</p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-1">Created by</h3>
            <p className="text-gray-600 dark:text-gray-400">{name}</p>
            <p className="text-gray-600 dark:text-gray-400">{email}</p>
          </div>

          <button className="bg-sky-500 hover:bg-sky-600 hover:cursor-pointer text-white px-5 py-2 rounded transition">
            Join Group
          </button>
        </div>
      </div>
    </div>
  );
};

export default GroupDetails;
