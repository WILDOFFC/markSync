const Arrow = ({ width = "18", height = "15", color = "black", styles }) => {
  return (
    <>
      <svg
        width={width}
        height={height}
        viewBox={`0 0 18 15`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M8.66028 0L17.3205 15H2.38419e-05L8.66028 0Z" fill={color} />
      </svg>
    </>
  );
};

export default Arrow;
