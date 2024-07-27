const Options = ({ updateFeedback, totalFeedback, resetFeedback }) => (
  <div>
    <button type="button" onClick={() => updateFeedback("neutral")}>
      Neutral
    </button>
    <button type="button" onClick={() => updateFeedback("bad")}>
      Bad
    </button>
    <button type="button" onClick={() => updateFeedback("good")}>
      Good
    </button>
    {totalFeedback > 0 && (
      <button type="button" onClick={resetFeedback}>
        Reset
      </button>
    )}
  </div>
);

export default Options;
