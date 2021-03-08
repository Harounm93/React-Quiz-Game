import './App.css';
import LogInButton from '../loginButton';
import LogOutButton from '../logoutButton/';
import Profile from '../Profile/index';
import { useAuth0 } from '@auth0/auth0-react';
import { useState } from 'react';

function App() {
  const { user, isAuthenticated } = useAuth0();
  const [score, setScore] = useState()
  const [currentQuestion, setCurrentQuestion] = useState(0)

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
	];
function handleClick(isCorrect){
  setCurrentQuestion(currentQuestion + 1)
  if (isCorrect === true) {
    setScore(score + 1);
  }
}

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Quiz Game </h1>
        <div> 
        <h2> {questions[currentQuestion].questionText}</h2>

        {questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
              ))}
        </div>
        <Profile />
        <LogInButton />
        <LogOutButton />
      </header>
    </div>
  );
}

export default App;
