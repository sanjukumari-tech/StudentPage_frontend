import React, { useState } from 'react';

const Assignment = () => {
  const [link, setLink] = useState('');
  const [file, setFile] = useState(null);
  const [answer, setAnswer] = useState('');
  const [submissionType, setSubmissionType] = useState('none');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (submissionType === 'file' && !file) {
      alert("Please upload a file.");
      return;
    }

    if (submissionType === 'link' && !link.trim()) {
      alert("Please enter a valid link.");
      return;
    }

    if (!answer.trim()) {
      alert("Please provide a written answer.");
      return;
    }

    console.log("Assignment Submitted:");
    console.log("Answer:", answer);
    console.log("Link:", link);
    console.log("File:", file?.name);

    alert("Assignment submitted successfully!");
    setLink('');
    setFile(null);
    setAnswer('');
    setSubmissionType('none');
    e.target.reset();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-5xl bg-white shadow-md rounded-xl p-6 grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {/* Left Section: Question */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Assignment Question</h2>
          <p className="text-gray-700 mb-6">
            <strong>Q:</strong> Explain the concept of closures in JavaScript with an example.
          </p>
        </div>

        {/* Right Section: Answer Submission */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800 text-center">Submit Your Answer</h2>

          {/* Text Answer */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">Write your answer</label>
            <textarea
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Your answer here..."
              rows={4}
              className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
          </div>

          {/* Select Submission Type */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">Select Submission Type</label>
            <select
              value={submissionType}
              onChange={(e) => setSubmissionType(e.target.value)}
              className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              <option value="none">-- Select --</option>
              <option value="file">Upload File</option>
              <option value="link">Submit Link</option>
            </select>
          </div>

          {/* Conditional Input */}
          {submissionType === 'file' && (
            <div>
              <label className="block mb-1 font-medium text-gray-700">Upload File</label>
              <input
                type="file"
                accept=".pdf,.doc,.docx,.ppt,.zip"
                onChange={handleFileChange}
                className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          )}

          {submissionType === 'link' && (
            <div>
              <label className="block mb-1 font-medium text-gray-700">Submit Link</label>
              <input
                type="url"
                placeholder="https://drive.google.com/..."
                value={link}
                onChange={(e) => setLink(e.target.value)}
                className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Submit Assignment
          </button>
        </div>
      </form>
    </div>
  );
};

export default Assignment;
