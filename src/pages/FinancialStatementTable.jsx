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

  return (
    <div className="w-[100%] h-[100vh]  flex">
      {/* <div className="md:hidden block"> */}
      <RightNav />
      {/* </div> */}
      {/* <div className="hidden md:block pt-6 ml-4">
        <button onClick={() => navigate("/introduction")}>
          <IoArrowBack className="text-black text-[2rem] " />
        </button>
      </div> */}
      {quarter1 === undefined && (
        <div className="md:py-4 py-[4rem] w-[85%]">
          <div className="w-[95%] md:w-[95%] mx-auto mb-3 min-h-[200px] bg-[#ffffff31] flex justify-center items-center">
            <p className="text-center text-[1.4rem]">
              Financial Statement goes here when you fill quarters...
            </p>
          </div>
        </div>
      )}
      {quarter1 && (
        <div className="w-[100%] flex flex-col gap-1 justify-center items-center md:mx-auto pt-4">
          <div className="mt-4">
            <h1 className="font-bold pt-2 text-[1.4rem]">
              Financial Statement
            </h1>
          </div>

          {incomeStatementD && (
            <div className="w-[95%] md:w-[85%] overflow-auto">
              <table className="w-[100%] mx-auto bg-white border mb-7   shadow-md rounded-lg overflow-hidden">
                <div className="px-4 py-1 font-bold">Income Statement:</div>
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
                            key === "Use Of Net Operating Loss" ||
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
