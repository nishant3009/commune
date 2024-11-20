import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Auth0Provider
      domain="dev-8lc0lqo1pnfawv1t.us.auth0.com"
      clientId="E7RazD5mYNVO0V3SaSi3Tc815Re1nGb6"
      authorizationParams={{
        redirect_uri: "http://localhost:3000/Home",
        screen_hint: 'signup'
      }}
    >
      <App />
    </Auth0Provider>,
  </BrowserRouter>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
