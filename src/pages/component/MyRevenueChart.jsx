// // import { ResponsiveBar } from "@nivo/bar";
// // const MyRevenueChart = ({ data }) => {
// //   const income = data.map((item) => item.Income); // Extract all cost values

// //   const minIncome = Math.min(...income);
// //   const maxIncome = Math.max(...income);
// //   console.log(maxIncome);
// //   const colorsPattern = [
// //     "#FF6F6180",
// //     "#FFD96680",
// //     "#6AB04C80",
// //     "#4A69BD80",
// //     "#9C88FF80",
// //   ];
// //   return (
// //     <div className="h-[70vh]">
// //       <ResponsiveBar
// //         data={data}
// //         keys={["Income"]}
// //         indexBy="name"
// //         margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
// //         padding={0.3}
// //         minValue={-100}
// //         maxValue={maxIncome + 2000}
// //         valueScale={{ type: "linear" }}
// //         indexScale={{ type: "band", round: true }}
// //         // colors="#fff8d8"
// //         colors={({ index }) => colorsPattern[index % colorsPattern.length]}
// //         defs={[
// //           {
// //             id: "dots",
// //             type: "patternDots",
// //             background: "inherit",
// //             color: "#38bcb2",
// //             size: 4,
// //             padding: 1,
// //             stagger: true,
// //           },
// //           {
// //             id: "lines",
// //             type: "patternLines",
// //             background: "inherit",
// //             color: "#FF5733",
// //             rotation: -45,
// //             lineWidth: 6,
// //             spacing: 10,
// //           },
// //         ]}
// //         fill={[
// //           {
// //             match: {
// //               id: "fries",
// //             },
// //             id: "dots",
// //           },
// //           {
// //             match: {
// //               id: "sandwich",
// //             },
// //             id: "lines",
// //           },
// //         ]}
// //         borderColor={{
// //           from: "color",
// //           modifiers: [["darker", "1.8"]],
// //         }}
// //         axisTop={null}
// //         axisRight={null}
// //         axisBottom={{
// //           tickSize: 5,
// //           tickPadding: 10,
// //           tickRotation: 0,
// //           legend: "Teams",
// //           legendPosition: "middle",
// //           legendOffset: 40,
// //           truncateTickAt: 0,
// //         }}
// //         axisLeft={{
// //           tickSize: 5,
// //           tickPadding: 5,
// //           tickRotation: 0,
// //           legend: "Income",
// //           legendPosition: "middle",
// //           legendOffset: -50,
// //           truncateTickAt: 0,
// //         }}
// //         labelSkipWidth={12}
// //         labelSkipHeight={12}
// //         labelTextColor="#000"
// //         legends={[]}
// //         role="application"
// //         ariaLabel="Nivo bar chart demo"
// //         barAriaLabel={(e) =>
// //           e.id + ": " + e.formattedValue + " in cost: " + e.indexValue
// //         }
// //       />
// //     </div>
// //   );
// // };

// // export default MyRevenueChart;

// import { ResponsiveBar } from "@nivo/bar";
// const MyResponsiveBar = ({ data, name }) => {
//   // console.log(data);
//   // const expenditure = data.map((item) => item.Expenditure); // Extract all cost values

//   // const minCost = Math.min(...expenditure);
//   // const maxCost = Math.max(...expenditure);

//   let transformedData = Object.keys(data).map((key) => ({
//     name: key,
//     value: data[key],
//   }));

//   transformedData = transformedData.filter(
//     (item) => item.name !== "name" && item.name !== "email"
//   );

//   const colorsPattern = ["#FF6F6180", "#FFD96680", "#6AB04C80", "#4A69BD80"];

//   const legendData = transformedData.map((item, index) => ({
//     id: item.name,
//     label: item.name,
//     color: colorsPattern[index % colorsPattern.length],
//   }));

