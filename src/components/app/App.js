import './App.css';
import LogInButton from '../loginButton';
import LogOutButton from '../logoutButton/';
import Profile from '../Profile/index';
import { useAuth0 } from '@auth0/auth0-react';
import { useState } from 'react';
import { Button } from '@material-ui/core';
import questions from "../data/index"

function App() {
  const { user, isAuthenticated } = useAuth0();
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showTotal, setShowTotal] = useState(false);

 // Array of Questions moved into separate file to tidy the code  
 
  function handleClick(isCorrect) {
    setCurrentQuestion(currentQuestion + 1);
    if (isCorrect === true) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      
    } else {
      setShowTotal(true);
    }
  }

  function resetGame() {
    setShowTotal(false);
    setCurrentQuestion(0);
    setScore(0);
  }
  return (
    // isAuthenticated && (
    <div className='App'>
      {showTotal ? (
        <div className='score-section'>
          <h1>
            You scored {score} out of {questions.length}
          </h1>
         
          <div className='btn-reset'>
            {' '}
            <Button
              ClassName='reset'
              onClick={() => resetGame()}
              variant='contained'
              color='primary'
            >
              {' '}
              Try again
            </Button>
          </div>

        </div>
      ) : (
        <header className='App-header'>
          <h1>General Knowledge Quiz</h1>
          <div className='container'>
            <div className='question-section'>
              {' '}
              <h2> {questions[currentQuestion].questionText}</h2>
              <h3 className='score'>Score:{score} </h3>
            </div>

            <div className='answer-section'>
              {questions[currentQuestion].answerOptions.map((answerOption) => (
                <Button
                  className='btn'
                  variant='contained'
                  color='primary'
                  onClick={() => handleClick(answerOption.isCorrect)}
                >
                  {answerOption.answerText}
                </Button>
              ))}
            </div>
          </div>

          <div className='info'>
            <Profile />

            {isAuthenticated ? <LogOutButton /> : <LogInButton />}
          </div>
        </header>
      )}{' '}
    </div>
  );
}

export default App;
