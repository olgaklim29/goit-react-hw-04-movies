import { useState } from "react";
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";
import Statistics from "../Statistics/Statistics";
import Notification from "../Notification/Notification";
import styles from "./Title.module.css";

const text = {
  grandTitleTxt: "Please leave feedback",
  titleTxt: "Statistics",
  goodContent: "Good:",
  neutralContent: "Neutral:",
  badContent: "Bad:",
  totalContent: "Total:",
  positivePercentageContent: "Positive feedback:",
};

const options = ["good", "neutral", "bad"];

export default function Title() {
  const [counterGood, setCounterGood] = useState(0);
  const [counterNeutral, setCounterNeutral] = useState(0);
  const [counterBad, setCounterBad] = useState(0);

  const onLeaveFeedback = (e) => {
    const { name } = e.target;
    switch (name) {
      case "good":
        setCounterGood((prevCounterGood) => prevCounterGood + 1);
        break;
      case "neutral":
        setCounterNeutral((prevCounterNeutral) => prevCounterNeutral + 1);
        break;
      case "bad":
        setCounterBad((prevCounterBad) => prevCounterBad + 1);
        break;
      default:
        console.warn(`Butoon - ${name} is under constraction`);
    }
  };
  const countTotalFeedback = () => {
    return counterGood + counterNeutral + counterBad;
  };

  const countPositiveFeedbackPercentage = () => {
    return counterGood
      ? Math.ceil((counterGood / countTotalFeedback()) * 100) + "%"
      : 0 + "%";
  };

  const { section, title, title2 } = styles;
  const { grandTitleTxt, titleTxt } = text;
  return (
    <section className={section}>
      <h1 className={title}>{grandTitleTxt}</h1>
      <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      <h2 className={title2}>{titleTxt}</h2>
      {counterGood || counterNeutral || counterBad ? (
        <Statistics
          good={counterGood}
          neutral={counterNeutral}
          bad={counterBad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
          textObj={text}
        />
      ) : (
        <Notification message="No feedback given" />
      )}
    </section>
  );
}