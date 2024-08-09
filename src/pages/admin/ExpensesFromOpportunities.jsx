import React from "react";
import AdminNav from "../components/AdminNav";

import ExpensesOpportunities from "../component/ExpensesOpportunities";

const ExpensesFromOpportunities = () => {
  return (
    <div className="w-[100%] h-[100vh] overflow-auto flex">
      <AdminNav />
      <div className="h-[100vh] overflow-auto flex-1">
        <ExpensesOpportunities />
      </div>
    </div>
  );
};

export default ExpensesFromOpportunities;
