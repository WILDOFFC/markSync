import "./styles.css";

const Panel = ({ panelHeader, children, styles }) => {
  return (
    <>
      <div className={`panel ${styles || ""}`}>
        <div className="panel-header">{panelHeader}</div>
        {children}
      </div>
    </>
  );
};

export default Panel;
