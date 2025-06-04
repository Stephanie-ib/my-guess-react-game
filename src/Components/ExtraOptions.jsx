const ExtraOptions = ({ onQuit, onRestart }) => {
  return (
    <div className="extra-options">
      <button className="quit-game-button" onClick={onQuit}>Quit Game</button>
      <button className="restart-game" onClick={onRestart}>Restart Game</button>
    </div>
  );
};

export default ExtraOptions;
