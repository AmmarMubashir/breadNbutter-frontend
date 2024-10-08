import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TiTick } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import { useGetIndividualUserQuarter4 } from "../../api/MyQuarter4Api";
import RightNav from "../../pages/components/RightNav";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
const Quarter4Detail = () => {
  const [quarter4D, setQuarter4D] = useState();
  const { id } = useParams();
  const { IndividualUserQuarter4 } = useGetIndividualUserQuarter4();

  useEffect(() => {
    const loadData = async () => {
      const data = await IndividualUserQuarter4(id);

      console.log(data);
      if (data) {
        setQuarter4D(data);
      }
    };
    loadData();
  }, []);

  return (
    <div className="w-full h-[100vh] flex bg-[#fbb748] relative overflow-hidden">
      <RightNav />
      <div className=" h-[100vh] mx-auto flex-1 flex flex-col justify-center items-center ">
        <h1 className="mb-7 text-[1.2rem] text-[#1b375f] font-bold">
          Quarter 4 details
        </h1>

        {!quarter4D && <Loader />}

        {quarter4D && (
          <div className="w-[95%] md:w-[75%] lg:w-[60%] flex flex-col justify-center ">
            <table className="min-w-full bg-white border  shadow-md rounded-lg overflow-hidden">
              <thead className="bg-gray-300">
                <tr>
                  <th className="py-2 px-2 sm:px-3 md:px-4 border-b">
                    Selected
                  </th>
                  <th className="py-2 px-2 sm:px-3 md:px-4 border-b">Cost</th>
                  <th className="py-2 px-2 sm:px-3 md:px-4 border-b">
                    Other Cost
                  </th>
                  <th className="py-2 px-2 sm:px-3 md:px-4 border-b">Income</th>
                  {/* <th className="py-2 px-2 sm:px-3 md:px-4 border-b">
                    Net Profit
                  </th> */}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b-[2px] border-gray-300 hover:bg-gray-300 cursor-pointer">
                  <td className="py-2 px-4 border-b text-center">
                    {quarter4D && quarter4D.option1.selected ? (
                      <TiTick className="text-green-500 mx-auto text-2xl" />
                    ) : (
                      <RxCross2 className="text-red-500 mx-auto text-2xl" />
                    )}
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    {quarter4D && quarter4D.option1.cost}
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    {quarter4D && quarter4D.option1.otherCost}
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    {quarter4D && quarter4D.option1.income}
                  </td>
                  {/* <td className="py-2 px-4 border-b text-center">
                    {quarter4D && quarter4D.option1.netProfit}
                  </td> */}
                </tr>
                <tr className="border-b-[2px] border-gray-300 hover:bg-gray-300 cursor-pointer">
                  <td className="py-2 px-4 border-b text-center">
                    {quarter4D && quarter4D.option2.selected ? (
                      <TiTick className="text-green-500 mx-auto text-2xl" />
                    ) : (
                      <RxCross2 className="text-red-500 mx-auto text-2xl" />
                    )}
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    {quarter4D && quarter4D.option2.cost}
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    {quarter4D && quarter4D.option2.otherCost}
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    {quarter4D && quarter4D.option2.income}
                  </td>
                  {/* <td className="py-2 px-4 border-b text-center">
                    {quarter4D && quarter4D.option2.netProfit}
                  </td> */}
                </tr>
                <tr className="hover:bg-gray-300 cursor-pointer border-b-[2px] border-gray-300">
                  <td className="py-2 px-4 border-b text-center">
                    {quarter4D && quarter4D.option3.selected ? (
                      <TiTick className="text-green-500 mx-auto text-2xl" />
                    ) : (
                      <RxCross2 className="text-red-500 mx-auto text-2xl" />
                    )}
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    {quarter4D && quarter4D.option3.cost}
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    {quarter4D && quarter4D.option3.otherCost}
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    {quarter4D && quarter4D.option3.income}
                  </td>
                  {/* <td className="py-2 px-4 border-b text-center">
                    {quarter4D && quarter4D.option3.netProfit}
                  </td> */}
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
                  {/* <td className="py-2 px-4 border-b text-center col-span-3">
                    {null}
                  </td> */}
                  <td className="py-2 px-4 border-b text-center col-span-3">
                    {quarter4D && quarter4D.totalProfit}
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="hover:bg-gray-300 bg-white rounded mt-3 px-2 py-3 cursor-pointer">
              Activities result will be added if applicable
            </div>
            <div className="hover:bg-gray-300 bg-white rounded mt-3 px-2 py-3 cursor-pointer">
              <strong>Result:</strong> {quarter4D.event}
            </div>
            <div className="absolute bottom-9 right-11">
              <Link
                to="/quarter4EmpInfo"
                className="bg-[#1b375f] text-white px-4 py-2 rounded"
              >
                Next
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quarter4Detail;
