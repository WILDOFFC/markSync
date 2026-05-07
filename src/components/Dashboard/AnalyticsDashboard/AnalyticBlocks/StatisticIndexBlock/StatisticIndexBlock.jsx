import "./styles.css";
import CompactChart from "./../../AnalyticCharts/Chart.jsx";
import Arrow from "./../../../../icons/Arrow.jsx";
const StatisticIndexBlock = ({ data }) => {
  return (
    <>
      <div className="statistic-index__block">
        <div className="statistic-name">Статистический показатель</div>
        <div className="statistic-block__content">
          <div className="statistic-index">
            <p
              style={{
                color:
                  data.at(-1).parameter > data.at(-2).parameter
                    ? "#00FF00"
                    : "#FF0000",
              }}
            >
              {data.at(-1).parameter}
            </p>
            <Arrow
              width={"30"}
              height={"30"}
              color={
                data.at(-1).parameter > data.at(-2).parameter
                  ? "#00FF00"
                  : "#FF0000"
              }
              style={{
                transform:
                  data.at(-1).parameter > data.at(-2).parameter
                    ? "none"
                    : "scaleY(-1)",
              }}
            />
          </div>
          <CompactChart
            chartWidth={120}
            chartHeight={50}
            gridStroke="#ffffff"
            XAxisProperties={{ hide: true }}
            YAxisProperties={{ hide: true }}
            data={data}
          />
        </div>
      </div>
    </>
  );
};

export default StatisticIndexBlock;
