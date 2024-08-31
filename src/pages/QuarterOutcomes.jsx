import React, { useEffect, useState } from "react";
import { useGetUserIncome } from "../api/MyIncomeStatementApi";
import RightNav from "./components/RightNav";
import { ResponsiveBar } from "@nivo/bar";

const QuarterOutcomes = () => {
  const [incomeStatement, setIncomeStatement] = useState();

  const { getUserIncome } = useGetUserIncome();
  useEffect(() => {
    const loadData = async function () {
      const userIncome = await getUserIncome();

      if (userIncome) {
        const newData = userIncome.income.map((item, index) => ({
          quarter: `quarter${index + 1}`,
          Outcomes:
            item.Income["Total Income"] - item.Expenditure["Total Expenditure"],
        }));

        console.log(newData);
        setIncomeStatement(newData);
      }
    };
    loadData();
  }, []);

  if (incomeStatement) {
    console.log("INCOME", incomeStatement);
  }
  const colorsPattern = ["#FF6F61", "#FFD966", "#6AB04C", "#E8C1A0", "#9C88FF"];
  return (
    <div className="w-[100%] h-[100vh] overflow-auto flex">
      <RightNav />
      <div className="h-[100vh] overflow-auto flex-1">
        <div className="flex-1 min-h-[100vh] bg-[#FBB748] md:py-4 py-[3rem]">
          {!incomeStatement && (
            <div className="w-[95%] md:w-[85%] mx-auto mb-3 min-h-[200px] bg-[#ffffff31] flex justify-center items-center">
              <p className="text-center text-[1.4rem]">
                Profit / Loss goes here when you fill quarters...
              </p>
            </div>
          )}

          {incomeStatement && (
            <>
              <h1 className="mx-auto w-[95%] md:w-[85%] bg-white px-2 py-2 rounded font-bold text-center text-[1.4rem]">
                Profit / Loss
              </h1>

              <div className="w-[100%] h-[70vh]">
                <ResponsiveBar
                  data={incomeStatement}
                  keys={["Outcomes"]}
                  indexBy="quarter"
                  margin={{ top: 50, right: 30, bottom: 50, left: 60 }}
                  padding={0.3}
                  valueScale={{ type: "linear" }}
                  minValue={
                    Math.min(...incomeStatement.map((item) => item.Outcomes)) -
                    1000
                  }
                  maxValue={
                    Math.max(...incomeStatement.map((item) => item.Outcomes)) +
                    1000
                  }
                  indexScale={{ type: "band" }}
                  axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: "Outcomes",
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
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuarterOutcomes;
