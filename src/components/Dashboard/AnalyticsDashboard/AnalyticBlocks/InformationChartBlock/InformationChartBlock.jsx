import Chart from "../../AnalyticCharts/Chart.jsx";
import "./styles.css";

const InformationChartBlock = ({ data }) => {
  return (
    <>
      <div className="informational-chart__block">
        <p className="informational-chart__name">Информационный график</p>
        <Chart chartWidth={500} chartHeight={250} data={data} />
      </div>
    </>
  );
};

export default InformationChartBlock;
