import React from "react";
import AdminNav from "../components/AdminNav";

import AdditionalCostOpportunitiesData from "../component/AdditionalCostOpportunitiesData";

const ExtraCostOpportunities = () => {
  return (
    <div className="w-[100%] h-[100vh] overflow-auto flex">
      <AdminNav />
      <div className="h-[100vh] overflow-auto flex-1">
        <AdditionalCostOpportunitiesData />
      </div>
    </div>
  );
};

export default ExtraCostOpportunities;
