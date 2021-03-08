import './App.css';
import LogInButton from '../loginButton';
import LogOutButton from '../logoutButton/';
import Profile from '../Profile/index';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { user, isAuthenticated } = useAuth0();

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Quiz game with Authentication </h1>
        <Profile />
        <LogInButton />
        <LogOutButton />
      </header>
    </div>
  );
}

export default App;
