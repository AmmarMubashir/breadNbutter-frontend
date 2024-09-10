import React from "react";
import AdminNav from "../components/AdminNav";
import RevenueChart from "../graphs/graphdata/RevenueChart";

const Revenue = () => {
  return (
    <div className="w-[100%] h-[100vh] overflow-auto flex">
      <AdminNav />
      <div className="h-[100vh] overflow-auto flex-1">
        <RevenueChart />
      </div>
    </div>
  );
};

export default Revenue;
