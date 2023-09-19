import React from "react";
import "./App.css";
import Nav from "../Nav/Nav";
import Landing from "../Landing/Landing";
import ChallengeSection from "../ChallengeSection/ChallengeSection";
import Footer from "../Footer/Footer";
import { SAMPLE_PARAGRAPHS } from "./../../data/sampleParagraphs";

const Totaltime = 60;
const ServiceUrl = "http://metaphorpsum.com/paragraphs/1/9";
const DefaultState = {
  selectedParagraph: "",
  timerStarted: false,
  timeRemaining: Totaltime,
  words: 0,
  characters: 0,
  wpm: 0,
  testinfo: [],
};

class App extends React.Component {
  state = DefaultState;

  fetchNewParagraphFallback = () => {
    const data =
      SAMPLE_PARAGRAPHS[Math.floor(Math.random() * SAMPLE_PARAGRAPHS.length)];
    const selectedParagraphArray = data.split("");
    const testinfo = selectedParagraphArray?.map((selectedLetter) => {
      return {
        testLetter: selectedLetter,
        status: "notAttempted",
      };
    });
    this.setState({ ...DefaultState, testinfo, selectedParagraph: data });
  };

  fetchNewParagraph = () => {
    fetch(ServiceUrl)
      .then((Response) => Response.text())
      .then((data) => {
        const selectedParagraphArray = data.split("");
        const testinfo = selectedParagraphArray?.map((selectedLetter) => {
          return {
            testLetter: selectedLetter,
            status: "notAttempted",
          };
        });
        this.setState({ ...DefaultState, testinfo, selectedParagraph: data });
      });
  };

  componentDidMount() {
    this.fetchNewParagraphFallback();
  }

  startTimer = () => {
    this.setState({ timerStarted: true });
    const timer = setInterval(() => {
      if (this.state.timeRemaining > 0) {
        // change the wpm
        const timeSpent = Totaltime - this.state.timeRemaining;
        const wpm =
          timeSpent > 0 ? (this.state.words / timeSpent) * Totaltime : 0;
        this.setState({
          timeRemaining: this.state.timeRemaining - 1,
          wpm: parseInt(wpm),
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);
  };

  startAgain = () => this.fetchNewParagraphFallback();
  handleUserInput = (inputvalue) => {
    if (!this.state.timerStarted) this.startTimer();

    /**
     * 1. Handle the underflow case - all characters should be shown as not-attempted
     * 2. Handle the overflow case - early exit
     * 3. Handle the backspace case
     *      - Mark the [index+1] element as notAttempted
     *        (irrespective of whether the index is less than zero)
     *      - But, don't forget to check for the overflow here
     *        (index + 1 -> out of bound, when index === length-1)
     * 4. Update the status in test info
     *      1. Find out the last character in the inputValue and it's index
     *      2. Check if the character at same index in testInfo (state) matches
     *      3. Yes -> Correct
     *         No  -> Incorrect (Mistake++)
     * 5. Irrespective of the case, characters, words and wpm can be updated
     */

    const characters = inputvalue.length;
    const words = inputvalue.split(" ").length;
    const index = characters - 1;

    if (index < 0) {
      this.setState({
        testinfo: [
          {
            testLetter: this.state.testinfo[0].testLetter,
            status: "notAttempted",
          },
          ...this.state.testinfo.slice(1),
        ],
        characters,
        words,
      });
      return;
    }

    if (index >= this.state.selectedParagraph.length) {
      this.setState({ characters, words });
      return;
    }

    // Make a copy of testinfo
    const testinfo = this.state.testinfo;
    if (!(index === this.state.selectedParagraph.length - 1))
      testinfo[index + 1].status = "notAttempted";

    // check for the correct typed letters
    const isCorrect = inputvalue[index] === testinfo[index].testLetter;

    // update the testinfo
    testinfo[index].status = isCorrect ? "correct" : "incorrect";

    //update the state
    this.setState({
      testinfo,
      words,
      characters,
    });
  };

  render() {
    return (
      <div className="app">
        {/* nav section */}
        <Nav />

        {/* landing page */}
        <Landing />

        {/* challenge section */}
        <ChallengeSection
          selectedParagraph={this.state.selectedParagraph}
          words={this.state.words}
          characters={this.state.characters}
          wpm={this.state.wpm}
          timeRemaining={this.state.timeRemaining}
          timerStarted={this.state.timerStarted}
          testinfo={this.state.testinfo}
          onInputchange={this.handleUserInput}
          startAgain={this.startAgain}
        />

        {/* footer */}
        <Footer />
      </div>
    );
  }
}

export default App;
