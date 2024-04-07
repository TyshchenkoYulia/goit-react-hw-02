import css from "./Options.module.css";

export default function Options({ onUpdate, total, reset }) {
  return (
    <div className={css.container}>
      <button
        className={css.btn}
        onClick={() => {
          onUpdate("good");
        }}
      >
        Good 😁
      </button>
      <button
        className={css.btn}
        onClick={() => {
          onUpdate("neutral");
        }}
      >
        Neutral 😐
      </button>
      <button
        className={css.btn}
        onClick={() => {
          onUpdate("bad");
        }}
      >
        Bad 😞
      </button>
      {total > 0 && (
        <button onClick={reset} className={css.btn}>
          Reset
        </button>
      )}
    </div>
  );
}
