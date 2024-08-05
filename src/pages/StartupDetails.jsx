import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useGetStartup } from "../api/MyStartupApi";
import RightNav from "./components/RightNav";
import Loader from "./components/Loader";
// import { useCashContext } from "../../context/CashFlowContext";

const StartupDetails = () => {
  const { id } = useParams();
  // const { cashFlowStatement } = useCashContext();

  // if (cashFlowStatement) {
  //   console.log("CASH_FLOW_STATEMENT", cashFlowStatement);
  // }

  const { getStartup } = useGetStartup();
  const [startupData, setStartupData] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const startup = await getStartup(id);
        setStartupData(startup.data);
      } catch (error) {
        console.error("Error fetching startup data:", error);
      }
    };

    loadData();
  }, [id]);
  return (
    <div className="w-full h-[100vh] flex bg-[#fbb748] relative overflow-hidden">
      <RightNav />
      <div className=" h-[100vh] w-[95%] md:w-[65%] flex flex-col justify-center items-center md:absolute right-0">
        <h1 className="mb-7 text-[1.2rem] text-[#1b375f] font-bold">
          Startup Details
        </h1>
        {!startupData && <Loader />}
        {startupData && (
          <>
            <table className="w-[80%] bg-white border border-gray-300">
              <thead className="bg-gray-200">
                <tr className="cursor-pointer">
                  <th className="px-6 py-3 border-b border-gray-300 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                    Field
                  </th>
                  <th className="px-6 py-3 border-b border-gray-300 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                    Details
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr className="cursor-pointer hover:bg-gray-200">
                  <td className="px-6 py-4 whitespace-nowrap">Name</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {startupData ? startupData.name : "Loading..."}
                  </td>
                </tr>

                <tr className="cursor-pointer hover:bg-gray-200">
                  <td className="px-6 py-4 whitespace-nowrap">Location</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {startupData ? startupData.location : "Loading..."}
                  </td>
                </tr>
                <tr className="cursor-pointer hover:bg-gray-200">
                  <td className="px-6 py-4 whitespace-nowrap">
                    No of Customer
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {startupData
                      ? `${startupData["No of Clients per day"]} `
                      : "Loading..."}
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="absolute bottom-9 right-11">
              <Link
                to="/quarter1EmpInfo"
                className="bg-[#1b375f] text-white px-4 py-2 rounded"
              >
                Next
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default StartupDetails;
