import { createContext, useContext, useEffect, useState, useMemo } from "react";
import { useGetUserIncome } from "../src/api/MyIncomeStatementApi";
import { useLocation } from "react-router-dom";

export const CashContext = createContext();

export const useCashContext = () => {
  return useContext(CashContext);
};

export const CashContextProvider = ({ children }) => {
  const [cashFlowStatement, setCashFlowStatement] = useState();
  const location = useLocation();

  const { getUserIncome } = useGetUserIncome();
  const [incomeStatementD, setIncomeStatementD] = useState();

  useEffect(() => {
    const fetchIncomeData = async () => {
      try {
        const incomeD = await getUserIncome();
        setIncomeStatementD(incomeD.income);
      } catch (error) {
        console.error("Error fetching Income data:", error);
      }
    };

    fetchIncomeData();
  }, [location.pathname]);

  const calculateCashflow = useMemo(() => {
    if (!incomeStatementD) return [];

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

      //   console.log("CASHFLOW", cashflow);
    }

    return cashflow;
  }, [incomeStatementD]);

  useEffect(() => {
    if (calculateCashflow.length > 0) {
      setCashFlowStatement(calculateCashflow);
    }
  }, [calculateCashflow]);

  return (
    <CashContext.Provider value={{ cashFlowStatement, setCashFlowStatement }}>
      {children}
    </CashContext.Provider>
  );
};
