import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AdminNav from "../components/AdminNav";
import { toast } from "react-toastify";
import {
  useGetUserIncomeAdmin,
  useUpdateUserIncomeAdmin,
} from "../../api/MyIncomeStatementApi";

const UpdateUserFinanceStatement = () => {
  const { id } = useParams();
  const { getUserIncomeAdmin } = useGetUserIncomeAdmin();
  const [incomeStatement, setIncomeStatement] = useState();
  const { updateUserIncomeAdmin, isSuccess, error } =
    useUpdateUserIncomeAdmin();

  useEffect(() => {
    const loadData = async function () {
      const data = await getUserIncomeAdmin(id);

      if (data) {
        setIncomeStatement(data.income);
        // console.log(data);
      }
    };

    loadData();
  }, [id]);
  const handleRevenueChange = (index, key, event) => {
    const newIncomeData = [...incomeStatement];
    newIncomeData[index].Income[key] = +event.target.value;
    setIncomeStatement(newIncomeData);
  };
  const handleCostChange = (index, key, event) => {
    const newIncomeData = [...incomeStatement];
    newIncomeData[index]["Expenditure"][key] = +event.target.value;
    setIncomeStatement(newIncomeData);
  };

  // console.log("UPDATED", incomeStatement);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // console.log("id", id);
    // console.log("SUBMIT", incomeStatement);
    if (incomeStatement && id) {
      await updateUserIncomeAdmin({ data: incomeStatement, id });
      // console.log("CHECK", incomeStatement);
    }
  };
  useEffect(() => {
    if (isSuccess) {
      toast.success("Income Statement Updated Successfully");
    }
    if (error) {
      toast.error("Error in Updating Income Statement");
    }
  }, [isSuccess, error]);
  return (
    <div className="w-[100%] h-[100vh] overflow-auto flex">
      <AdminNav />
      <div className="h-[100vh] overflow-auto flex-1">
        <div className="flex-1 min-h-[100vh] bg-[#FBB748] md:py-4 py-[3rem]">
          <h1 className="mx-auto w-[95%] md:w-[85%] bg-white px-2 py-2 rounded font-bold text-center text-[1.4rem]">
            Update Finance Statement
          </h1>
          <div className="mx-auto mt-4 w-[95%] md:w-[85%] bg-white px-4 py-2 rounded text-start">
            <form onSubmit={handleSubmit}>
              {incomeStatement &&
                incomeStatement.map((item, index) => (
                  <>
                    <h1 className="font-bold text-1.4rem mt-3">
                      Quarter {index + 1}:
                    </h1>
                    <div className=" mt-1 flex flex-col md:flex-row gap-5">
                      <div className="flex flex-1 flex-col gap-6">
                        <h1 className="font-bold text-1.4rem">Income:</h1>
                        <div className="flex flex-col flex-1 items-start gap-2">
                          <label htmlFor="AdditionalIncome">
                            Additional income:
                          </label>
                          <input
                            type="number"
                            value={item.Income["Additional income"]}
                            onChange={(e) =>
                              handleRevenueChange(index, "Additional income", e)
                            }
                            // min={0}
                            id="AdditionalIncome"
                            className="bg-[#FCC56B] px-3 py-2  rounded  w-[100%] text-[#00000084] outline-none"
                          />
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col gap-6">
                        <h1 className="font-bold text-1.4rem">Expenditure:</h1>
                        <div className="flex flex-col flex-1 items-start gap-2">
                          <label htmlFor="AdditionalCost">
                            Additional cost:
                          </label>
                          <input
                            type="number"
                            value={item["Expenditure"]["Additional cost"]}
                            onChange={(e) =>
                              handleCostChange(index, "Additional cost", e)
                            }
                            // min={0}
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
