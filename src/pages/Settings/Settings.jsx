import AccountConnections from "../../components/Settings/AccountConnections/AccountConnections.jsx";
import AccountSettings from "../../components/Settings/AccountSettings/AccountSettings.jsx";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext.jsx";
const Settings = () => {
  const { userData } = useContext(AuthContext);
  return (
    <>
      <AccountSettings userEmail={userData.email} />
      <AccountConnections />
    </>
  );
};

export default Settings;
