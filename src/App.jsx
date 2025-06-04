import { useState } from "react";
import GameHeader from "./Components/GameHeader";
import GameControls from "./Components/GameControls";
import InputSection from "./Components/InputSection";
import Message from "./Components/Message";
import ExtraOptions from "./Components/ExtraOptions";
import "./App.css";

const MAX_TRIES = 6;

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [randomNumber, setRandomNumber] = useState(null);
  const [message, setMessage] = useState("");
  const [userTrial, setUserTrial] = useState(1);
  const [showExtras, setShowExtras] = useState(false);

  const startGame = () => {
    const random = Math.floor(Math.random() * 100) + 1;
    setRandomNumber(random);
    setGameStarted(true);
    setGameOver(false);
    setUserTrial(1);
    setShowExtras(false);
    setMessage("Game started!!! Make your guess.");
  };

  const handleGuess = (guess) => {
    if (!gameStarted || gameOver) return;

    const parsedGuess = parseInt(guess);
    if (isNaN(parsedGuess)) {
      setMessage("Please enter a valid number.");
      return;
    }

    if (parsedGuess === randomNumber) {
      setMessage("🎉🎉 CONGRATULATIONS, You WIN!! 🎉");
      setGameOver(true);
    } else if (parsedGuess < randomNumber) {
      setMessage("TOO LOW, Please Try Again");
    } else {
      setMessage("TOO HIGH, Please Try Again");
    }

    const newTrial = userTrial + 1;
    setUserTrial(newTrial);

    if (newTrial > MAX_TRIES && parsedGuess !== randomNumber) {
      setMessage(`Sorry, you lost. The number was ${randomNumber}`);
      setShowExtras(true);
      setGameOver(true);
    }
  };

  const quitGame = () => {
    setGameOver(true);
    setShowExtras(false);
    setMessage("");
  };

  const restartGame = () => {
    startGame();
  };

  return (
    <div
      className={`game-container ${
        gameOver && message.includes("WIN") ? "celebration-background" : ""
      }`}
    >
      <GameHeader />
      <GameControls onStart={startGame} gameStarted={gameStarted} />
      {gameStarted && (
        <InputSection onGuess={handleGuess} disabled={gameOver} />
      )}
      <Message text={message} />
      {showExtras && <ExtraOptions onQuit={quitGame} onRestart={restartGame} />}
    </div>
  );
}

export default App;
