import { useState, useEffect, use } from "react";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";

const CreateGroup = () => {
  const { user } = use(AuthContext);

  const [formData, setFormData] = useState({
    groupName: "",
    category: "",
    description: "",
    location: "",
    maxMembers: "",
    startDate: "",
    imageUrl: "",
    name: "",
    email: "",
  });

  useEffect(() => {
    if (user) {
      setFormData((prev) => ({
        ...prev,
        name: user.displayName || "",
        email: user.email || "",
      }));
    }
  }, [user]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form Submitted:", formData);

    // Reset the form (keep user name & email)
    setFormData({
      groupName: "",
      category: "",
      description: "",
      location: "",
      maxMembers: "",
      startDate: "",
      imageUrl: "",
      name: user?.displayName || "",
      email: user?.email || "",
    });

    // send the form info in database

    fetch("http://localhost:3000/groups", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
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
        console.log("after added the data", data);
      });
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
    <div className="min-h-screen px-4 py-8 rai bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-3xl mx-auto bg-white rai border dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-6 text-sky-500">
          Create a New Hobby Group
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Group Name */}
          <div>
            <label className="block font-medium mb-1">Group Name</label>
            <input
              type="text"
              name="groupName"
              value={formData.groupName}
              onChange={handleChange}
              className="w-full"
            />
          </div>

          {/* Hobby Category */}
          <div>
            <label className="block font-medium mb-1">Hobby Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
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
              value={formData.description}
              onChange={handleChange}
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
              value={formData.location}
              onChange={handleChange}
              className="w-full"
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
              value={formData.startDate}
              onChange={handleChange}
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
              value={formData.imageUrl}
              onChange={handleChange}
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
                value={formData.name}
                readOnly
                className="w-full"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">User Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
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
            Create Group
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateGroup;
