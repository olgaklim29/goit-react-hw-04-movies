import PropTypes from "prop-types";
import styles from "./Notification.module.css";

export default function Notification({ message }) {
  return <div className={styles.notification}>{message}</div>;
}

Notification.propTypes = {
  message: PropTypes.string,
};