import React from "react";
import "./testLetter.css";

const TestLetter=({ individualLetterinfo })=>{
    const statusClassName = {
        correct: "test-letter-correct",
        incorrect: "test-letter-incorrect",
        notAttempted: "test-letter-not-attempted",
    }[individualLetterinfo.status];

    return (
        <span className={`test-letter ${statusClassName}`}>
            {individualLetterinfo.testLetter}
        </span>
    );
}

export default TestLetter;