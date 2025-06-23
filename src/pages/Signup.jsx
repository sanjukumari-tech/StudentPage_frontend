import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../store/authSlice';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({ fullname: '', email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

 const handleSignup = async (e) => {
  e.preventDefault();
  try {
    const res = await fetch("http://localhost:4002/api/user/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });


    console.log(res)
    const data = await res.json();

    if (res.ok) {
      // Optionally dispatch login (if you want to set auth state in Redux)
      dispatch(login({ name: data.name, email: data.email, token: data.token }));
      alert("Signed up successfully!");
      navigate("/login")
    } else {
      alert(`Signup failed: ${data.message || "Unknown error"}`);
    }
  } catch (error) {
    console.error("Signup error:", error);
    alert("Signup failed. Please try again later.");
  }
};


  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-100 to-purple-200 p-4">
      <form
        onSubmit={handleSignup}
        className="w-full max-w-md bg-white shadow-md rounded-xl p-8 space-y-4"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">Signup</h2>

        <input
          type="text"
          name="fullname"
          placeholder="Name"
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Signup
        </button>

         {/* <div className="space-x-4"> */}
          <Link to="/login">
            {/* <button className="px-6 py-2 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition duration-300 transform hover:scale-105"> */}
              Login
            {/* </button> */}
          </Link>
          {/* </div> */}
      </form>
    </div>
  );
};

export default Signup;
