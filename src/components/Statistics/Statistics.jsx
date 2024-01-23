import css from './Statistics.module.css';
import PropTypes from 'prop-types';

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

StatisticsDisplay.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  percentage: PropTypes.number,
};

export default StatisticsDisplay;
