import React, { useState } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import NotificationMsg from './NotificationMsg/NotificationMsg';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleIncrement = category => {
    if (category === 'good') {
      setGood(good + 1);
    }
    if (category === 'neutral') {
      setNeutral(neutral + 1);
    }
    if (category === 'bad') {
      setBad(bad + 1);
    }
  };

  const total = good + bad + neutral;
  const percentage = (good / total) * 100;

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        color: '#010101',
      }}
    >
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleIncrement}
        />
      </Section>
      <Section title="Statistic">
        <NotificationMsg message="There is no feedback" total={total} />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          percentage={percentage}
        />
      </Section>
    </div>
  );
}

export default App;
