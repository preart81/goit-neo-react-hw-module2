import css from './Feedback.module.css';

const FeedBack = ({ feedback, totalFeedback, positiveFeedback }) => {
  return (
    <ul className={css.Feedback}>
      <li>Good: {feedback.good}</li>
      <li>Neutral: {feedback.neutral}</li>
      <li>Bad: {feedback.bad}</li>
      <li>Total: {totalFeedback}</li>
      <li>Positive: {positiveFeedback}%</li>
    </ul>
  );
};

export default FeedBack;
