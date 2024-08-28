// import React from "react";
// import MyChart from "./MyChart";
// import { chartData } from "./IncomeChartData.js";

import MyResponsiveBar from "./MyChart";

// const IncomeChart = () => {
//   return (
//     <div className="IncomeChart">
//       <MyChart chartData={chartData} />
//     </div>
//   );
// };

// export default IncomeChart;

// import { data } from "./IncomeChartData";
// import { useEffect, useState } from "react";
import { useGetGraphData } from "../../api/MyGraphApi";
import { useEffect, useState } from "react";

const IncomeChart = () => {
  const [data, setData] = useState();
  const { getData } = useGetGraphData();
  useEffect(() => {
    const loadData = async () => {
      const graphData = await getData();

      if (graphData) {
        setData(graphData);
      }
    };

    loadData();
  }, []);

  let newData;
  if (data) {
    console.log(data);
    newData = data.map((item) => ({
      name: item.name,
      email: item.email,
      Expenditure: item.Expenditure,
      "Additional Cost": item["Additional Cost"],
      "Extra cost from opportunities": item["Extra cost from opportunities"],
      "Expenses from opportunities": item["Expenses from opportunities"],
    }));

    console.log(newData);
  }
  return (
    <>
      {data && (
        <div className="flex-1 min-h-[100vh] bg-[#80808075] md:py-4 py-[3rem] overflow-auto">
          <div>
            <h1 className="text-center font-bold text-[2rem]">Expenditure</h1>
          </div>
          <div className="w-[100%] grid grid-cols-1 lg:grid-cols-2 gap-4 p-4 ">
            {newData &&
              newData.map((item) => (
                <div className="w-[100%] ">
                  <MyResponsiveBar data={item} name={item.name} />
                </div>
              ))}
          </div>
          {/* <MyResponsiveBar data={data} /> */}
        </div>
      )}
    </>
  );
};

export default IncomeChart;
