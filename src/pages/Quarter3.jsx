import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  useCreateQuarter3,
  useGetQuarter3,
  useGetUserQuarter3,
} from "../api/MyQuarter3Api";
import RightNav from "./components/RightNav";
import {
  useCreateUserIncomeStatement,
  useUpdateUserIncomeStatement,
} from "../api/MyIncomeStatementApi";

const Quarter3 = () => {
  const navigate = useNavigate();
  const { Quarter3Info } = useGetQuarter3();
  const { CreateQuarter3 } = useCreateQuarter3();
  const { UserQuarter3 } = useGetUserQuarter3();
  const { UpdateUserIncome } = useUpdateUserIncomeStatement();
  const [quarter3D, setQuarter3D] = useState();

  useEffect(() => {
    const loadData = async () => {
      const data = await Quarter3Info();
      const userQuarterData = await UserQuarter3();

      if (userQuarterData) {
        console.log(userQuarterData);
        navigate(`/quarter3/${userQuarterData._id}`);
        // console.log(userQuarterData);
      }
      if (data) {
        const data1 = data[0];
        if (data1) {
          setQuarter3D(data1);
        }
      }
    };

    loadData();

    // if (quarter1) {
    //   setQuarters({ ...quarters, quarter2: false });
    // }

    // if (quarter2) {
    //   setQuarters({
    //     ...quarters,
    //     quarter1: false,
    //     quarter2: false,
    //     quarter3: false,
    //   });

    //   // console.log(quarter2Data);
    // }
    // if (quarter3) {
    //   setQuarters({
    //     ...quarters,
    //     quarter1: false,
    //     quarter2: false,
    //     quarter4: false,
    //   });
    // }
    // if (quarter4) {
    //   setQuarters({
    //     ...quarters,
    //     quarter1: false,
    //     quarter2: false,
    //     quarter3: false,
    //   });
    // }
  }, []);

  const handleChange = (e) => {
    const { name, checked } = e.target;
    setQuarter3D((prevData) => ({
      ...prevData,
      [name]: {
        ...prevData[name],
        selected: checked,
      },
    }));

    // console.log(quarter2D);
  };
  // console.log("QUARTER", quarter2D);

  // let netProfit = 5000;
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    // CreateQuarter2(quarter2D);
    const data = await CreateQuarter3(quarter3D);
    console.log(quarter3D);

    if (data) {
      UpdateUserIncome();
    }

    // console.log("Selected options:", selectedOptions);
    // Handle the selected options further, e.g., send them to a server

    navigate(`/quarter3/${data._id}`);
  };

  return (
    <div className="w-full h-[100vh] flex bg-[#fbb748] relative overflow-hidden">
      <RightNav />
      <div className=" h-[100vh] w-[95%] md:w-[65%] flex flex-col justify-center items-center md:absolute right-0">
        <h1 className="mb-7 text-[1.8rem] text-[#1b375f] font-bold font-mono">
          Quarter 3
        </h1>
        {quarter3D && (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-[20px] w-[95%]  px-2 py-2 rounded"
          >
            <div className="flex flex-col gap-3">
              <h2 className="mb-2 text-[1.2rem] text-[#1b375f] font-bold">
                Quarterly Opportunities and Events (OE)
              </h2>
              <div
                className={`bg-white rounded px-2 py-2 ${
                  quarter3D.option1.selected && `border-[2px] border-black ml-3`
                }`}
              >
                <input
                  type="checkbox"
                  id="option1"
                  name="option1"
                  checked={quarter3D && quarter3D.option1.selected}
                  onChange={handleChange}
                  className="mr-2 hidden"
                />
                <label htmlFor="option1" className="cursor-pointer">
                  {quarter3D.option1.description}
                </label>
              </div>
              <div
                className={`bg-white rounded px-2 py-2 ${
                  quarter3D.option2.selected && `border-[2px] border-black ml-3`
                }`}
              >
                <input
                  type="checkbox"
                  id="option2"
                  name="option2"
                  checked={quarter3D && quarter3D.option2.selected}
                  onChange={handleChange}
                  className="mr-2 hidden"
                />
                <label htmlFor="option2" className="cursor-pointer">
                  {quarter3D.option2.description}
                </label>
              </div>
              <div
                className={`bg-white rounded px-2 py-2 ${
                  quarter3D.option3.selected && `border-[2px] border-black ml-3`
                }`}
              >
                <input
                  type="checkbox"
                  id="option3"
                  name="option3"
                  checked={quarter3D && quarter3D.option3.selected}
                  onChange={handleChange}
                  className="mr-2 hidden"
                />
                <label htmlFor="option3" className="cursor-pointer">
                  {quarter3D.option3.description}
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
      </div>
    </div>
  );
};

export default Quarter3;
