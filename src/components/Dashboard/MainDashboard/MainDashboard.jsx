import "./styles.css";
import { Link } from "react-router-dom";
import DashboardButton from "../DashboardComponents/DashboardButton/DashboardButton";
import CartIcon from "./../../../assets/icons/cart.svg";
import SettingsIcon from "./../../../assets/icons/settings.svg";
import OzonLogo from "./../../../assets/icons/ozon.png";
import WilberriesLogo from "./../../../assets/icons/wildberries.png";
import YaMarket from "./../../../assets/icons/yandexmarket.png";

const MainDashboard = () => {
  return (
    <>
      <div className="dashboard-panel">
        <div className="panel-header">Панель управления</div>
        <div className="panel-grid">
          <Link to="/analytics">
            <div className="analytics-block dashboard-button">dsadsadas</div>
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
                <img
                  src={YaMarket}
                  alt="Yandex Market"
                  className="brand-icon"
                />
              </div>
            </div>
          </Link>
          <div className="recommendations-block dashboard-block">
            <div className="block-name">Рекомендации</div>
            <ul className="recommendations-list">
              <li>
                {" "}
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
              <div className="notification">Уведомление №1</div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainDashboard;
