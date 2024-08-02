import React, { useEffect, useState } from "react";
import { useGetUserIncomeAdmin } from "../../api/MyIncomeStatementApi";

const UserFinanceStatement = ({ id }) => {
  const [incomeStatementD, setIncomeStatementD] = useState();
  const { getUserIncomeAdmin } = useGetUserIncomeAdmin();

  useEffect(() => {
    const fetchIncomeData = async () => {
      try {
        // income = await getIncome();
        let incomeD = await getUserIncomeAdmin(id);

        setIncomeStatementD(incomeD.income);

        // setIncomeStatement(income);
      } catch (error) {
        console.error("Error fetching Income data:", error);
      }
    };

    fetchIncomeData();
  }, []);

  //   if (incomeStatementD) {
  //     console.log(incomeStatementD);
  //   }

  let cashflow = [];
  if (incomeStatementD) {
    // console.log("NEWW", incomeStatementD);
    cashflow = [
      {
        "Income at Start": 350,
        "Profit(Loss)":
          Math.floor(incomeStatementD[0].Income["Total Income"] / 3) -
          Math.floor(
            incomeStatementD[0]["Expenditure"]["Total Expenditure"] / 3
          ),
        "Income at end":
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
        "Income at Start": cashflow[0]["Income at end"],
        "Profit(Loss)":
          Math.floor(incomeStatementD[0].Income["Total Income"] / 3) -
          Math.floor(
            incomeStatementD[0]["Expenditure"]["Total Expenditure"] / 3
          ),
        "Income at end":
          cashflow[0]["Income at end"] +
          Math.floor(incomeStatementD[0].Income["Total Income"] / 3) -
          Math.floor(
            incomeStatementD[0]["Expenditure"]["Total Expenditure"] / 3
          ),
      },
    ];

    cashflow = [
      ...cashflow,
      {
        "Income at Start": cashflow[1]["Income at end"],
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

        "Income at end":
          cashflow[1]["Income at end"] +
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
          "Income at Start": cashflow[2]["Income at end"],
          "Profit(Loss)":
            Math.floor(incomeStatementD[1].Income["Total Income"] / 3) -
            Math.floor(
              incomeStatementD[1]["Expenditure"]["Total Expenditure"] / 3
            ),
          "Income at end":
            cashflow[2]["Income at end"] +
            Math.floor(incomeStatementD[1].Income["Total Income"] / 3) -
            Math.floor(
              incomeStatementD[1]["Expenditure"]["Total Expenditure"] / 3
            ),
        },
      ];

      cashflow = [
        ...cashflow,
        {
          "Income at Start": cashflow[3]["Income at end"],
          "Profit(Loss)":
            Math.floor(incomeStatementD[1].Income["Total Income"] / 3) -
            Math.floor(
              incomeStatementD[1]["Expenditure"]["Total Expenditure"] / 3
            ),
          "Income at end":
            cashflow[3]["Income at end"] +
            Math.floor(incomeStatementD[1].Income["Total Income"] / 3) -
            Math.floor(
              incomeStatementD[1]["Expenditure"]["Total Expenditure"] / 3
            ),
        },
      ];

      cashflow = [
        ...cashflow,
        {
          "Income at Start": cashflow[4]["Income at end"],
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

          "Income at end":
            cashflow[4]["Income at end"] +
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

    console.log("CASHFLOW", cashflow);
  }

  return (
    <div>
      {incomeStatementD && (
        <div className="w-[95%] md:w-[85%] mt-4 mx-auto overflow-auto">
          <table className="w-[100%] mx-auto bg-white border mb-7   shadow-md rounded-lg overflow-hidden">
            <div className="px-4 py-2 font-bold">Income Statement:</div>
            <tr className="hover:bg-gray-300 cursor-pointer border-b-[2px] border-gray-300">
              <td className="py-2 px-4 border-b text-center">{null}</td>
              <td className="py-2 px-4 border-b text-center font-bold">Q1</td>
              <td className="py-2 px-4 border-b text-center font-bold">Q2</td>
              <td className="py-2 px-4 border-b text-center font-bold">Q3</td>
              <td className="py-2 px-4 border-b text-center font-bold">Q4</td>
              <td className="py-2 px-4 border-b text-center font-bold">
                Total
              </td>
            </tr>
            <div className="px-1  py-2 font-bold ">Income:</div>

            {
              incomeStatementD && (
                // incomeStatementData[0].map((item, index) => (
                <>
                  {Object.entries(incomeStatementD[0].Income).map(
                    ([key, value]) => (
                      <tr
                        key={key}
                        className="hover:bg-gray-300 cursor-pointer border-b-[2px] border-gray-300"
                      >
                        <td
                          className={`px-4 py-2 ${
                            key === "Total Income" ? `font-bold px-1` : ``
                          }`}
                        >
                          {key}
                        </td>

                        {incomeStatementD.map((item, index) => {
                          // if (index === 0) {
                          return (
                            <>
                              {incomeStatementD && (
                                <>
                                  <td
                                    className={`py-2 px-4 border-b text-center ${
                                      item.Revenue < 0 ? `text-red-500` : ""
                                    } ${
                                      key === "Total Expenditure"
                                        ? `font-bold`
                                        : ``
                                    }`}
                                  >
                                    {item["Income"][key]}
                                  </td>
                                </>
                              )}
                            </>
                          );
                          // }
                        })}
                        {incomeStatementD && incomeStatementD.length === 2 && (
                          <>
                            <td className={`py-2 px-4 border-b text-center`}>
                              {null}
                            </td>
                            <td className={`py-2 px-4 border-b text-center`}>
                              {null}
                            </td>
                          </>
                        )}
                        {incomeStatementD && incomeStatementD.length === 1 && (
                          <>
                            <td className={`py-2 px-4 border-b text-center`}>
                              {null}
                            </td>
                            <td className={`py-2 px-4 border-b text-center`}>
                              {null}
                            </td>
                            <td className={`py-2 px-4 border-b text-center`}>
                              {null}
                            </td>
                          </>
                        )}
                        <td className={`py-2 px-4 border-b text-center`}>
                          {incomeStatementD.reduce(
                            (acc, current) => acc + current["Income"][key],
                            0
                          )}
                        </td>
                      </tr>
                    )
                  )}
                  <div className="px-1 py-2 font-bold">Expenditure:</div>
                  {Object.entries(incomeStatementD[0]["Expenditure"]).map(
                    ([key, value]) => (
                      <tr
                        key={key}
                        className="hover:bg-gray-300 cursor-pointer border-b-[2px] border-gray-300"
                      >
                        <td
                          className={`px-4 py-2 ${
                            key === "Total Expenditure" ? `font-bold px-1` : ``
                          }`}
                        >
                          {key}
                        </td>
                        {incomeStatementD.map((item, index) => (
                          <td
                            className={`py-2 px-4 border-b text-center ${
                              key === "Total Expenditure"
                                ? `font-bold px-1`
                                : ``
                            }`}
                          >
                            {item["Expenditure"][key]}
                          </td>
                        ))}
                        {incomeStatementD && incomeStatementD.length === 2 && (
                          <>
                            <td className={`py-2 px-4 border-b text-center`}>
                              {null}
                            </td>
                            <td className={`py-2 px-4 border-b text-center`}>
                              {null}
                            </td>
                          </>
                        )}
                        {incomeStatementD && incomeStatementD.length === 1 && (
                          <>
                            <td className={`py-2 px-4 border-b text-center`}>
                              {null}
                            </td>
                            <td className={`py-2 px-4 border-b text-center`}>
                              {null}
                            </td>
                            <td className={`py-2 px-4 border-b text-center`}>
                              {null}
                            </td>
                          </>
                        )}
                        <td className={`py-2 px-4 border-b text-center`}>
                          {incomeStatementD.reduce(
                            (acc, current) => acc + current["Expenditure"][key],
                            0
                          )}
                        </td>
                      </tr>
                    )
                  )}

                  {Object.entries(incomeStatementD[0]).map(([key, value]) => {
                    if (
                      key === "Income" ||
                      key === "Expenditure" ||
                      key === "_id" ||
                      key === "EBITIDA" ||
                      key === "EBIT" ||
                      key === "Depreciation" ||
                      key === "Interest"
                    ) {
                      return null;
                    }
                    return (
                      <tr
                        key={key}
                        className="hover:bg-gray-300 cursor-pointer border-b-[2px] border-gray-300"
                      >
                        <td
                          className={`py-2 px-4 border-b ${
                            key === "EBITIDA" ||
                            key === "EBIT" ||
                            key === "PRETAX INCOME" ||
                            key === "NET INCOME"
                              ? `font-bold px-1`
                              : ``
                          }`}
                        >
                          {key}
                        </td>
                        {incomeStatementD.map((item, index) => (
                          <td
                            className={`py-2 px-4 border-b text-center ${
                              item[key] < 0 ? `text-red-500` : ""
                            } ${
                              key === "EBITIDA" ||
                              key === "EBIT" ||
                              key === "PRETAX INCOME" ||
                              key === "NET INCOME"
                                ? `font-bold`
                                : ``
                            }`}
                          >
                            {item[key]}
                          </td>
                        ))}
                        {incomeStatementD && incomeStatementD.length === 2 && (
                          <>
                            <td className={`py-2 px-4 border-b text-center`}>
                              {null}
                            </td>
                            <td className={`py-2 px-4 border-b text-center`}>
                              {null}
                            </td>
                          </>
                        )}
                        {incomeStatementD && incomeStatementD.length === 1 && (
                          <>
                            <td className={`py-2 px-4 border-b text-center`}>
                              {null}
                            </td>
                            <td className={`py-2 px-4 border-b text-center`}>
                              {null}
                            </td>
                            <td className={`py-2 px-4 border-b text-center`}>
                              {null}
                            </td>
                          </>
                        )}
                        <td className={`py-2 px-4 border-b text-center`}>
                          {incomeStatementD.reduce(
                            (acc, current) => acc + current[key],
                            0
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </>
              )
              // ))
            }
          </table>
        </div>
      )}

      {incomeStatementD && (
        <div className="w-[95%] md:w-[85%] mx-auto">
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
                      <td className=" px-4 py-2">{key}</td>
                      {/* <td className="border px-4 py-2">{value}</td> */}
                      {incomeStatementD.map((item, index) => {
                        return (
                          <>
                            {/* {quarter2Data && index === 0 && ( */}
                            <>
                              <td className="px-4 py-2 text-center">
                                {Math.floor(
                                  incomeStatementD[index].Income[key] / 3
                                )}
                              </td>
                              <td className="px-4 py-2 text-center">
                                {Math.floor(
                                  incomeStatementD[index].Income[key] / 3
                                )}
                              </td>
                              <td className="px-4 py-2 text-center">
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
                      <td className={`py-2 px-4 border-b text-center`}>
                        {incomeStatementD.reduce(
                          (acc, current) => acc + current["Income"][key],
                          0
                        )}
                      </td>
                    </tr>
                  )
                )}
                <div className="px-4 py-2 font-bold">Total Expenditure:</div>
                {Object.entries(incomeStatementD[0]["Expenditure"]).map(
                  ([key, value]) => (
                    <tr
                      key={key}
                      className="hover:bg-gray-300 cursor-pointer border-b-[2px] border-gray-300"
                    >
                      <td className=" px-4 py-2">{key}</td>
                      {/* <td className="border px-4 py-2">{value}</td> */}
                      {incomeStatementD.map((item, index) => {
                        // if (index === 0) {
                        return (
                          <>
                            <td
                              className={`py-2 px-4 border-b text-center ${
                                item.Revenue < 0 ? `text-red-500` : ""
                              }`}
                            >
                              {Math.floor(
                                incomeStatementD[index]["Expenditure"][key] / 3
                              )}
                            </td>
                            <td
                              className={`py-2 px-4 border-b text-center ${
                                item.Revenue < 0 ? `text-red-500` : ""
                              }`}
                            >
                              {Math.floor(
                                incomeStatementD[index]["Expenditure"][key] / 3
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
                              }`}
                            >
                              {
                                incomeStatementD[index]["Expenditure"][key] -
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
                      <td className={`py-2 px-4 border-b text-center`}>
                        {incomeStatementD.reduce(
                          (acc, current) => acc + current["Expenditure"][key],
                          0
                        )}
                      </td>
                    </tr>
                  )
                )}
                {/* Cash Flow Extra Table */}
                {cashflow &&
                  Object.entries(cashflow[0]).map(([key, value]) => (
                    <tr className="hover:bg-gray-300 cursor-pointer border-b-[2px] border-gray-300 font-bold">
                      <th className={`py-2 px-4 border-b text-start`}>{key}</th>
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
                        {cashflow.reduce(
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
  );
};

export default UserFinanceStatement;
