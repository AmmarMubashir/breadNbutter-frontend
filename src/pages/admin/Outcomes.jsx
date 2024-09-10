import React from "react";
import AdminNav from "../components/AdminNav";
import OutcomesData from "../graphs/graphdata/OutcomesData";

const Outcomes = () => {
  return (
    <div className="w-[100%] h-[100vh] overflow-auto flex">
      <AdminNav />
      <div className="h-[100vh] overflow-auto flex-1">
        {/* <RevenueChart /> */}
        <OutcomesData />
      </div>
    </div>
  );
};

export default Outcomes;
