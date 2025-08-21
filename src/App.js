import React from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import RegisteredSchool from "./pages/RegisteredSchools/RegisteredSchools";
import AccountControl from "./pages/AccountControl/AccountControl";
import Dashboard from "./pages/Dashboard/Dashboard";

// Section imports
import SectionPage from "./pages/Sections/SectionPage";
import FocalPage from "./pages/Focals/FocalPage";


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

        {/* Other non-section routes */}
        <Route path="/registered-schools" element={<RegisteredSchool />} />
        <Route path="/account-control" element={<AccountControl />} />
      </Route>
    </Routes>
  );
}

export default App;
