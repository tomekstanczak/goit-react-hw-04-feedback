const FeedbackOptions = ({
  onHandleIncrementGood,
  onHandleIncrementNeutral,
  onHandleIncrementBad,
}) => {
  return (
    <div>
      <button name="good" type="button" onClick={onHandleIncrementGood}>
        Good
      </button>
      <button name="neutral" type="button" onClick={onHandleIncrementNeutral}>
        Neutral
      </button>
      <button name="bad" type="button" onClick={onHandleIncrementBad}>
        Bad
      </button>
    </div>
  );
};

export default FeedbackOptions;