//   return (
//     <div className="h-[50vh] lg:h-[60vh] w-[100%]">
//       <ResponsiveBar
//         data={transformedData}
//         keys={["value"]}
//         indexBy="name"
//         // margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
//         margin={{ top: 50, right: 200, bottom: 90, left: 60 }}
//         padding={0.3}
//         minValue={-100}
//         maxValue={Math.max(...transformedData.map((d) => d.value)) + 1000}
//         // maxValue={maxCost + 1000}
//         valueScale={{ type: "linear" }}
//         indexScale={{ type: "band", round: true }}
//         // colors="#fff8d8"
//         colors={({ index }) => colorsPattern[index % colorsPattern.length]}
//         defs={[
//           {
//             id: "dots",
//             type: "patternDots",
//             background: "inherit",
//             color: "#38bcb2",
//             size: 4,
//             padding: 1,
//             stagger: true,
//           },
//           {
//             id: "lines",
//             type: "patternLines",
//             background: "inherit",
//             color: "#eed312",
//             rotation: -45,
//             lineWidth: 6,
//             spacing: 10,
//           },
//         ]}
//         fill={[
//           {
//             match: {
//               id: "fries",
//             },
//             id: "dots",
//           },
//           {
//             match: {
//               id: "sandwich",
//             },
//             id: "lines",
//           },
//         ]}
//         borderColor={{
//           from: "color",
//           modifiers: [["darker", "1.8"]],
//         }}
//         axisTop={null}
//         axisRight={null}
//         // axisBottom={{
//         //   tickSize: 5,
//         //   tickPadding: 10,
//         //   tickRotation: 45,
//         //   legend: "Team" + " " + name,
//         //   legendPosition: "middle",
//         //   legendOffset: 40,
//         //   truncateTickAt: 0,
//         // }}
//         axisBottom={{
//           tickSize: 0, // Hide the ticks
//           tickPadding: 0, // Remove padding to hide the labels
//           tickRotation: 0,
//           tickValues: [], // No ticks to be shown
//           legend: "Team: " + name, // Show the team name
//           legendPosition: "middle",
//           legendOffset: 40,
//         }}
//         axisLeft={{
//           tickSize: 5,
//           tickPadding: 5,
//           tickRotation: 0,
//           legend: "Values",
//           legendPosition: "middle",
//           legendOffset: -50,
//           truncateTickAt: 0,
//         }}
//         labelSkipWidth={12}
//         labelSkipHeight={12}
//         labelTextColor="#000"
//         legends={[
//           {
//             data: legendData,
//             anchor: "bottom-right",
//             direction: "column",
//             justify: false,
//             translateX: 120,
//             translateY: 0,
//             itemsSpacing: 2,
//             itemWidth: 100,
//             itemHeight: 20,
//             itemDirection: "left-to-right",
//             itemOpacity: 0.85,
//             symbolSize: 20,
//             effects: [
//               {
//                 on: "hover",
//                 style: {
//                   itemOpacity: 1,
//                 },
//               },
//             ],
//           },
//         ]}
//         role="application"
//         ariaLabel="Nivo bar chart demo"
//         barAriaLabel={(e) =>
//           e.id + ": " + e.formattedValue + " in cost: " + e.indexValue
//         }
//       />
//     </div>
//   );
// };

// export default MyResponsiveBar;

import { ResponsiveBar } from "@nivo/bar";
const MyResponsiveBar = ({ data }) => {
  console.log(data);
  const income = data.map((item) => item["Income"]); // Extract all cost values

  const minIncome = Math.min(...income);
  const maxIncome = Math.max(...income);

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
        keys={["Income"]}
        indexBy="name"
        margin={{ top: 50, right: 10, bottom: 50, left: 60 }}
        padding={0.3}
        minValue={-100}
        maxValue={maxIncome + 1000}
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
          legend: "Income",
          legendPosition: "middle",
          legendOffset: -50,
          truncateTickAt: 0,
        }}
        // legends={[
        //   {
        //     data: ["Income"],
        //     anchor: "bottom-right",
        //     direction: "column",
        //     justify: false,
        //     translateX: 120,
        //     translateY: 0,
        //     itemsSpacing: 2,
        //     itemWidth: 100,
        //     itemHeight: 20,
        //     itemDirection: "left-to-right",
        //     itemOpacity: 0.85,
        //     symbolSize: 20,
        //     effects: [
        //       {
        //         on: "hover",
        //         style: {
        //           itemOpacity: 1,
        //         },
        //       },
        //     ],
        //   },
        // ]}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor="#000"
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
