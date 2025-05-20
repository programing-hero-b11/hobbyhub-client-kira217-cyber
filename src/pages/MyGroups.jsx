import React, { use, useState } from "react";
import { useLoaderData } from "react-router";
import MyGroupCard from "../components/MyGroupCard";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthContext";

const MyGroups = () => {
  const loadedGroups = useLoaderData();
  const [groups, setGroups] = useState(loadedGroups);

  const {user,setUser} = use(AuthContext)

  // Delete handler
//   const handleDelete = (id) => {
//     fetch(`https://localhost:3000/groups/${id}`, {
//       method: "DELETE",
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.deletedCount > 0) {
//           Swal.fire("Deleted!", "Group has been removed.", "success");
//           const remaining = groups.filter((group) => group._id !== id);
//           setGroups(remaining);
//         }
//       });
//   };

  return (
    <div className="min-h-screen px-4 py-8 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-sky-500 mb-10">
          My Hobby Groups
        </h1>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white dark:bg-gray-800 rounded-lg shadow">
            <thead>
              <tr className="text-left bg-gray-200 dark:bg-gray-700">
                <th className="px-4 py-2">Group Name</th>
                <th className="px-4 py-2">Category</th>
                <th className="px-4 py-2">Start Date</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {groups.map((group) => (
                <MyGroupCard key={group._id} group={group} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyGroups;
