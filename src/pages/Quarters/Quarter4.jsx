import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  useCreateQuarter4,
  useGetQuarter4,
  useGetUserQuarter4,
} from "../../api/MyQuarter4Api";
import RightNav from "../../pages/components/RightNav";
import {
  useGetUserIncome,
  useUpdateUserIncomeStatement,
  useUpdateUserIncomeStatementQuarter4,
} from "../../api/MyIncomeStatementApi";

// import { useCashContext } from "../../context/CashFlowContext";

const Quarter4 = () => {
  const navigate = useNavigate();
  const { Quarter4Info } = useGetQuarter4();
  const { CreateQuarter4 } = useCreateQuarter4();
  const { UserQuarter4 } = useGetUserQuarter4();
  const { UpdateUserIncomeQuarter4 } = useUpdateUserIncomeStatementQuarter4();
  const [quarter4D, setQuarter4D] = useState();
  const [incomeStatementD, setIncomeStatementD] = useState();
  const { getUserIncome } = useGetUserIncome();
  // const { cashFlowStatement } = useCashContext();

  useEffect(() => {
    const loadData = async () => {
      const data = await Quarter4Info();
      const userQuarterData = await UserQuarter4();
      const incomeD = await getUserIncome();

      if (incomeD) {
        setIncomeStatementD(incomeD.income);
      }

      if (userQuarterData) {
        console.log(userQuarterData);
        navigate(`/quarter4/${userQuarterData._id}`);
        // console.log(userQuarterData);
      }
      if (data) {
        const data1 = data[0];
        if (data1) {
          setQuarter4D(data1);
        }
      }
    };

    loadData();

    // if (quarter1) {
    //   setQuarters({ ...quarters, quarter4: false });
    // }

    // if (quarter4) {
    //   setQuarters({
    //     ...quarters,
    //     quarter1: false,
    //     quarter4: false,
    //     quarter4: false,
    //   });

    //   // console.log(quarter4Data);
    // }
    // if (quarter4) {
    //   setQuarters({
    //     ...quarters,
    //     quarter1: false,
    //     quarter4: false,
    //     quarter4: false,
    //   });
    // }
    // if (quarter4) {
    //   setQuarters({
    //     ...quarters,
    //     quarter1: false,
    //     quarter4: false,
    //     quarter4: false,
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

    if (incomeStatementD[2]) {
      cashflow = [
        ...cashflow,
        {
          "Income at Start": cashflow[5]["Income at end"],
          "Profit(Loss)":
            Math.floor(incomeStatementD[2].Income["Total Income"] / 3) -
            Math.floor(
              incomeStatementD[2]["Expenditure"]["Total Expenditure"] / 3
            ),
          "Income at end":
            cashflow[5]["Income at end"] +
            Math.floor(incomeStatementD[2].Income["Total Income"] / 3) -
            Math.floor(
              incomeStatementD[2]["Expenditure"]["Total Expenditure"] / 3
            ),
        },
      ];

      cashflow = [
        ...cashflow,
        {
          "Income at Start": cashflow[6]["Income at end"],
          "Profit(Loss)":
            Math.floor(incomeStatementD[2].Income["Total Income"] / 3) -
            Math.floor(
              incomeStatementD[2]["Expenditure"]["Total Expenditure"] / 3
            ),
          "Income at end":
            cashflow[6]["Income at end"] +
            Math.floor(incomeStatementD[2].Income["Total Income"] / 3) -
            Math.floor(
              incomeStatementD[2]["Expenditure"]["Total Expenditure"] / 3
            ),
        },
      ];

      cashflow = [
        ...cashflow,
        {
          "Income at Start": cashflow[7]["Income at end"],
          "Profit(Loss)":
            incomeStatementD[2].Income["Total Income"] -
            Math.floor(incomeStatementD[2].Income["Total Income"] / 3) -
            Math.floor(incomeStatementD[2].Income["Total Income"] / 3) -
            (incomeStatementD[2]["Expenditure"]["Total Expenditure"] -
              Math.floor(
                incomeStatementD[2]["Expenditure"]["Total Expenditure"] / 3
              ) -
              Math.floor(
                incomeStatementD[2]["Expenditure"]["Total Expenditure"] / 3
              )),

          "Income at end":
            cashflow[7]["Income at end"] +
            incomeStatementD[2].Income["Total Income"] -
            Math.floor(incomeStatementD[2].Income["Total Income"] / 3) -
            Math.floor(incomeStatementD[2].Income["Total Income"] / 3) -
            (incomeStatementD[2]["Expenditure"]["Total Expenditure"] -
              Math.floor(
                incomeStatementD[2]["Expenditure"]["Total Expenditure"] / 3
              ) -
              Math.floor(
                incomeStatementD[2]["Expenditure"]["Total Expenditure"] / 3
              )),
        },
      ];
    }

    console.log("CASHFLOW", cashflow);
  }

  const handleChange = (e) => {
    const { name, checked } = e.target;
    setQuarter4D((prevData) => ({
      ...prevData,
      [name]: {
        ...prevData[name],
        selected: checked,
      },
    }));

    // console.log(quarter4D);
  };
  // console.log("QUARTER", quarter4D);

  // let netProfit = 5000;
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    // CreateQuarter4(quarter4D);
    const data = await CreateQuarter4(quarter4D);
    console.log(quarter4D);

    if (data) {
      UpdateUserIncomeQuarter4();
    }

    // console.log("Selected options:", selectedOptions);
    // Handle the selected options further, e.g., send them to a server

    navigate(`/quarter4/${data._id}`);
  };

  // let incomeAtStart = 0;
  // if (cash)
  return (
    <div className="w-full h-[100vh] flex bg-[#fbb748] relative overflow-hidden">
      <RightNav />
      <div className=" h-[100vh] w-[95%] md:w-[65%] flex flex-col justify-center items-center md:absolute right-0">
        <h1 className="mb-7 text-[1.8rem] text-[#1b375f] font-bold font-mono">
          Quarter 4
        </h1>

        {quarter4D && (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-[20px] w-[95%] md:w-[85%]  px-2 py-2 rounded"
          >
            <div className="flex flex-col gap-3">
              <h2 className="mb-2 text-[1.2rem] text-[#1b375f] font-bold">
                Quarterly Opportunities and Events (OE)
              </h2>
              <p className="mb-1 text-end text-[0.8rem] text-[#1b375f] font-bold cursor-pointer">
                Income At Start: {cashflow && cashflow[3]["Income at end"]}
              </p>
              <div
                className={`bg-white rounded px-2 py-2 ${
                  quarter4D.option1.selected && `border-[2px] border-black ml-3`
                }`}
              >
                <input
                  type="checkbox"
                  id="option1"
                  name="option1"
                  checked={quarter4D && quarter4D.option1.selected}
                  onChange={handleChange}
                  className="mr-2 hidden"
                />
                <label htmlFor="option1" className="cursor-pointer">
                  {quarter4D.option1.description}
                </label>
              </div>
              <div
                className={`bg-white rounded px-2 py-2 ${
                  quarter4D.option2.selected && `border-[2px] border-black ml-3`
                }`}
              >
                <input
                  type="checkbox"
                  id="option2"
                  name="option2"
                  checked={quarter4D && quarter4D.option2.selected}
                  onChange={handleChange}
                  className="mr-2 hidden"
                />
                <label htmlFor="option2" className="cursor-pointer">
                  {quarter4D.option2.description}
                </label>
              </div>
              <div
                className={`bg-white rounded px-2 py-2 ${
                  quarter4D.option3.selected && `border-[2px] border-black ml-3`
                }`}
              >
                <input
                  type="checkbox"
                  id="option3"
                  name="option3"
                  checked={quarter4D && quarter4D.option3.selected}
                  onChange={handleChange}
                  className="mr-2 hidden"
                />
                <label htmlFor="option3" className="cursor-pointer">
                  {quarter4D.option3.description}
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

export default Quarter4;