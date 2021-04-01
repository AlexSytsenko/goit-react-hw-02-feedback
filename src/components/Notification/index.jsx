import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  notification: {
    color: 'tomato',
  },
});

const Notification = ({ message }) => {
  const classes = useStyles();

  return <h3 className={classes.notification}>{message}</h3>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
