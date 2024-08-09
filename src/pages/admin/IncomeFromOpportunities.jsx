import React from "react";
import AdminNav from "../components/AdminNav";

import IncomeOpportunities from "../component/IncomeOpportunities";

const IncomeFromOpportunities = () => {
  return (
    <div className="w-[100%] h-[100vh] overflow-auto flex">
      <AdminNav />
      <div className="h-[100vh] overflow-auto flex-1">
        <IncomeOpportunities />
      </div>
    </div>
  );
};

export default IncomeFromOpportunities;
