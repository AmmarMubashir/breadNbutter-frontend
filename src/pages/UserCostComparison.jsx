import React, { useEffect, useState } from "react";
import RightNav from "./components/RightNav";
import { useGetUserQuarter1 } from "../api/MyQuarter1Api";
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
  let quarter1Graph;
  if (incomeStatement) {
    console.log(incomeStatement);
    quarter1Graph = [
      {
        id: "Expenses from opportunities",
        "Expenses from opportunities":
          incomeStatement[0]["Expenditure"]["Expenses from opportunities"] +
          incomeStatement[0]["Expenditure"]["Expenses from other sources"],
      },
      {
        id: "Purchases",
        Purchases: incomeStatement[0]["Expenditure"]["Purchases"],
        // 0.23 * incomeStatement[0]["Revenues"]["Opportunities"] +
        // incomeStatement[0]["Revenues"]["Sales From Home"] +
        // incomeStatement[0]["Revenues"]["Additional Income"],
      },
      {
        id: "Additional cost",
        "Additional cost": incomeStatement[0]["Expenditure"]["Additional cost"],
      },
      {
        id: "Extra cost from opportunities",
        "Extra cost from opportunities":
          incomeStatement[0]["Expenditure"]["Extra cost from opportunities"],
      },

      {
        id: "Total Expenditure",
        "Total Expenditure":
          incomeStatement[0]["Expenditure"]["Expenses from opportunities"] +
          incomeStatement[0]["Expenditure"]["Expenses from other sources"] +
          incomeStatement[0]["Expenditure"]["Purchases"] +
          incomeStatement[0]["Expenditure"]["Additional cost"] +
          incomeStatement[0]["Expenditure"]["Extra cost from opportunities"],
        // "Total Expenditure":
        //   incomeStatement[0]["Expenditure"]["Total Expenditure"],
      },
    ];
  }

  let quarter2Graph;
  if (incomeStatement && incomeStatement[1]) {
    // console.log(incomeStatement);
    quarter2Graph = [
      {
        id: "Expenses from opportunities",
        "Expenses from opportunities":
          incomeStatement[1]["Expenditure"]["Expenses from opportunities"] +
          incomeStatement[1]["Expenditure"]["Expenses from other sources"],
      },
      {
        id: "Purchases",
        Purchases: incomeStatement[1]["Expenditure"]["Purchases"],
        // 0.23 * incomeStatement[1]["Revenues"]["Opportunities"] +
        // incomeStatement[1]["Revenues"]["Sales From Home"] +
        // incomeStatement[1]["Revenues"]["Additional Income"],
      },
      {
        id: "Additional cost",
        "Additional cost": incomeStatement[1]["Expenditure"]["Additional cost"],
      },
      {
        id: "Extra cost from opportunities",
        "Extra cost from opportunities":
          incomeStatement[1]["Expenditure"]["Extra cost from opportunities"],
      },
      {
        id: "Total Expenditure",
        "Total Expenditure":
          incomeStatement[1]["Expenditure"]["Expenses from opportunities"] +
          incomeStatement[1]["Expenditure"]["Expenses from other sources"] +
          incomeStatement[1]["Expenditure"]["Purchases"] +
          incomeStatement[1]["Expenditure"]["Additional cost"] +
          incomeStatement[1]["Expenditure"]["Extra cost from opportunities"],
        // "Total Expenditure":
        //   incomeStatement[1]["Expenditure"]["Total Expenditure"],
      },
    ];
  }

  let quarter3Graph;
  if (incomeStatement && incomeStatement[2]) {
    // console.log(incomeStatement);
    quarter3Graph = [
      {
        id: "Expenses from opportunities",
        "Expenses from opportunities":
          incomeStatement[2]["Expenditure"]["Expenses from opportunities"] +
          incomeStatement[2]["Expenditure"]["Expenses from other sources"],
      },
      {
        id: "Purchases",
        Purchases: incomeStatement[2]["Expenditure"]["Purchases"],
        // 0.23 * incomeStatement[2]["Revenues"]["Opportunities"] +
        // incomeStatement[2]["Revenues"]["Sales From Home"] +
        // incomeStatement[2]["Revenues"]["Additional Income"],
      },
      {
        id: "Additional cost",
        "Additional cost": incomeStatement[2]["Expenditure"]["Additional cost"],
      },
      {
        id: "Extra cost from opportunities",
        "Extra cost from opportunities":
          incomeStatement[2]["Expenditure"]["Extra cost from opportunities"],
      },
      {
        id: "Total Expenditure",
        "Total Expenditure":
          incomeStatement[2]["Expenditure"]["Expenses from opportunities"] +
          incomeStatement[2]["Expenditure"]["Expenses from other sources"] +
          incomeStatement[2]["Expenditure"]["Purchases"] +
          incomeStatement[2]["Expenditure"]["Additional cost"] +
          incomeStatement[2]["Expenditure"]["Extra cost from opportunities"],
        // "Total Expenditure":
        //   incomeStatement[2]["Expenditure"]["Total Expenditure"],
      },
    ];
  }

  let quarter4Graph;
  if (incomeStatement && incomeStatement[3]) {
    // console.log(incomeStatement);
    quarter4Graph = [
      {
        id: "Expenses from opportunities",
        "Expenses from opportunities":
          incomeStatement[3]["Expenditure"]["Expenses from opportunities"] +
          incomeStatement[3]["Expenditure"]["Expenses from other sources"],
      },
      {
        id: "Purchases",
        Purchases: incomeStatement[3]["Expenditure"]["Purchases"],
        // 0.33 * incomeStatement[3]["Revenues"]["Opportunities"] +
        // incomeStatement[3]["Revenues"]["Sales From Home"] +
        // incomeStatement[3]["Revenues"]["Additional Income"],
      },
      {
        id: "Additional cost",
        "Additional cost": incomeStatement[3]["Expenditure"]["Additional cost"],
      },
      {
        id: "Extra cost from opportunities",
        "Extra cost from opportunities":
          incomeStatement[3]["Expenditure"]["Extra cost from opportunities"],
      },
      {
        id: "Total Expenditure",
        "Total Expenditure":
          incomeStatement[3]["Expenditure"]["Expenses from opportunities"] +
          incomeStatement[3]["Expenditure"]["Expenses from other sources"] +
          incomeStatement[3]["Expenditure"]["Purchases"] +
          incomeStatement[3]["Expenditure"]["Additional cost"] +
          incomeStatement[3]["Expenditure"]["Extra cost from opportunities"],
        // "Total Expenditure":
        //   incomeStatement[3]["Expenditure"]["Total Expenditure"],
      },
    ];
  }

  console.log(quarter1Graph);
  const colorsPattern = ["#FF6F61", "#FFD966", "#6AB04C", "#E8C1A0", "#9C88FF"];
  return (
    <div className="w-[100%] h-[100vh] overflow-auto flex">
      <RightNav />
      <div className="h-[100vh] overflow-auto flex-1">
        <div className="flex-1 min-h-[100vh] bg-[#FBB748] md:py-4 py-[3rem]">
          {!quarter1Graph && (
            <div className="w-[95%] md:w-[85%] mx-auto mb-3 min-h-[200px] bg-[#ffffff31] flex justify-center items-center">
              <p className="text-center text-[1.4rem]">
                Quarter1 Expenditure goes here when you fill it...
              </p>
            </div>
          )}
          {quarter1Graph && (
            <>
              <h1 className="mx-auto w-[95%] md:w-[85%] bg-white px-2 py-2 rounded font-bold text-center text-[1.4rem]">
                Quarter 1 Expenditure
              </h1>

              <div className="w-[100%] h-[50vh]">
                <ResponsiveBar
                  data={quarter1Graph}
                  keys={[
                    "Expenses from opportunities",
                    "Purchases",
                    "Additional cost",
                    "Extra cost from opportunities",
                    "Total Expenditure",
                  ]}
                  indexBy="id"
                  margin={{ top: 50, right: 30, bottom: 50, left: 60 }}
                  padding={0.3}
                  valueScale={{ type: "linear" }}
                  indexScale={{ type: "band" }}
                  axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: "Cost",
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
                  colors={({ index }) =>
                    colorsPattern[index % colorsPattern.length]
                  }
                  // tooltip={({ id, value }) => (
                  //   <div>
                  //     <strong>{id}</strong>
                  //     <br />
                  //     {value}
                  //   </div>
                  // )}
                />
              </div>
            </>
          )}

          {!quarter2Graph && (
            <div className="w-[95%] md:w-[85%] mx-auto mb-3 min-h-[200px] bg-[#ffffff31] flex justify-center items-center">
              <p className="text-center text-[1.4rem]">
                Quarter2 Expenditure goes here when you fill it...
              </p>
            </div>
          )}
          {quarter2Graph && (
            <>
              <h1 className="mx-auto w-[95%] md:w-[85%] bg-white px-2 py-2 rounded font-bold text-center text-[1.4rem]">
                Quarter 2 Expenditure
              </h1>
              <div className="w-[100%] h-[50vh]">
                <ResponsiveBar
                  data={quarter2Graph}
                  keys={[
                    "Expenses from opportunities",
                    "Purchases",
                    "Additional cost",
                    "Extra cost from opportunities",
                    "Total Expenditure",
                  ]}
                  indexBy="id"
                  margin={{ top: 50, right: 30, bottom: 50, left: 60 }}
                  padding={0.3}
                  valueScale={{ type: "linear" }}
                  indexScale={{ type: "band" }}
                  axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: "Cost",
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
                  // colors={{ scheme: "nivo" }}
                  colors={({ index }) =>
                    colorsPattern[index % colorsPattern.length]
                  }
                  // tooltip={({ id, value }) => (
                  //   <div>
                  //     <strong>{id}</strong>
                  //     <br />
                  //     {value}
                  //   </div>
                  // )}
                />
              </div>
            </>
          )}

          {!quarter3Graph && (
            <div className="w-[95%] md:w-[85%] mx-auto mb-3 min-h-[200px] bg-[#ffffff31] flex justify-center items-center">
              <p className="text-center text-[1.4rem]">
                Quarter3 Expenditure goes here when you fill it...
              </p>
            </div>
          )}
          {quarter3Graph && (
            <>
              <h1 className="mx-auto w-[95%] md:w-[85%] bg-white px-2 py-2 rounded font-bold text-center text-[1.4rem]">
                Quarter 3 Expenditure
              </h1>
              <div className="w-[100%] h-[50vh]">
                <ResponsiveBar
                  data={quarter3Graph}
                  keys={[
                    "Expenses from opportunities",
                    "Purchases",
                    "Additional cost",
                    "Extra cost from opportunities",
                    "Total Expenditure",
                  ]}
                  indexBy="id"
                  margin={{ top: 50, right: 30, bottom: 50, left: 60 }}
                  padding={0.3}
                  valueScale={{ type: "linear" }}
                  indexScale={{ type: "band" }}
                  axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: "Cost",
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
                  // colors={{ scheme: "nivo" }}
                  colors={({ index }) =>
                    colorsPattern[index % colorsPattern.length]
                  }
                  // tooltip={({ id, value }) => (
                  //   <div>
                  //     <strong>{id}</strong>
                  //     <br />
                  //     {value}
                  //   </div>
                  // )}
                />
              </div>
            </>
          )}

          {!quarter4Graph && (
            <div className="w-[95%] md:w-[85%] mx-auto mb-3 min-h-[200px] bg-[#ffffff31] flex justify-center items-center">
              <p className="text-center text-[1.4rem]">
                Quarter4 Expenditure goes here when you fill it...
              </p>
            </div>
          )}
          {quarter4Graph && (
            <>
              <h1 className="mx-auto w-[95%] md:w-[85%] bg-white px-2 py-2 rounded font-bold text-center text-[1.4rem]">
                Quarter 4 Expenditure
              </h1>
              <div className="w-[100%] h-[50vh]">
                <ResponsiveBar
                  data={quarter4Graph}
                  keys={[
                    "Expenses from opportunities",
                    "Purchases",
                    "Additional cost",
                    "Extra cost from opportunities",
                    "Total Expenditure",
                  ]}
                  indexBy="id"
                  margin={{ top: 50, right: 30, bottom: 50, left: 60 }}
                  padding={0.3}
                  valueScale={{ type: "linear" }}
                  indexScale={{ type: "band" }}
                  axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: "Cost",
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
                  // colors={{ scheme: "nivo" }}
                  colors={({ index }) =>
                    colorsPattern[index % colorsPattern.length]
                  }
                  // tooltip={({ id, value }) => (
                  //   <div>
                  //     <strong>{id}</strong>
                  //     <br />
                  //     {value}
                  //   </div>
                  // )}
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
