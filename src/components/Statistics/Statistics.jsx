const StatisticsDisplay = ({ good, neutral, bad, total, percentage }) => {
  return (
    <div>
      <h2>Statistics</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {percentage}</p>
    </div>
  );
};

export default StatisticsDisplay;
