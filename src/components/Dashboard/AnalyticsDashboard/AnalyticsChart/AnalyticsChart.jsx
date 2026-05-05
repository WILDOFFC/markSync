import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const AnalyticsChart = ({ chartWidth, chartHeight, aspectRatio }) => {
  const data = [
    { name: "Page A", parameter: 150 },
    { name: "Page B", parameter: 210 },
    { name: "Page C", parameter: 220 },
    { name: "Page D", parameter: 270 },
    { name: "Page E", parameter: 190 },
    { name: "Page F", parameter: 220 },
  ];
  return (
    <>
      <ResponsiveContainer
        width={chartWidth}
        height={chartHeight}
        aspectRatio={aspectRatio}
      >
        <LineChart data={data}>
          <CartesianGrid stroke="#ffffff" />
          <XAxis dataKey="name" stroke="#ffffff" />
          <YAxis stroke="#ffffff" />
          <Line
            type="linear"
            dataKey="parameter"
            dot={false}
            activeDot={false}
            stroke="#000000"
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default AnalyticsChart;
