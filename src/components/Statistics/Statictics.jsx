import PropTypes from 'prop-types';
import  css  from './Statistics.module.css';

import Notification from 'components/Notification/Notification';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div>
    <h2>Statistics</h2>
    {total === 0 ? (
      <Notification message="There is no feedback" />
    ) : (
      <ul className={css.statisticsList}>
        <li className={css.statisticsItem}>Good: {good}</li>
        <li className={css.statisticsItem}>Neutral: {neutral}</li>
        <li className={css.statisticsItem}>Bad: {bad}</li>
        <li className={css.statisticsItem}>Total: {total}</li>
        <li className={css.statisticsItem}>Positive Feedback: {positivePercentage}%</li>
      </ul>
    )}
  </div>
);

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  // total: PropTypes.number.isRequired,
  // positivePercentage: PropTypes.number.isRequired
}