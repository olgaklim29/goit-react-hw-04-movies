import PropTypes from "prop-types";
import styles from "./Statistics.module.css";

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
  textObj: {
    goodContent,
    neutralContent,
    badContent,
    totalContent,
    positivePercentageContent,
  },
}) {
  const { statistics, stat__text, stat__value } = styles;
  return (
    <div className={statistics}>
      <p className={stat__text}>
        {goodContent}
        <span className={stat__value}>{good}</span>
      </p>
      <p className={stat__text}>
        {neutralContent}
        <span className={stat__value}>{neutral}</span>
      </p>
      <p className={stat__text}>
        {badContent}
        <span className={stat__value}>{bad}</span>
      </p>
      <p className={stat__text}>
        {totalContent}
        <span className={stat__value}>{total}</span>
      </p>
      <p className={stat__text}>
        {positivePercentageContent}
        <span className={stat__value}>{positivePercentage}</span>
      </p>
    </div>
  );
}

Statistics.defaultProps = {
  textObj: {
    goodContent: "Good:",
    neutralContent: "Neutral:",
    badContent: "Bad:",
    totalContent: "Total:",
    positivePercentageContent: "Positive feedback:",
  },
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.string,
};