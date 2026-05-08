import Panel from "../../Panel/Panel.jsx";
import ConnectionCard from "./ConnectionCard/ConnectionCard.jsx";
import "./styles.css";
import OzonLogo from "./../../../assets/media/logo/ozon.png";
import WildberriesLogo from "./../../../assets/media/logo/wildberries.png";
import YandexMarketLogo from "./../../../assets/media/logo/yandexmarket.png";

const AccountConnections = () => {
  return (
    <>
      <Panel panelHeader={"Интеграции"} styles="connection-panel">
        <ul className="connection-cards__list">
          <li>
            <ConnectionCard
              marketPlaceName={"Озон"}
              marketplaceLogo={OzonLogo}
            />
          </li>
          <li>
            {" "}
            <ConnectionCard
              marketPlaceName={"Вайлдберрис"}
              marketplaceLogo={WildberriesLogo}
            />
          </li>
          <li>
            {" "}
            <ConnectionCard
              marketPlaceName={"Яндекс Маркет"}
              marketplaceLogo={YandexMarketLogo}
            />
          </li>
        </ul>
      </Panel>
    </>
  );
};

export default AccountConnections;
