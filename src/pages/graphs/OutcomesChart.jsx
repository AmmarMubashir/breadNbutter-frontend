import { ResponsiveBar } from "@nivo/bar";
const OutcomesChart = ({ data }) => {
  console.log(data);
  //   console.log(maxExpense);

  const newData = data.map((item) => ({
    name: item.name,
    email: item.email,
    Outcomes: item.Income - item.Expenditure,
  }));

  //   const newData = [
  //     { name: "Quarter 1", Outcomes: 5000 },
  //     { name: "Quarter 2", Outcomes: -10000 },
  //     { name: "Quarter 3", Outcomes: 15000 },
  //     { name: "Quarter 4", Outcomes: 20000 },
  //   ];

  const outcomes = newData.map((item) => item["Outcomes"]); // Extract all cost values

  const minOutcomes = Math.min(...outcomes);
  const maxOutcomes = Math.max(...outcomes);

  //   console.log(maxOutcomes);

  const colorsPattern = [
    "#FF6F6180",
    "#FFD96680",
    "#6AB04C80",
    "#4A69BD80",
    "#9C88FF80",
  ];

  return (
    <div className="h-[70vh] w-[100%]">
      <ResponsiveBar
        data={newData}
        keys={["Outcomes"]}
        indexBy="name"
        margin={{ top: 50, right: 10, bottom: 50, left: 60 }}
        padding={0.3}
        minValue={minOutcomes < 0 ? minOutcomes - 2000 : -100}
        maxValue={maxOutcomes > 0 ? maxOutcomes + 2000 : 1000}
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        colors={({ index }) => colorsPattern[index % colorsPattern.length]}
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

          legendPosition: "middle",
          legendOffset: 40,
          truncateTickAt: 0,
        }}
        axisLeft={{
          tickSize: 0,
          tickPadding: 0,
          tickRotation: 0,
          format: (value) => `£${value}`,
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
        theme={{
          axis: {
            ticks: {
              text: {
                fontSize: 14, // Increase the font size
                fontWeight: "bold", // Make the text bold
              },
            },
          },
        }}
      />
    </div>
  );
};

export default OutcomesChart;
