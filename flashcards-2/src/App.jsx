import { useState } from 'react';
import Card from './components/Card.jsx';
import flashcards from './data.js';
import './App.css';

const App = () => {

  const [card, setCard] = useState(0);
  const [userInput, setUserInput] = useState("");
  const[showAnswer, setShowAnswer] = useState(false);
  const[feedback, setFeedback] = useState("");
  function flipBackward() {
    setCard((prevCard) => (prevCard - 1 + flashcards.length) % flashcards.length);
    setShowAnswer(false);
    setFeedback("");
  }

  function flipForward() {
    setCard(() => Math.floor(Math.random() * flashcards.length));
    setShowAnswer(false);
    setFeedback("");
    
  }
  function handleSubmit() {
    if (userInput.toLowerCase() === flashcards[card].answer.toLowerCase()) {
      setShowAnswer(true);
      setFeedback("Correct!");
    }
    else if (userInput.toLowerCase() == "") {
      setFeedback("Please input your answer to the box provided.");
    }
    else {
      setFeedback("Incorrect!")
    }
  }

  return (
    <>
      <title>Flashcards of Rock</title>
      <div className='body'>
        <div className='header'>
          <h1>Flashcards of Rock</h1>
          <h2>Test your inner rock n' roller with these flashcards!</h2>
          <h3>Number of cards: {flashcards.length}</h3>
        </div>
        <Card question={showAnswer ? flashcards[card].answer : flashcards[card].question}/>
        <div id="answer-form">
          <p>Guess your answer: </p>
          <input type="text" id="guess" onChange={(e) => setUserInput(e.target.value)}/>
          <p className='feedback'>{feedback}</p>
          <button onClick={handleSubmit}>Check answer</button>
        </div>
        
        
        <div className='button-container'>
          <button onClick={flipBackward}>Prev</button>
          <button onClick={flipForward}>Next</button>
        </div>
      </div>
      
    
    </>
    
  
  )
}

export default App;
