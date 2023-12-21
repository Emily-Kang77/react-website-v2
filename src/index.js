import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom';

// import { createHashRouter, RouterProvider } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));

// const router = createHashRouter([
//   {
//     path: "/*",
//     element: <App />,
//   }
// ])

root.render(
  <React.StrictMode>
    <HashRouter basename="/react-website-v2">
      <App />
    </HashRouter>
  </React.StrictMode>
  
);
