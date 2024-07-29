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
          Math.floor(incomeStatementD[0].Revenues["Total Revenue"] / 3) -
          Math.floor(
            incomeStatementD[0]["Expenses And Costs"][
              "Total Cost And Expenses"
            ] / 3
          ),
        "Income at end":
          350 +
          Math.floor(incomeStatementD[0].Revenues["Total Revenue"] / 3) -
          Math.floor(
            incomeStatementD[0]["Expenses And Costs"][
              "Total Cost And Expenses"
            ] / 3
          ),
      },
    ];

    cashflow = [
      ...cashflow,
      {
        "Income at Start": cashflow[0]["Income at end"],
        "Profit(Loss)":
          Math.floor(incomeStatementD[0].Revenues["Total Revenue"] / 3) -
          Math.floor(
            incomeStatementD[0]["Expenses And Costs"][
              "Total Cost And Expenses"
            ] / 3
          ),
        "Income at end":
          cashflow[0]["Income at end"] +
          Math.floor(incomeStatementD[0].Revenues["Total Revenue"] / 3) -
          Math.floor(
            incomeStatementD[0]["Expenses And Costs"][
              "Total Cost And Expenses"
            ] / 3
          ),
      },
    ];

    cashflow = [
      ...cashflow,
      {
        "Income at Start": cashflow[1]["Income at end"],
        "Profit(Loss)":
          incomeStatementD[0].Revenues["Total Revenue"] -
          Math.floor(incomeStatementD[0].Revenues["Total Revenue"] / 3) -
          Math.floor(incomeStatementD[0].Revenues["Total Revenue"] / 3) -
          (incomeStatementD[0]["Expenses And Costs"][
            "Total Cost And Expenses"
          ] -
            Math.floor(
              incomeStatementD[0]["Expenses And Costs"][
                "Total Cost And Expenses"
              ] / 3
            ) -
            Math.floor(
              incomeStatementD[0]["Expenses And Costs"][
                "Total Cost And Expenses"
              ] / 3
            )),

        "Income at end":
          cashflow[1]["Income at end"] +
          incomeStatementD[0].Revenues["Total Revenue"] -
          Math.floor(incomeStatementD[0].Revenues["Total Revenue"] / 3) -
          Math.floor(incomeStatementD[0].Revenues["Total Revenue"] / 3) -
          (incomeStatementD[0]["Expenses And Costs"][
            "Total Cost And Expenses"
          ] -
            Math.floor(
              incomeStatementD[0]["Expenses And Costs"][
                "Total Cost And Expenses"
              ] / 3
            ) -
            Math.floor(
              incomeStatementD[0]["Expenses And Costs"][
                "Total Cost And Expenses"
              ] / 3
            )),
      },
    ];

    if (incomeStatementD[1]) {
      cashflow = [
        ...cashflow,
        {
          "Income at Start": cashflow[2]["Income at end"],
          "Profit(Loss)":
            Math.floor(incomeStatementD[1].Revenues["Total Revenue"] / 3) -
            Math.floor(
              incomeStatementD[1]["Expenses And Costs"][
                "Total Cost And Expenses"
              ] / 3
            ),
          "Income at end":
            cashflow[2]["Income at end"] +
            Math.floor(incomeStatementD[1].Revenues["Total Revenue"] / 3) -
            Math.floor(
              incomeStatementD[1]["Expenses And Costs"][
                "Total Cost And Expenses"
              ] / 3
            ),
        },
      ];

      cashflow = [
        ...cashflow,
        {
          "Income at Start": cashflow[3]["Income at end"],
          "Profit(Loss)":
            Math.floor(incomeStatementD[1].Revenues["Total Revenue"] / 3) -
            Math.floor(
              incomeStatementD[1]["Expenses And Costs"][
                "Total Cost And Expenses"
              ] / 3
            ),
          "Income at end":
            cashflow[3]["Income at end"] +
            Math.floor(incomeStatementD[1].Revenues["Total Revenue"] / 3) -
            Math.floor(
              incomeStatementD[1]["Expenses And Costs"][
                "Total Cost And Expenses"
              ] / 3
            ),
        },
      ];

      cashflow = [
        ...cashflow,
        {
          "Income at Start": cashflow[4]["Income at end"],
          "Profit(Loss)":
            incomeStatementD[1].Revenues["Total Revenue"] -
            Math.floor(incomeStatementD[1].Revenues["Total Revenue"] / 3) -
            Math.floor(incomeStatementD[1].Revenues["Total Revenue"] / 3) -
            (incomeStatementD[1]["Expenses And Costs"][
              "Total Cost And Expenses"
            ] -
              Math.floor(
                incomeStatementD[1]["Expenses And Costs"][
                  "Total Cost And Expenses"
                ] / 3
              ) -
              Math.floor(
                incomeStatementD[1]["Expenses And Costs"][
                  "Total Cost And Expenses"
                ] / 3
              )),

          "Income at end":
            cashflow[4]["Income at end"] +
            incomeStatementD[1].Revenues["Total Revenue"] -
            Math.floor(incomeStatementD[1].Revenues["Total Revenue"] / 3) -
            Math.floor(incomeStatementD[1].Revenues["Total Revenue"] / 3) -
            (incomeStatementD[1]["Expenses And Costs"][
              "Total Cost And Expenses"
            ] -
              Math.floor(
                incomeStatementD[1]["Expenses And Costs"][
                  "Total Cost And Expenses"
                ] / 3
              ) -
              Math.floor(
                incomeStatementD[1]["Expenses And Costs"][
                  "Total Cost And Expenses"
                ] / 3
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
            <div className="px-1  py-2 font-bold ">Revenues:</div>

            {
              incomeStatementD && (
                // incomeStatementData[0].map((item, index) => (
                <>
                  {Object.entries(incomeStatementD[0].Revenues).map(
                    ([key, value]) => (
                      <tr
                        key={key}
                        className="hover:bg-gray-300 cursor-pointer border-b-[2px] border-gray-300"
                      >
                        <td
                          className={`px-4 py-2 ${
                            key === "Total Revenue" ? `font-bold px-1` : ``
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
                                      key === "Total Cost And Expenses"
                                        ? `font-bold`
                                        : ``
                                    }`}
                                  >
                                    {item["Revenues"][key]}
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
                            (acc, current) => acc + current["Revenues"][key],
                            0
                          )}
                        </td>
                      </tr>
                    )
                  )}
                  <div className="px-1 py-2 font-bold">Expenses And Costs:</div>
                  {Object.entries(
                    incomeStatementD[0]["Expenses And Costs"]
                  ).map(([key, value]) => (
                    <tr
                      key={key}
                      className="hover:bg-gray-300 cursor-pointer border-b-[2px] border-gray-300"
                    >
                      <td
                        className={`px-4 py-2 ${
                          key === "Total Cost And Expenses"
                            ? `font-bold px-1`
                            : ``
                        }`}
                      >
                        {key}
                      </td>
                      {incomeStatementD.map((item, index) => (
                        <td
                          className={`py-2 px-4 border-b text-center ${
                            key === "Total Cost And Expenses"
                              ? `font-bold px-1`
                              : ``
                          }`}
                        >
                          {item["Expenses And Costs"][key]}
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
                          (acc, current) =>
                            acc + current["Expenses And Costs"][key],
                          0
                        )}
                      </td>
                    </tr>
                  ))}

                  {Object.entries(incomeStatementD[0]).map(([key, value]) => {
                    if (
                      key === "Revenues" ||
                      key === "Expenses And Costs" ||
                      key === "_id"
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
        <div className="w-[95%] md:w-[85%] mx-auto overflow-auto">
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
            </tr>
            <div className="px-4 py-2 font-bold">Revenues:</div>

            {incomeStatementD && (
              // incomeStatementData[0].map((item, index) => (
              <>
                {Object.entries(incomeStatementD[0].Revenues).map(
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
                                  incomeStatementD[index].Revenues[key] / 3
                                )}
                              </td>
                              <td className="px-4 py-2 text-center">
                                {Math.floor(
                                  incomeStatementD[index].Revenues[key] / 3
                                )}
                              </td>
                              <td className="px-4 py-2 text-center">
                                {incomeStatementD[index].Revenues[key] -
                                  Math.floor(
                                    incomeStatementD[index].Revenues[key] / 3
                                  ) -
                                  Math.floor(
                                    incomeStatementD[index].Revenues[key] / 3
                                  )}
                              </td>
                              {/* <td className="px-4 py-2 text-center">
                                          {Math.ceil(
                                            incomeStatementData[index].Revenues[
                                              key
                                            ] / 3
                                          )}
                                        </td> */}
                            </>
                            {/* )} */}
                          </>
                        );
                        // }
                      })}
                    </tr>
                  )
                )}
                <div className="px-4 py-2 font-bold">
                  Total Expenses And Costs:
                </div>
                {Object.entries(incomeStatementD[0]["Expenses And Costs"]).map(
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
                                incomeStatementD[index]["Expenses And Costs"][
                                  key
                                ] / 3
                              )}
                            </td>
                            <td
                              className={`py-2 px-4 border-b text-center ${
                                item.Revenue < 0 ? `text-red-500` : ""
                              }`}
                            >
                              {Math.floor(
                                incomeStatementD[index]["Expenses And Costs"][
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
                                            "Expenses And Costs"
                                          ][key] / 3
                                        )}
                                      </td> */}
                            <td
                              className={`py-2 px-4 border-b text-center ${
                                item.Revenue < 0 ? `text-red-500` : ""
                              }`}
                            >
                              {
                                incomeStatementD[index]["Expenses And Costs"][
                                  key
                                ] -
                                  Math.floor(
                                    incomeStatementD[index][
                                      "Expenses And Costs"
                                    ][key] / 3
                                  ) -
                                  Math.floor(
                                    incomeStatementD[index][
                                      "Expenses And Costs"
                                    ][key] / 3
                                  )

                                // incomeStatementData[index][ "Expenses And Costs" ][key]
                              }
                            </td>
                          </>
                        );
                        // }
                      })}
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