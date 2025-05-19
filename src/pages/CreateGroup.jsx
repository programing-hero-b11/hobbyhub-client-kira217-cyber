import { useState } from "react";

const CreateGroup = () => {
  // Dummy user data for design
  const user = {
    displayName: "John Doe",
    email: "john@example.com",
  };

  const [formData, setFormData] = useState({
    groupName: "",
    category: "",
    description: "",
    location: "",
    maxMembers: "",
    startDate: "",
    imageUrl: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

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

  return (
    <div className="min-h-screen px-4 py-8 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-6 text-sky-500">Create a New Hobby Group</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Group Name */}
          <div>
            <label className="block font-medium mb-1">Group Name</label>
            <input
              type="text"
              name="groupName"
              value={formData.groupName}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:border-gray-600"
              required
            />
          </div>

          {/* Hobby Category */}
          <div>
            <label className="block font-medium mb-1">Hobby Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:border-gray-600"
              required
            >
              <option value="" disabled>Select a category</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          {/* Description */}
          <div>
            <label className="block font-medium mb-1">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:border-gray-600"
              required
            />
          </div>

          {/* Meeting Location */}
          <div>
            <label className="block font-medium mb-1">Meeting Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:border-gray-600"
              required
            />
          </div>

          {/* Max Members */}
          <div>
            <label className="block font-medium mb-1">Max Members</label>
            <input
              type="number"
              name="maxMembers"
              value={formData.maxMembers}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:border-gray-600"
              required
            />
          </div>

          {/* Start Date */}
          <div>
            <label className="block font-medium mb-1">Start Date</label>
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:border-gray-600"
              required
            />
          </div>

          {/* Image URL */}
          <div>
            <label className="block font-medium mb-1">Image URL</label>
            <input
              type="url"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:border-gray-600"
              required
            />
          </div>

          {/* User Info (Readonly) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium mb-1">User Name</label>
              <input
                type="text"
                value={user.displayName}
                readOnly
                className="w-full px-3 py-2 border rounded bg-gray-100 dark:bg-gray-700 dark:border-gray-600"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">User Email</label>
              <input
                type="email"
                value={user.email}
                readOnly
                className="w-full px-3 py-2 border rounded bg-gray-100 dark:bg-gray-700 dark:border-gray-600"
              />
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-2 rounded mt-4 transition"
          >
            Create Group
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateGroup;
