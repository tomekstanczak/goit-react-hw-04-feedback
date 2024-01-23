import css from './FeedbackOptions.module.css';
import { Component } from 'react';

class FeedbackOptions extends Component {
  render() {
    const buttons = ['good', 'neutral', 'bad'];
    return (
      <div className={css.buttonsList}>
        {buttons.map(button => (
          <button
            className={css.buttonStyle}
            key={button}
            type="button"
            onClick={() => this.props.handleIncrement(button)}
          >
            {button.toUpperCase()}
          </button>
        ))}
      </div>
    );
  }
}

export default FeedbackOptions;
