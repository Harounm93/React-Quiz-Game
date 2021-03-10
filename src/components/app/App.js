import './App.css';
import LogInButton from '../loginButton';
import LogOutButton from '../logoutButton/';
import Profile from '../Profile/index';
import { useAuth0 } from '@auth0/auth0-react';
import { useState } from 'react';
import { Button } from '@material-ui/core';

function App() {
  const { user, isAuthenticated } = useAuth0();
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showTotal, setShowTotal] = useState(false);

  const questions = [
    {
      questionText: 'What is the capital of Spain?',
      answerOptions: [
        { answerText: 'London', isCorrect: false },
        { answerText: 'Paris', isCorrect: false },
        { answerText: 'Madrid', isCorrect: true },
        { answerText: 'Dublin', isCorrect: false },
      ],
    },
    {
      questionText: 'Who is CEO of Tesla?',
      answerOptions: [
        { answerText: 'Jeff Bezos', isCorrect: false },
        { answerText: 'Elon Musk', isCorrect: true },
        { answerText: 'Bill Gates', isCorrect: false },
        { answerText: 'Tony Stark', isCorrect: false },
      ],
    },
    {
      questionText: 'The playstation was created by which company?',
      answerOptions: [
        { answerText: 'Sony', isCorrect: true },
        { answerText: 'Amazon', isCorrect: false },
        { answerText: 'Samsung', isCorrect: false },
        { answerText: 'Apple', isCorrect: false },
      ],
    },
    {
      questionText: 'How many Game of Thrones books are there?',
      answerOptions: [
        { answerText: '2', isCorrect: false },
        { answerText: '3', isCorrect: false },
        { answerText: '6', isCorrect: false },
        { answerText: '7', isCorrect: true },
      ],
    },
    {
    questionText: 'What club does Ronaldo play for?',
    answerOptions: [
      { answerText: 'Chelsea', isCorrect: false },
      { answerText: 'Arsenal', isCorrect: false },
      { answerText: 'Madrid', isCorrect: false },
      { answerText: 'Juventus', isCorrect: true },
    ],
  },
  ];
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
