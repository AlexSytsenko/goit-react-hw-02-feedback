import React, { Component } from 'react';
import FEEDBACKOPTIONS from './data/FeedbackOptions';

import Statistics from './components/Statistics';
import FeedbackOptions from './components/FeedbackOptions';
import Section from './components/Section';
import Notification from './components/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleButtonClick = (e) => {
    const target = e.currentTarget.innerText;

    this.setState(prevState => ({
      [target]: prevState[target] + 1,
    }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state)
      .reduce((total, item) => total + item, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    
    return total === 0 ? 0 : Math.round(good / total * 100);
  }
  

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
  

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={FEEDBACKOPTIONS}
            onLeaveFeedback={this.handleButtonClick}
          />
        </Section>
        
        <Section title="Statistics">
          {total === 0 ? (
            <Notification message="No feedback given" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          )}
        </Section>
      </>
    );
  }
}

export default App;
