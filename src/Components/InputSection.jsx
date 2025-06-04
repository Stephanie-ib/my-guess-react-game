import { useState } from 'react';

const InputSection = ({ onGuess, disabled }) => {
  const [guess, setGuess] = useState('');

  const handleSubmit = () => {
    onGuess(guess);
    setGuess('');
  };

  return (
    <div className="input-section">
      <h3>Enter a number between 1 and 100</h3>
      <input
        type="number"
        placeholder="Enter your guess"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        disabled={disabled}
      />
      <button className="play-button" onClick={handleSubmit} disabled={disabled}>
        Play
      </button>
    </div>
  );
};

export default InputSection;

