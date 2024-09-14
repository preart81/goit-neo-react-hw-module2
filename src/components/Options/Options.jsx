import css from './Options.module.css';

const Options = ({ updateFeedback, resetFeedback, showResetButton }) => {
  return (
    <div className={css.buttons}>
      <button onClick={() => updateFeedback('good')}>Good</button>
      <button onClick={() => updateFeedback('neutral')}>Neutral</button>
      <button onClick={() => updateFeedback('bad')}>Bad</button>
      {showResetButton && <button onClick={resetFeedback}>Reset</button>}
    </div>
  );
};

export default Options;
