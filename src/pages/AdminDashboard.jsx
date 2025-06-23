import React, { useEffect, useState } from 'react';

const AdminDashboard = () => {
  const [submissions, setSubmissions] = useState([]);


  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const res = await fetch("http://localhost:4002/api/admin/allSubmission");
        const data = await res.json();
        setSubmissions(data);
      } catch (err) {
        console.error("Error fetching submissions:", err);
      }
    };

    fetchSubmissions();
  }, []);

  const handleCheck = (id) => {
    setSubmissions(prev =>
      prev.map(item =>
        item._id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-5xl mx-auto bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Admin Dashboard – Submitted Assignments
        </h2>

        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border border-gray-200">
            <thead className="bg-blue-100">
              <tr>
                <th className="px-4 py-2 border">#</th>
                <th className="px-4 py-2 border">Student Name</th>
                <th className="px-4 py-2 border">Student ID</th>
                <th className="px-4 py-2 border">Title</th>
                <th className="px-4 py-2 border">Checked</th>
              </tr>
            </thead>
            <tbody>
              {submissions.map((submission, index) => (
                <tr key={submission._id} className="hover:bg-gray-100 transition">
                  <td className="px-4 py-2 border text-center">{index + 1}</td>
                  <td className="px-4 py-2 border">{submission.studentName}</td>
                  <td className="px-4 py-2 border">{submission.studentId}</td>
                  <td className="px-4 py-2 border">{submission.title}</td>
                  <td className="px-4 py-2 border text-center">
                    <input
                      type="checkbox"
                      checked={submission.checked || false}
                      onChange={() => handleCheck(submission._id)}
                      className="w-5 h-5 accent-blue-600 cursor-pointer"
                    />
                  </td>
                </tr>
              ))}
              {submissions.length === 0 && (
                <tr>
                  <td colSpan="5" className="text-center py-4 text-gray-500">
                    No submissions found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
