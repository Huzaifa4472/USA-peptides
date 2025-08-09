// routes/AdminRoute.jsx
import React from "react";
import { Route } from "react-router-dom";
import Layout from "../admin/Layout";
import DashboardComponent from "../admin/components/Dashboard/DashboardComponent";
import AddProduct from "../admin/components/Product/AddProduct";

const adminRoutes = [
  <Route key="layout" element={<Layout />}>
    <Route path="dashboard" element={<DashboardComponent />} />
    <Route path="products/add" element={<AddProduct />} />
  </Route>,
];

export default adminRoutes;
