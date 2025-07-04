import React from "react";
import { Link } from "react-router";
import GroupSectionCard from "./GroupSectionCard";
import { Tooltip } from "react-tooltip";

const GroupSection = ({ groups }) => {
  const now = new Date();
  const ongoingGroups = groups
    .filter((group) => new Date(group.startDate) > now)
    .slice(0, 6);

  return (
    <div className="min-h-screen px-4 py-8 rai bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-sky-500 mb-10">
          Hobby Groups
        </h1>

        {ongoingGroups.length > 0 ? (
          <>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {ongoingGroups.map((group) => (
                <GroupSectionCard key={group._id} group={group} />
              ))}
            </div>

            <div className="flex justify-center mt-10">
              <Link to="/allGroups">
                <button
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content="Do you want see All Groups So, Click the Button"
                  data-tooltip-place="top"
                  type="button"
                  className="inline-flex items-center hover:cursor-pointer justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-sky-500 hover:bg-sky-700 focus:outline-none focus:shadow-outline"
                >
                  <Tooltip id="my-tooltip"></Tooltip>
                  Show All Groups
                </button>
              </Link>
            </div>
          </>
        ) : (
          <p className="text-center text-gray-500 dark:text-gray-400">
            No upcoming hobby groups found. Please Create Group !
          </p>
        )}
      </div>
    </div>
  );
};

export default GroupSection;
