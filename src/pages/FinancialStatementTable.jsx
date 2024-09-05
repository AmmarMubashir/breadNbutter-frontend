import React, { useEffect, useState } from "react";
import { CSVLink } from "react-csv";
import { TiTick } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import { useGetIncome, useGetUserIncome } from "../api/MyIncomeStatementApi";
import RightNav from "./components/RightNav";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const MyComponent = ({ startupData, quarter2Data, quarter1, quarter2 }) => {
  const { getIncome } = useGetIncome();
  const { getUserIncome } = useGetUserIncome();
  const [incomeStatement, setIncomeStatement] = useState();
  const [incomeStatementData, setIncomeStatementData] = useState([]);
  const [incomeStatementD, setIncomeStatementD] = useState();
  const navigate = useNavigate();

  // console.log(quarter2Data);
  let quarter3Data = false;
  let opportunities = 0;
  if (quarter2Data) {
    if (quarter2Data.option1.selected) {
      opportunities += quarter2Data.option1.income;
    }
    if (quarter2Data.option2.selected) {
      opportunities += quarter2Data.option2.income;
    }
    if (quarter2Data.option3.selected) {
      opportunities += quarter2Data.option3.income;
    }
    // console.log("opportunities", opportunities);
    // console.log(quarter2Data.option1.selected);
  }
  console.log("QUARTER2", quarter2);
  let income;
  useEffect(() => {
    const fetchIncomeData = async () => {
      try {
        income = await getIncome();
        let incomeD = await getUserIncome();

        setIncomeStatementD(incomeD.income);

        setIncomeStatement(income);
      } catch (error) {
        console.error("Error fetching Income data:", error);
      }
    };

    fetchIncomeData();
  }, []);

  let cashflow = [];
  // if (incomeStatementD) {
  //   // console.log("NEWW", incomeStatementD);
  //   cashflow = [
  //     {
  //       "Income at Start": 350,
  //       "Profit(Loss)":
  //         Math.floor(incomeStatementD[0].Income["Total Income"] / 3) -
  //         Math.floor(
  //           incomeStatementD[0]["Expenditure"]["Total Expenditure"] / 3
  //         ),
  //       "Income at end":
  //         350 +
  //         Math.floor(incomeStatementD[0].Income["Total Income"] / 3) -
  //         Math.floor(
  //           incomeStatementD[0]["Expenditure"]["Total Expenditure"] / 3
  //         ),
  //     },
  //   ];

  //   cashflow = [
  //     ...cashflow,
  //     {
  //       "Income at Start": cashflow[0]["Income at end"],
  //       "Profit(Loss)":
  //         Math.floor(incomeStatementD[0].Income["Total Income"] / 3) -
  //         Math.floor(
  //           incomeStatementD[0]["Expenditure"]["Total Expenditure"] / 3
  //         ),
  //       "Income at end":
  //         cashflow[0]["Income at end"] +
  //         Math.floor(incomeStatementD[0].Income["Total Income"] / 3) -
  //         Math.floor(
  //           incomeStatementD[0]["Expenditure"]["Total Expenditure"] / 3
  //         ),
  //     },
  //   ];

  //   cashflow = [
  //     ...cashflow,
  //     {
  //       "Income at Start": cashflow[1]["Income at end"],
  //       "Profit(Loss)":
  //         incomeStatementD[0].Income["Total Income"] -
  //         Math.floor(incomeStatementD[0].Income["Total Income"] / 3) -
  //         Math.floor(incomeStatementD[0].Income["Total Income"] / 3) -
  //         (incomeStatementD[0]["Expenditure"]["Total Expenditure"] -
  //           Math.floor(
  //             incomeStatementD[0]["Expenditure"]["Total Expenditure"] / 3
  //           ) -
  //           Math.floor(
  //             incomeStatementD[0]["Expenditure"]["Total Expenditure"] / 3
  //           )),

  //       "Income at end":
  //         cashflow[1]["Income at end"] +
  //         incomeStatementD[0].Income["Total Income"] -
  //         Math.floor(incomeStatementD[0].Income["Total Income"] / 3) -
  //         Math.floor(incomeStatementD[0].Income["Total Income"] / 3) -
  //         (incomeStatementD[0]["Expenditure"]["Total Expenditure"] -
  //           Math.floor(
  //             incomeStatementD[0]["Expenditure"]["Total Expenditure"] / 3
  //           ) -
  //           Math.floor(
  //             incomeStatementD[0]["Expenditure"]["Total Expenditure"] / 3
  //           )),
  //     },
  //   ];

  //   if (incomeStatementD[1]) {
  //     cashflow = [
  //       ...cashflow,
  //       {
  //         "Income at Start": cashflow[2]["Income at end"],
  //         "Profit(Loss)":
  //           Math.floor(incomeStatementD[1].Income["Total Income"] / 3) -
  //           Math.floor(
  //             incomeStatementD[1]["Expenditure"]["Total Expenditure"] / 3
  //           ),
  //         "Income at end":
  //           cashflow[2]["Income at end"] +
  //           Math.floor(incomeStatementD[1].Income["Total Income"] / 3) -
  //           Math.floor(
  //             incomeStatementD[1]["Expenditure"]["Total Expenditure"] / 3
  //           ),
  //       },
  //     ];

  //     cashflow = [
  //       ...cashflow,
  //       {
  //         "Income at Start": cashflow[3]["Income at end"],
  //         "Profit(Loss)":
  //           Math.floor(incomeStatementD[1].Income["Total Income"] / 3) -
  //           Math.floor(
  //             incomeStatementD[1]["Expenditure"]["Total Expenditure"] / 3
  //           ),
  //         "Income at end":
  //           cashflow[3]["Income at end"] +
  //           Math.floor(incomeStatementD[1].Income["Total Income"] / 3) -
  //           Math.floor(
  //             incomeStatementD[1]["Expenditure"]["Total Expenditure"] / 3
  //           ),
  //       },
  //     ];

  //     cashflow = [
  //       ...cashflow,
  //       {
  //         "Income at Start": cashflow[4]["Income at end"],
  //         "Profit(Loss)":
  //           incomeStatementD[1].Income["Total Income"] -
  //           Math.floor(incomeStatementD[1].Income["Total Income"] / 3) -
  //           Math.floor(incomeStatementD[1].Income["Total Income"] / 3) -
  //           (incomeStatementD[1]["Expenditure"]["Total Expenditure"] -
  //             Math.floor(
  //               incomeStatementD[1]["Expenditure"]["Total Expenditure"] / 3
  //             ) -
  //             Math.floor(
  //               incomeStatementD[1]["Expenditure"]["Total Expenditure"] / 3
  //             )),

  //         "Income at end":
  //           cashflow[4]["Income at end"] +
  //           incomeStatementD[1].Income["Total Income"] -
  //           Math.floor(incomeStatementD[1].Income["Total Income"] / 3) -
  //           Math.floor(incomeStatementD[1].Income["Total Income"] / 3) -
  //           (incomeStatementD[1]["Expenditure"]["Total Expenditure"] -
  //             Math.floor(
  //               incomeStatementD[1]["Expenditure"]["Total Expenditure"] / 3
  //             ) -
  //             Math.floor(
  //               incomeStatementD[1]["Expenditure"]["Total Expenditure"] / 3
  //             )),
  //       },
  //     ];
  //   }

  //   console.log(cashflow);
  // }

  // const headers = [
  //   { label: "", key: "field" },
  //   { label: "Quarter 1", key: "value" },
  //   { label: "Extra 1", key: "value1" },
  //   { label: "Extra 2", key: "value2" },
  //   { label: "Extra 3", key: "value3" },
  // ];

  // // Define the data structure to match the table layout
  // const data = [
  //   {
  //     field: "Team Name",
  //     value: startupData.name,
  //     value1: "checking",
  //     value2: "checking",
  //     value3: "checking",
  //   },
  //   { field: "No. of members", value: startupData.members },
  //   { field: "Location", value: startupData.location },
  //   { field: "Budget", value: startupData.budjet },
  // ];

  return (
    <div>
      <div className="md:hidden block">
        <RightNav />
      </div>
      <div className="hidden md:block pt-6 ml-4">
        <button onClick={() => navigate("/introduction")}>
          <IoArrowBack className="text-black text-[2rem] " />
        </button>
      </div>
      {quarter1 === undefined && (
        <div className="md:py-4 py-[4rem]">
          <div className="w-[95%] md:w-[85%] mx-auto mb-3 min-h-[200px] bg-[#ffffff31] flex justify-center items-center">
            <p className="text-center text-[1.4rem]">
              Financial Statement goes here when you fill quarters...
            </p>
          </div>
        </div>
      )}
      {quarter1 && (
        <div className="w-[100%] flex flex-col gap-1 justify-center items-center md:mx-auto pt-4">
          <div className="mt-7">
            <h1 className="font-bold pt-4 text-[1.4rem]">
              Financial Statement
            </h1>
          </div>

          {/* <div className="md:w-[70%] w-[95%] mx-auto">
            <div className="w-[100%] mx-auto py-2 px-3 md:px-4 bg-white rounded font-bold flex gap-3">
              Quarter 1 :
            </div>
            <table className="w-[100%] bg-white border  shadow-md rounded-lg overflow-hidden">
              <thead className="bg-gray-300">
                <tr>
                  <th className="py-2 px-3 md:px-4 border-b">Name</th>
                  <th className="py-2 px-3 md:px-4 border-b">Members</th>
                  <th className="py-2 px-3 md:px-4 border-b">Location</th>
                  <th className="py-2 px-3 md:px-4 border-b">Budget</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b-[2px] border-gray-300 hover:bg-gray-300 cursor-pointer">
                  <td className="py-2 px-4 border-b text-center">
                    {quarter1 && quarter1.name}
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    {quarter1 && quarter1.members}
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    {quarter1 && quarter1.location}
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    {quarter1 && quarter1.budjet} $
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {quarter2 && (
            <div className="w-[95%] md:w-[70%]">
              <div className="w-[100%] mx-auto py-2 px-3 md:px-4 bg-white rounded font-bold flex gap-3">
                Quarter 2 :
              </div>
              <table className="w-[100%] bg-white border  shadow-md rounded-lg overflow-hidden">
                <thead className="bg-gray-300">
                  <tr>
                    <th className="py-2 px-3 md:px-4 border-b">Selected</th>
                    <th className="py-2 px-3 md:px-4 border-b">Cost</th>
                    <th className="py-2 px-3 md:px-4 border-b">Other Cost</th>
                    <th className="py-2 px-3 md:px-4 border-b">Income</th>
                    <th className="py-2 px-3 md:px-4 border-b">Net Profit</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b-[2px] border-gray-300 hover:bg-gray-300 cursor-pointer">
                    <td className="py-2 px-4 border-b text-center">
                      {quarter2 && quarter2.option1.selected ? (
                        <TiTick className="text-green-500 mx-auto text-2xl" />
                      ) : (
                        <RxCross2 className="text-red-500 mx-auto text-2xl" />
                      )}
                    </td>
                    <td className="py-2 px-4 border-b text-center">
                      {quarter2 && quarter2.option1.cost}
                    </td>
                    <td className="py-2 px-4 border-b text-center">
                      {quarter2 && quarter2.option1.otherCost}
                    </td>
                    <td className="py-2 px-4 border-b text-center">
                      {quarter2 && quarter2.option1.income}
                    </td>
                    <td className="py-2 px-4 border-b text-center">
                      {quarter2 && quarter2.option1.netProfit}
                    </td>
                  </tr>
                  <tr className="border-b-[2px] border-gray-300 hover:bg-gray-300 cursor-pointer">
                    <td className="py-2 px-4 border-b text-center">
                      {quarter2 && quarter2.option2.selected ? (
                        <TiTick className="text-green-500 mx-auto text-2xl" />
                      ) : (
                        <RxCross2 className="text-red-500 mx-auto text-2xl" />
                      )}
                    </td>
                    <td className="py-2 px-4 border-b text-center">
                      {quarter2 && quarter2.option2.cost}
                    </td>
                    <td className="py-2 px-4 border-b text-center">
                      {quarter2 && quarter2.option2.otherCost}
                    </td>
                    <td className="py-2 px-4 border-b text-center">
                      {quarter2 && quarter2.option2.income}
                    </td>
                    <td className="py-2 px-4 border-b text-center">
                      {quarter2 && quarter2.option2.netProfit}
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-300 cursor-pointer border-b-[2px] border-gray-300">
                    <td className="py-2 px-4 border-b text-center">
                      {quarter2 && quarter2.option3.selected ? (
                        <TiTick className="text-green-500 mx-auto text-2xl" />
                      ) : (
                        <RxCross2 className="text-red-500 mx-auto text-2xl" />
                      )}
                    </td>
                    <td className="py-2 px-4 border-b text-center">
                      {quarter2 && quarter2.option3.cost}
                    </td>
                    <td className="py-2 px-4 border-b text-center">
                      {quarter2 && quarter2.option3.otherCost}
                    </td>
                    <td className="py-2 px-4 border-b text-center">
                      {quarter2 && quarter2.option3.income}
                    </td>
                    <td className="py-2 px-4 border-b text-center">
                      {quarter2 && quarter2.option3.netProfit}
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-300 cursor-pointer border-b-[2px] border-gray-300">
                    <td className="py-2 px-4 border-b text-center ">{null}</td>
                    <td className="py-2 px-4 border-b text-center ">{null}</td>
                    <td className="py-2 px-4 border-b text-center ">{null}</td>
                    <td className="py-2 px-4 border-b text-center ">{null}</td>

                    <td className="py-2 px-4 border-b text-center ">
                      {quarter2 && quarter2.totalProfit}
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="hover:bg-gray-300 cursor-pointer w-[100%] mx-auto py-2 px-3 md:px-4 bg-white rounded  flex gap-3">
                <strong>Event:</strong> {quarter2.event}
              </div>
            </div>
          )} */}

          {incomeStatementD && (
            <div className="w-[100%] overflow-auto">
              <table className="w-[70%] mx-auto bg-white border mb-7   shadow-md rounded-lg overflow-hidden">
                <div className="px-4 py-2 font-bold">Income Statement:</div>
                <tr className="hover:bg-gray-300 cursor-pointer border-b-[2px] border-gray-300">
                  <td className="py-2 px-4 border-b text-center">{null}</td>
                  <td className="py-2 px-4 border-b text-center font-bold">
                    Q1
                  </td>
                  <td className="py-2 px-4 border-b text-center font-bold">
                    Q2
                  </td>
                  <td className="py-2 px-4 border-b text-center font-bold">
                    Q3
                  </td>
                  <td className="py-2 px-4 border-b text-center font-bold">
                    Q4
                  </td>
                  <td className="py-2 px-4 border-b text-center font-bold">
                    Total
                  </td>
                </tr>
                <tr className="px-1 py-4 font-bold  w-[100%]">
                  <td className="py-2 px-4 border-b text-start">Income:</td>
                  <td className={`py-2 px-4 border-b text-center`}>{null}</td>
                  <td className={`py-2 px-4 border-b text-center`}>{null}</td>
                  <td className={`py-2 px-4 border-b text-center`}>{null}</td>
                </tr>

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
                              className={`px-4 py-2 text-nowrap ${
                                key === "Total Income"
                                  ? `font-bold px-1 text-[#1B375F] border-b-[2px] border-t-[2px] border-black bg-gray-300`
                                  : ``
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
                                          item.Income < 0 ? `text-red-500` : ""
                                        } ${
                                          key === "Total Income"
                                            ? `font-bold text-[#1B375F] border-b-[2px] border-t-[2px] border-black bg-gray-300`
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
                            {incomeStatementD &&
                              incomeStatementD.length === 3 && (
                                <>
                                  <td
                                    className={`py-2 px-4 border-b text-center ${
                                      key === "Total Income"
                                        ? `font-bold text-[#1B375F] border-b-[2px] border-t-[2px] border-black bg-gray-300`
                                        : ``
                                    }`}
                                  >
                                    {null}
                                  </td>
                                </>
                              )}
                            {incomeStatementD &&
                              incomeStatementD.length === 2 && (
                                <>
                                  <td
                                    className={`py-2 px-4 border-b text-center ${
                                      key === "Total Income"
                                        ? `font-bold text-[#1B375F] border-b-[2px] border-t-[2px] border-black bg-gray-300`
                                        : ``
                                    }`}
                                  >
                                    {null}
                                  </td>
                                  <td
                                    className={`py-2 px-4 border-b text-center ${
                                      key === "Total Income"
                                        ? `font-bold text-[#1B375F] border-b-[2px] border-t-[2px] border-black bg-gray-300`
                                        : ``
                                    }`}
                                  >
                                    {null}
                                  </td>
                                </>
                              )}
                            {incomeStatementD &&
                              incomeStatementD.length === 1 && (
                                <>
                                  <td
                                    className={`py-2 px-4 border-b text-center ${
                                      key === "Total Income"
                                        ? `font-bold text-[#1B375F] border-b-[2px] border-t-[2px] border-black bg-gray-300`
                                        : ``
                                    }`}
                                  >
                                    {null}
                                  </td>
                                  <td
                                    className={`py-2 px-4 border-b text-center ${
                                      key === "Total Income"
                                        ? `font-bold text-[#1B375F] border-b-[2px] border-t-[2px] border-black bg-gray-300`
                                        : ``
                                    }`}
                                  >
                                    {null}
                                  </td>
                                  <td
                                    className={`py-2 px-4 border-b text-center ${
                                      key === "Total Income"
                                        ? `font-bold text-[#1B375F] border-b-[2px] border-t-[2px] border-black bg-gray-300`
                                        : ``
                                    }`}
                                  >
                                    {null}
                                  </td>
                                </>
                              )}
                            <td
                              className={`py-2 px-4 border-b text-center  ${
                                key === "Total Income"
                                  ? `font-bold text-[#1B375F] border-b-[2px] border-t-[2px] border-black bg-gray-300`
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
                      <tr className="px-1 py-4 font-bold ">
                        <td className="py-2 px-4 border-b text-start">
                          Expenditure:
                        </td>
                        <td className={`py-2 px-4 border-b text-center`}>
                          {null}
                        </td>
                        <td className={`py-2 px-4 border-b text-center`}>
                          {null}
                        </td>
                        <td className={`py-2 px-4 border-b text-center`}>
                          {null}
                        </td>
                      </tr>
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
                            {incomeStatementD.map((item, index) => (
                              <td
                                className={`py-2 px-4 border-b text-center  ${
                                  key === "Total Expenditure"
                                    ? `font-bold text-[#1B375F] border-b-[2px] border-t-[2px] border-black bg-gray-300`
                                    : ``
                                }`}
                              >
                                {item["Expenditure"][key]}
                              </td>
                            ))}

                            {incomeStatementD &&
                              incomeStatementD.length === 3 && (
                                <>
                                  <td
                                    className={`py-2 px-4 border-b text-center ${
                                      key === "Total Expenditure"
                                        ? `font-bold px-1 text-[#1B375F] border-b-[2px] border-t-[2px] border-black bg-gray-300`
                                        : ``
                                    }`}
                                  >
                                    {null}
                                  </td>
                                </>
                              )}
                            {incomeStatementD &&
                              incomeStatementD.length === 2 && (
                                <>
                                  <td
                                    className={`py-2 px-4 border-b text-center ${
                                      key === "Total Expenditure"
                                        ? `font-bold px-1 text-[#1B375F] border-b-[2px] border-t-[2px] border-black bg-gray-300`
                                        : ``
                                    }`}
                                  >
                                    {null}
                                  </td>
                                  <td
                                    className={`py-2 px-4 border-b text-center ${
                                      key === "Total Expenditure"
                                        ? `font-bold px-1 text-[#1B375F] border-b-[2px] border-t-[2px] border-black bg-gray-300`
                                        : ``
                                    }`}
                                  >
                                    {null}
                                  </td>
                                </>
                              )}
                            {incomeStatementD &&
                              incomeStatementD.length === 1 && (
                                <>
                                  <td
                                    className={`py-2 px-4 border-b text-center ${
                                      key === "Total Expenditure"
                                        ? `font-bold px-1 text-[#1B375F] border-b-[2px] border-t-[2px] border-black bg-gray-300`
                                        : ``
                                    }`}
                                  >
                                    {null}
                                  </td>
                                  <td
                                    className={`py-2 px-4 border-b text-center ${
                                      key === "Total Expenditure"
                                        ? `font-bold px-1 text-[#1B375F] border-b-[2px] border-t-[2px] border-black bg-gray-300`
                                        : ``
                                    }`}
                                  >
                                    {null}
                                  </td>
                                  <td
                                    className={`py-2 px-4 border-b text-center ${
                                      key === "Total Expenditure"
                                        ? `font-bold px-1 text-[#1B375F] border-b-[2px] border-t-[2px] border-black bg-gray-300`
                                        : ``
                                    }`}
                                  >
                                    {null}
                                  </td>
                                </>
                              )}
                            <td
                              className={`py-2 px-4 border-b text-center  ${
                                key === "Total Expenditure"
                                  ? `font-bold text-[#1B375F] border-b-[2px] border-t-[2px] border-black bg-gray-300`
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

                      <tr className="hover:bg-gray-300 cursor-pointer border-b-[2px] border-gray-300">
                        <td className="px-4 py-2 text-nowrap font-bold">
                          Profit / Loss
                        </td>
                        {incomeStatementD.map((item, index) => (
                          <td
                            className={`py-2 px-4 border-b text-center  font-bold`}
                          >
                            {item["Income"]["Total Income"] -
                              item["Expenditure"]["Total Expenditure"]}
                          </td>
                        ))}
                        {incomeStatementD && incomeStatementD.length === 3 && (
                          <>
                            <td className={`py-2 px-4 border-b text-center`}>
                              {null}
                            </td>
                          </>
                        )}
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
                        <td
                          className={`py-2 px-4 border-b text-center font-bold`}
                        >
                          {incomeStatementD.reduce(
                            (acc, current) =>
                              acc + current["Income"]["Total Income"],
                            0
                          ) -
                            incomeStatementD.reduce(
                              (acc, current) =>
                                acc +
                                current["Expenditure"]["Total Expenditure"],
                              0
                            )}
                        </td>
                      </tr>

                      {Object.entries(incomeStatementD[0]).map(
                        ([key, value]) => {
                          if (
                            key === "Income" ||
                            key === "Expenditure" ||
                            key === "_id" ||
                            key === "EBITIDA" ||
                            key === "EBIT" ||
                            key === "Depreciation" ||
                            key === "Use Of Net Operating Loss" ||
                            key === "Interest" ||
                            key === "Net Operating Loss" ||
                            key === "Income Tax Expense"
                          ) {
                            return null;
                          }
                          return (
                            <tr
                              key={key}
                              className="hover:bg-gray-300 cursor-pointer border-b-[2px] border-gray-300"
                            >
                              <td
                                className={`py-2 px-4 border-b text-nowrap ${
                                  key === "EBITIDA" ||
                                  key === "EBIT" ||
                                  key === "NET INCOME"
                                    ? `font-bold px-1 text-[#1B375F] border-b-[2px] border-t-[2px] border-black bg-gray-300`
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
                                    key === "NET INCOME"
                                      ? `font-bold  text-[#1B375F]  border-b-[2px] border-t-[2px] border-black bg-gray-300`
                                      : ``
                                  }`}
                                >
                                  {key === "NET INCOME"
                                    ? item["NET INCOME"] +
                                      item["Income Tax Expense"]
                                    : item[key]}
                                </td>
                              ))}
                              {incomeStatementD &&
                                incomeStatementD.length === 3 && (
                                  <>
                                    <td
                                      className={`py-2 px-4 border-b text-center ${
                                        key === "NET INCOME"
                                          ? `font-bold px-1 text-[#1B375F] border-b-[2px] border-t-[2px] border-black bg-gray-300`
                                          : ``
                                      }`}
                                    >
                                      {null}
                                    </td>
                                  </>
                                )}
                              {incomeStatementD &&
                                incomeStatementD.length === 2 && (
                                  <>
                                    <td
                                      className={`py-2 px-4 border-b text-center ${
                                        key === "NET INCOME"
                                          ? `font-bold px-1 text-[#1B375F] border-b-[2px] border-t-[2px] border-black bg-gray-300`
                                          : ``
                                      }`}
                                    >
                                      {null}
                                    </td>
                                    <td
                                      className={`py-2 px-4 border-b text-center ${
                                        key === "NET INCOME"
                                          ? `font-bold px-1 text-[#1B375F] border-b-[2px] border-t-[2px] border-black bg-gray-300`
                                          : ``
                                      }`}
                                    >
                                      {null}
                                    </td>
                                  </>
                                )}
                              {incomeStatementD &&
                                incomeStatementD.length === 1 && (
                                  <>
                                    <td
                                      className={`py-2 px-4 border-b text-center ${
                                        key === "NET INCOME"
                                          ? `font-bold px-1 text-[#1B375F] border-b-[2px] border-t-[2px] border-black bg-gray-300`
                                          : ``
                                      }`}
                                    >
                                      {null}
                                    </td>
                                    <td
                                      className={`py-2 px-4 border-b text-center ${
                                        key === "NET INCOME"
                                          ? `font-bold px-1 text-[#1B375F] border-b-[2px] border-t-[2px] border-black bg-gray-300`
                                          : ``
                                      }`}
                                    >
                                      {null}
                                    </td>
                                    <td
                                      className={`py-2 px-4 border-b text-center ${
                                        key === "NET INCOME"
                                          ? `font-bold px-1 text-[#1B375F] border-b-[2px] border-t-[2px] border-black bg-gray-300`
                                          : ``
                                      }`}
                                    >
                                      {null}
                                    </td>
                                  </>
                                )}
                              <td
                                className={`py-2 px-4 border-b text-center ${
                                  key === "NET INCOME"
                                    ? `font-bold text-[#1B375F]  border-b-[2px] border-t-[2px] border-black bg-gray-300`
                                    : ``
                                }`}
                              >
                                {key === "NET INCOME"
                                  ? incomeStatementD.reduce(
                                      (acc, current) =>
                                        acc + current["NET INCOME"],
                                      0
                                    ) +
                                    incomeStatementD.reduce(
                                      (acc, current) =>
                                        acc + current["Income Tax Expense"],
                                      0
                                    )
                                  : incomeStatementD.reduce(
                                      (acc, current) => acc + current[key],
                                      0
                                    )}
                                {/* {incomeStatementD.reduce(
                                  (acc, current) => acc + current[key],
                                  0
                                ) } */}
                              </td>
                            </tr>
                          );
                        }
                      )}
                    </>
                  )
                  // ))
                }
              </table>
            </div>
          )}

          {/* {incomeStatementD && (
            <div className="w-[95%] md:w-[70%] mx-auto">
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
                <div className="px-4 py-2 font-bold">Income:</div>

                {incomeStatementD && (
                  <>
                    {Object.entries(incomeStatementD[0].Income).map(
                      ([key, value]) => (
                        <tr
                          key={key}
                          className="hover:bg-gray-300 cursor-pointer border-b-[2px] border-gray-300"
                        >
                          <td className=" px-4 py-2">{key}</td>
                          {incomeStatementD.map((item, index) => {
                            return (
                              <>
                                
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
                                        incomeStatementD[index].Income[key] /
                                          3
                                      ) -
                                      Math.floor(
                                        incomeStatementD[index].Income[key] /
                                          3
                                      )}
                                  </td>
                                </>
                              </>
                            );
                          })}
                        </tr>
                      )
                    )}
                    <div className="px-4 py-2 font-bold">
                      Total Expenditure:
                    </div>
                    {Object.entries(
                      incomeStatementD[0]["Expenditure"]
                    ).map(([key, value]) => (
                      <tr
                        key={key}
                        className="hover:bg-gray-300 cursor-pointer border-b-[2px] border-gray-300"
                      >
                        <td className=" px-4 py-2">{key}</td>
                        
                        {incomeStatementD.map((item, index) => {
                         
                          return (
                            <>
                              <td
                                className={`py-2 px-4 border-b text-center ${
                                  item.Revenue < 0 ? `text-red-500` : ""
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
                                }`}
                              >
                                {
                                  incomeStatementD[index]["Expenditure"][
                                    key
                                  ] -
                                    Math.floor(
                                      incomeStatementD[index][
                                        "Expenditure"
                                      ][key] / 3
                                    ) -
                                    Math.floor(
                                      incomeStatementD[index][
                                        "Expenditure"
                                      ][key] / 3
                                    )

                                  
                                }
                              </td>
                            </>
                          );
                         
                        })}
                      </tr>
                    ))}
                   
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
                        </tr>
                      ))}
                  </>
                )}
              </table>
            </div>
          )} */}

          {/* <CSVLink
            data={data}
            headers={headers}
            filename={"quarter1_info.csv"}
            className="btn btn-primary bg-green-600 px-3 text-white rounded py-2 absolute top-4 right-5"
          >
            Export CSV
          </CSVLink> */}
        </div>
      )}
    </div>
  );
};

export default MyComponent;
