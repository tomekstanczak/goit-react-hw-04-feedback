import css from './Statistics.module.css';

const StatisticsDisplay = ({ good, neutral, bad, total, percentage }) => {
  return (
    <div className={total <= 0 ? css.hidden : css.show}>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {percentage}</p>
    </div>
  );
};

export default StatisticsDisplay;
