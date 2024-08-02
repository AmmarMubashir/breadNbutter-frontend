import React, { useEffect, useState } from "react";
import RightNav from "./components/RightNav";
import { useGetEmployeeInfo } from "../api/MyEmployeeApi";
import {
  useCreateQuarter1Emp,
  useGetQuarter1Emp,
} from "../api/MyQuarter1EmpApi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Quarter1EmployeeInfo = () => {
  const { getEmployeeInfo } = useGetEmployeeInfo();
  const [employeeInfo, setEmployeeInfo] = useState();
  const [quarter1EmpInfo, setQuarter1EmpInfo] = useState();
  const { createQuarter1Emp, isSuccess, error } = useCreateQuarter1Emp();
  const { getQuarter1Emp } = useGetQuarter1Emp();
  const navigate = useNavigate();
  useEffect(() => {
    const loadData = async () => {
      const data = await getEmployeeInfo();
      const data1 = await getQuarter1Emp();

      if (data1) {
        navigate("/quarter1");
      }
      if (data) {
        console.log(data);
        setEmployeeInfo(data);
        const EmpInfo = data.map((item) => ({
          Position: item.Position,
          "Salaries per quarter": 0,
        }));
        setQuarter1EmpInfo(EmpInfo);
      }
    };
    loadData();
  }, []);

  const handleSelectChange = (e, index) => {
    // console.log(employeeInfo[index]["Salaries per quarter"] * e.target.value);
    const updatedEmployeeInfo = [...quarter1EmpInfo];

    updatedEmployeeInfo[index]["Salaries per quarter"] =
      e.target.value * employeeInfo[index]["Salaries per quarter"];

    setQuarter1EmpInfo(updatedEmployeeInfo);
  };
  const handleSubmit = async () => {
    // const total = quarter1EmpInfo.reduce(
    //   (acc, curr) => acc + curr["Salaries per quarter"],
    //   0
    // );

    console.log(quarter1EmpInfo);
    const data = await createQuarter1Emp(quarter1EmpInfo);
  };
  useEffect(() => {
    if (isSuccess) {
      toast.success("Employees info submitted successfully");
      navigate("/quarter1");
    }
    if (error) {
      toast.error("Failed to submit employees info");
    }
  }, [isSuccess, error]);
  return (
    <div className="w-[100%] h-[100vh] overflow-auto flex">
      <RightNav />
      <div className="h-[100vh] overflow-auto flex-1">
        <div className="flex-1 min-h-[100vh] bg-[#FBB748] md:py-4 py-[3rem] flex items-center">
          {employeeInfo && (
            <div className="w-[95%] md:w-[85%] rounded mx-auto overflow-auto">
              <div className="w-[100%] px-2 py-3 bg-white rounded font-bold ">
                Manage Emloyee for quarter 1
              </div>
              <table className=" bg-white border  mb-7 w-[100%]  shadow-md rounded-lg  mt-3">
                <thead>
                  <tr className="hover:bg-gray-300 cursor-pointer border-b-[2px] border-gray-300">
                    <th className="py-2 px-2 sm:px-3 md:px-4 border-b text-start">
                      Positions
                    </th>
                    <th className="py-2 px-2 sm:px-3 md:px-4 border-b text-center">
                      Number
                    </th>
                    <th className="py-2 px-2 sm:px-3 md:px-4 border-b text-center">
                      Salaries per quarter
                    </th>
                    <th className="py-2 px-2 sm:px-3 md:px-4 border-b text-center">
                      Totals
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {employeeInfo &&
                    quarter1EmpInfo &&
                    quarter1EmpInfo.map((item, index) => (
                      <tr
                        key={item._id}
                        className="hover:bg-gray-300 cursor-pointer border-b-[2px] border-gray-300"
                      >
                        <td className="py-2 px-2 sm:px-3 md:px-4 border-b text-start">
                          {item.Position}
                        </td>
                        <td className="py-2 px-2 sm:px-3 md:px-4 border-b text-center">
                          <select
                            name=""
                            id=""
                            onChange={(e) => handleSelectChange(e, index)}
                            className="border-none outline-none w-[60px] text-center  px-1 bg-gray-300 rounded "
                          >
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                          </select>
                        </td>
                        <td className="py-2 px-2 sm:px-3 md:px-4 border-b text-center">
                          {employeeInfo[index]["Salaries per quarter"]}
                        </td>
                        <td className="py-2 px-2 sm:px-3 md:px-4 border-b text-center">
                          {item["Salaries per quarter"]}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
              <div>
                <button
                  className="px-3 py-2 bg-[#1B375F] text-white rounded ml-auto block"
                  onClick={handleSubmit}
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quarter1EmployeeInfo;
