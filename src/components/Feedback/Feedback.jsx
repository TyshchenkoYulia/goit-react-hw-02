import css from "./Feedback.module.css";

export default function Feedback({
  value: { good, neutral, bad },
  total,
  positive,
}) {
  return (
    <div className={css.container}>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p className={css.text}>Total: {total}</p>
      <p className={css.text}>Positive: {positive}%</p>
    </div>
  );
}
