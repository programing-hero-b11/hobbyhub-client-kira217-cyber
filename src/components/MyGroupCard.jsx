import React from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const MyGroupCard = ({ group, onDelete }) => {
  const navigate = useNavigate();
  const { _id, groupName, category, startDate } = group;

  const handleUpdate = () => {
    navigate(`/updateGroup/${_id}`);
  };

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Delete Your Hobby Group",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/groups/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire("Deleted!", "Your Group Deleted Successfully.", "success");
              onDelete(_id);
            }
          });
      }
    });
  };

  return (
    <>
      {/* Desktop row */}
      <tr className="hidden md:table-row border-b dark:border-gray-700">
        <td className="px-4 py-3">{groupName}</td>
        <td className="px-4 py-3">{category}</td>
        <td className="px-4 py-3">{startDate}</td>
        <td className="px-4 py-3 space-x-2">
          <button
            onClick={handleUpdate}
            className="bg-blue-500 hover:bg-blue-700 text-white px-3 py-1 rounded"
          >
            Update
          </button>
          <button
            onClick={() => handleDelete(_id)}
            className="bg-red-500 hover:bg-red-700 text-white px-3 py-1 rounded"
          >
            Delete
          </button>
        </td>
      </tr>

      {/* Mobile card */}
      <div className="md:hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 mb-4 shadow">
        <h2 className="text-lg font-semibold text-sky-600">{groupName}</h2>
        <p className="text-sm mt-1">
          <span className="font-medium">Category:</span> {category}
        </p>
        <p className="text-sm">
          <span className="font-medium">Start Date:</span> {startDate}
        </p>
        <div className="mt-4 flex gap-2">
          <button
            onClick={handleUpdate}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white text-sm py-2 px-4 rounded"
          >
            Update
          </button>
          <button
            onClick={() => handleDelete(_id)}
            className="w-full bg-red-500 hover:bg-red-600 text-white text-sm py-2 px-4 rounded"
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default MyGroupCard;
