import React from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Todo from "./pages/Todo/Todo";
import ManageAccount from "./pages/ManageAccount/ManageAccount";
import SGOD from "./pages/SGOD/SGOD";
import Dashboard from "./pages/Dashboard/Dashboard";

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
        <Route path="/home" element={<Dashboard />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/SGOD" element={<SGOD />} />
        <Route path="/manage-account" element={<ManageAccount />} />
      </Route>
    </Routes>
  );
}

export default App;
