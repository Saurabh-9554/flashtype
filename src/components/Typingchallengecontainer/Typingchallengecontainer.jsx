import React from "react";
import "./Typingchallengecontainer.css";
import Challengedetailscard from "../Challengedetailscard/Challengedetailscard"
import TypingChallenge from "../TypingChallenge/TypingChallenge";
const Typingchallengecontainer = ({selectedParagraph, words, characters, wpm, timeRemaining, timerStarted,testinfo,onInputchange})=>{
    return (
        <div className="typing-challenge-container">
            {/* details section */}
                <div className="details-container">
                    <Challengedetailscard cardname="words" cardvalue={words} />
                    {/* character typed */}
                    <Challengedetailscard cardname="characters" cardvalue={characters}/>
                    {/* speed */}
                    <Challengedetailscard cardname="speed" cardvalue={wpm} />
                </div>

            {/* the real challenge */}
            <div className="typewriter-container">
                <TypingChallenge selectedParagraph={selectedParagraph} timeRemaining={timeRemaining} timerStarted={timerStarted} testinfo={testinfo} onInputchange={onInputchange} />
            </div>
        </div>
     );
}

export default Typingchallengecontainer;