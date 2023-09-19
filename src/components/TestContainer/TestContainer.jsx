import React from "react";
import "./TestContainer.css";
import TryAgain from "../TryAgain/TryAgain";
import Typewriter from "typewriter-effect";
import Typingchallengecontainer from "../Typingchallengecontainer/Typingchallengecontainer";

const TestContainer = ({
  selectedParagraph,
  words,
  characters,
  wpm,
  timeRemaining,
  timerStarted,
  testinfo,
  onInputchange,
  startAgain,
}) => {
  return (
    <div className="test-container">
      {timeRemaining > 0 ? (
        <div data-aos="fade-up" className="typing-challenge-container">
          <Typingchallengecontainer
            selectedParagraph={selectedParagraph}
            timerStarted={timerStarted}
            timeRemaining={timeRemaining}
            words={words}
            characters={characters}
            wpm={wpm}
            testinfo={testinfo}
            onInputchange={onInputchange}
          />
        </div>
      ) : (
        <div className="try-again-cont">
          <TryAgain
            words={words}
            characters={characters}
            wpm={wpm}
            startAgain={startAgain}
          />
        </div>
      )}
    </div>
  );
};
export default TestContainer;
