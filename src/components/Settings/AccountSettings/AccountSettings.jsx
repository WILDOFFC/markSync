import Panel from "../../Panel/Panel";
import AccountInfo from "./AccountInfo/AccountInfo";
import PrivacyInfo from "./PrivacyInfo/PrivacyInfo";
const ProfileSettings = () => {
  return (
    <>
      <Panel panelHeader={"Настройки"}>
        <AccountInfo
          accountSettingName={"Адрес электронной почты"}
          accountSettingValue={"example@mail.com"}
        />
        <AccountInfo
          accountSettingName={"Пароль"}
          accountSettingValue={"Был изменен 3 месяца назад"}
        />
        <div className="privacy-settings">
          <div className="privacy-setting__name">Настройки приватности</div>
          <PrivacyInfo documentName={"Политика конфиденциальности"} />
          <PrivacyInfo documentName={"Условия использования"} />
        </div>
      </Panel>
    </>
  );
};

export default ProfileSettings;
