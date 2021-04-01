import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';

import Notification from '../Notification';

const useStyles = createUseStyles({
  stat__list: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    listStyle: 'none',
    paddingLeft: 15,
    textAlign: 'center',
  },
  stat__item: {
    fontWeight: 700,
  },
  stat__total: {
    fontWeight: 700,
    color: 'chocolate',
  },
  stat__percentage: {
    fontWeight: 700,
    color: 'green',
  },
});

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  const classes = useStyles();

  return (
    <>
      {total === 0 ? (
        <Notification message="No feedback given" />
      ) : (
        <ul className={classes.stat__list}>
          <li className={classes.stat__item}>Good: {good}</li>
          <li className={classes.stat__item}>Neutral: {neutral}</li>
          <li className={classes.stat__item}>Bad: {bad}</li>
          <li className={classes.stat__total}>Total: {total}</li>
          <li className={classes.stat__percentage}>
            Positive feedback: {positivePercentage}%
          </li>
        </ul>
      )}
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
