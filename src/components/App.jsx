import { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import NotificationMsg from './NotificationMsg/NotificationMsg';

class App extends Component {
  static defaultProps = {
    step: 1,
    initialValue: 0,
  };

  constructor(props) {
    super(props);
    this.state = {
      good: this.props.initialValue,
      neutral: this.props.initialValue,
      bad: this.props.initialValue,
      total: this.props.initialValue,
      percentage: this.props.initialValue,
    };
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  handleIncrement = category => {
    this.setState(
      () => ({
        [category]: this.state[category] + this.props.step,
      }),
      () => {
        this.countTotalFeedback();
        this.countPositiveFeedbackPercentage();
      }
    );
  };
  countTotalFeedback = () => {
    this.setState(({ good, neutral, bad }) => ({
      total: good + neutral + bad,
    }));
  };
  countPositiveFeedbackPercentage = () => {
    this.setState(({ good, total }) => ({
      percentage: total > 0 ? (good / total) * 100 : 0,
    }));
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#010101',
        }}
      >
        <Section title="Please leave feedback">
          <FeedbackOptions
            onHandleIncrementGood={() => this.handleIncrement('good')}
            onHandleIncrementNeutral={() => this.handleIncrement('neutral')}
            onHandleIncrementBad={() => this.handleIncrement('bad')}
          />
        </Section>
        <Section title="Statistic">
          <NotificationMsg
            message="There is no feedback"
            total={this.state.total}
          />
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.state.total}
            percentage={this.state.percentage}
          />
        </Section>
      </div>
    );
  }
}

export default App;
