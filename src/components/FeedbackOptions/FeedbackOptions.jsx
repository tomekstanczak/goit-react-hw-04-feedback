import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.buttonsList}>
      {options.map(option => (
        <button
          className={css.optionStyle}
          key={option}
          type="button"
          onClick={() => onLeaveFeedback(option)}
        >
          {option.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array,
};

export default FeedbackOptions;
