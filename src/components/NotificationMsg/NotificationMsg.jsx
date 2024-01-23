import css from './NotificationMsg.module.css';
import PropTypes from 'prop-types';

const NotificationMsg = ({ message, total }) => {
  return <div className={total > 0 ? css.hidden : css.show}>{message}</div>;
};

NotificationMsg.propTypes = {
  message: PropTypes.string,
  total: PropTypes.number,
};

export default NotificationMsg;
