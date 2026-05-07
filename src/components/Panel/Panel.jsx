import "./styles.css";

const Panel = ({ panelHeader, children }) => {
  return (
    <>
      <div className="panel">
        <div className="panel-header">{panelHeader}</div>
        {children}
      </div>
    </>
  );
};

export default Panel;
