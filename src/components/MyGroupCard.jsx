import React from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const MyGroupCard = ({ group, onDelete }) => {
  const navigate = useNavigate();
  const { _id, groupName, category, startDate } = group;

  const handleUpdate = () => {
    navigate(`/updateGroup/${_id}`); // Make sure this route exists
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
      console.log(result.isConfirmed);
      if (result.isConfirmed) {
        // send the data and delete from database

        fetch(`http://localhost:3000/groups/${_id}`, {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Group Deleted Successfully.",
                icon: "success",
              });
              onDelete(_id);
            }
          });
      }
    });
  };

  return (
    <tr className="border-b dark:border-gray-700">
      <td className="px-4 py-3">{groupName}</td>
      <td className="px-4 py-3">{category}</td>
      <td className="px-4 py-3">{startDate}</td>
      <td className="px-4 py-3 space-x-2">
        <button
          onClick={handleUpdate}
          className="bg-blue-500 hover:bg-blue-800 hover:cursor-pointer text-white px-3 py-1 rounded"
        >
          Update
        </button>
        <button
          onClick={() => handleDelete(_id)}
          className="bg-red-500 hover:bg-red-800 hover:cursor-pointer text-white px-3 py-1 rounded"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default MyGroupCard;
