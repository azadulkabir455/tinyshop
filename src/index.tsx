import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux"
import store from "./store"
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import { BrowserRouter as Router } from "react-router-dom"
import App from './App';
import "./Assets/Css/global.scss"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);
reportWebVitals();
