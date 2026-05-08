const BoldButton = ({
  textContent,
  buttonWidth = "120",
  buttonHeight = "60",
  padding,
  buttonColor = "black",
  buttonTextColor,
  action,
}) => {
  const stylesheet = `.bold-button {
  width: ${buttonWidth};
  height: ${buttonHeight};
  padding: 20px 32px;
  border-radius: 15px;
  font-size: 20px;
  font-width: 400;
  background-color: ${buttonColor};
  color: ${buttonTextColor}
  }`;
  return (
    <>
      <style>{stylesheet}</style>
      <button className="bold-button" onClick={action}>
        {textContent}
      </button>
    </>
  );
};

export default BoldButton;
