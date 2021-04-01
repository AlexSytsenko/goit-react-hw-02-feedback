import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  list: {
    display: 'flex',
    justifyContent: 'center',
    listStyle: 'none',
    margin: [0, 0, 50, 0],
    padding: 0,
    textAlign: 'center',
  },
  item: {
    '&:not(:last-child)': {
      marginRight: 20,
    },
  },
  button: {
    padding: [5, 20],
    textTransform: 'capitalize',
    color: 'white',
    border: 'none',
    outline: 'none',
    backgroundColor: '#6776ce',
    borderRadius: [7],
    cursor: 'pointer',
    transitionDuration: 350,

    '&:hover': {
      backgroundColor: '#303f9f',
    },
  },
});

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const classes = useStyles();

  return (
    <ul className={classes.list}>
      {options.map(option => (
        <li className={classes.item} key={option}>
          <button
            className={classes.button}
            type="button"
            onClick={onLeaveFeedback}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
