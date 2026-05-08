import "./styles.css";
import { Link } from "react-router-dom";
import DashboardButton from "../DashboardComponents/DashboardButton/DashboardButton";
import CartIcon from "./../../../assets/icons/cart.svg";
import SettingsIcon from "./../../../assets/icons/settings.svg";
import OzonLogo from "./../../../assets/media/logo/ozon.png";
import WilberriesLogo from "./../../../assets/media/logo/wildberries.png";
import YaMarket from "./../../../assets/media/logo/yandexmarket.png";
import DashboardPanel from "../DashboardComponents/DashboardPanel/DashboardPanel.jsx";
import StatisticIndexBlock from "../AnalyticsDashboard/AnalyticBlocks/StatisticIndexBlock/StatisticIndexBlock.jsx";

const MainDashboard = () => {
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
      <DashboardPanel panelHeader={"Панель управления"}>
        <Link to="/analytics">
          <div className="analytics-block dashboard-block">
            <div className="block-name">Аналитика</div>
            <StatisticIndexBlock data={data} />
          </div>
        </Link>
        <div className="buttons-block">
          <DashboardButton
            buttonName="Товары"
            buttonIcon={CartIcon}
            linkDestination="/products"
          />
          <DashboardButton
            buttonName="Настройки"
            buttonIcon={SettingsIcon}
            linkDestination="/settings"
          />
        </div>
        <Link to="/settings">
          <div className="connections-block dashboard-block">
            <div className="block-name">Подключения</div>
            <div className="icon-row">
              <img src={OzonLogo} alt="Ozon" className="brand-icon" />
              <img
                src={WilberriesLogo}
                alt="Wildberries"
                className="brand-icon"
              />
              <img src={YaMarket} alt="Yandex Market" className="brand-icon" />
            </div>
          </div>
        </Link>
        <div className="recommendations-block dashboard-block">
          <div className="block-name">Рекомендации</div>
          <ul className="recommendations-list">
            <li>
              <div className="recommendations-message">
                Ваши рекомендации будут отображаться здесь
              </div>
            </li>
            <li>
              <div className="recommendations-message">
                Ваши рекомендации будут отображаться здесь
              </div>
            </li>
            <li>
              <div className="recommendations-message">
                Ваши рекомендации будут отображаться здесь
              </div>
            </li>
          </ul>
        </div>
        <div className="notifications-block dashboard-block">
          <div className="block-name">Уведомления</div>
          <ul className="notification-list">
            <li>
              <div className="notification">Уведомление №1</div>
            </li>
            <li>
              <div className="notification">Уведомление №2</div>
            </li>
            <li>
              <div className="notification">Уведомление №3</div>
            </li>
          </ul>
        </div>
      </DashboardPanel>
    </>
  );
};

export default MainDashboard;
