const LineGradient = ({ width = "w-full" }) => {
  return (
    <div
      className={`h-0.5 ${width} bg-gradient-to-r from-yellow to-blue ...`}
    />
  );
};

export default LineGradient;
