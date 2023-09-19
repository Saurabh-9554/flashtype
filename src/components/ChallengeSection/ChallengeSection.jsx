import React from "react";
import "./ChallengeSection.css"
import TestContainer from "../TestContainer/TestContainer";

const ChallengeSection=({selectedParagraph, words, characters, wpm, timeRemaining, timerStarted,testinfo,onInputchange, startAgain})=>{
    return ( 
        <div className="challenge-section-container">            
            <h1 data-aos="fade-down" className="challenge-section-header">
                take a speed test now?
            </h1>
            <TestContainer selectedParagraph={selectedParagraph} timerStarted={timerStarted} timeRemaining={timeRemaining} words={words} characters={characters} wpm={wpm} testinfo={testinfo} onInputchange={onInputchange} startAgain={startAgain}/>
        </div>
    );
}

export default ChallengeSection;