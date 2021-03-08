import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';

//authentication added below
ReactDOM.render(
 
  <React.StrictMode >
   <Auth0Provider domain = "dev-u5geyhnm.eu.auth0.com"
  clientId = "4NaAUIM9zuOnrnErUtBKNKyLgPrqLanq"
  redirectUri = {window.location.origin}
  audience = "https://dev-u5geyhnm.eu.auth0.com/api/v2/"
  scope="read:current_user update:current_user_metadata">
    <App />
    </Auth0Provider>,
  </React.StrictMode>,
  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
