import "./styles.css";

const ConnectionCard = ({ marketplaceLogo, marketPlaceName, style }) => {
  return (
    <>
      <div className="connection-card">
        <div className="marketplace-logo">
          <img
            src={marketplaceLogo}
            alt={marketPlaceName}
            className="marketplace-logo"
          />
        </div>
        <button className="link-button">Привязать аккаунт</button>
      </div>
    </>
  );
};

export default ConnectionCard;
