import React, { useEffect, useState } from "react";
import { useUpdateIncome, useGetIncome } from "../../api/MyIncomeStatementApi";
import { toast } from "react-toastify";
import AdminNav from "../components/AdminNav";

const UpdateIncomeStatement = () => {
  const [incomeData, setIncomeData] = useState();
  const { getIncome } = useGetIncome();
  const {
    updateIncome,
    isSuccess: updateSuccess,
    error: updateError,
  } = useUpdateIncome();
  useEffect(() => {
    const loadData = async function () {
      const data = await getIncome();

      setIncomeData(data);
    };

    loadData();
  }, []);

  // if (incomeData) {
  //   console.log(incomeData);
  // }

  const handleRevenueChange = (index, key, event) => {
    const newIncomeData = [...incomeData];
    newIncomeData[index].Income[key] = +event.target.value;
    setIncomeData(newIncomeData);
  };

  const handleCostsChange = (index, key, event) => {
    const newIncomeData = [...incomeData];
    newIncomeData[index]["Expenditure"][key] = +event.target.value;
    setIncomeData(newIncomeData);
  };
  const handleDepreciationChange = (index, event) => {
    const newIncomeData = [...incomeData];
    newIncomeData[index].Depreciation = +event.target.value;
    setIncomeData(newIncomeData);
  };

  let data1;
  const handleUpdateChange = async () => {
    // console.log("UPDATED", data);
    const data = {
      income: incomeData,
    };
    // const data1 = await updateIncome(incomeData);
    data1 = await updateIncome(data);

    // setIncomeData(data1);
    // console.log("checking", data1);

    if (data1) {
      setIncomeData(data1.income);
    }
  };

  useEffect(() => {
    if (updateSuccess) {
      toast.success("Income Statement updated successfully ");
    }
    if (updateError) {
      toast.error("Error in Updating Income Statement");
    }
  }, [updateSuccess, updateError]);

  return (
    <div className="w-[100%] h-[100vh] overflow-auto flex">
      <AdminNav />
      <div className="h-[100vh] overflow-auto flex-1">
        <div className="bg-[#80808075] w-[100%] overflow-hidden min-h-[100vh] py-[3rem] md:py-4">
          {incomeData && (
            <div className="w-[100%]">
              <div className="w-[95%] md:w-[85%] mx-auto py-2 px-3 md:px-4 bg-white rounded font-bold flex justify-between">
                Income Statement
                <button
                  className="bg-green-500 text-white rounded px-2 py-1"
                  onClick={handleUpdateChange}
                >
                  Update
                </button>
              </div>
              <div className="w-[95%] md:w-[85%] rounded mx-auto overflow-auto">
                <table className=" bg-white border mb-7 w-[100%]  shadow-md rounded-lg  mt-2">
                  <thead>
                    <tr className="hover:bg-gray-300 cursor-pointer border-b-[2px] border-gray-300">
                      <th className="py-2 px-4 border-b text-start">Key</th>
                      <th className="py-2 px-4 border-b text-center">Q1</th>
                      <th className="py-2 px-4 border-b text-center">Q2</th>
                      <th className="py-2 px-4 border-b text-center">Q3</th>
                      <th className="py-2 px-4 border-b text-center">Q4</th>
                    </tr>
                  </thead>
                  <tbody>
                    <div className="mx-auto py-2 px-3 md:px-4 bg-white rounded font-bold flex gap-3">
                      Income
                    </div>
                    {Object.entries(incomeData[0].Income).map(
                      ([key, value]) => (
                        <tr
                          key={key}
                          className="hover:bg-gray-300 cursor-pointer border-b-[2px] border-gray-300"
                        >
                          <td
                            className={`py-2 px-4 border-b ${
                              key === "Total Income" ||
                              key === "Income from opportunities" ||
                              key === "Additional income" ||
                              key == "Extra income from opportunities"
                                ? `hidden`
                                : ``
                            }`}
                          >
                            {key}
                          </td>
                          {incomeData.map((item, index) => (
                            <td
                              className={`py-2 px-0 md:px-4 border-b text-center ${
                                key === "Total Income" ||
                                key === "Income from opportunities" ||
                                key === "Additional income" ||
                                key == "Extra income from opportunities"
                                  ? `hidden`
                                  : ``
                              }`}
                            >
                              <input
                                className="border-none outline-none w-[50px] text-center  px-1 bg-gray-300 rounded disabled:cursor-not-allowed"
                                type="text"
                                value={incomeData[index].Income[key]}
                                onChange={(e) =>
                                  handleRevenueChange(index, key, e)
                                }
                              />
                              {/* {incomeData[index].Income[key]} */}
                            </td>
                          ))}
                        </tr>
                      )
                    )}
                    {/* Costs */}
                    <div className="mx-auto py-2 px-[5px] md:px-[5px] bg-white rounded font-bold flex gap-3">
                      Expenditure
                    </div>
                    {Object.entries(incomeData[0]["Expenditure"]).map(
                      ([key, value]) => (
                        <tr
                          key={key}
                          className="hover:bg-gray-300 cursor-pointer border-b-[2px] border-gray-300"
                        >
                          <td
                            className={`py-2 px-4 border-b ${
                              key === "Total Expenditure" ||
                              key === "Expenses from opportunities" ||
                              key === "Expenses from other sources" ||
                              key === "Additional cost" ||
                              key == "Extra cost from opportunities"
                                ? `hidden`
                                : ``
                            }`}
                          >
                            {key}
                          </td>
                          {incomeData.map((item, index) => (
                            <td
                              className={`py-2 px-4 border-b text-center ${
                                key === "Total Expenditure" ||
                                key === "Expenses from opportunities" ||
                                key === "Expenses from other sources" ||
                                key === "Additional cost" ||
                                key == "Extra cost from opportunities"
                                  ? `hidden`
                                  : ``
                              }`}
                            >
                              <input
                                className={`border-none outline-none w-[50px] text-center px-1 bg-gray-300 rounded disabled:cursor-not-allowed`}
                                type="text"
                                disabled={key === "Total Expenditure"}
                                value={incomeData[index]["Expenditure"][key]}
                                onChange={(e) =>
                                  handleCostsChange(index, key, e)
                                }
                              />
                              {/* {incomeData[index]["Expenditure"][key]} */}
                            </td>
                          ))}
                        </tr>
                      )
                    )}
                    {/* Depreciation */}
                    {
                      <tr className="hover:bg-gray-300 cursor-pointer border-b-[2px] border-gray-300">
                        <td className="py-2 px-4 border-b">Depreciation</td>
                        {incomeData.map((item, index) => (
                          <td className="py-2 px-4 border-b text-center">
                            <input
                              className={`border-none outline-none w-[50px] text-center px-1 bg-gray-300 rounded disabled:cursor-not-allowed`}
                              type="text"
                              value={incomeData[index].Depreciation}
                              onChange={(e) =>
                                handleDepreciationChange(index, e)
                              }
                            />
                            {/* {incomeData[index].Depreciation} */}
                          </td>
                        ))}
                      </tr>
                    }
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UpdateIncomeStatement;
