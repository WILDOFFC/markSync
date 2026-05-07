import Panel from "../../Panel/Panel.jsx";
import ConnectionCard from "./ConnectionCard/ConnectionCard.jsx";
import "./styles.css";

const AccountConnections = () => {
  return (
    <>
      <Panel panelHeader={"Интеграции"}>
        <ConnectionCard
          marketPlaceName={"Ozon"}
          marketplaceLogo={"./../../../assets/media/logo/ozon.png"}
        />
      </Panel>
    </>
  );
};

export default AccountConnections;
