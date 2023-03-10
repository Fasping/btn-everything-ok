import React, { useState, useEffect } from "react";
import "./Button.css";
import Confetti from "react-confetti";

function App() {
  const [isMakingEverythingOk, setIsMakingEverythingOk] = useState(false);
  const [isEverythingOk, setIsEverythingOk] = useState(false);
  const [timerId, setTimerId] = useState(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const [confettiTimerId, setConfettiTimerId] = useState(null);

  const handleClick = () => {
    setIsMakingEverythingOk(true);
    const id = setTimeout(() => {
      setIsMakingEverythingOk(false);
      setIsEverythingOk(true);
    }, 4000);
    setTimerId(id);
  };

  const handleContinue = () => {
    setIsEverythingOk(false);
    setShowConfetti(true);
    const id = setTimeout(() => {
      setShowConfetti(false);
    }, 5000);
    setConfettiTimerId(id);
  };

  useEffect(() => {
    return () => {
      if (timerId) {
        clearTimeout(timerId);
      }
      if (confettiTimerId) {
        clearTimeout(confettiTimerId);
      }
    };
  }, [timerId, confettiTimerId]);

  return (
    <div className="App">
      <div className="vintage-button-container">
        <button className="vintage-button" onClick={handleClick}>
          Make everything okay
        </button>
      </div>
      {isMakingEverythingOk && (
        <div className="overlay">
          <div className="popup">
            <h2>Making everything okay...</h2>
            <div className="progress-bar">
              <div className="filler"></div>
              <div className="loading-text">Loading...</div>
            </div>
          </div>
        </div>
      )}
      {isEverythingOk && (
        <div className="overlay">
          <div className="popup">
            <h1>Everything is OK now</h1>
            <p>
              If everything is still not OK, try checking your settings of
              perception of objective reality.
            </p>
            <button className="vintage-button" onClick={handleContinue}>
              Continue
            </button>
          </div>
        </div>
      )}
      {showConfetti && (
        <Confetti width={window.innerWidth} height={window.innerHeight} />
      )}
    </div>
  );
}

export default App;
