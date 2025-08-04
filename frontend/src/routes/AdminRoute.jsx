// routes/AdminRoutes.jsx
import React from "react";
import { Route } from "react-router-dom";
import Dashboard from "../admin/pages/Dashboard";

const adminRoutes = [
  <Route key="dashboard" path="dashboard" element={<Dashboard />} />,
];

export default adminRoutes;
