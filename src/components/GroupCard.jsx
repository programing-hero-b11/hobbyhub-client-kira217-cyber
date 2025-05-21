import React from "react";
import { Link } from "react-router";

const GroupCard = ({group}) => {

    const {groupName,category,description,location,maxMembers,startDate,imageUrl,_id} = group

  return (
    <div>
     <div

              className="bg-white dark:bg-gray-800 rai border shadow-md rounded-lg overflow-hidden transition transform hover:-translate-y-1 hover:shadow-lg"
            >
              <img
                src={imageUrl}
                alt={groupName}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-sky-500 mb-2">{groupName}</h2>
                <p className="text-sm mb-2 text-gray-700 dark:text-gray-300">
                  <strong>Category:</strong> {category}
                </p>    
                <Link
                  to={`/groups/${_id}`}
                  className="inline-block bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded transition"
                >
                  See More
                </Link>
              </div>
            </div>
    </div>
  );
};

export default GroupCard;
