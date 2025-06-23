import React, { useState } from 'react';

const AdminDashboard = () => {
  // Sample users (you can fetch this from API or props)
  const [users, setUsers] = useState([
    { id: 1, name: "Alice Sharma", email: "alice@example.com", checked: false },
    { id: 2, name: "Bob Kumar", email: "bob@example.com", checked: false },
    { id: 3, name: "Charlie Yadav", email: "charlie@example.com", checked: false },
  ]);

  const handleCheck = (id) => {
    setUsers(prev =>
      prev.map(user =>
        user.id === id ? { ...user, checked: !user.checked } : user
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-5xl mx-auto bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Admin Dashboard – User Assignments
        </h2>

        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border border-gray-200">
            <thead className="bg-blue-100">
              <tr>
                <th className="px-4 py-2 border">ID</th>
                <th className="px-4 py-2 border">Name</th>
                <th className="px-4 py-2 border">Email</th>
                <th className="px-4 py-2 border">Assignment Checked</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id} className="hover:bg-gray-100 transition">
                  <td className="px-4 py-2 border text-center">{user.id}</td>
                  <td className="px-4 py-2 border">{user.name}</td>
                  <td className="px-4 py-2 border">{user.email}</td>
                  <td className="px-4 py-2 border text-center">
                    <input
                      type="checkbox"
                      checked={user.checked}
                      onChange={() => handleCheck(user.id)}
                      className="w-5 h-5 accent-blue-600 cursor-pointer"
                    />
                  </td>
                </tr>
              ))}
              {users.length === 0 && (
                <tr>
                  <td colSpan="4" className="text-center py-4 text-gray-500">
                    No users found.
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
