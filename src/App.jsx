import { Component } from 'react';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statistics from 'components/Statistics/Statictics';
import Section from 'components/Section/Section';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  options = Object.keys(this.state);

  onLeaveFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback = values => {
    // let total = 0;
    // values.forEach(item => {
    //   total += item;
    // });
    // return total;
    return values.reduce((acc, value) => acc + value, 0);
  };

  countPositiveFeedbackPercentage = values => {
    const total = this.countTotalFeedback(values);
    const good = values[0];
    // const positivePercent = total ? (good * 100) / total : 0;
    // return Math.round(positivePercent);
    return total === 0 ? 0 : Math.round((good / total) * 100);
  };

  render() {
    const { options } = this;
    const { good, neutral, bad } = this.state;
    const values = [good, neutral, bad];

    return (
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={this.onLeaveFeedback}
        />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback(values)}
          positivePercentage={this.countPositiveFeedbackPercentage(values)}
        />
      </Section>
    );
  }
}
export default App;
