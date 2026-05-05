import "./styles.css";
import AnalyticsChart from "./AnalyticsChart/AnalyticsChart";

const AnalyticsDashboard = () => {
  return (
    <>
      <div className="dashboard-panel">
        <div className="panel-header">Аналитика</div>
        <div className="panel-grid">
          <div className="analytics-block">
            <div className="block-name">Статистический показатель</div>
            <div className="block-content">
              <AnalyticsChart
                chartWidth={70}
                chartHeight={30}
                aspectRatio={70 / 30}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnalyticsDashboard;
