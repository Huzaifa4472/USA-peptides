import React, { useState } from "react";
import Header from "../components/Header.jsx";
import Sidebar from "../components/Sidebar.jsx";
const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex gap-2  p-2 ">
      <div
        className={`transition-all duration-300 ${
          collapsed ? "w-20" : "w-1/5"
        } rounded-lg shadow-md`}
      >
        <Sidebar collapsed={collapsed} />
      </div>
      <div className="w-4/5 rounded-md shadow-lg">
        <Header collapsed={collapsed} setCollapsed={setCollapsed} />
        <div className="p-5 text-3xl font-bold text-gray-700">Dashboard</div>
      </div>
    </div>
  );
};
export default Dashboard;
