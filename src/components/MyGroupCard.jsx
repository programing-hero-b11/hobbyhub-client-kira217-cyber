import React from 'react';
import { useNavigate } from 'react-router';

const MyGroupCard = ({ group, onDelete }) => {
  const navigate = useNavigate();
  const {
    _id,
    groupName,
    category,
    startDate,
  } = group;

  const handleUpdate = () => {
    navigate(`/updateGroup/${_id}`); // Make sure this route exists
  };

//   const handleDelete = () => {
//     if (confirm("Are you sure you want to delete this group?")) {
//       onDelete(_id);
//     }
//   };

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
        //   onClick={handleDelete}
          className="bg-red-500 hover:bg-red-800 hover:cursor-pointer text-white px-3 py-1 rounded"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default MyGroupCard;
