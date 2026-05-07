import "./styles.css";
import { Link } from "react-router-dom";
import DashboardPanel from "../DashboardComponents/DashboardPanel/DashboardPanel";
import StatisticIndexBlock from "./AnalyticBlocks/StatisticIndexBlock/StatisticIndexBlock";
import InformationChartBlock from "./AnalyticBlocks/InformationChartBlock/InformationChartBlock.jsx";

const AnalyticsDashboard = () => {
  const data1 = [
    { name: "Page A", parameter: 150 },
    { name: "Page B", parameter: 210 },
    { name: "Page C", parameter: 220 },
    { name: "Page D", parameter: 270 },
    { name: "Page E", parameter: 190 },
    { name: "Page F", parameter: 220 },
  ];
  const data2 = [
    { name: "Янв", parameter: 100 },
    { name: "Фев", parameter: 120 },
    { name: "Мар", parameter: 90 },
    { name: "Апр", parameter: 150 },
    { name: "Май", parameter: 130 },
    { name: "Июнь", parameter: 140 },
    { name: "Июль", parameter: 160 },
    { name: "Авг", parameter: 150 },
    { name: "Сен", parameter: 180 },
    { name: "Окт", parameter: 210 },
    { name: "Ноя", parameter: 190 },
    { name: "Дек", parameter: 220 },
  ];
  return (
    <>
      <DashboardPanel panelHeader={"Аналитика"}>
        <div className="statistic-charts">
          <StatisticIndexBlock data={data1} />
          <StatisticIndexBlock data={data1} />
          <StatisticIndexBlock data={data1} />
          <StatisticIndexBlock data={data1} />
        </div>
        <div className="informational-charts">
          <InformationChartBlock data={data2} />
          <InformationChartBlock data={data2} />
        </div>
      </DashboardPanel>
    </>
  );
};

export default AnalyticsDashboard;
