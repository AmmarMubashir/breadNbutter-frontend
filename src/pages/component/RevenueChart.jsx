import { useGetGraphData } from "../../api/MyGraphApi";
import { useEffect, useState } from "react";
import MyRevenueChart from "./MyRevenueChart";
// import AdditionalIncomeData from "./AdditionalIncomeData";
// import AdditionalCostOpportunitiesData from "./AdditionalIncomeOpportunitiesData";
// import IncomeOpportunities from "./IncomeOpportunities";

const RevenueChart = () => {
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
    newData = data.map((item) => ({
      name: item.name,
      email: item.email,
      Income: item.Income,
      "Additional Income": item["Additional Income"],
      "Extra income from opportunities":
        item["Extra income from opportunities"],
      "Income from opportunities": item["Income from opportunities"],
    }));
    // console.log(data);
  }
  console.log(data);
  return (
    <div>
      {data && (
        <div className="flex-1 min-h-[100vh] bg-[#80808075] md:py-4 py-[3rem] overflow-auto">
          <div className="pt-4">
            <h1 className="text-center font-bold text-[2rem]">Income</h1>
          </div>
          <div className="w-[100%] grid grid-cols-1 lg:grid-cols-2 gap-4 p-4">
            {newData &&
              newData.map((item) => (
                <div className="w-[100%] ">
                  <MyRevenueChart data={item} name={item.name} />
                </div>
              ))}
            {/* <MyRevenueChart data={data} />
            <AdditionalIncomeData />
            <AdditionalCostOpportunitiesData />
            <IncomeOpportunities /> */}
          </div>
        </div>
      )}
      <div></div>
    </div>
  );
};

export default RevenueChart;
