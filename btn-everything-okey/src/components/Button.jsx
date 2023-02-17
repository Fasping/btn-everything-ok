import React, { useState, useEffect } from "react";
import "./Button.css";

function App() {
  const [isMakingEverythingOk, setIsMakingEverythingOk] = useState(false);
  const [isEverythingOk, setIsEverythingOk] = useState(false);
  const [timerId, setTimerId] = useState(null);

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
  };

  useEffect(() => {
    return () => {
      if (timerId) {
        clearTimeout(timerId);
      }
    };
  }, [timerId]);

  return (
    <div className="App">
      <div className="vintage-button-container">
        <button className="vintage-button" onClick={handleClick}>
          Make everything okey
        </button>
      </div>
      {isMakingEverythingOk && (
        <div className="overlay">
          <div className="popup">
            <h2>Making everything okey...</h2>
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
    </div>
  );
}

export default App;
