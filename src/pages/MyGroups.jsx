import React, { use, useState } from "react";
import { useLoaderData } from "react-router";
import MyGroupCard from "../components/MyGroupCard";
import { AuthContext } from "../context/AuthContext";
import NoGroupCard from "../components/NoGroupCard";
import Swal from "sweetalert2";

const MyGroups = () => {
  const loadedGroups = useLoaderData();
  const { user } = use(AuthContext);

  const [groups, setGroups] = useState(
    loadedGroups.filter((group) => group.email === user?.email)
  );

  const handleDeleteGroup = (id) => {
    const updatedGroups = groups.filter((group) => group._id !== id);
    setGroups(updatedGroups);
  };

  const handleDelete = (id) => {
    Swal.fire({
  title: "Are you sure?",
  text: "Do you want to delete this group?",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!",
  customClass: {
    popup: "swal-popup",
    title: "swal-title",
    confirmButton: "swal-confirm",
    cancelButton: "swal-cancel",
  }
}).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/groups/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                        toast: true,
                        position: "top-end",
                        icon: "success",
                        title: "Create Group Successfully",
                        showConfirmButton: false,
                        timer: 1500,
                        customClass: {
                          popup: "swal-popup",
                          title: "swal-title",
                        },
                      });
              const updatedGroups = groups.filter((group) => group._id !== id);
              setGroups(updatedGroups);
            }
          });
      }
    });
  };

  return (
    <div className="min-h-screen px-4 py-8 bg-gray-50 rai dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-sky-500 mb-10">
          My Hobby Groups
        </h1>

        {groups.length === 0 ? (
          <div className="mt-10">
            <NoGroupCard />
          </div>
        ) : (
          <>
            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="min-w-full rai bg-white dark:bg-gray-800 rounded-lg shadow">
                <thead>
                  <tr className="text-left rai bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white">
                    <th className="px-4 py-2">Group Name</th>
                    <th className="px-4 py-2">Category</th>
                    <th className="px-4 py-2">Start Date</th>
                    <th className="px-4 py-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {groups.map((group) => (
                    <MyGroupCard
                      key={group._id}
                      group={group}
                      onDelete={handleDeleteGroup}
                    />
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Card Layout */}
            <div className="md:hidden space-y-4">
              {groups.map((group) => (
                <div
                  key={group._id}
                  className="bg-white rai border dark:bg-gray-800 p-4 rounded-lg shadow"
                >
                  <h2 className="text-lg font-semibold text-sky-600">
                    {group.groupName}
                  </h2>
                  <p className="text-sm mt-1">
                    <span className="font-medium">Category:</span>{" "}
                    {group.category}
                  </p>
                  <p className="text-sm">
                    <span className="font-medium">Start Date:</span>{" "}
                    {group.startDate}
                  </p>
                  <div className="mt-4 flex gap-2">
                    <button
                      onClick={() => handleDelete(group._id)}
                      className="w-full bg-red-500 hover:bg-red-600 text-white text-sm py-2 px-4 rounded"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() =>
                        window.location.assign(`/updateGroup/${group._id}`)
                      }
                      className="w-full bg-blue-500 hover:bg-blue-600 text-white text-sm py-2 px-4 rounded"
                    >
                      Update
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MyGroups;
