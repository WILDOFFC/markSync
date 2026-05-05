import { Link } from "react-router-dom";
import "./styles.css";

const DashboardButton = ({ linkDestination, buttonIcon, buttonName }) => {
  return (
    <>
      <Link to={linkDestination}>
        <div className="dashboard-block row">
          <img src={buttonIcon} alt="" />
          <div className="button-name">{buttonName}</div>
        </div>
      </Link>
    </>
  );
};

export default DashboardButton;
