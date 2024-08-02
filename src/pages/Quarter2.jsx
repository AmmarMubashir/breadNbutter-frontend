import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  useCreateQuarter2,
  useGetQuarter2,
  useGetUserQuarter2,
} from "../api/MyQuarter2Api";
import RightNav from "./components/RightNav";
import {
  useGetUserIncome,
  useUpdateUserIncomeStatement,
} from "../api/MyIncomeStatementApi";
// import { useCashContext } from "../../context/CashFlowContext";

const Quarter2 = () => {
  const navigate = useNavigate();
  const { Quarter2Info } = useGetQuarter2();
  const { CreateQuarter2 } = useCreateQuarter2();
  const { UserQuarter2 } = useGetUserQuarter2();
  const { UpdateUserIncome } = useUpdateUserIncomeStatement();
  const [quarter2D, setQuarter2D] = useState();
  const [incomeStatementD, setIncomeStatementD] = useState();
  const { getUserIncome } = useGetUserIncome();
  // const { cashFlowStatement } = useCashContext();

  useEffect(() => {
    const loadData = async () => {
      const data = await Quarter2Info();
      const userQuarterData = await UserQuarter2();
      const incomeD = await getUserIncome();

      if (incomeD) {
        setIncomeStatementD(incomeD.income);
      }

      if (userQuarterData) {
        console.log(userQuarterData);
        navigate(`/quarter2/${userQuarterData._id}`);
        // console.log(userQuarterData);
      }
      if (data) {
        const data1 = data[0];
        if (data1) {
          setQuarter2D(data1);
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
    //     quarter2: false,
    //   });

    //   // console.log(quarter2Data);
    // }
    // if (quarter2) {
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
    //     quarter2: false,
    //   });
    // }
  }, []);
  let cashflow = [];
  if (incomeStatementD) {
    // console.log("NEWW", incomeStatementD);
    cashflow = [
      {
        "Income at Start": 350,
        "Profit(Loss)":
          Math.floor(incomeStatementD[0].Income["Total Income"] / 3) -
          Math.floor(
            incomeStatementD[0]["Expenditure"]["Total Expenditure"] / 3
          ),
        "Income at end":
          350 +
          Math.floor(incomeStatementD[0].Income["Total Income"] / 3) -
          Math.floor(
            incomeStatementD[0]["Expenditure"]["Total Expenditure"] / 3
          ),
      },
    ];

    cashflow = [
      ...cashflow,
      {
        "Income at Start": cashflow[0]["Income at end"],
        "Profit(Loss)":
          Math.floor(incomeStatementD[0].Income["Total Income"] / 3) -
          Math.floor(
            incomeStatementD[0]["Expenditure"]["Total Expenditure"] / 3
          ),
        "Income at end":
          cashflow[0]["Income at end"] +
          Math.floor(incomeStatementD[0].Income["Total Income"] / 3) -
          Math.floor(
            incomeStatementD[0]["Expenditure"]["Total Expenditure"] / 3
          ),
      },
    ];

    cashflow = [
      ...cashflow,
      {
        "Income at Start": cashflow[1]["Income at end"],
        "Profit(Loss)":
          incomeStatementD[0].Income["Total Income"] -
          Math.floor(incomeStatementD[0].Income["Total Income"] / 3) -
          Math.floor(incomeStatementD[0].Income["Total Income"] / 3) -
          (incomeStatementD[0]["Expenditure"]["Total Expenditure"] -
            Math.floor(
              incomeStatementD[0]["Expenditure"]["Total Expenditure"] / 3
            ) -
            Math.floor(
              incomeStatementD[0]["Expenditure"]["Total Expenditure"] / 3
            )),

        "Income at end":
          cashflow[1]["Income at end"] +
          incomeStatementD[0].Income["Total Income"] -
          Math.floor(incomeStatementD[0].Income["Total Income"] / 3) -
          Math.floor(incomeStatementD[0].Income["Total Income"] / 3) -
          (incomeStatementD[0]["Expenditure"]["Total Expenditure"] -
            Math.floor(
              incomeStatementD[0]["Expenditure"]["Total Expenditure"] / 3
            ) -
            Math.floor(
              incomeStatementD[0]["Expenditure"]["Total Expenditure"] / 3
            )),
      },
    ];

    if (incomeStatementD[1]) {
      cashflow = [
        ...cashflow,
        {
          "Income at Start": cashflow[2]["Income at end"],
          "Profit(Loss)":
            Math.floor(incomeStatementD[1].Income["Total Income"] / 3) -
            Math.floor(
              incomeStatementD[1]["Expenditure"]["Total Expenditure"] / 3
            ),
          "Income at end":
            cashflow[2]["Income at end"] +
            Math.floor(incomeStatementD[1].Income["Total Income"] / 3) -
            Math.floor(
              incomeStatementD[1]["Expenditure"]["Total Expenditure"] / 3
            ),
        },
      ];

      cashflow = [
        ...cashflow,
        {
          "Income at Start": cashflow[3]["Income at end"],
          "Profit(Loss)":
            Math.floor(incomeStatementD[1].Income["Total Income"] / 3) -
            Math.floor(
              incomeStatementD[1]["Expenditure"]["Total Expenditure"] / 3
            ),
          "Income at end":
            cashflow[3]["Income at end"] +
            Math.floor(incomeStatementD[1].Income["Total Income"] / 3) -
            Math.floor(
              incomeStatementD[1]["Expenditure"]["Total Expenditure"] / 3
            ),
        },
      ];

      cashflow = [
        ...cashflow,
        {
          "Income at Start": cashflow[4]["Income at end"],
          "Profit(Loss)":
            incomeStatementD[1].Income["Total Income"] -
            Math.floor(incomeStatementD[1].Income["Total Income"] / 3) -
            Math.floor(incomeStatementD[1].Income["Total Income"] / 3) -
            (incomeStatementD[1]["Expenditure"]["Total Expenditure"] -
              Math.floor(
                incomeStatementD[1]["Expenditure"]["Total Expenditure"] / 3
              ) -
              Math.floor(
                incomeStatementD[1]["Expenditure"]["Total Expenditure"] / 3
              )),

          "Income at end":
            cashflow[4]["Income at end"] +
            incomeStatementD[1].Income["Total Income"] -
            Math.floor(incomeStatementD[1].Income["Total Income"] / 3) -
            Math.floor(incomeStatementD[1].Income["Total Income"] / 3) -
            (incomeStatementD[1]["Expenditure"]["Total Expenditure"] -
              Math.floor(
                incomeStatementD[1]["Expenditure"]["Total Expenditure"] / 3
              ) -
              Math.floor(
                incomeStatementD[1]["Expenditure"]["Total Expenditure"] / 3
              )),
        },
      ];
    }

    console.log("CASHFLOW", cashflow);
  }

  const handleChange = (e) => {
    const { name, checked } = e.target;
    setQuarter2D((prevData) => ({
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
    const data = await CreateQuarter2(quarter2D);
    console.log(quarter2D);

    if (data) {
      UpdateUserIncome();
    }

    // console.log("Selected options:", selectedOptions);
    // Handle the selected options further, e.g., send them to a server

    navigate(`/quarter2/${data._id}`);
  };

  // let incomeAtStart = 0;
  // if (cash)
  return (
    <div className="w-full h-[100vh] flex bg-[#fbb748] relative overflow-hidden">
      <RightNav />
      <div className=" h-[100vh] w-[95%] md:w-[65%] flex flex-col justify-center items-center md:absolute right-0">
        <h1 className="mb-7 text-[1.8rem] text-[#1b375f] font-bold font-mono">
          Quarter 2
        </h1>

        {quarter2D && (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-[20px] w-[95%]  px-2 py-2 rounded"
          >
            <div className="flex flex-col gap-3">
              <h2 className="mb-2 text-[1.2rem] text-[#1b375f] font-bold">
                Quarterly Opportunities and Events (OE)
              </h2>
              <p className="mb-1 text-end text-[0.8rem] text-[#1b375f] font-bold cursor-pointer">
                Income At Start: {cashflow && cashflow[2]["Income at end"]}
              </p>
              <div
                className="py-2"
                // className={`bg-white rounded px-2 py-2 ${
                //   quarter2D.option1.selected && `border-[2px] border-black ml-3`
                // }`}
              >
                <input
                  type="checkbox"
                  id="option1"
                  name="option1"
                  checked={quarter2D && quarter2D.option1.selected}
                  onChange={handleChange}
                  className="mr-2 hidden"
                />
                <label
                  htmlFor="option1"
                  className={`bg-white rounded px-2 py-2 cursor-pointer ${
                    quarter2D.option1.selected &&
                    `border-[2px] border-black ml-3`
                  }`}
                >
                  {quarter2D.option1.description}
                </label>
              </div>
              <div
                className="py-2"
                // className={`bg-white rounded px-2 py-2 ${
                //   quarter2D.option2.selected && `border-[2px] border-black ml-3`
                // }`}
              >
                <input
                  type="checkbox"
                  id="option2"
                  name="option2"
                  checked={quarter2D && quarter2D.option2.selected}
                  onChange={handleChange}
                  className="mr-2 hidden"
                />
                <label
                  htmlFor="option2"
                  className={`bg-white rounded px-2 py-2 cursor-pointer ${
                    quarter2D.option2.selected &&
                    `border-[2px] border-black ml-3`
                  }`}
                >
                  {quarter2D.option2.description}
                </label>
              </div>
              <div
                className="py-2"
                // className={`bg-white rounded px-2 py-2 ${
                //   quarter2D.option3.selected && `border-[2px] border-black ml-3`
                // }`}
              >
                <input
                  type="checkbox"
                  id="option3"
                  name="option3"
                  checked={quarter2D && quarter2D.option3.selected}
                  onChange={handleChange}
                  className="mr-2 hidden"
                />
                <label
                  htmlFor="option3"
                  className={`bg-white rounded px-2 py-2 cursor-pointer ${
                    quarter2D.option3.selected &&
                    `border-[2px] border-black ml-3`
                  }`}
                >
                  {quarter2D.option3.description}
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

export default Quarter2;
