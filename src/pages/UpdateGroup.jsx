import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const UpdateGroup = () => {
  const categories = [
    "Drawing & Painting",
    "Photography",
    "Video Gaming",
    "Fishing",
    "Running",
    "Cooking",
    "Reading",
    "Writing",
  ];
  const group = useLoaderData();
  const {
    groupName,
    category,
    description,
    location,
    maxMembers,
    startDate,
    imageUrl,
    _id,
    name,
    email,
  } = group;

  const handleUpdateGroup = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updateGroup = Object.fromEntries(formData.entries());

    // send the update group in the database

    fetch(`http://localhost:3000/groups/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateGroup),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            toast: true,
            position: "top-end",
            icon: "success",
            title: "Update Group Successfully",
            showConfirmButton: false,
            timer: 1500,
            customClass: {
              popup: "swal-popup",
              title: "swal-title",
            },
          });
        }
      });
  };

  return (
    <div className="min-h-screen px-4 py-8 rai bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-3xl mx-auto rai border bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-6 text-sky-500">
          Update Your Hobby Group
        </h2>
        <form onSubmit={handleUpdateGroup} className="space-y-4">
          {/* Group Name */}
          <div>
            <label className="block font-medium mb-1">Group Name</label>
            <input
              type="text"
              name="groupName"
              defaultValue={groupName}
              className="w-full"
            />
          </div>

          {/* Hobby Category */}
          <div>
            <label className="block font-medium mb-1">Hobby Category</label>
            <select
              name="category"
              defaultValue={category}
              className="w-full px-3 py-2 border rounded text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 transition-colors duration-300"
              required
            >
              <option value="" disabled>
                Select a category
              </option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Description */}
          <div>
            <label className="block font-medium mb-1">Description</label>
            <textarea
              name="description"
              defaultValue={description}
              rows="4"
              className="w-full px-3 py-2 border rounded text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600"
              required
            />
          </div>

          {/* Meeting Location */}
          <div>
            <label className="block font-medium mb-1">Meeting Location</label>
            <input
              type="text"
              name="location"
              defaultValue={location}
              className="w-full"
            />
          </div>

          {/* Max Members */}
          <div>
            <label className="block font-medium mb-1">Max Members</label>
            <input
              type="number"
              name="maxMembers"
              defaultValue={maxMembers}
              className="w-full px-3 py-2 border rounded text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 transition-colors duration-300"
              required
            />
          </div>

          {/* Start Date */}
          <div>
            <label className="block font-medium mb-1">Start Date</label>
            <input
              type="date"
              name="startDate"
              defaultValue={startDate}
              className="w-full"
              required
            />
          </div>

          {/* Image URL */}
          <div>
            <label className="block font-medium mb-1">Image URL</label>
            <input
              type="text"
              name="imageUrl"
              defaultValue={imageUrl}
              className="w-full"
              required
            />
          </div>

          {/* User Info (Readonly) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium mb-1">User Name</label>
              <input
                type="text"
                name="name"
                defaultValue={name}
                readOnly
                className="w-full"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">User Email</label>
              <input
                type="email"
                name="email"
                defaultValue={email}
                readOnly
                className="w-full "
              />
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="bg-sky-500 hover:cursor-pointer hover:bg-sky-600 text-white px-6 py-2 rounded mt-4 transition"
          >
            Update Group
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateGroup;
