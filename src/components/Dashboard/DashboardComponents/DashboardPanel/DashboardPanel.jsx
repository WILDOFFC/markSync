import { Children } from "react";
import "./styles.css";
import Panel from "./../../../Panel/Panel.jsx";

const DashboardPanel = ({ panelHeader, children }) => {
  return (
    <>
      <Panel panelHeader={panelHeader}>
        <div className="panel-grid">{children}</div>
      </Panel>
    </>
  );
};

export default DashboardPanel;
