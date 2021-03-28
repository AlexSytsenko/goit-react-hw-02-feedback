import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <>
    <ul className="stats__list">
      {options.map(option => (
        <li className="stats__item" key={option}>
          <button
            className="stats__button"
            type="button"
            onClick={onLeaveFeedback}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  </>
);

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
