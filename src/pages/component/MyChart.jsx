import { ResponsiveBar } from "@nivo/bar";
const MyResponsiveBar = ({ data }) => {
  console.log(data);
  const expenditure = data.map((item) => item.Expenditure); // Extract all cost values

  const minCost = Math.min(...expenditure);
  const maxCost = Math.max(...expenditure);

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
        data={data}
        keys={["Expenditure"]}
        indexBy="name"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        minValue={-100}
        maxValue={maxCost + 1000}
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        // colors="#fff8d8"
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
          legend: "Teams",
          legendPosition: "middle",
          legendOffset: 40,
          truncateTickAt: 0,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Expenditure",
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

export default MyResponsiveBar;
