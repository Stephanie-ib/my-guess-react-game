const GameControls = ({ onStart, gameStarted }) => {
  return (
    <button className="start-button" onClick={onStart} disabled={gameStarted}>
      Start Game
    </button>
  );
};

export default GameControls;
