import css from './NotificationMsg.module.css';

const NotificationMsg = ({ message, total }) => {
  return <div className={total > 0 ? css.hidden : css.show}>{message}</div>;
};

export default NotificationMsg;
