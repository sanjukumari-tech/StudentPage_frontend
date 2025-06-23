import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // required for navigation

const Assignment = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    description: "",
    studentName: "",
    studentId: "",
    link: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogout = async () => {
    try {
      const res = await fetch("http://localhost:4002/api/user/logout", {
        method: "POST",
        credentials: "include", // include cookies if using sessions
      });
      navigate("/")
    

      if (res.ok) {
        alert("Logged out successfully.");
        // Redirect to homepage
        window.location.href = "/";
      } else {
        const errorData = await res.json();
        alert("Logout failed: " + (errorData?.error || "Unknown error"));
      }
    } catch (err) {
      console.error("Logout error:", err);
      navigate("/")
      alert("An error occurred during logout.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !form.title ||
      !form.description ||
      !form.studentName ||
      !form.studentId ||
      !form.link.trim()
    ) {
      alert("Please fill all required fields including link.");
      return;
    }

    try {
      const res = await fetch("http://localhost:4002/api/upload/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          attachment: form.link,
        }),
      });

      const result = await res.json();

      if (res.ok) {
        alert("Assignment submitted successfully!");
        setForm({
          title: "",
          description: "",
          studentName: "",
          studentId: "",
          link: "",
        });
      } else {
        alert("Submission failed: " + (result?.error || "Unknown error"));
      }
    } catch (err) {
      console.error(err);
      alert("Submission error occurred.");
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex items-center justify-center px-4">
    
      <button
        onClick={handleLogout}
        className="absolute top-5 right-5 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
      >
        Logout
      </button>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-5xl bg-white shadow-md rounded-xl p-6 grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {/* Left Section */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Assignment Question
          </h2>
          <p className="text-gray-700 mb-4">
            <strong>Q:</strong> Explain the concept of closures in JavaScript
            with an example.
          </p>

          <div className="space-y-4">
            <div>
              <label className="block font-medium text-gray-700">Title</label>
              <input
                type="text"
                name="title"
                value={form.title}
                onChange={handleChange}
                className="w-full border p-2 rounded-md"
                required
              />
            </div>

            <div>
              <label className="block font-medium text-gray-700">
                Student Name
              </label>
              <input
                type="text"
                name="studentName"
                value={form.studentName}
                onChange={handleChange}
                className="w-full border p-2 rounded-md"
                required
              />
            </div>

            <div>
              <label className="block font-medium text-gray-700">
                Student ID
              </label>
              <input
                type="text"
                name="studentId"
                value={form.studentId}
                onChange={handleChange}
                className="w-full border p-2 rounded-md"
                required
              />
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800 text-center">
            Submit Your Answer
          </h2>

          <div>
            <label className="block font-medium text-gray-700">
              Write your answer
            </label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              rows={4}
              className="w-full border p-2 rounded-md"
              required
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700">
              Link to your submission
            </label>
            <input
              type="url"
              name="link"
              placeholder="https://drive.google.com/..."
              value={form.link}
              onChange={handleChange}
              className="w-full border p-2 rounded-md"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
          >
            Submit Assignment
          </button>
        </div>
      </form>
    </div>
  );
};

export default Assignment;
