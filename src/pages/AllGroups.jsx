import React from "react";
import { useLoaderData } from "react-router";
import GroupCard from "../components/GroupCard";

const AllGroups = () => {

    const groups = useLoaderData()

  return (
    <div>
      <div className="min-h-screen px-4 py-8 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-center text-sky-500 mb-10">
            All Hobby Groups
          </h1>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {
                groups.map(group=><GroupCard key={group._id} group={group}></GroupCard>)
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllGroups;
