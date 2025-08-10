// routes/AdminRoute.jsx
import React from "react";
import { Route } from "react-router-dom";
import Layout from "../admin/Layout";
import DashboardComponent from "../admin/components/Dashboard/DashboardComponent";
import AddProduct from "../admin/components/Product/AddProduct";
import ProductList from "../admin/components/Product/ProductList";

const adminRoutes = [
  <Route key="layout" element={<Layout />}>
    <Route path="dashboard" element={<DashboardComponent />} />
    <Route path="products/add" element={<AddProduct />} />
    <Route path="productsList" element={<ProductList />} />
  </Route>,
];

export default adminRoutes;
