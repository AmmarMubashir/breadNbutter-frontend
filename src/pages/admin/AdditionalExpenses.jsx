import React from "react";
import AdminNav from "../components/AdminNav";

import AdditionalCost from "../component/AdditionalCost";

const AdditionalExpenses = () => {
  return (
    <div className="w-[100%] h-[100vh] overflow-auto flex">
      <AdminNav />
      <div className="h-[100vh] overflow-auto flex-1">
        <AdditionalCost />
      </div>
    </div>
  );
};

export default AdditionalExpenses;
