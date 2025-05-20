import React, { use, useEffect, useState,  } from "react";
import { useLoaderData } from "react-router";
import toast from "react-hot-toast";
import { AuthContext } from "../context/AuthContext"; 

const GroupDetails = () => {
  const group = useLoaderData();
  const { _id, groupName, category, description, location, maxMembers, startDate, imageUrl, name, email } = group;

  const { user } = use(AuthContext); // Get logged-in user
  const userEmail = user?.email;
  const isGroupExpired = new Date(startDate) < new Date();

  const [hasJoined, setHasJoined] = useState(false);

  // Load join state from localStorage based on user
  useEffect(() => {
    const allJoins = JSON.parse(localStorage.getItem("joinedGroups")) || {};
    const joinedForUser = allJoins[userEmail] || [];
    setHasJoined(joinedForUser.includes(_id));
  }, [_id, userEmail]);

  const handleJoin = () => {
    const allJoins = JSON.parse(localStorage.getItem("joinedGroups")) || {};
    const joinedForUser = allJoins[userEmail] || [];

    if (!joinedForUser.includes(_id)) {
      joinedForUser.push(_id);
      allJoins[userEmail] = joinedForUser;
      localStorage.setItem("joinedGroups", JSON.stringify(allJoins));
      setHasJoined(true);
      toast.success("You joined the group!");
    }
  };

  const handleLeave = () => {
    const allJoins = JSON.parse(localStorage.getItem("joinedGroups")) || {};
    let joinedForUser = allJoins[userEmail] || [];

    joinedForUser = joinedForUser.filter((id) => id !== _id);
    allJoins[userEmail] = joinedForUser;
    localStorage.setItem("joinedGroups", JSON.stringify(allJoins));
    setHasJoined(false);
    toast("You left the group.", {
      icon: "👋",
      style: { background: "#f87171", color: "white" },
    });
  };

  return (
    <div className="min-h-screen px-4 py-10 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <img src={imageUrl} alt={groupName} className="w-full h-64 object-cover" />
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

          {/* Show based on state */}
          {isGroupExpired ? (
            <p className="text-red-500 font-semibold mt-4">
              This group is no longer active.
            </p>
          ) : (
            <div className="space-x-3 mt-4">
              {hasJoined ? (
                <button
                  onClick={handleLeave}
                  className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded"
                >
                  Leave Group
                </button>
              ) : (
                <button
                  onClick={handleJoin}
                  className="bg-sky-500 hover:bg-sky-600 text-white px-5 py-2 rounded"
                >
                  Join Group
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GroupDetails;
