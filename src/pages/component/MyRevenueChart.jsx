import { ResponsiveBar } from "@nivo/bar";
const MyRevenueChart = ({ data }) => {
  //   console.log(data);
  const income = data.map((item) => item.Income); // Extract all cost values

  const minIncome = Math.min(...income);
  const maxIncome = Math.max(...income);
  console.log(maxIncome);
  return (
    <div className="h-[70vh]">
      <ResponsiveBar
        data={data}
        keys={["Income"]}
        indexBy="name"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        minValue={-100}
        maxValue={maxIncome + 2000}
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        colors="#fff8d8"
        defs={[
          {
            id: "dots",
            type: "patternDots",
            background: "inherit",
            color: "#38bcb2",
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: "lines",
            type: "patternLines",
            background: "inherit",
            color: "#eed312",
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        fill={[
          {
            match: {
              id: "fries",
            },
            id: "dots",
          },
          {
            match: {
              id: "sandwich",
            },
            id: "lines",
          },
        ]}
        borderColor={{
          from: "color",
          modifiers: [["darker", "1.8"]],
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 10,
          tickRotation: 0,
          legend: "Teams",
          legendPosition: "middle",
          legendOffset: 40,
          truncateTickAt: 0,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Income",
          legendPosition: "middle",
          legendOffset: -50,
          truncateTickAt: 0,
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor="#000"
        legends={[]}
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={(e) =>
          e.id + ": " + e.formattedValue + " in cost: " + e.indexValue
        }
      />
    </div>
  );
};

export default MyRevenueChart;
