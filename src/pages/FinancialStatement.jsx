import React, { useEffect, useState } from "react";
import FinancialStatementTable from "./FinancialStatementTable";
import { useGetIndividualStartup } from "../api/MyStartupApi";
import { useGetUserQuarter1 } from "../api/MyQuarter1Api";

const FinancialStatement = () => {
  const [startup, setStartup] = useState();
  const [quarter1, setQuarter1] = useState();
  const [quarter1Info, setQuarter1Info] = useState();
  const { getIndividualStartup } = useGetIndividualStartup();
  const { UserQuarter1 } = useGetUserQuarter1();

  useEffect(() => {
    const loadData = async function () {
      const startupD = await getIndividualStartup();
      const quarter1D = await UserQuarter1();

      setStartup(startupD.data);
      setQuarter1(quarter1D);
    };

    loadData();
    // console.log(startupInfo);
  }, []);
  if (startup) {
    // console.log("QUARTER 1", startup);
  }
  return (
    <div className="bg-[#fbb748] min-h-[100vh] w-[100%]">
      <div>
        <FinancialStatementTable
          startup={startup}
          quarter1={quarter1}
          startupData={startup}
          quarter1Data={quarter1Info}
        />
      </div>
    </div>
  );
};

export default FinancialStatement;
