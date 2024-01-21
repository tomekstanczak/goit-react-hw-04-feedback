import { Component } from 'react';

class FeedbackOptions extends Component {
  render() {
    const buttons = ['good', 'neutral', 'bad'];
    return (
      <div>
        {buttons.map(button => (
          <button
            key={button}
            type="button"
            onClick={() => this.props.handleIncrement(button)}
          >
            {button}
          </button>
        ))}
      </div>
    );
  }
}

export default FeedbackOptions;
