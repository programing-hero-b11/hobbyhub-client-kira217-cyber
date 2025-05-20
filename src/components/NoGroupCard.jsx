import React from 'react';
import { Link } from 'react-router';

const NoGroupCard = () => {
  return (
    <div className="w-full bg-white dark:bg-gray-800 rounded-lg shadow p-6 text-center">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-3">
        No Groups Found
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-5">
        You haven't created any groups yet.
      </p>
      <Link
        to="/groups/create"
        className="inline-block bg-sky-500 hover:bg-sky-600 text-white font-medium px-5 py-2 rounded transition"
      >
        Create a New Group
      </Link>
    </div>
  );
};

export default NoGroupCard;
