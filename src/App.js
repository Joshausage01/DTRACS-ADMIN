import React from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import RegisteredSchool from "./pages/RegisteredSchools/RegisteredSchools";
import AccountControl from "./pages/AccountControl/AccountControl";
import Dashboard from "./pages/Dashboard/Dashboard";

// Section imports
import YouthFormationPage from "./pages/Sections/YouthFormationPage/YouthFormationPage";
import SocialAndNetworkingPage from "./pages/Sections/SocialAndNetworkingPage/SocialAndNetworking";
import EducationFacilitiesPage from "./pages/Sections/EducationFacilitiesPage/EducationFacilitiesPage";
import DisasterRiskPage from "./pages/Sections/DRRMPage/DRRMPage";
import SchoolHealthPage from "./pages/Sections/SchoolHealthPage/SchoolHealthPage";
import SchoolManagementPage from "./pages/Sections/SchoolManagementPage/SchoolManagementPage";
import PlanningResearchPage from "./pages/Sections/PlanningResearchPage/PlanningResearchPage";
import HumanResourcePage from "./pages/Sections/HumanResourcePage/HumanResourcePage";

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

        {/* Section routes all under /sections/... */}
        <Route path="/sections/school-management" element={<SchoolManagementPage />} />
        <Route path="/sections/planning-research" element={<PlanningResearchPage />} />
        <Route path="/sections/hr" element={<HumanResourcePage />} />
        <Route path="/sections/social-mobilization" element={<SocialAndNetworkingPage />} />
        <Route path="/sections/educ-facilities" element={<EducationFacilitiesPage />} />
        <Route path="/sections/disaster-risk" element={<DisasterRiskPage />} />
        <Route path="/sections/health" element={<SchoolHealthPage />} />
        <Route path="/sections/youth-formation" element={<YouthFormationPage />} />

        {/* Other non-section routes */}
        <Route path="/registered-schools" element={<RegisteredSchool />} />
        <Route path="/account-control" element={<AccountControl />} />
      </Route>
    </Routes>
  );
}

export default App;
