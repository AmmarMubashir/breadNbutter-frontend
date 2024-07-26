import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AdminNav from "../components/AdminNav";
import { useGetUserIncomeAdmin } from "../../api/MyIncomeStatementApi";

const UpdateUserFinanceStatement = () => {
  const { id } = useParams();
  const { getUserIncomeAdmin } = useGetUserIncomeAdmin();
  const [incomeStatement, setIncomeStatement] = useState();

  useEffect(() => {
    const loadData = async function () {
      const data = await getUserIncomeAdmin(id);

      if (data) {
        setIncomeStatement(data.income);
        // console.log(data);
      }
    };

    loadData();
  }, []);
  return (
    <div className="w-[100%] h-[100vh] overflow-auto flex">
      <AdminNav />
      <div className="h-[100vh] overflow-auto flex-1">
        <div className="flex-1 min-h-[100vh] bg-[#FBB748] md:py-4 py-[3rem]">
          <h1 className="mx-auto w-[95%] md:w-[85%] bg-white px-2 py-2 rounded font-bold text-center text-[1.4rem]">
            Update Finance Statement
          </h1>
          <div className="mx-auto mt-4 w-[95%] md:w-[85%] bg-white px-4 py-2 rounded text-start">
            <form>
              {incomeStatement &&
                incomeStatement.map((item, index) => (
                  <>
                    <h1 className="font-bold text-1.4rem mt-3">
                      Quarter {index + 1}:
                    </h1>
                    <div className=" mt-1 flex flex-col md:flex-row gap-5">
                      <div className="flex flex-1 flex-col gap-6">
                        <h1 className="font-bold text-1.4rem">Revenues:</h1>
                        <div className="flex flex-col flex-1 items-start gap-2">
                          <label htmlFor="AdditionalIncome">
                            Additional Income:
                          </label>
                          <input
                            type="number"
                            value={item.Revenues["Additional Income"]}
                            min={0}
                            id="AdditionalIncome"
                            className="bg-[#FCC56B] px-3 py-2  rounded  w-[100%] text-[#00000084] outline-none"
                          />
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col gap-6">
                        <h1 className="font-bold text-1.4rem">
                          Expenses and costs:
                        </h1>
                        <div className="flex flex-col flex-1 items-start gap-2">
                          <label htmlFor="AdditionalCost">
                            Additional Cost:
                          </label>
                          <input
                            type="number"
                            value={
                              item["Expenses And Costs"]["Additional Cost"]
                            }
                            min={0}
                            id="AdditionalCost"
                            className="bg-[#FCC56B] px-3 py-2  rounded  w-[100%] text-[#00000084] outline-none"
                          />
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              <div className="px-2 py-2 mt-3">
                <button className="w-max px-3 py-2 bg-[#1B375F] rounded text-white ml-auto block">
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateUserFinanceStatement;
