// import React from 'react'
// import { useAuth } from './context/AuthContext.jsx'
// import Signup from './pages/Signup.jsx';
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";

// const App = () => {
//   const {user,isAuthenticated} = useAuth();
//   return (
//     <div>
//       <h1>auth demo</h1>
//       {
//         isAuthenticated?(
//           <p>welcome,{user.name||user.email}</p>
//         ):(
//           <>
//            <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/login" element={<Login />} />
//       <Route path="/signup" element={<Signup />} />
//     </Routes>
//           </>
//         )
//       }
//     </div>
//   )
// }

// export default App

import React from "react";
import Signup from "./pages/Signup.jsx";
import HomePage from "./pages/HomePage.jsx";
import Assignment from "./pages/Assignment.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/assignment" element={<Assignment />} />
        <Route path="/dashboard" element={<AdminDashboard />} />
      </Routes>
    </div>
  );
};

export default App;
