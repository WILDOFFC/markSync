import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import "./styles.css";
import Arrow from "../../../icons/Arrow.jsx";

const CompactChart = ({
  chartWidth,
  chartHeight,
  gridStroke,
  XAxisProperties,
  YAxisProperties,
  data,
}) => {
  const firstParameterValue = data.at(0).parameter;
  const lastParameterValue = data.at(-1).parameter;
  const parameterDifferencePercentage = Math.floor(
    ((lastParameterValue - firstParameterValue) / firstParameterValue) * 100,
  );
  return (
    <>
      <div className="chart-container">
        <ResponsiveContainer width={chartWidth} height={chartHeight}>
          <LineChart data={data}>
            <CartesianGrid stroke={gridStroke} />
            <XAxis dataKey="name" {...XAxisProperties} />
            <YAxis {...YAxisProperties} />
            <Line
              type="linear"
              dataKey="parameter"
              dot={false}
              activeDot={false}
              stroke="var(--black)"
            />
          </LineChart>
        </ResponsiveContainer>
        <div className="parameter-difference">
          <Arrow
            width={"15"}
            height={"15"}
            color={parameterDifferencePercentage < 0 ? "#FF0000" : "#00FF00"}
          />
          {parameterDifferencePercentage > 0 ? "+" : "-"}
          {Math.abs(parameterDifferencePercentage)}%
        </div>
      </div>
    </>
  );
};

export default CompactChart;
