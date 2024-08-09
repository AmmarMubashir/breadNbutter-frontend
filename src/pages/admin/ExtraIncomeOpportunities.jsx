import React from "react";
import AdminNav from "../components/AdminNav";

import AdditionalIncomeOpportunitiesData from "../component/AdditionalIncomeOpportunitiesData";

const ExtraIncomeOpportunities = () => {
  return (
    <div className="w-[100%] h-[100vh] overflow-auto flex">
      <AdminNav />
      <div className="h-[100vh] overflow-auto flex-1">
        <AdditionalIncomeOpportunitiesData />
      </div>
    </div>
  );
};

export default ExtraIncomeOpportunities;
