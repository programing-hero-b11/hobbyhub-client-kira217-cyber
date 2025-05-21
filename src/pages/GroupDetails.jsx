import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import toast from "react-hot-toast";

const GroupDetails = () => {
  const group = useLoaderData();
  const {
    _id,
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

  const isGroupExpired = new Date(startDate) < new Date();
  const [hasJoined, setHasJoined] = useState(false);

  // 🔁 Load join status from localStorage on first render
  useEffect(() => {
    const joinedGroups = JSON.parse(localStorage.getItem("joinedGroups")) || [];
    if (joinedGroups.includes(_id)) {
      setHasJoined(true);
    }
  }, [_id]);

  // ✅ Join handler
  const handleJoin = () => {
    const joinedGroups = JSON.parse(localStorage.getItem("joinedGroups")) || [];
    if (!joinedGroups.includes(_id)) {
      joinedGroups.push(_id);
      localStorage.setItem("joinedGroups", JSON.stringify(joinedGroups));
      setHasJoined(true);
      toast.success("You have successfully joined the group!");
    }
  };

  // ❌ Leave handler
  const handleLeave = () => {
    let joinedGroups = JSON.parse(localStorage.getItem("joinedGroups")) || [];
    joinedGroups = joinedGroups.filter((id) => id !== _id);
    localStorage.setItem("joinedGroups", JSON.stringify(joinedGroups));
    setHasJoined(false);
    toast("You have left the group.", {
      icon: "👋",
      style: {
        background: "#f87171",
        color: "white",
      },
    });
  };

  return (
    <div className="min-h-screen rai px-4 py-10 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-4xl mx-auto rai border bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
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

          {/* Join/Leave Button or Expired Message */}
          {isGroupExpired ? (
            <p className="text-red-500 font-semibold mt-4">
              This group is no longer active.
            </p>
          ) : (
            <div className="space-x-3 mt-4">
              {hasJoined ? (
                <button
                  onClick={handleLeave}
                  className="bg-red-500 hover:cursor-pointer hover:bg-red-600 text-white px-5 py-2 rounded transition"
                >
                  Leave Group
                </button>
              ) : (
                <button
                  onClick={handleJoin}
                  className="bg-sky-500 hover:cursor-pointer hover:bg-sky-600 text-white px-5 py-2 rounded transition"
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
