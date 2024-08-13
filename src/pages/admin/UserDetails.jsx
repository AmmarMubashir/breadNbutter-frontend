import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import AdminNav from "../components/AdminNav";
import { TiTick } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import UserFinanceStatement from "./UserFinanceStatement";
import {
  useGetIndividualStartupAdmin,
  useGetIndividualQuarter1Admin,
  useGetIndividualQuarter2Admin,
  useGetIndividualQuarter3Admin,
  useGetIndividualQuarter4Admin,
} from "../../api/MyStartupApi";

const UserDetails = () => {
  const { getIndividualStartupAdmin } = useGetIndividualStartupAdmin();
  const [startupData, setStartupData] = useState();
  const [quarter1, setQuarter1] = useState();
  const [quarter2, setQuarter2] = useState();
  const [quarter3, setQuarter3] = useState();
  const [quarter4, setQuarter4] = useState();
  const { getQuarter1Admin } = useGetIndividualQuarter1Admin();
  const { getQuarter2Admin } = useGetIndividualQuarter2Admin();
  const { getQuarter3Admin } = useGetIndividualQuarter3Admin();
  const { getQuarter4Admin } = useGetIndividualQuarter4Admin();
  const { id } = useParams();
  useEffect(() => {
    const loadData = async function () {
      const data = await getIndividualStartupAdmin(id);
      const quarter1D = await getQuarter1Admin(id);
      const quarter2D = await getQuarter2Admin(id);
      const quarter3D = await getQuarter3Admin(id);
      const quarter4D = await getQuarter4Admin(id);
      // console.log("HEllo", quarter1D);

      if (data) {
        console.log(data);
        setStartupData(data.data);
      }
      if (quarter1D) {
        console.log(quarter1D);
        setQuarter1(quarter1D.data);
        console.log("CHECK QUARTER 1", quarter1D);
      }
      if (quarter2D) {
        setQuarter2(quarter2D.data);
        // console.log(quarter2D);
      }
      if (quarter3D) {
        setQuarter3(quarter3D.data);
        // console.log(quarter2D);
      }
      if (quarter4D) {
        setQuarter4(quarter4D.data);
        console.log("CHECK QUARTE 4 ADMIN", quarter4D);
      }
    };

    loadData();
  }, []);

  return (
    <div className="w-[100%] h-[100vh] overflow-auto flex">
      <AdminNav />
      <div className="h-[100vh] overflow-auto flex-1">
        <div className=" w-[100%] min-h-[100vh] bg-[#80808075] md:py-4 py-[3rem]">
          <h1 className="mx-auto w-[95%] md:w-[85%] bg-white px-2 py-2 rounded font-bold text-center text-[1.4rem]">
            {startupData && (
              <>
                {" "}
                Team <span className="text-[#F8B65D]">
                  {startupData.name}
                </span>{" "}
              </>
            )}
            Quarters Details
          </h1>
          {!startupData && (
            <div className="w-[95%] md:w-[85%] mx-auto mb-3 min-h-[200px] bg-[#ffffff31] flex justify-center items-center">
              <p className="text-center text-[1.4rem]">
                Startup details goes here when user fill it...
              </p>
            </div>
          )}
          {startupData && (
            <div className="w-[95%] md:w-[85%] rounded mx-auto overflow-auto">
              <h1 className=" w-[100%] bg-white px-2 py-2 mt-3 rounded font-bold  text-[1.4rem]">
                Startup Details
              </h1>
              <table className=" bg-white border mb-7 w-[100%]  shadow-md rounded-lg">
                <thead>
                  <tr className="hover:bg-gray-300 cursor-pointer border-b-[2px] border-gray-300">
                    <th className="py-2 px-4 border-b text-start">Key</th>
                    <th className="py-2 px-4 border-b text-start">Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-300 cursor-pointer border-b-[2px] border-gray-300">
                    <td className="py-2 px-4 border-b text-start">Name</td>
                    <td className="py-2 px-4 border-b text-start">
                      {startupData.name}
                    </td>
                  </tr>

                  <tr className="hover:bg-gray-300 cursor-pointer border-b-[2px] border-gray-300">
                    <td className="py-2 px-4 border-b text-start">Location</td>
                    <td className="py-2 px-4 border-b text-start">
                      {startupData.location}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {!quarter1 && (
            <div className="w-[95%] md:w-[85%] mx-auto min-h-[200px] bg-[#ffffff31] flex justify-center items-center">
              <p className="text-center text-[1.4rem]">
                Quarter1 goes here when user fill it...
              </p>
            </div>
          )}

          {quarter1 && (
            <div className=" w-[95%] md:w-[85%] mx-auto ">
              <h1 className=" w-[100%] bg-white px-2 py-2 mt-3 rounded font-bold  text-[1.4rem]">
                Quarter 1 Details
              </h1>
              <div className="w-[100%] overflow-auto">
                <table className="min-w-full bg-white border  shadow-md rounded-lg overflow-hidden">
                  <thead className="bg-gray-300">
                    <tr>
                      <th className="py-2 px-2 sm:px-3 md:px-4 border-b">
                        Selected
                      </th>
                      <th className="py-2 px-2 sm:px-3 md:px-4 border-b">
                        Cost
                      </th>
                      <th className="py-2 px-2 sm:px-3 md:px-4 border-b">
                        Other Cost
                      </th>
                      <th className="py-2 px-2 sm:px-3 md:px-4 border-b">
                        Income
                      </th>
                      <th className="py-2 px-2 sm:px-3 md:px-4 border-b">
                        Net Profit
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b-[2px] border-gray-300 hover:bg-gray-300 cursor-pointer">
                      <td className="py-2 px-4 border-b text-center">
                        {quarter1 && quarter1.option1.selected ? (
                          <TiTick className="text-green-500 mx-auto text-2xl" />
                        ) : (
                          <RxCross2 className="text-red-500 mx-auto text-2xl" />
                        )}
                      </td>
                      <td className="py-2 px-4 border-b text-center">
                        {quarter1 && quarter1.option1.cost}
                      </td>
                      <td className="py-2 px-4 border-b text-center">
                        {quarter1 && quarter1.option1.otherCost}
                      </td>
                      <td className="py-2 px-4 border-b text-center">
                        {quarter1 && quarter1.option1.income}
                      </td>
                      <td className="py-2 px-4 border-b text-center">
                        {quarter1 && quarter1.option1.netProfit}
                      </td>
                    </tr>
                    <tr className="border-b-[2px] border-gray-300 hover:bg-gray-300 cursor-pointer">
                      <td className="py-2 px-4 border-b text-center">
                        {quarter1 && quarter1.option2.selected ? (
                          <TiTick className="text-green-500 mx-auto text-2xl" />
                        ) : (
                          <RxCross2 className="text-red-500 mx-auto text-2xl" />
                        )}
                      </td>
                      <td className="py-2 px-4 border-b text-center">
                        {quarter1 && quarter1.option2.cost}
                      </td>
                      <td className="py-2 px-4 border-b text-center">
                        {quarter1 && quarter1.option2.otherCost}
                      </td>
                      <td className="py-2 px-4 border-b text-center">
                        {quarter1 && quarter1.option2.income}
                      </td>
                      <td className="py-2 px-4 border-b text-center">
                        {quarter1 && quarter1.option2.netProfit}
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-300 cursor-pointer border-b-[2px] border-gray-300">
                      <td className="py-2 px-4 border-b text-center">
                        {quarter1 && quarter1.option3.selected ? (
                          <TiTick className="text-green-500 mx-auto text-2xl" />
                        ) : (
                          <RxCross2 className="text-red-500 mx-auto text-2xl" />
                        )}
                      </td>
                      <td className="py-2 px-4 border-b text-center">
                        {quarter1 && quarter1.option3.cost}
                      </td>
                      <td className="py-2 px-4 border-b text-center">
                        {quarter1 && quarter1.option3.otherCost}
                      </td>
                      <td className="py-2 px-4 border-b text-center">
                        {quarter1 && quarter1.option3.income}
                      </td>
                      <td className="py-2 px-4 border-b text-center">
                        {quarter1 && quarter1.option3.netProfit}
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-300 cursor-pointer">
                      <td className="py-2 px-4 border-b text-center col-span-3">
                        {null}
                      </td>
                      <td className="py-2 px-4 border-b text-center col-span-3">
                        {null}
                      </td>
                      <td className="py-2 px-4 border-b text-center col-span-3">
                        {null}
                      </td>
                      <td className="py-2 px-4 border-b text-center col-span-3">
                        {null}
                      </td>
                      <td className="py-2 px-4 border-b text-center col-span-3">
                        {quarter1 && quarter1.totalProfit}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="hover:bg-gray-300  px-2 py-2 rounded bg-white cursor-pointer">
                <strong>Event:</strong> {quarter1.event}
              </div>
            </div>
          )}

          {!quarter2 && (
            <div className="w-[95%] md:w-[85%] mx-auto mt-3 min-h-[200px] bg-[#ffffff31] flex justify-center items-center">
              <p className="text-center text-[1.4rem]">
                Quarter2 goes here when user fill it...
              </p>
            </div>
          )}

          {quarter2 && (
            <div className=" w-[95%] md:w-[85%] mx-auto  ">
              <h1 className=" w-[100%] bg-white px-2 py-2 mt-3 rounded font-bold  text-[1.4rem]">
                Quarter2 Details
              </h1>
              <div className="w-[100%] overflow-auto">
                <table className="min-w-full bg-white border  shadow-md rounded-lg overflow-hidden">
                  <thead className="bg-gray-300">
                    <tr>
                      <th className="py-2 px-2 sm:px-3 md:px-4 border-b">
                        Selected
                      </th>
                      <th className="py-2 px-2 sm:px-3 md:px-4 border-b">
                        Cost
                      </th>
                      <th className="py-2 px-2 sm:px-3 md:px-4 border-b">
                        Other Cost
                      </th>
                      <th className="py-2 px-2 sm:px-3 md:px-4 border-b">
                        Income
                      </th>
                      <th className="py-2 px-2 sm:px-3 md:px-4 border-b">
                        Net Profit
                      </th>
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
                    <tr className="hover:bg-gray-300 cursor-pointer">
                      <td className="py-2 px-4 border-b text-center col-span-3">
                        {null}
                      </td>
                      <td className="py-2 px-4 border-b text-center col-span-3">
                        {null}
                      </td>
                      <td className="py-2 px-4 border-b text-center col-span-3">
                        {null}
                      </td>
                      <td className="py-2 px-4 border-b text-center col-span-3">
                        {null}
                      </td>
                      <td className="py-2 px-4 border-b text-center col-span-3">
                        {quarter2 && quarter2.totalProfit}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="hover:bg-gray-300  px-2 py-2 rounded bg-white cursor-pointer">
                <strong>Event:</strong> {quarter2.event}
              </div>
            </div>
          )}

          {!quarter3 && (
            <div className="w-[95%] md:w-[85%] mx-auto mt-3 min-h-[200px] bg-[#ffffff31] flex justify-center items-center">
              <p className="text-center text-[1.4rem]">
                Quarter3 goes here when user fill it...
              </p>
            </div>
          )}

          {quarter3 && (
            <div className=" w-[95%] md:w-[85%] mx-auto  ">
              <h1 className=" w-[100%] bg-white px-2 py-2 mt-3 rounded font-bold  text-[1.4rem]">
                Quarter3 Details
              </h1>
              <div className="w-[100%] overflow-auto">
                <table className="min-w-full bg-white border  shadow-md rounded-lg overflow-hidden">
                  <thead className="bg-gray-300">
                    <tr>
                      <th className="py-2 px-2 sm:px-3 md:px-4 border-b">
                        Selected
                      </th>
                      <th className="py-2 px-2 sm:px-3 md:px-4 border-b">
                        Cost
                      </th>
                      <th className="py-2 px-2 sm:px-3 md:px-4 border-b">
                        Other Cost
                      </th>
                      <th className="py-2 px-2 sm:px-3 md:px-4 border-b">
                        Income
                      </th>
                      <th className="py-2 px-2 sm:px-3 md:px-4 border-b">
                        Net Profit
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b-[2px] border-gray-300 hover:bg-gray-300 cursor-pointer">
                      <td className="py-2 px-4 border-b text-center">
                        {quarter3 && quarter3.option1.selected ? (
                          <TiTick className="text-green-500 mx-auto text-2xl" />
                        ) : (
                          <RxCross2 className="text-red-500 mx-auto text-2xl" />
                        )}
                      </td>
                      <td className="py-2 px-4 border-b text-center">
                        {quarter3 && quarter3.option1.cost}
                      </td>
                      <td className="py-2 px-4 border-b text-center">
                        {quarter3 && quarter3.option1.otherCost}
                      </td>
                      <td className="py-2 px-4 border-b text-center">
                        {quarter3 && quarter3.option1.income}
                      </td>
                      <td className="py-2 px-4 border-b text-center">
                        {quarter3 && quarter3.option1.netProfit}
                      </td>
                    </tr>
                    <tr className="border-b-[2px] border-gray-300 hover:bg-gray-300 cursor-pointer">
                      <td className="py-2 px-4 border-b text-center">
                        {quarter3 && quarter3.option2.selected ? (
                          <TiTick className="text-green-500 mx-auto text-2xl" />
                        ) : (
                          <RxCross2 className="text-red-500 mx-auto text-2xl" />
                        )}
                      </td>
                      <td className="py-2 px-4 border-b text-center">
                        {quarter3 && quarter3.option2.cost}
                      </td>
                      <td className="py-2 px-4 border-b text-center">
                        {quarter3 && quarter3.option2.otherCost}
                      </td>
                      <td className="py-2 px-4 border-b text-center">
                        {quarter3 && quarter3.option2.income}
                      </td>
                      <td className="py-2 px-4 border-b text-center">
                        {quarter3 && quarter3.option2.netProfit}
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-300 cursor-pointer border-b-[2px] border-gray-300">
                      <td className="py-2 px-4 border-b text-center">
                        {quarter3 && quarter3.option3.selected ? (
                          <TiTick className="text-green-500 mx-auto text-2xl" />
                        ) : (
                          <RxCross2 className="text-red-500 mx-auto text-2xl" />
                        )}
                      </td>
                      <td className="py-2 px-4 border-b text-center">
                        {quarter3 && quarter3.option3.cost}
                      </td>
                      <td className="py-2 px-4 border-b text-center">
                        {quarter3 && quarter3.option3.otherCost}
                      </td>
                      <td className="py-2 px-4 border-b text-center">
                        {quarter3 && quarter3.option3.income}
                      </td>
                      <td className="py-2 px-4 border-b text-center">
                        {quarter3 && quarter3.option3.netProfit}
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-300 cursor-pointer">
                      <td className="py-2 px-4 border-b text-center col-span-3">
                        {null}
                      </td>
                      <td className="py-2 px-4 border-b text-center col-span-3">
                        {null}
                      </td>
                      <td className="py-2 px-4 border-b text-center col-span-3">
                        {null}
                      </td>
                      <td className="py-2 px-4 border-b text-center col-span-3">
                        {null}
                      </td>
                      <td className="py-2 px-4 border-b text-center col-span-3">
                        {quarter3 && quarter3.totalProfit}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="hover:bg-gray-300  px-2 py-2 rounded bg-white cursor-pointer">
                <strong>Event:</strong> {quarter3.event}
              </div>
            </div>
          )}

          {!quarter4 && (
            <div className="w-[95%] md:w-[85%] mx-auto mt-3 min-h-[200px] bg-[#ffffff31] flex justify-center items-center">
              <p className="text-center text-[1.4rem]">
                Quarter4 goes here when user fill it...
              </p>
            </div>
          )}

          {quarter4 && (
            <div className=" w-[95%] md:w-[85%] mx-auto  ">
              <h1 className=" w-[100%] bg-white px-2 py-2 mt-3 rounded font-bold  text-[1.4rem]">
                Quarter4 Details
              </h1>
              <div className="w-[100%] overflow-auto">
                <table className="min-w-full bg-white border  shadow-md rounded-lg overflow-hidden">
                  <thead className="bg-gray-300">
                    <tr>
                      <th className="py-2 px-2 sm:px-3 md:px-4 border-b">
                        Selected
                      </th>
                      <th className="py-2 px-2 sm:px-3 md:px-4 border-b">
                        Cost
                      </th>
                      <th className="py-2 px-2 sm:px-3 md:px-4 border-b">
                        Other Cost
                      </th>
                      <th className="py-2 px-2 sm:px-3 md:px-4 border-b">
                        Income
                      </th>
                      <th className="py-2 px-2 sm:px-3 md:px-4 border-b">
                        Net Profit
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b-[2px] border-gray-300 hover:bg-gray-300 cursor-pointer">
                      <td className="py-2 px-4 border-b text-center">
                        {quarter4 && quarter4.option1.selected ? (
                          <TiTick className="text-green-500 mx-auto text-2xl" />
                        ) : (
                          <RxCross2 className="text-red-500 mx-auto text-2xl" />
                        )}
                      </td>
                      <td className="py-2 px-4 border-b text-center">
                        {quarter4 && quarter4.option1.cost}
                      </td>
                      <td className="py-2 px-4 border-b text-center">
                        {quarter4 && quarter4.option1.otherCost}
                      </td>
                      <td className="py-2 px-4 border-b text-center">
                        {quarter4 && quarter4.option1.income}
                      </td>
                      <td className="py-2 px-4 border-b text-center">
                        {quarter4 && quarter4.option1.netProfit}
                      </td>
                    </tr>
                    <tr className="border-b-[2px] border-gray-300 hover:bg-gray-300 cursor-pointer">
                      <td className="py-2 px-4 border-b text-center">
                        {quarter4 && quarter4.option2.selected ? (
                          <TiTick className="text-green-500 mx-auto text-2xl" />
                        ) : (
                          <RxCross2 className="text-red-500 mx-auto text-2xl" />
                        )}
                      </td>
                      <td className="py-2 px-4 border-b text-center">
                        {quarter4 && quarter4.option2.cost}
                      </td>
                      <td className="py-2 px-4 border-b text-center">
                        {quarter4 && quarter4.option2.otherCost}
                      </td>
                      <td className="py-2 px-4 border-b text-center">
                        {quarter4 && quarter4.option2.income}
                      </td>
                      <td className="py-2 px-4 border-b text-center">
                        {quarter4 && quarter4.option2.netProfit}
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-300 cursor-pointer border-b-[2px] border-gray-300">
                      <td className="py-2 px-4 border-b text-center">
                        {quarter4 && quarter4.option3.selected ? (
                          <TiTick className="text-green-500 mx-auto text-2xl" />
                        ) : (
                          <RxCross2 className="text-red-500 mx-auto text-2xl" />
                        )}
                      </td>
                      <td className="py-2 px-4 border-b text-center">
                        {quarter4 && quarter4.option3.cost}
                      </td>
                      <td className="py-2 px-4 border-b text-center">
                        {quarter4 && quarter4.option3.otherCost}
                      </td>
                      <td className="py-2 px-4 border-b text-center">
                        {quarter4 && quarter4.option3.income}
                      </td>
                      <td className="py-2 px-4 border-b text-center">
                        {quarter4 && quarter4.option3.netProfit}
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-300 cursor-pointer">
                      <td className="py-2 px-4 border-b text-center col-span-3">
                        {null}
                      </td>
                      <td className="py-2 px-4 border-b text-center col-span-3">
                        {null}
                      </td>
                      <td className="py-2 px-4 border-b text-center col-span-3">
                        {null}
                      </td>
                      <td className="py-2 px-4 border-b text-center col-span-3">
                        {null}
                      </td>
                      <td className="py-2 px-4 border-b text-center col-span-3">
                        {quarter4 && quarter4.totalProfit}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="hover:bg-gray-300  px-2 py-2 rounded bg-white cursor-pointer">
                <strong>Event:</strong> {quarter4.event}
              </div>
            </div>
          )}

          <UserFinanceStatement id={id} />
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
