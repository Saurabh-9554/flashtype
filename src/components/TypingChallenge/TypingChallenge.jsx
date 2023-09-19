import React from "react";
import "./TypingChallenge.css";
import TestLetter from "../testLetter/testLetter";

const TypingChallenge = ({ timeRemaining, timerStarted, testinfo,onInputchange}) => 
{    
    return (
        <div className="typing-challenge">
            <div className="timer-container">
            <p className="timer">
                    00:
                    {timeRemaining >= 10 ? timeRemaining : `0${timeRemaining}`}
                </p>
                <p className="timer-info">
                    {!timerStarted  && "start typing to start the test" }
                </p>
            </div>

            <div className="textarea-container">
                <div className="textarea-left ">
                    <div className="textarea test-paragraph">
                        {
                            testinfo?.map((individualLetterinfo, index)=>{
                                return( <TestLetter
                                    key={index} 
                                    individualLetterinfo={individualLetterinfo}/>);
                            })
                        }
                    </div>
                </div>
                <div className="textarea-right">
                    <textarea
                        onChange={(e) => onInputchange(e.target.value)}
                        className="textarea"
                        placeholder="Start typing here"
                    ></textarea>
                </div>
            </div>
        </div>
    );
};

export default TypingChallenge;