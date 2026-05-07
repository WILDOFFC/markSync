const ConnectionCard = ({ marketplaceLogo, marketPlaceName }) => {
  return (
    <>
      <div className="connection-card">
        <div className="marketplace-logo">
          <img src={marketplaceLogo} alt={marketPlaceName} />
        </div>
      </div>
      <button className="link-button">Привязать аккаунт</button>
    </>
  );
};

export default ConnectionCard;
