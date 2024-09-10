import React, { useEffect, useState } from "react";
import RightNav from "./components/RightNav";
import { useGetUserQuarter1 } from "../api/MyQuarter1Api";
import { useGetUserIncome } from "../api/MyIncomeStatementApi";
import { ResponsiveBar } from "@nivo/bar";

const UserIncomeComparison = () => {
  const [incomeStatement, setIncomeStatement] = useState();

  const { getUserIncome } = useGetUserIncome();
  useEffect(() => {
    const loadData = async function () {
      const userIncome = await getUserIncome();

      if (userIncome) {
        setIncomeStatement(userIncome.income);
        console.log("Check", userIncome.income);
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
        id: "Opportunity Income",
        "Income from opportunities":
          incomeStatement[0]["Income"]["Income from opportunities"],
      },
      {
        id: "Sales from Home",
        "Sales from Home": incomeStatement[0]["Income"]["Sales from Home"],
      },
      {
        id: "Additional Income",
        "Additional Income": incomeStatement[0]["Income"]["Additional income"],
      },
      {
        id: "Income from activities",
        "Income from activities":
          incomeStatement[0]["Income"]["Income from activities"],
      },

      {
        id: "Total Income",
        // "Total Income": incomeStatement[0].Income["Total Income"],
        "Total Income":
          incomeStatement[0]["Income"]["Income from opportunities"] +
          incomeStatement[0]["Income"]["Sales from Home"] +
          incomeStatement[0]["Income"]["Additional income"] +
          incomeStatement[0]["Income"]["Income from activities"],
      },
    ];
  }

  let quarter2Graph;
  if (incomeStatement && incomeStatement[1]) {
    // console.log(incomeStatement);
    quarter2Graph = [
      {
        id: "Opportunity Income",
        "Income from opportunities":
          incomeStatement[1]["Income"]["Income from opportunities"],
      },
      {
        id: "Sales from Home",
        "Sales from Home": incomeStatement[1]["Income"]["Sales from Home"],
      },
      {
        id: "Additional Income",
        "Additional Income": incomeStatement[1]["Income"]["Additional income"],
      },
      {
        id: "Income from activities",
        "Income from activities":
          incomeStatement[1]["Income"]["Income from activities"],
      },

      {
        id: "Total Income",
        // "Total Income": incomeStatement[1].Income["Total Income"],
        "Total Income":
          incomeStatement[1]["Income"]["Income from opportunities"] +
          incomeStatement[1]["Income"]["Sales from Home"] +
          incomeStatement[1]["Income"]["Additional income"] +
          incomeStatement[1]["Income"]["Income from activities"],
      },
    ];
  }

  let quarter3Graph;
  if (incomeStatement && incomeStatement[2]) {
    // console.log(incomeStatement);
    quarter3Graph = [
      {
        id: "Opportunity Income",
        "Income from opportunities":
          incomeStatement[2]["Income"]["Income from opportunities"],
      },
      {
        id: "Sales from Home",
        "Sales from Home": incomeStatement[2]["Income"]["Sales from Home"],
      },
      {
        id: "Additional Income",
        "Additional Income": incomeStatement[2]["Income"]["Additional income"],
      },
      {
        id: "Income from activities",
        "Income from activities":
          incomeStatement[2]["Income"]["Income from activities"],
      },

      {
        id: "Total Income",
        // "Total Income": incomeStatement[1].Income["Total Income"],
        "Total Income":
          incomeStatement[2]["Income"]["Income from opportunities"] +
          incomeStatement[2]["Income"]["Sales from Home"] +
          incomeStatement[2]["Income"]["Additional income"] +
          incomeStatement[2]["Income"]["Income from activities"],
      },
    ];
  }

  let quarter4Graph;
  if (incomeStatement && incomeStatement[3]) {
    // console.log(incomeStatement);
    quarter4Graph = [
      {
        id: "Opportunity Income",
        "Income from opportunities":
          incomeStatement[3]["Income"]["Income from opportunities"],
      },
      {
        id: "Sales from Home",
        "Sales from Home": incomeStatement[3]["Income"]["Sales from Home"],
      },
      {
        id: "Additional Income",
        "Additional Income": incomeStatement[3]["Income"]["Additional income"],
      },
      {
        id: "Income from activities",
        "Income from activities":
          incomeStatement[3]["Income"]["Income from activities"],
      },

      {
        id: "Total Income",
        // "Total Income": incomeStatement[1].Income["Total Income"],
        "Total Income":
          incomeStatement[3]["Income"]["Income from opportunities"] +
          incomeStatement[3]["Income"]["Sales from Home"] +
          incomeStatement[3]["Income"]["Additional income"] +
          incomeStatement[3]["Income"]["Income from activities"],
      },
    ];
  }

  console.log(quarter1Graph);
  const colorsPattern = ["#FF6F61", "#FFD966", "#6AB04C", "#4A69BD", "#9C88FF"];
  return (
    <div className="w-[100%] h-[100vh] overflow-auto flex">
      <RightNav />
      <div className="h-[100vh] overflow-auto flex-1">
        <div className="flex-1 min-h-[100vh] bg-[#FBB748] md:py-4 py-[3rem]">
          {!quarter1Graph && (
            <div className="w-[95%] md:w-[85%] mx-auto mb-3 min-h-[200px] bg-[#ffffff31] flex justify-center items-center">
              <p className="text-center text-[1.4rem]">
                Quarter1 Income goes here when you fill it...
              </p>
            </div>
          )}
          {quarter1Graph && (
            <>
              <h1 className="mx-auto w-[95%] md:w-[85%] bg-white px-2 py-2 rounded font-bold text-center text-[1.4rem]">
                Quarter 1 Income
              </h1>

              <div className="w-[100%] h-[50vh]">
                <ResponsiveBar
                  data={quarter1Graph}
                  keys={[
                    "Income from opportunities",
                    "Sales from Home",
                    "Additional Income",
                    "Income from activities",

                    "Total Income",
                  ]}
                  indexBy="id"
                  margin={{ top: 50, right: 210, bottom: 50, left: 60 }}
                  padding={0.3}
                  valueScale={{ type: "linear" }}
                  indexScale={{ type: "band" }}
                  axisBottom={{
                    tickSize: 0,
                    tickPadding: 0,
                    tickRotation: 0,
                    tickValues: [],

                    legendOffset: 36,
                    legendPosition: "middle",
                    tickTextStyle: {
                      fontSize: 14, // Increase the font size
                      fontWeight: "bold", // Make the text bold
                    },
                  }}
                  axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    format: (value) => `£${value}`,
                    legendOffset: -40,
                    legendPosition: "middle",
                  }}
                  // colors={{ scheme: "nivo" }}
                  colors={({ index }) =>
                    colorsPattern[index % colorsPattern.length]
                  }
                  legends={[
                    {
                      anchor: "bottom-right",
                      direction: "column",
                      justify: false,
                      translateX: 120,
                      translateY: 0,
                      itemsSpacing: 2,
                      itemWidth: 100,
                      itemHeight: 20,
                      itemDirection: "left-to-right",
                      itemOpacity: 0.85,
                      symbolSize: 20,
                      effects: [
                        {
                          on: "hover",
                          style: {
                            itemOpacity: 1,
                          },
                        },
                      ],
                      data: [
                        {
                          id: "Income from opportunities",
                          label: "Income from opportunities",
                          color: colorsPattern[0],
                        },
                        {
                          id: "Sales from home",
                          label: "Sales from home",
                          color: colorsPattern[1],
                        },
                        {
                          id: "Additional Income",
                          label: "Additional Income",
                          color: colorsPattern[2],
                        },
                        {
                          id: "Income from activities",
                          label: "Income from activities",
                          color: colorsPattern[3],
                        },
                        {
                          id: "Total Income",
                          label: "Total Income",
                          color: colorsPattern[4],
                        },
                      ],
                    },
                  ]}
                  theme={{
                    axis: {
                      ticks: {
                        text: {
                          fontSize: 14, // Increase the font size
                          fontWeight: "bold", // Make the text bold
                        },
                      },
                    },
                  }}
                />
              </div>
            </>
          )}

          {!quarter2Graph && (
            <div className="w-[95%] md:w-[85%] mx-auto mb-3 min-h-[200px] bg-[#ffffff31] flex justify-center items-center">
              <p className="text-center text-[1.4rem]">
                Quarter2 Income goes here when you fill it...
              </p>
            </div>
          )}
          {quarter2Graph && (
            <>
              <h1 className="mx-auto w-[95%] md:w-[85%] bg-white px-2 py-2 rounded font-bold text-center text-[1.4rem]">
                Quarter 2 Income
              </h1>
              <div className="w-[100%] h-[50vh]">
                <ResponsiveBar
                  data={quarter2Graph}
                  keys={[
                    "Income from opportunities",
                    "Sales from Home",
                    "Additional Income",
                    "Income from activities",

                    "Total Income",
                  ]}
                  indexBy="id"
                  margin={{ top: 50, right: 210, bottom: 50, left: 60 }}
                  padding={0.3}
                  valueScale={{ type: "linear" }}
                  indexScale={{ type: "band" }}
                  axisBottom={{
                    tickSize: 0,
                    tickPadding: 0,
                    tickRotation: 0,
                    tickValues: [],
                    legendOffset: 36,
                    legendPosition: "middle",
                  }}
                  axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    format: (value) => `£${value}`,
                    legendOffset: -40,
                    legendPosition: "middle",
                  }}
                  // colors={{ scheme: "nivo" }}
                  colors={({ index }) =>
                    colorsPattern[index % colorsPattern.length]
                  }
                  legends={[
                    {
                      anchor: "bottom-right",
                      direction: "column",
                      justify: false,
                      translateX: 120,
                      translateY: 0,
                      itemsSpacing: 2,
                      itemWidth: 100,
                      itemHeight: 20,
                      itemDirection: "left-to-right",
                      itemOpacity: 0.85,
                      symbolSize: 20,
                      effects: [
                        {
                          on: "hover",
                          style: {
                            itemOpacity: 1,
                          },
                        },
                      ],
                      data: [
                        {
                          id: "Income from opportunities",
                          label: "Income from opportunities",
                          color: colorsPattern[0],
                        },
                        {
                          id: "Sales from home",
                          label: "Sales from home",
                          color: colorsPattern[1],
                        },
                        {
                          id: "Additional Income",
                          label: "Additional Income",
                          color: colorsPattern[2],
                        },
                        {
                          id: "Income from activities",
                          label: "Income from activities",
                          color: colorsPattern[3],
                        },
                        {
                          id: "Total Income",
                          label: "Total Income",
                          color: colorsPattern[4],
                        },
                      ],
                    },
                  ]}
                  theme={{
                    axis: {
                      ticks: {
                        text: {
                          fontSize: 14, // Increase the font size
                          fontWeight: "bold", // Make the text bold
                        },
                      },
                    },
                  }}
                />
              </div>
            </>
          )}

          {!quarter3Graph && (
            <div className="w-[95%] md:w-[85%] mx-auto mb-3 min-h-[200px] bg-[#ffffff31] flex justify-center items-center">
              <p className="text-center text-[1.4rem]">
                Quarter3 Income goes here when you fill it...
              </p>
            </div>
          )}
          {quarter3Graph && (
            <>
              <h1 className="mx-auto w-[95%] md:w-[85%] bg-white px-2 py-2 rounded font-bold text-center text-[1.4rem]">
                Quarter 3 Income
              </h1>
              <div className="w-[100%] h-[50vh]">
                <ResponsiveBar
                  data={quarter3Graph}
                  keys={[
                    "Income from opportunities",
                    "Sales from Home",
                    "Additional Income",
                    "Income from activities",

                    "Total Income",
                  ]}
                  indexBy="id"
                  margin={{ top: 50, right: 210, bottom: 50, left: 60 }}
                  padding={0.3}
                  valueScale={{ type: "linear" }}
                  indexScale={{ type: "band" }}
                  axisBottom={{
                    tickSize: 0,
                    tickPadding: 0,
                    tickRotation: 0,
                    tickValues: [],

                    legendOffset: 36,
                    legendPosition: "middle",
                  }}
                  axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    format: (value) => `£${value}`,
                    legendOffset: -40,
                    legendPosition: "middle",
                  }}
                  // colors={{ scheme: "nivo" }}
                  colors={({ index }) =>
                    colorsPattern[index % colorsPattern.length]
                  }
                  legends={[
                    {
                      anchor: "bottom-right",
                      direction: "column",
                      justify: false,
                      translateX: 120,
                      translateY: 0,
                      itemsSpacing: 2,
                      itemWidth: 100,
                      itemHeight: 20,
                      itemDirection: "left-to-right",
                      itemOpacity: 0.85,
                      symbolSize: 20,
                      effects: [
                        {
                          on: "hover",
                          style: {
                            itemOpacity: 1,
                          },
                        },
                      ],
                      data: [
                        {
                          id: "Income from opportunities",
                          label: "Income from opportunities",
                          color: colorsPattern[0],
                        },
                        {
                          id: "Sales from home",
                          label: "Sales from home",
                          color: colorsPattern[1],
                        },
                        {
                          id: "Additional Income",
                          label: "Additional Income",
                          color: colorsPattern[2],
                        },
                        {
                          id: "Income from activities",
                          label: "Income from activities",
                          color: colorsPattern[3],
                        },
                        {
                          id: "Total Income",
                          label: "Total Income",
                          color: colorsPattern[4],
                        },
                      ],
                    },
                  ]}
                  theme={{
                    axis: {
                      ticks: {
                        text: {
                          fontSize: 14, // Increase the font size
                          fontWeight: "bold", // Make the text bold
                        },
                      },
                    },
                  }}
                />
              </div>
            </>
          )}

          {!quarter4Graph && (
            <div className="w-[95%] md:w-[85%] mx-auto mb-3 min-h-[200px] bg-[#ffffff31] flex justify-center items-center">
              <p className="text-center text-[1.4rem]">
                Quarter4 Income goes here when you fill it...
              </p>
            </div>
          )}
          {quarter4Graph && (
            <>
              <h1 className="mx-auto w-[95%] md:w-[85%] bg-white px-2 py-2 rounded font-bold text-center text-[1.4rem]">
                Quarter 4 Income
              </h1>
              <div className="w-[100%] h-[50vh]">
                <ResponsiveBar
                  data={quarter4Graph}
                  keys={[
                    "Income from opportunities",
                    "Sales from Home",
                    "Additional Income",
                    "Income from activities",

                    "Total Income",
                  ]}
                  indexBy="id"
                  margin={{ top: 50, right: 210, bottom: 50, left: 60 }}
                  padding={0.3}
                  valueScale={{ type: "linear" }}
                  indexScale={{ type: "band" }}
                  axisBottom={{
                    tickSize: 0,
                    tickPadding: 0,
                    tickRotation: 0,
                    tickValues: [],

                    legendOffset: 36,
                    legendPosition: "middle",
                  }}
                  axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    format: (value) => `£${value}`,
                    legendOffset: -40,
                    legendPosition: "middle",
                  }}
                  // colors={{ scheme: "nivo" }}
                  colors={({ index }) =>
                    colorsPattern[index % colorsPattern.length]
                  }
                  legends={[
                    {
                      anchor: "bottom-right",
                      direction: "column",
                      justify: false,
                      translateX: 120,
                      translateY: 0,
                      itemsSpacing: 2,
                      itemWidth: 100,
                      itemHeight: 20,
                      itemDirection: "left-to-right",
                      itemOpacity: 0.85,
                      symbolSize: 20,
                      effects: [
                        {
                          on: "hover",
                          style: {
                            itemOpacity: 1,
                          },
                        },
                      ],
                      data: [
                        {
                          id: "Income from opportunities",
                          label: "Income from opportunities",
                          color: colorsPattern[0],
                        },
                        {
                          id: "Sales from home",
                          label: "Sales from home",
                          color: colorsPattern[1],
                        },
                        {
                          id: "Additional Income",
                          label: "Additional Income",
                          color: colorsPattern[2],
                        },
                        {
                          id: "Income from activities",
                          label: "Income from activities",
                          color: colorsPattern[3],
                        },
                        {
                          id: "Total Income",
                          label: "Total Income",
                          color: colorsPattern[4],
                        },
                      ],
                    },
                  ]}
                  theme={{
                    axis: {
                      ticks: {
                        text: {
                          fontSize: 14, // Increase the font size
                          fontWeight: "bold", // Make the text bold
                        },
                      },
                    },
                  }}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserIncomeComparison;
