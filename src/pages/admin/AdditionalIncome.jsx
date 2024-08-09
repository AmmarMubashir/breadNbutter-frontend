import React from "react";
import AdminNav from "../components/AdminNav";

import AdditionalIncomeData from "../component/AdditionalIncomeData";

const AdditionalIncome = () => {
  return (
    <div className="w-[100%] h-[100vh] overflow-auto flex">
      <AdminNav />
      <div className="h-[100vh] overflow-auto flex-1">
        <AdditionalIncomeData />
      </div>
    </div>
  );
};

export default AdditionalIncome;
