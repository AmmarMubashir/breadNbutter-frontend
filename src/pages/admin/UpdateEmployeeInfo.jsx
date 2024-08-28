import React, { useEffect, useState } from "react";
import AdminNav from "../components/AdminNav";
import {
  useGetEmployeeInfo,
  useUpdateEmployeeInfo,
} from "../../api/MyEmployeeApi";
import { toast } from "react-toastify";

const UpdateEmployeeInfo = () => {
  const { getEmployeeInfo } = useGetEmployeeInfo();
  const [employeeInfo, setEmployeeInfo] = useState();
  const { updateEmployeeInfo, error, isSuccess } = useUpdateEmployeeInfo();
  useEffect(() => {
    const loadData = async () => {
      const data = await getEmployeeInfo();
      if (data) {
        console.log(data);
        setEmployeeInfo(data);
      }
    };
    loadData();
  }, []);

  const handleInputChange = (e, index, key) => {
    // Create a copy of employeeInfo
    const updatedEmployeeInfo = [...employeeInfo];

    // Update the specific property using bracket notation
    updatedEmployeeInfo[index][key] = +e.target.value;

    // Set the state with the updated employeeInfo
    setEmployeeInfo(updatedEmployeeInfo);
  };

  const submitHandler = async () => {
    console.log("UPDATE EMPLOYEE INFO", employeeInfo);
    await updateEmployeeInfo(employeeInfo);
  };
  useEffect(() => {
    if (isSuccess) {
      toast.success("Employee info updated successfully");
    }
    if (error) {
      toast.error("Error in updating employee info");
    }
  }, [error, isSuccess]);
  return (
    <div className="w-[100%] h-[100vh] overflow-auto flex">
      <AdminNav />
      <div className="h-[100vh] overflow-auto flex-1">
        <div className=" w-[100%] min-h-[100vh] bg-[#80808075] md:py-4 py-[3rem]">
          <div className="w-[95%] md:w-[85%] bg-white px-2 py-2 rounded text-[1.2rem] mx-auto cursor-pointer font-bold flex justify-between">
            Staffing
            <button
              className="px-4 py-2 rounded ml-auto bg-[#1B375F] text-white text-[1rem] font-normal"
              onClick={submitHandler}
            >
              Update
            </button>
          </div>
          {employeeInfo && (
            <div className="w-[95%] md:w-[85%] rounded mx-auto overflow-auto">
              <table className=" bg-white border mb-7 w-[100%]  shadow-md rounded-lg  mt-2">
                <thead>
                  <tr className="hover:bg-gray-300 cursor-pointer border-b-[2px] border-gray-300">
                    <th className="py-2 px-2 sm:px-3 md:px-4 border-b text-start">
                      Positions
                    </th>
                    <th className="py-2 px-2 sm:px-3 md:px-4 border-b text-center">
                      Salaries per quarter
                    </th>
                    <th className="py-2 px-2 sm:px-3 md:px-4 border-b text-center">
                      Income
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {employeeInfo &&
                    employeeInfo.map((item, index) => (
                      <tr
                        key={item._id}
                        className="hover:bg-gray-300 cursor-pointer border-b-[2px] border-gray-300"
                      >
                        <td className="py-2 px-2 sm:px-3 md:px-4 border-b text-start">
                          {item.Position}
                        </td>
                        <td className="py-2 px-2 sm:px-3 md:px-4 border-b text-center">
                          <input
                            className="border-none outline-none w-[60px] text-center  px-1 bg-gray-300 rounded disabled:cursor-not-allowed"
                            type="number"
                            value={item["Salaries per quarter"]}
                            onChange={(e) =>
                              handleInputChange(
                                e,
                                index,
                                "Salaries per quarter"
                              )
                            }
                          />
                        </td>
                        <td className="py-2 px-2 sm:px-3 md:px-4 border-b text-center">
                          <input
                            className="border-none outline-none w-[60px] text-center  px-1 bg-gray-300 rounded disabled:cursor-not-allowed"
                            type="number"
                            value={item.Income}
                            onChange={(e) =>
                              handleInputChange(e, index, "Income")
                            }
                          />
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UpdateEmployeeInfo;
