import React, { useEffect, useState } from "react";
import RightNav from "./components/RightNav";
import { useGetUserIncome } from "../api/MyIncomeStatementApi";

const Cashflow = () => {
  const { getUserIncome } = useGetUserIncome();
  const [incomeStatementD, setIncomeStatementD] = useState();
  useEffect(() => {
    const fetchIncomeData = async function () {
      try {
        // income = await getIncome();
        const incomeD = await getUserIncome();

        if (incomeD) {
          setIncomeStatementD(incomeD.income);
        }

        // setIncomeStatement(income);
      } catch (error) {
        console.error("Error fetching Income data:", error);
      }
    };

    fetchIncomeData();
  }, []);
  let cashflow = [];
  if (incomeStatementD) {
    // console.log("NEWW", incomeStatementD);
    cashflow = [
      {
        "Cash at beginnining": 350,
        "Profit(Loss)":
          Math.floor(incomeStatementD[0].Income["Total Income"] / 3) -
          Math.floor(
            incomeStatementD[0]["Expenditure"]["Total Expenditure"] / 3
          ),
        "Cash at end of period":
          350 +
          Math.floor(incomeStatementD[0].Income["Total Income"] / 3) -
          Math.floor(
            incomeStatementD[0]["Expenditure"]["Total Expenditure"] / 3
          ),
      },
    ];

    cashflow = [
      ...cashflow,
      {
        "Cash at beginnining": cashflow[0]["Cash at end of period"],
        "Profit(Loss)":
          Math.floor(incomeStatementD[0].Income["Total Income"] / 3) -
          Math.floor(
            incomeStatementD[0]["Expenditure"]["Total Expenditure"] / 3
          ),
        "Cash at end of period":
          cashflow[0]["Cash at end of period"] +
          Math.floor(incomeStatementD[0].Income["Total Income"] / 3) -
          Math.floor(
            incomeStatementD[0]["Expenditure"]["Total Expenditure"] / 3
          ),
      },
    ];

    cashflow = [
      ...cashflow,
      {
        "Cash at beginnining": cashflow[1]["Cash at end of period"],
        "Profit(Loss)":
          incomeStatementD[0].Income["Total Income"] -
          Math.floor(incomeStatementD[0].Income["Total Income"] / 3) -
          Math.floor(incomeStatementD[0].Income["Total Income"] / 3) -
          (incomeStatementD[0]["Expenditure"]["Total Expenditure"] -
            Math.floor(
              incomeStatementD[0]["Expenditure"]["Total Expenditure"] / 3
            ) -
            Math.floor(
              incomeStatementD[0]["Expenditure"]["Total Expenditure"] / 3
            )),

        "Cash at end of period":
          cashflow[1]["Cash at end of period"] +
          incomeStatementD[0].Income["Total Income"] -
          Math.floor(incomeStatementD[0].Income["Total Income"] / 3) -
          Math.floor(incomeStatementD[0].Income["Total Income"] / 3) -
          (incomeStatementD[0]["Expenditure"]["Total Expenditure"] -
            Math.floor(
              incomeStatementD[0]["Expenditure"]["Total Expenditure"] / 3
            ) -
            Math.floor(
              incomeStatementD[0]["Expenditure"]["Total Expenditure"] / 3
            )),
      },
    ];

    if (incomeStatementD[1]) {
      cashflow = [
        ...cashflow,
        {
          "Cash at beginnining": cashflow[2]["Cash at end of period"],
          "Profit(Loss)":
            Math.floor(incomeStatementD[1].Income["Total Income"] / 3) -
            Math.floor(
              incomeStatementD[1]["Expenditure"]["Total Expenditure"] / 3
            ),
          "Cash at end of period":
            cashflow[2]["Cash at end of period"] +
            Math.floor(incomeStatementD[1].Income["Total Income"] / 3) -
            Math.floor(
              incomeStatementD[1]["Expenditure"]["Total Expenditure"] / 3
            ),
        },
      ];

      cashflow = [
        ...cashflow,
        {
          "Cash at beginnining": cashflow[3]["Cash at end of period"],
          "Profit(Loss)":
            Math.floor(incomeStatementD[1].Income["Total Income"] / 3) -
            Math.floor(
              incomeStatementD[1]["Expenditure"]["Total Expenditure"] / 3
            ),
          "Cash at end of period":
            cashflow[3]["Cash at end of period"] +
            Math.floor(incomeStatementD[1].Income["Total Income"] / 3) -
            Math.floor(
              incomeStatementD[1]["Expenditure"]["Total Expenditure"] / 3
            ),
        },
      ];

      cashflow = [
        ...cashflow,
        {
          "Cash at beginnining": cashflow[4]["Cash at end of period"],
          "Profit(Loss)":
            incomeStatementD[1].Income["Total Income"] -
            Math.floor(incomeStatementD[1].Income["Total Income"] / 3) -
            Math.floor(incomeStatementD[1].Income["Total Income"] / 3) -
            (incomeStatementD[1]["Expenditure"]["Total Expenditure"] -
              Math.floor(
                incomeStatementD[1]["Expenditure"]["Total Expenditure"] / 3
              ) -
              Math.floor(
                incomeStatementD[1]["Expenditure"]["Total Expenditure"] / 3
              )),

          "Cash at end of period":
            cashflow[4]["Cash at end of period"] +
            incomeStatementD[1].Income["Total Income"] -
            Math.floor(incomeStatementD[1].Income["Total Income"] / 3) -
            Math.floor(incomeStatementD[1].Income["Total Income"] / 3) -
            (incomeStatementD[1]["Expenditure"]["Total Expenditure"] -
              Math.floor(
                incomeStatementD[1]["Expenditure"]["Total Expenditure"] / 3
              ) -
              Math.floor(
                incomeStatementD[1]["Expenditure"]["Total Expenditure"] / 3
              )),
        },
      ];
    }

    if (incomeStatementD[2]) {
      cashflow = [
        ...cashflow,
        {
          "Cash at beginnining": cashflow[5]["Cash at end of period"],
          "Profit(Loss)":
            Math.floor(incomeStatementD[2].Income["Total Income"] / 3) -
            Math.floor(
              incomeStatementD[2]["Expenditure"]["Total Expenditure"] / 3
            ),
          "Cash at end of period":
            cashflow[5]["Cash at end of period"] +
            Math.floor(incomeStatementD[2].Income["Total Income"] / 3) -
            Math.floor(
              incomeStatementD[2]["Expenditure"]["Total Expenditure"] / 3
            ),
        },
      ];

      cashflow = [
        ...cashflow,
        {
          "Cash at beginnining": cashflow[6]["Cash at end of period"],
          "Profit(Loss)":
            Math.floor(incomeStatementD[2].Income["Total Income"] / 3) -
            Math.floor(
              incomeStatementD[2]["Expenditure"]["Total Expenditure"] / 3
            ),
          "Cash at end of period":
            cashflow[6]["Cash at end of period"] +
            Math.floor(incomeStatementD[2].Income["Total Income"] / 3) -
            Math.floor(
              incomeStatementD[2]["Expenditure"]["Total Expenditure"] / 3
            ),
        },
      ];

      cashflow = [
        ...cashflow,
        {
          "Cash at beginnining": cashflow[7]["Cash at end of period"],
          "Profit(Loss)":
            incomeStatementD[2].Income["Total Income"] -
            Math.floor(incomeStatementD[2].Income["Total Income"] / 3) -
            Math.floor(incomeStatementD[2].Income["Total Income"] / 3) -
            (incomeStatementD[2]["Expenditure"]["Total Expenditure"] -
              Math.floor(
                incomeStatementD[2]["Expenditure"]["Total Expenditure"] / 3
              ) -
              Math.floor(
                incomeStatementD[2]["Expenditure"]["Total Expenditure"] / 3
              )),

          "Cash at end of period":
            cashflow[7]["Cash at end of period"] +
            incomeStatementD[2].Income["Total Income"] -
            Math.floor(incomeStatementD[2].Income["Total Income"] / 3) -
            Math.floor(incomeStatementD[2].Income["Total Income"] / 3) -
            (incomeStatementD[2]["Expenditure"]["Total Expenditure"] -
              Math.floor(
                incomeStatementD[2]["Expenditure"]["Total Expenditure"] / 3
              ) -
              Math.floor(
                incomeStatementD[2]["Expenditure"]["Total Expenditure"] / 3
              )),
        },
      ];
    }

    if (incomeStatementD[3]) {
      cashflow = [
        ...cashflow,
        {
          "Cash at beginnining": cashflow[8]["Cash at end of period"],
          "Profit(Loss)":
            Math.floor(incomeStatementD[3].Income["Total Income"] / 3) -
            Math.floor(
              incomeStatementD[3]["Expenditure"]["Total Expenditure"] / 3
            ),
          "Cash at end of period":
            cashflow[8]["Cash at end of period"] +
            Math.floor(incomeStatementD[3].Income["Total Income"] / 3) -
            Math.floor(
              incomeStatementD[3]["Expenditure"]["Total Expenditure"] / 3
            ),
        },
      ];

      cashflow = [
        ...cashflow,
        {
          "Cash at beginnining": cashflow[9]["Cash at end of period"],
          "Profit(Loss)":
            Math.floor(incomeStatementD[3].Income["Total Income"] / 3) -
            Math.floor(
              incomeStatementD[3]["Expenditure"]["Total Expenditure"] / 3
            ),
          "Cash at end of period":
            cashflow[6]["Cash at end of period"] +
            Math.floor(incomeStatementD[3].Income["Total Income"] / 3) -
            Math.floor(
              incomeStatementD[3]["Expenditure"]["Total Expenditure"] / 3
            ),
        },
      ];

      cashflow = [
        ...cashflow,
        {
          "Cash at beginnining": cashflow[10]["Cash at end of period"],
          "Profit(Loss)":
            incomeStatementD[3].Income["Total Income"] -
            Math.floor(incomeStatementD[3].Income["Total Income"] / 3) -
            Math.floor(incomeStatementD[3].Income["Total Income"] / 3) -
            (incomeStatementD[3]["Expenditure"]["Total Expenditure"] -
              Math.floor(
                incomeStatementD[3]["Expenditure"]["Total Expenditure"] / 3
              ) -
              Math.floor(
                incomeStatementD[3]["Expenditure"]["Total Expenditure"] / 3
              )),

          "Cash at end of period":
            cashflow[10]["Cash at end of period"] +
            incomeStatementD[3].Income["Total Income"] -
            Math.floor(incomeStatementD[3].Income["Total Income"] / 3) -
            Math.floor(incomeStatementD[3].Income["Total Income"] / 3) -
            (incomeStatementD[3]["Expenditure"]["Total Expenditure"] -
              Math.floor(
                incomeStatementD[3]["Expenditure"]["Total Expenditure"] / 3
              ) -
              Math.floor(
                incomeStatementD[3]["Expenditure"]["Total Expenditure"] / 3
              )),
        },
      ];
    }

    console.log("CASHFLOW", cashflow);
  }
  return (
    <div className="w-[100%] h-[100vh]  flex">
      <RightNav />
      <div className="h-[100vh] overflow-auto flex-1">
        <div className=" w-[100%] min-h-[100vh] bg-[#FBB748] md:py-4 py-[3rem] ">
          {incomeStatementD && (
            <div className="w-[95%] md:w-[85%] overflow-auto custom-scrollbar mx-auto">
              <table className="w-[100%] mx-auto bg-white border mb-7   shadow-md rounded-lg overflow-hidden">
                <div className="px-4 py-2 font-bold">Cash Flow</div>
                <tr className="hover:bg-gray-300 cursor-pointer border-b-[2px] border-gray-300">
                  <td className="py-2 px-4 border-b text-center">{null}</td>
                  <td className="py-2 px-4 border-b text-center font-bold">
                    Month 1
                  </td>
                  <td className="py-2 px-4 border-b text-center font-bold">
                    Month 2
                  </td>
                  <td className="py-2 px-4 border-b text-center font-bold">
                    Month 3
                  </td>
                  {incomeStatementD[1] && (
                    <>
                      <td className="py-2 px-4 border-b text-center font-bold">
                        Month 4
                      </td>
                      <td className="py-2 px-4 border-b text-center font-bold">
                        Month 5
                      </td>
                      <td className="py-2 px-4 border-b text-center font-bold">
                        Month 6
                      </td>
                    </>
                  )}
                  {incomeStatementD[2] && (
                    <>
                      <td className="py-2 px-4 border-b text-center font-bold">
                        Month 7
                      </td>
                      <td className="py-2 px-4 border-b text-center font-bold">
                        Month 8
                      </td>
                      <td className="py-2 px-4 border-b text-center font-bold">
                        Month 9
                      </td>
                    </>
                  )}
                  {incomeStatementD[3] && (
                    <>
                      <td className="py-2 px-4 border-b text-center font-bold">
                        Month 10
                      </td>
                      <td className="py-2 px-4 border-b text-center font-bold">
                        Month 11
                      </td>
                      <td className="py-2 px-4 border-b text-center font-bold">
                        Month 12
                      </td>
                    </>
                  )}

                  <td className="py-2 px-4 border-b text-center font-bold">
                    Total
                  </td>
                </tr>
                <div className="px-4 py-2 font-bold">Income:</div>

                {incomeStatementD && (
                  // incomeStatementData[0].map((item, index) => (
                  <>
                    {Object.entries(incomeStatementD[0].Income).map(
                      ([key, value]) => (
                        <tr
                          key={key}
                          className="hover:bg-gray-300 cursor-pointer border-b-[2px] border-gray-300"
                        >
                          <td
                            className={`px-4 py-2 text-nowrap ${
                              key === "Total Income"
                                ? `font-bold px-1 text-[#1B375F] border-b-[2px] border-t-[2px] border-black bg-gray-300`
                                : ``
                            }`}
                          >
                            {key}
                          </td>
                          {/* <td className="border px-4 py-2">{value}</td> */}
                          {incomeStatementD.map((item, index) => {
                            return (
                              <>
                                {/* {quarter2Data && index === 0 && ( */}
                                <>
                                  <td
                                    className={`px-4 py-2 text-center ${
                                      key === "Total Income"
                                        ? `font-bold px-1 text-[#1B375F] border-b-[2px] border-t-[2px] border-black bg-gray-300`
                                        : ``
                                    }`}
                                  >
                                    {Math.floor(
                                      incomeStatementD[index].Income[key] / 3
                                    )}
                                  </td>
                                  <td
                                    className={`px-4 py-2 text-center ${
                                      key === "Total Income"
                                        ? `font-bold px-1 text-[#1B375F] border-b-[2px] border-t-[2px] border-black bg-gray-300`
                                        : ``
                                    }`}
                                  >
                                    {Math.floor(
                                      incomeStatementD[index].Income[key] / 3
                                    )}
                                  </td>
                                  <td
                                    className={`px-4 py-2 text-center ${
                                      key === "Total Income"
                                        ? `font-bold px-1 text-[#1B375F] border-b-[2px] border-t-[2px] border-black bg-gray-300`
                                        : ``
                                    }`}
                                  >
                                    {incomeStatementD[index].Income[key] -
                                      Math.floor(
                                        incomeStatementD[index].Income[key] / 3
                                      ) -
                                      Math.floor(
                                        incomeStatementD[index].Income[key] / 3
                                      )}
                                  </td>
                                </>
                              </>
                            );
                          })}
                          <td
                            className={`py-2 px-4 border-b text-center ${
                              key === "Total Income"
                                ? `font-bold px-1 text-[#1B375F] border-b-[2px] border-t-[2px] border-black bg-gray-300`
                                : ``
                            }`}
                          >
                            {incomeStatementD.reduce(
                              (acc, current) => acc + current["Income"][key],
                              0
                            )}
                          </td>
                        </tr>
                      )
                    )}
                    <div className="px-4 py-2 font-bold">
                      Total Expenditure:
                    </div>
                    {Object.entries(incomeStatementD[0]["Expenditure"]).map(
                      ([key, value]) => (
                        <tr
                          key={key}
                          className="hover:bg-gray-300 cursor-pointer border-b-[2px] border-gray-300"
                        >
                          <td
                            className={`px-4 py-2 text-nowrap ${
                              key === "Total Expenditure"
                                ? `font-bold px-1 text-[#1B375F] border-b-[2px] border-t-[2px] border-black bg-gray-300`
                                : ``
                            }`}
                          >
                            {key}
                          </td>
                          {/* <td className="border px-4 py-2">{value}</td> */}
                          {incomeStatementD.map((item, index) => {
                            // if (index === 0) {
                            return (
                              <>
                                <td
                                  className={`py-2 px-4 border-b text-center ${
                                    item.Revenue < 0 ? `text-red-500` : ""
                                  } ${
                                    key === "Total Expenditure"
                                      ? `font-bold px-1 text-[#1B375F] border-b-[2px] border-t-[2px] border-black bg-gray-300`
                                      : ``
                                  }`}
                                >
                                  {Math.floor(
                                    incomeStatementD[index]["Expenditure"][
                                      key
                                    ] / 3
                                  )}
                                </td>
                                <td
                                  className={`py-2 px-4 border-b text-center ${
                                    item.Revenue < 0 ? `text-red-500` : ""
                                  } ${
                                    key === "Total Expenditure"
                                      ? `font-bold px-1 text-[#1B375F] border-b-[2px] border-t-[2px] border-black bg-gray-300`
                                      : ``
                                  }`}
                                >
                                  {Math.floor(
                                    incomeStatementD[index]["Expenditure"][
                                      key
                                    ] / 3
                                  )}
                                </td>
                                {/* <td
                                        className={`py-2 px-4 border-b text-center ${
                                          item.Revenue < 0 ? `text-red-500` : ""
                                        }`}
                                      >
                                        {Math.ceil(
                                          incomeStatementData[index][
                                            "Expenditure"
                                          ][key] / 3
                                        )}
                                      </td> */}
                                <td
                                  className={`py-2 px-4 border-b text-center ${
                                    item.Revenue < 0 ? `text-red-500` : ""
                                  } ${
                                    key === "Total Expenditure"
                                      ? `font-bold px-1 text-[#1B375F] border-b-[2px] border-t-[2px] border-black bg-gray-300`
                                      : ``
                                  }`}
                                >
                                  {
                                    incomeStatementD[index]["Expenditure"][
                                      key
                                    ] -
                                      Math.floor(
                                        incomeStatementD[index]["Expenditure"][
                                          key
                                        ] / 3
                                      ) -
                                      Math.floor(
                                        incomeStatementD[index]["Expenditure"][
                                          key
                                        ] / 3
                                      )

                                    // incomeStatementData[index][ "Expenditure" ][key]
                                  }
                                </td>
                              </>
                            );
                            // }
                          })}
                          <td
                            className={`py-2 px-4 border-b text-center ${
                              key === "Total Expenditure"
                                ? `font-bold px-1 text-[#1B375F] border-b-[2px] border-t-[2px] border-black bg-gray-300`
                                : ``
                            }`}
                          >
                            {incomeStatementD.reduce(
                              (acc, current) =>
                                acc + current["Expenditure"][key],
                              0
                            )}
                          </td>
                        </tr>
                      )
                    )}
                    {/* before cashflow extra table content start */}
                    {/* Income row */}
                    <tr className="hover:bg-gray-300 cursor-pointer border-b-[2px] border-gray-300 font-bold">
                      <th className={`py-2 px-4 border-b text-start`}>
                        Income
                      </th>
                      {incomeStatementD &&
                        incomeStatementD.map((item) => (
                          <>
                            <td
                              className={`py-2 px-4 border-b text-center ${
                                item.Income["Total Income"] < 0
                                  ? `text-red-500`
                                  : ""
                              }`}
                            >
                              {Math.floor(item.Income["Total Income"] / 3)}
                            </td>
                            <td
                              className={`py-2 px-4 border-b text-center ${
                                item.Income["Total Income"] < 0
                                  ? `text-red-500`
                                  : ""
                              }`}
                            >
                              {Math.floor(item.Income["Total Income"] / 3)}
                            </td>
                            <td
                              className={`py-2 px-4 border-b text-center ${
                                item.Income["Total Income"] < 0
                                  ? `text-red-500`
                                  : ""
                              }`}
                            >
                              {
                                item.Income["Total Income"] -
                                  Math.floor(item.Income["Total Income"] / 3) -
                                  Math.floor(item.Income["Total Income"] / 3)

                                // incomeStatementData[index][ "Expenditure" ][key]
                              }
                            </td>
                          </>
                        ))}
                      {incomeStatementD && (
                        <td className={`py-2 px-4 border-b text-center`}>
                          {incomeStatementD.reduce(
                            (acc, curr) => acc + curr.Income["Total Income"],
                            0
                          )}
                        </td>
                      )}
                    </tr>
                    {/* Expenditure row */}
                    <tr className="hover:bg-gray-300 cursor-pointer border-b-[2px] border-gray-300 font-bold">
                      <th className={`py-2 px-4 border-b text-start`}>
                        Expenditure
                      </th>
                      {incomeStatementD &&
                        incomeStatementD.map((item) => (
                          <>
                            <td
                              className={`py-2 px-4 border-b text-center ${
                                Math.floor(
                                  item.Expenditure["Total Expenditure"] / 3
                                ) < 0
                                  ? `text-red-500`
                                  : ""
                              }`}
                            >
                              {Math.floor(
                                item.Expenditure["Total Expenditure"] / 3
                              )}
                            </td>
                            <td
                              className={`py-2 px-4 border-b text-center ${
                                Math.floor(
                                  item.Expenditure["Total Expenditure"] / 3
                                ) < 0
                                  ? `text-red-500`
                                  : ""
                              }`}
                            >
                              {Math.floor(
                                item.Expenditure["Total Expenditure"] / 3
                              )}
                            </td>
                            <td
                              className={`py-2 px-4 border-b text-center ${
                                item.Expenditure["Total Expenditure"] -
                                  Math.floor(
                                    item.Expenditure["Total Expenditure"] / 3
                                  ) -
                                  Math.floor(
                                    item.Expenditure["Total Expenditure"] / 3
                                  ) <
                                0
                                  ? `text-red-500`
                                  : ""
                              }`}
                            >
                              {
                                item.Expenditure["Total Expenditure"] -
                                  Math.floor(
                                    item.Expenditure["Total Expenditure"] / 3
                                  ) -
                                  Math.floor(
                                    item.Expenditure["Total Expenditure"] / 3
                                  )

                                // incomeStatementData[index][ "Expenditure" ][key]
                              }
                            </td>
                          </>
                        ))}
                      {incomeStatementD && (
                        <td className={`py-2 px-4 border-b text-center`}>
                          {incomeStatementD.reduce(
                            (acc, curr) =>
                              acc + curr.Expenditure["Total Expenditure"],
                            0
                          )}
                        </td>
                      )}
                    </tr>
                    {/* Profit / loss row */}

                    <tr className="hover:bg-gray-300 cursor-pointer border-b-[2px] border-gray-300 font-bold">
                      <th className={`py-2 px-4 border-b text-start`}>
                        Profit/Loss of period
                      </th>
                      {incomeStatementD &&
                        incomeStatementD.map((item) => (
                          <>
                            <td
                              className={`py-2 px-4 border-b text-center ${
                                Math.floor(item.Income["Total Income"] / 3) -
                                  Math.floor(
                                    item.Expenditure["Total Expenditure"] / 3
                                  ) <
                                0
                                  ? `text-red-500`
                                  : ""
                              }`}
                            >
                              {Math.floor(item.Income["Total Income"] / 3) -
                                Math.floor(
                                  item.Expenditure["Total Expenditure"] / 3
                                )}
                            </td>
                            <td
                              className={`py-2 px-4 border-b text-center ${
                                Math.floor(item.Income["Total Income"] / 3) -
                                  Math.floor(
                                    item.Expenditure["Total Expenditure"] / 3
                                  ) <
                                0
                                  ? `text-red-500`
                                  : ""
                              }`}
                            >
                              {Math.floor(item.Income["Total Income"] / 3) -
                                Math.floor(
                                  item.Expenditure["Total Expenditure"] / 3
                                )}
                            </td>
                            <td
                              className={`py-2 px-4 border-b text-center ${
                                item.Income["Total Income"] -
                                  Math.floor(item.Income["Total Income"] / 3) -
                                  Math.floor(item.Income["Total Income"] / 3) -
                                  (item.Expenditure["Total Expenditure"] -
                                    Math.floor(
                                      item.Expenditure["Total Expenditure"] / 3
                                    ) -
                                    Math.floor(
                                      item.Expenditure["Total Expenditure"] / 3
                                    )) <
                                0
                                  ? `text-red-500`
                                  : ""
                              }`}
                            >
                              {
                                item.Income["Total Income"] -
                                  Math.floor(item.Income["Total Income"] / 3) -
                                  Math.floor(item.Income["Total Income"] / 3) -
                                  (item.Expenditure["Total Expenditure"] -
                                    Math.floor(
                                      item.Expenditure["Total Expenditure"] / 3
                                    ) -
                                    Math.floor(
                                      item.Expenditure["Total Expenditure"] / 3
                                    ))

                                // incomeStatementData[index][ "Expenditure" ][key]
                              }
                            </td>
                          </>
                        ))}
                      {cashflow && (
                        <td className={`py-2 px-4 border-b text-center`}>
                          {cashflow.reduce(
                            (acc, current) => acc + current["Profit(Loss)"],
                            0
                          )}
                        </td>
                      )}
                    </tr>

                    {/* before cashflow extra table content end */}
                    {/* Cash Flow Extra Table */}
                    {cashflow &&
                      Object.entries(cashflow[0]).map(([key, value]) => (
                        <tr className="hover:bg-gray-300 cursor-pointer border-b-[2px] border-gray-300 font-bold">
                          <th className={`py-2 px-4 border-b text-start`}>
                            {key}
                          </th>
                          {cashflow.map((item, index) => (
                            <td
                              className={`py-2 px-4 border-b text-center ${
                                item[key] < 0 ? `text-red-500` : ``
                              }`}
                            >
                              {item[key]}
                            </td>
                          ))}
                          <td className={`py-2 px-4 border-b text-center`}>
                            {key !== "Cash at beginnining" &&
                              key !== "Cash at end of period" &&
                              cashflow.reduce(
                                (acc, current) => acc + current[key],
                                0
                              )}
                          </td>
                        </tr>
                      ))}
                  </>
                )}
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cashflow;
