import React, { Component } from 'react';
import Feedback from './components/Feedback';
import Statistics from './components/Statistics';
import Section from './components/Section';
import Notification from './components/Notification';

class App extends Component {
  state = {
    good: 2,
    neutral: 0,
    bad: 0,
  };

  handleFeedbackChange = name => {
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, item) => acc + item, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Math.round((good / this.countTotalFeedback()) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const getTotal = this.countTotalFeedback();
    const getPositive = this.countPositiveFeedbackPercentage();

    return (
      <React.Fragment>
        <Section title="Please leave feedback">
          <Feedback
            options={['good', 'neutral', 'bad']}
            onFeedback={this.handleFeedbackChange}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={getTotal}
            positivePercentage={getPositive}
          />
        </Section>
      </React.Fragment>
    );
  }
}

export default App;
