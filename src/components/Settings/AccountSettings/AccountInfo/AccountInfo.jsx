import "./styles.css";

const AccountInfo = ({ accountSettingName, accountSettingValue }) => {
  return (
    <>
      <div className="account-setting">
        <div className="account-setting__name">{accountSettingName}</div>
        <div className="account-setting__value">
          {accountSettingValue}
          <button className="account-settiing__edit-button">Изменить</button>
        </div>
      </div>
    </>
  );
};
export default AccountInfo;
