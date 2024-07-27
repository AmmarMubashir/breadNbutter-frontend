import React, { useEffect, useState } from "react";
import RightNav from "./components/RightNav";
import { useGetUserQuarter2 } from "../api/MyQuarter2Api";
import { useGetUserIncome } from "../api/MyIncomeStatementApi";
import { ResponsiveBar } from "@nivo/bar";

const userCostComparison = () => {
  const [incomeStatement, setIncomeStatement] = useState();

  const { getUserIncome } = useGetUserIncome();
  useEffect(() => {
    const loadData = async function () {
      const userIncome = await getUserIncome();

      if (userIncome) {
        setIncomeStatement(userIncome.income);
      }
    };
    loadData();
  }, []);

  //   let quarter1={

  //   }
  let quarter2Graph;
  if (incomeStatement) {
    console.log(incomeStatement);
    quarter2Graph = [
      {
        id: "Opportunity Cost",
        "Opportunity Cost":
          incomeStatement[0]["Expenses And Costs"]["Opportunity Costs"] +
          incomeStatement[0]["Expenses And Costs"]["Opportunity Costs"],
      },
      {
        id: "Purchases",
        Purchases:
          0.23 * incomeStatement[0]["Revenues"]["Opportunities"] +
          incomeStatement[0]["Revenues"]["Sales From Home"] +
          incomeStatement[0]["Revenues"]["Additional Income"],
      },
      {
        id: "Total Expenditure",
        "Total Expenditure":
          incomeStatement[0]["Expenses And Costs"]["Total Cost And Expenses"],
      },
    ];
  }

  let quarter3Graph;
  if (incomeStatement && incomeStatement[1]) {
    // console.log(incomeStatement);
    quarter3Graph = [
      {
        id: "Opportunity Cost",
        "Opportunity Cost":
          incomeStatement[1]["Expenses And Costs"]["Opportunity Costs"] +
          incomeStatement[1]["Expenses And Costs"]["Opportunity Costs"],
      },
      {
        id: "Purchases",
        Purchases:
          0.23 * incomeStatement[1]["Revenues"]["Opportunities"] +
          incomeStatement[1]["Revenues"]["Sales From Home"] +
          incomeStatement[1]["Revenues"]["Additional Income"],
      },
      {
        id: "Total Expenditure",
        "Total Expenditure":
          incomeStatement[1]["Expenses And Costs"]["Total Cost And Expenses"],
      },
    ];
  }

  console.log(quarter2Graph);
  return (
    <div className="w-[100%] h-[100vh] overflow-auto flex">
      <RightNav />
      <div className="h-[100vh] overflow-auto flex-1">
        <div className="flex-1 min-h-[100vh] bg-[#FBB748] md:py-4 py-[3rem]">
          {!quarter2Graph && (
            <div className="w-[95%] md:w-[85%] mx-auto mb-3 min-h-[200px] bg-[#ffffff31] flex justify-center items-center">
              <p className="text-center text-[1.4rem]">
                Quarter2 Comparison goes here when you fill it...
              </p>
            </div>
          )}
          {quarter2Graph && (
            <>
              <h1 className="mx-auto w-[95%] md:w-[85%] bg-white px-2 py-2 rounded font-bold text-center text-[1.4rem]">
                Quarter 2
              </h1>

              <div className="w-[100%] h-[50vh]">
                <ResponsiveBar
                  data={quarter2Graph}
                  keys={["Opportunity Cost", "Purchases", "Total Expenditure"]}
                  indexBy="id"
                  margin={{ top: 50, right: 30, bottom: 50, left: 60 }}
                  padding={0.3}
                  valueScale={{ type: "linear" }}
                  indexScale={{ type: "band" }}
                  axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: "Product",
                    legendOffset: 36,
                    legendPosition: "middle",
                  }}
                  axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: "Amount",
                    legendOffset: -40,
                    legendPosition: "middle",
                  }}
                  colors={{ scheme: "nivo" }}
                  tooltip={({ id, value }) => (
                    <div>
                      <strong>{id}</strong>
                      <br />
                      {value}
                    </div>
                  )}
                />
              </div>
            </>
          )}

          {!quarter3Graph && (
            <div className="w-[95%] md:w-[85%] mx-auto mb-3 min-h-[200px] bg-[#ffffff31] flex justify-center items-center">
              <p className="text-center text-[1.4rem]">
                Quarter3 Comparison goes here when you fill it...
              </p>
            </div>
          )}
          {quarter3Graph && (
            <>
              <h1 className="mx-auto w-[95%] md:w-[85%] bg-white px-2 py-2 rounded font-bold text-center text-[1.4rem]">
                Quarter 3
              </h1>
              <div className="w-[100%] h-[50vh]">
                <ResponsiveBar
                  data={quarter3Graph}
                  keys={["Opportunity Cost", "Purchases", "Total Expenditure"]}
                  indexBy="id"
                  margin={{ top: 50, right: 30, bottom: 50, left: 60 }}
                  padding={0.3}
                  valueScale={{ type: "linear" }}
                  indexScale={{ type: "band" }}
                  axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: "Product",
                    legendOffset: 36,
                    legendPosition: "middle",
                  }}
                  axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: "Amount",
                    legendOffset: -40,
                    legendPosition: "middle",
                  }}
                  colors={{ scheme: "nivo" }}
                  tooltip={({ id, value }) => (
                    <div>
                      <strong>{id}</strong>
                      <br />
                      {value}
                    </div>
                  )}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default userCostComparison;
