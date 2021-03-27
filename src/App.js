import React, { Component } from 'react';
import FEEDBACKOPTIONS from './data/FeedbackOptions';

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
  

  render() {
    return (
      <>
        <h1>Please leave feedback</h1>
        <ul className="stats__list">
          {FEEDBACKOPTIONS.map(option => (
            <li className="stats__item" key={option}>
              <button
                className="stats__button"
                type="button"
                onClick={this.handleButtonClick}
              >
                {option}
              </button>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default App;
