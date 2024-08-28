import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  useCreateQuarter1,
  useGetQuarter1,
  useGetUserQuarter1,
} from "../api/MyQuarter1Api";
import RightNav from "./components/RightNav";
import { useCreateUserIncomeStatement } from "../api/MyIncomeStatementApi";
import Loader from "./components/Loader";
import { toast } from "react-toastify";

const Quarter1 = () => {
  const navigate = useNavigate();
  const { Quarter1Info, isLoading } = useGetQuarter1();
  const { CreateQuarter1, isSuccess, error } = useCreateQuarter1();
  const { UserQuarter1 } = useGetUserQuarter1();
  const { CreateUserIncome } = useCreateUserIncomeStatement();
  const [quarter1D, setQuarter1D] = useState();

  useEffect(() => {
    const loadData = async () => {
      const data = await Quarter1Info();
      const userQuarterData = await UserQuarter1();

      if (userQuarterData) {
        navigate(`/quarter1/${userQuarterData._id}`);
        // console.log(userQuarterData);
      }
      if (data) {
        const data1 = data[0];
        if (data1) {
          setQuarter1D(data1);
        }
      }
    };

    loadData();
  }, []);
  // useEffect(() => {
  //   if (isSuccess) {
  //     toast.success("Quarter1 completed successfully");
  //   }
  //   if (error) {
  //     toast.error("Error in creating quarter 1");
  //   }
  // }, [isSuccess, error]);

  const handleChange = (e) => {
    const { name, checked } = e.target;
    setQuarter1D((prevData) => ({
      ...prevData,
      [name]: {
        ...prevData[name],
        selected: checked,
      },
    }));

    // console.log(quarter1D);
  };
  // console.log("QUARTER", quarter1D);

  let netProfit = 5000;
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    // CreateQuarter1(quarter1D);
    const data = await CreateQuarter1(quarter1D);
    // console.log(quarter1D);

    // if (data) {

    // }

    if (data) {
      CreateUserIncome();
      toast.success("Quarter1 completed successfully");
    }

    // console.log("Selected options:", selectedOptions);
    // Handle the selected options further, e.g., send them to a server

    navigate(`/quarter1/${data._id}`);
  };

  return (
    <div className="w-full h-[100vh] flex bg-[#fbb748] relative overflow-hidden">
      <RightNav />
      <div className=" h-[100vh] flex-1 flex flex-col justify-center items-center ">
        <h1 className="mb-7 text-[1.8rem] text-[#1b375f] font-bold font-mono">
          Quarter 1
        </h1>
        {!quarter1D && <Loader />}
        {quarter1D && (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-[20px] w-[95%] md:w-[75%] lg:w-[60%]  px-2 py-2 rounded"
          >
            <div className="flex flex-col gap-3">
              <h2 className="mb-2 text-[1.2rem] text-[#1b375f] font-bold">
                Quarterly Opportunities and Events (OE)
              </h2>
              <p className="mb-1 text-end text-[0.8rem] text-[#1b375f] font-bold cursor-pointer">
                Cash running total: 350
              </p>
              <div
                className={`bg-white rounded px-2 py-2 ${
                  quarter1D.option1.selected && `border-[2px] border-black ml-3`
                }`}
              >
                <input
                  type="checkbox"
                  id="option1"
                  name="option1"
                  checked={quarter1D && quarter1D.option1.selected}
                  onChange={handleChange}
                  className="mr-2 hidden"
                />
                <label htmlFor="option1" className=" cursor-pointer">
                  {quarter1D.option1.description}
                </label>
              </div>
              <div
                className={`bg-white rounded px-2 py-2 ${
                  quarter1D.option2.selected && `border-[2px] border-black ml-3`
                }`}
              >
                <input
                  type="checkbox"
                  id="option2"
                  name="option2"
                  checked={quarter1D && quarter1D.option2.selected}
                  onChange={handleChange}
                  className="mr-2 hidden"
                />
                <label htmlFor="option2" className=" cursor-pointer">
                  {quarter1D.option2.description}
                </label>
              </div>
              <div
                className={`bg-white rounded px-2 py-2 ${
                  quarter1D.option3.selected && `border-[2px] border-black ml-3`
                }`}
              >
                <input
                  type="checkbox"
                  id="option3"
                  name="option3"
                  checked={quarter1D && quarter1D.option3.selected}
                  onChange={handleChange}
                  className="mr-2 hidden"
                />
                <label htmlFor="option3" className=" cursor-pointer">
                  {quarter1D.option3.description}
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="bg-[#1b375f] text-white px-4 py-2 rounded ml-auto"
              style={{ width: "max-content" }}
            >
              Save
            </button>
          </form>
        )}
        {/* <form action="" className="flex flex-col gap-[20px] w-[80%]">
          <div>
            <h2 className="mb-2 text-[1.2rem] text-[#1b375f] font-bold">
              Quarterly Opportunities and Events (OE)
            </h2>
            <div>
              <input
                type="checkbox"
                id="option1"
                name="option1"
                className="mr-2"
              />
              <label htmlFor="option1" name="option1">
                Market Stall (regular Sat) - £250 month/time commitment extra
                ingredients cost 160
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                id="option2"
                name="option2"
                className="mr-2"
              />
              <label htmlFor="option2" name="option2">
                Short dated goods - job lot cost £450
              </label>
            </div>
            <div>
              <input type="checkbox" id="option3" name="3" className="mr-2" />
              <label htmlFor="option3" name="3">
                Special Deal! Marketing - leaflets and branded stickers worth
                £800 sale for £350
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="bg-[#1b375f] rounded-full py-2 px-4 text-white font-bold text-[1.2rem] w-[90%]"
            style={{ width: "max-content" }}
          >
            Save
          </button>
        </form> */}
      </div>
    </div>
  );
};

export default Quarter1;
