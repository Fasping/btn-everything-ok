import React, { useState } from "react";
import "./Button.css";

function App() {
  const [isMakingEverythingOk, setIsMakingEverythingOk] = useState(false);
  const [isEverythingOk, setIsEverythingOk] = useState(false);

  const handleClick = () => {
    setIsMakingEverythingOk(true);
    setTimeout(() => {
      setIsMakingEverythingOk(false);
      setIsEverythingOk(true);
    }, 4000);
  };

  const handleContinue = () => {
    setIsEverythingOk(false);
  };

  return (
    <div className="App">
      <div className="center-container">
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