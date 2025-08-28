import React from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import RegisteredSchools from "./pages/RegisteredSchools/RegisteredSchools";
import AccountControl from "./pages/AccountControl/AccountControl";
import Dashboard from "./pages/Dashboard/Dashboard";

// Page imports
import SectionPage from "./pages/Sections/SectionPage";
import FocalPage from "./pages/Focals/FocalPage";
import TaskDetailPage from "./pages/TaskDetailPage/TaskDetailPage";
import SchoolAccDisplay from "./pages/RegisteredSchools/SchoolAccDisplay/SchoolAccDisplay";


function App() {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      {/* Default route redirects to /login */}
      <Route path="/" element={<Navigate to="/login" replace />} />

      {/* Login Page */}
      <Route path="/login" element={<Login />} />

      {/* Home Layout with nested routes */}
      <Route element={<Home />}>
        {/* Section Dashboard */}
        <Route path="/sections" element={<Dashboard />} />

        {/* Section and Focal routes */}
        <Route path="/sections/:sectionId" element={<SectionPage />} />
        <Route path="/sections/:sectionId/focals/:focalId" element={<FocalPage />} />
        <Route path="/sections/:sectionId/focals/:focalId/documents/:taskId" element={<TaskDetailPage />} />

        {/* Registered School routes */}
        <Route path="/registered-schools" element={<RegisteredSchools />} />
        <Route path="/registered-schools/:schoolSlug" element={<SchoolAccDisplay />} />


        <Route path="/account-control" element={<AccountControl />} />
      </Route>
    </Routes>
  );
}

export default App;
